import Swal from 'https://cdn.jsdelivr.net/npm/sweetalert2@11.10.0/+esm'
import { saveInLocalStorage } from "../common/utils/handleLocalStorage.js"
import RenderDialog from "../render/RenderDialog.js"
import getProductById from "../services/getProductById.js"
import { STORAGE_KEY_PRODUCT_UPD } from "../vars.js"
import EditDialog from '../components/Dialog/EditDialog/EditDialog.js'
import SetEditDialogFormEvent from './SetEditDialogFormEvent.js'

const failMsn = 'No details were found for this product. Please try again.'
let prodId = 0

function handleProductData(product) {
  if(product) {
    saveInLocalStorage(STORAGE_KEY_PRODUCT_UPD, product)

    RenderDialog({
      children: EditDialog,
      id: prodId
    })

  SetEditDialogFormEvent()
  } else {
    Swal.fire({
      title: "Oops, an error occurred!",
      text: failMsn,
      icon: "error"
    });
  }
}

export function handleEditBtnClick(e) {
  const productId = e.target.dataset.id
  prodId = productId

  getProductById(handleProductData, productId)
}

export default function SetBtnEditEvent() {
  const allEditBtn = document.querySelectorAll('.edit')
  const allEditBtnArr = [...allEditBtn]

  allEditBtnArr.forEach((btn) => {
    btn.addEventListener('click', handleEditBtnClick)
  })
}
