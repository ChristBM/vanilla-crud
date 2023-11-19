import { readLocalStorage, saveInLocalStorage } from "../common/utils/handleLocalStorage.js"
import DetailsDialog from "../components/Dialog/DetailsDialog/DetailsDialog.js"
import RenderDialog from "../render/RenderDialog.js"
import getProductById from "../services/getProductById.js"
import { STORAGE_KEY_DETAILS } from "../vars.js"

const failMsn = 'No details were found for this product. Please try again.'
let prodId = 0

function handleProductData(product) {
  if(product) {
    saveInLocalStorage(STORAGE_KEY_DETAILS, product)

    RenderDialog({
      children: DetailsDialog,
      id: prodId
    })
  } else console.log(failMsn)
}

export function handleDetailBtnClick(e) {
  const productId = e.target.dataset.id
  prodId = productId

  const prodDataInLocal = readLocalStorage(STORAGE_KEY_DETAILS)

  if(prodDataInLocal && prodDataInLocal.id === parseInt(productId)) {
    handleProductData(prodDataInLocal)
  } else getProductById(handleProductData, productId)
}

export default function SetBtnDetailsEvent() {
  const allDetailBtn = document.querySelectorAll('.details')
  const allDetailBtnArr = [...allDetailBtn]

  allDetailBtnArr.forEach((btn) => {
    btn.addEventListener('click', handleDetailBtnClick)
  })
}
