use crate::event::{EventListener, RioEvent};
use notify::{Config, EventKind, RecommendedWatcher, RecursiveMode, Watcher};
use std::path::Path;
use std::time::Duration;

const POLLING_TIMEOUT: Duration = Duration::from_secs(1);

pub fn watch<
    P: AsRef<Path> + std::marker::Send + 'static,
    T: EventListener + std::marker::Send + 'static,
>(
    path: P,
    event_proxy: T,
) -> notify::Result<()> {
    let (tx, rx) = std::sync::mpsc::channel();

    // Automatically select the best implementation for your platform.
    // You can also access each implementation directly e.g. INotifyWatcher.
    let mut watcher = RecommendedWatcher::new(
        tx,
        Config::default().with_poll_interval(POLLING_TIMEOUT),
    )?;

    tokio::spawn(async move {
        // Add a path to be watched. All files and directories at that path and
        // below will be monitored for changes.
        if let Err(err) = watcher.watch(path.as_ref(), RecursiveMode::NonRecursive) {
            log::warn!("unable to watch config directory {err}");
        };

        for res in rx {
            match res {
                Ok(event) => match event.kind {
                    EventKind::Any
                    | EventKind::Create(_)
                    | EventKind::Modify(_)
                    | EventKind::Other => {
                        log::info!("watcher event dispatched {event:?}");
                        event_proxy.send_event(RioEvent::UpdateConfig);
                    }
                    _ => (),
                },
                Err(e) => log::error!("watch error: {e:?}"),
            }
        }
    });

    Ok(())
}