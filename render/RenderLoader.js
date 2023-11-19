import Loader from "../components/Loader/Loader.js"

const listOfProducts = document.querySelector('#list-of-products')

const RenderLoader = () => {
  listOfProducts.innerHTML = Loader()
}

export default RenderLoader
