import ProductList from "../components/ProductList/ProductList.js"
import ErrorMessage from "../components/ErrorMessage/ErrorMessage.js"
import SetBtnDeleteEvent from "../events/SetBtnDeleteEvent.js"
import SetBtnDetailsEvent from "../events/SetBtnDetailsEvent.js"
import SetBtnEditEvent from "../events/SetBtnEditEvent.js"

const listOfProducts = document.querySelector('#list-of-products')

const RenderProductList = (data) => {
  if (data.length) {
    listOfProducts.innerHTML = ProductList(data)

    SetBtnDetailsEvent()
    SetBtnEditEvent()
    SetBtnDeleteEvent()
  } else listOfProducts.innerHTML = ErrorMessage()
}

export default RenderProductList
