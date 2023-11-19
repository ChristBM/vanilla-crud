import { readLocalStorage } from "../../../common/utils/handleLocalStorage.js"
import { STORAGE_KEY_DETAILS } from "../../../vars.js"

export default function DetailsDialog(prodId) {
  const {
    id,
    title,
    price,
    images,
    description,
    category: { name, image }
  } = readLocalStorage(STORAGE_KEY_DETAILS)

  if (parseInt(id) !== parseInt(prodId)) return ''
  else return `
    <div class="details_dialog_container">
      <div class="details_dialog__img_wrapper">
        <img id="details-dialog--img" src="${images[0]}" alt="details picture" class="details_dialog__img" referrerpolicy="no-referrer">
      </div>

      <div class="details_dialog__info">
        <h2 class="details_dialog__title">${title}</h2>

        <p class="details_dialog__description">${description}</p>

        <p class="details_dialog__price">${price} USD</p>

        <div class="details_dialog__category_container">
          <div class="details_dialog__category_img_container">
            <img src="${image}" alt="details category picture" class="details_dialog__category_img" referrerpolicy="no-referrer">
          </div>

          <h3 class="details_dialog__category_name"><span>Category: </span>${name}</h3>
        </div>
      </div>
    </div>
  `
}
