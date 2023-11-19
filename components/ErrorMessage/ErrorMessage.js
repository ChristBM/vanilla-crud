const message = 'Ups, we do not have products to show :('
const info = 'Try reloading the page'

export default function ErrorMessage() {
  return `
    <div class="error_message_container">
      <p class="error_message">${message}</p>

      <p class="info_message">${info}</p>
    </div>
  `
}
