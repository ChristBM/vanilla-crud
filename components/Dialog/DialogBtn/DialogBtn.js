export default function DialogBtn({ label, id, className }) {
  return `
    <button id="dialog-btn-${id}" class="dialog_btn ${className}">
      ${label}
    </button>
  `
}
