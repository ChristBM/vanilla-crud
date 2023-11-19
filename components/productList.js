import removeClick from "../utils/removeClick.js"
import getProductById from "../services/getProductById.js"
import productDetails from "./productDetails.js"

const ulList = document.getElementById('products-list')
const detailsDialog = document.querySelector('#details-product-dialog')
const detailsDialogCloseBtn = document.querySelector('#details-product-dialog-close-btn')
const detailsDialogContainer = document.querySelector('#product-datails-contianer')

function closeDetailsDialog() {
  removeClick(closeDetailsDialog, detailsDialogCloseBtn)
  detailsDialogContainer.innerHTML = 'loading...'
  detailsDialog.close()
}

function openDetailsDialog(e) {
  console.log(e)
  detailsDialog.showModal();
  detailsDialogCloseBtn.addEventListener('click', closeDetailsDialog)

  getProductById(productDetails, e.target.dataset.id)
}

const addListBtnEvents = () => {
  const allListBtnsNodeList = document.querySelectorAll('.goto_details_btn')
  const allListBtnsArray = [...allListBtnsNodeList]

  allListBtnsArray.forEach((item) => {
    item.addEventListener('click', openDetailsDialog)
  })
}

const productList = (list) => {
  if (list.length) {
    let liNodes = ''
    
    list.forEach((product) => {
      liNodes = liNodes + `
        <li class="list__element_product">
          <img src="${product.images[0]}" class="product__details_img" alt=" " referrerpolicy="no-referrer">
  
          <h3>${product.title}</h3>
  
          <button type="button" class="goto_details_btn" data-id="${product.id}" >Details</button>
        </li>
      `;
    })

    ulList.innerHTML = liNodes

    addListBtnEvents()
  } else ulList.innerText = 'We have no products to show :('
}

export default productList
