export default function buryPointTrigger(evtName: string) {
  const _window = window as any;
  if (!_window.dataLayer) return;
  _window.dataLayer.push({ event: evtName });
}
