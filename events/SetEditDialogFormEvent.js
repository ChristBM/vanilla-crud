import Swal from 'https://cdn.jsdelivr.net/npm/sweetalert2@11.10.0/+esm'
import { RemoveDialog } from "../render/RenderDialog.js";
import updateProduct from "../services/updateProduct.js";
import { readLocalStorage, saveInLocalStorage } from '../common/utils/handleLocalStorage.js';
import { STORAGE_KEY_DETAILS, STORAGE_KEY_PRODUCT_UPD } from '../vars.js';

const successMsn = 'You have created a new product'
const errorMsn = 'An error has occurred, a new product could not be created. Please try again and make sure to fill in all the fields correctly.'

let data = {}

function handleUpdateResponse(dat) {
  if (dat) {
    Swal.fire({
      title: "Good job!",
      text: successMsn,
      icon: "success",
    });

    if (dat.id === readLocalStorage(STORAGE_KEY_DETAILS).id) saveInLocalStorage(STORAGE_KEY_DETAILS, dat)

    RemoveDialog()

    setTimeout(() => {
      Swal.close()
      window.location.reload(false)  //reload the page
    }, 1500)
  } else {
    Swal.fire({
      title: "Oops, an error occurred!",
      text: errorMsn,
      icon: "error"
    });
  }
}

export function handleSubmitForm(e) {
  e.preventDefault();

  const formData = new FormData(this);

  const { id, images } = readLocalStorage(STORAGE_KEY_PRODUCT_UPD)

  let imgArr = ['', '', '']

  for (var pair of formData.entries()) {
    // validations can be added here
    switch(pair[0]) {
      case 'title-upd-product':
        if (pair[1].length) data['title'] = pair[1]
        break
      case 'price-upd-product':
        if (pair[1] && typeof parseInt(pair[1]) === 'number') data['price'] = parseInt(pair[1])
        break
      case 'description-upd-product':
        if (pair[1].length) data['description'] = pair[1]
        break
      case 'image-upd-product-1':
        if (pair[1].length) imgArr[0] = pair[1]
        break
      case 'image-upd-product-2':
        if (pair[1].length) imgArr[1] = pair[1]
        break
      case 'image-upd-product-3':
        if (pair[1].length) imgArr[2] = pair[1]
        break
      default:
        break
    }
  }

  if (imgArr.some((url) => url.length)) {
    const imgArrData = imgArr.map((url, idx) => url.length ? url : images[idx])
    data['images'] = imgArrData
  }

  if (Object.keys(data).length) {
    updateProduct(handleUpdateResponse, id, data)
  }
}

export default function SetEditDialogFormEvent() {
  const form = document.querySelector('#edit-product-form')

  form.addEventListener('submit', handleSubmitForm)
}
