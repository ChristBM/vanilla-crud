import Swal from 'https://cdn.jsdelivr.net/npm/sweetalert2@11.10.0/+esm'
import { closeDialog } from '../common/utils/dialogFns.js'
import removeClick from '../common/utils/removeClick.js'
import { RemoveDialog } from '../render/RenderDialog.js'
import deleteProduct from '../services/deleteProduct.js'
import { handleCloseDialogClick } from "./setBtnCloseDialogEvent.js"

const successfullyEliminatedMsn = 'The product was deleted correctly'
const failedToEliminateMsn = 'Product could not be deleted, try again!'
let productId = 0

function deleteCallback(deleted) {
  if(deleted) {
    const cancelDelete = document.querySelector('#dialog-btn-cancel')
    const yesDelete = document.querySelector('#dialog-btn-yes')

    closeDialog('#dialog')

    removeClick(handleCloseDialogClick, cancelDelete)
    removeClick(handleDeleteProduct, yesDelete)

    RemoveDialog()

    Swal.fire({
      title: "Good job!",
      text: successfullyEliminatedMsn,
      icon: "success",
      showConfirmButton: false,
    });

    setTimeout(() => {
      window.location.reload(false)  //reload the page
    }, 1500)
  } else {
    Swal.fire({
      title: "Oops, an error occurred!",
      text: failedToEliminateMsn,
      icon: "error"
    });
  }
}

function handleDeleteProduct() {
  deleteProduct(deleteCallback, productId)
}

export default function SetDeleteDialogBtnEvents(id) {
  productId = id
  const cancelDelete = document.querySelector('#dialog-btn-cancel')
  const yesDelete = document.querySelector('#dialog-btn-yes')

  cancelDelete.addEventListener('click', handleCloseDialogClick)
  yesDelete.addEventListener('click', handleDeleteProduct)
}
