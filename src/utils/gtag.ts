export default function buryPointTrigger(event?: string, name?: string) {
  const _window = window as any;
  if (!_window.dataLayer) return;
  _window.dataLayer.push(arguments);
}
