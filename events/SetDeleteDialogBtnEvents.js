import { closeDialog } from '../common/utils/dialogFns.js'
import removeClick from '../common/utils/removeClick.js'
import { RemoveDialog } from '../render/RenderDialog.js'
import deleteProduct from '../services/deleteProduct.js'
import { handleCloseDialogClick } from "./setBtnCloseDialogEvent.js"

const successfullyEliminatedMsn = 'The product was deleted correctly'
const failedToEliminateMsn = 'Product could not be deleted, try again'
let productId = 0

function deleteCallback(deleted) {
  // A notification system can be managed with these messages
  if(deleted) {
    console.log(successfullyEliminatedMsn)

    const cancelDelete = document.querySelector('#dialog-btn-cancel')
    const yesDelete = document.querySelector('#dialog-btn-yes')

    closeDialog('#dialog')

    removeClick(handleCloseDialogClick, cancelDelete)
    removeClick(handleDeleteProduct, yesDelete)

    RemoveDialog()

    window.location.reload(false)  //reload the page
  } else console.log(failedToEliminateMsn)
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
