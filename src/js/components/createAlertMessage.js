export function createAlertMessage(type, message) {
  const html = `<div class="message ${type}">${message}</div>`;

  return html;
}
