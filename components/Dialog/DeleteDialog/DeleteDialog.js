import DialogBtn from "../DialogBtn/DialogBtn.js"

const warningMessage = 'Are you sure you want to remove this product?'

export default function DeleteDialog(id) {
  return `
    <div class="delete_dialog_container">
      <p class="delete_dialog_text">${warningMessage}</p>

      <div class="delete_dialog_controls">
        ${DialogBtn({
          label: 'Cancel',
          id: 'cancel',
          className: 'cancel_delete',
        })}

        ${DialogBtn({
          label: 'Yes',
          id: 'yes',
          className: 'delete_product',
        })}
      </div>
    </div>
  `
}
