export default function ControlBtn({ label, id }) {
  return `
    <button class="control_btn ${label}" data-id="${id}">
      ${label}
    </button>
  `
}
