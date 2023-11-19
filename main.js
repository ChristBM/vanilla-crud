import getProducts from "./services/getProducts.js"
import RenderNavBar from "./render/RenderNavbar.js"
import RenderProductList from "./render/RenderProductList.js"
import RenderLoader from "./render/RenderLoader.js"
import getCategories from "./services/getCategories.js"
import { STORAGE_KEY_CATEGORIES } from "./vars.js"
import { saveInLocalStorage } from "./common/utils/handleLocalStorage.js"

RenderLoader()

RenderNavBar()

getCategories((categories) => saveInLocalStorage(STORAGE_KEY_CATEGORIES, categories))

getProducts(RenderProductList, 'limit=10&offset=0')
