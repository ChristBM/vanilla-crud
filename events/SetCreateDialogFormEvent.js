import Swal from 'https://cdn.jsdelivr.net/npm/sweetalert2@11.10.0/+esm'
import { RemoveDialog } from "../render/RenderDialog.js";
import createProducts from "../services/createProduct.js";

const successMsn = 'You have created a new product'
const errorMsn = 'An error has occurred, a new product could not be created. Please try again and make sure to fill in all the fields correctly.'

let data = {
  title: '',
  price: 0,
  description: '',
  categoryId: 0,
  images: []
}

function handleCreateResponse(dat) {
  if (dat) {
    Swal.fire({
      title: "Good job!",
      text: successMsn,
      icon: "success",
    });

    RemoveDialog()
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

  let imgArr = []

  for (var pair of formData.entries()) {
    // validations can be added here
    switch(pair[0]) {
      case 'title-new-product':
        data['title'] = pair[1]
        break
      case 'price-new-product':
        data['price'] = parseInt(pair[1])
        break
      case 'description-new-product':
        data['description'] = pair[1]
        break
      case 'image-new-product-1':
        imgArr.push(pair[1])
        break
      case 'image-new-product-2':
        imgArr.push(pair[1])
        break
      case 'image-new-product-3':
        imgArr.push(pair[1])
        break
      case 'category-id-new-product':
        data['categoryId'] = parseInt(pair[1])
      default:
        break
    }
  }

  data.images = imgArr

  createProducts(handleCreateResponse, data)
}

export default function SetCreateDialogFormEvent() {
  const form = document.querySelector('#create-new-product-form')

  form.addEventListener('submit', handleSubmitForm)
}
