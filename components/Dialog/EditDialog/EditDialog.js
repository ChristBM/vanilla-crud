import { readLocalStorage } from "../../../common/utils/handleLocalStorage.js";
import { STORAGE_KEY_PRODUCT_UPD } from "../../../vars.js";
import TextField from "../../TextField/TextField.js";

export default function EditDialog(id) {
  const prodSelected = readLocalStorage(STORAGE_KEY_PRODUCT_UPD)

  return `
    <form id="edit-product-form" class="edit_dialog_container">
      <section class="edit_dialog__title_container">
        <h3 class="edit_dialog__title">Edit Product</h3>
      </section>

      <section class="edit_dialog__form_container">
        <div class="edit_dialog__form_wrapper">
          ${TextField({
            id: 'title-upd-product',
            type: 'text',
            label: 'Title',
            placeholder: prodSelected.title,
          })}

          ${TextField({
            id: 'price-upd-product',
            type: 'number',
            label: 'Price',
            placeholder: prodSelected.price,
          })}

          ${TextField({
            id: 'description-upd-product',
            type: 'text',
            label: 'Description',
            placeholder: prodSelected.description,
          })}
        </div>

        <div class="edit_dialog__form_wrapper">
          ${TextField({
            id: 'image-upd-product-1',
            type: 'url',
            label: 'Image URL 1',
            placeholder: prodSelected.images[0],
          })}

          ${TextField({
            id: 'image-upd-product-2',
            type: 'url',
            label: 'Image URL 2',
            placeholder: prodSelected.images[1],
          })}

          ${TextField({
            id: 'image-upd-product-3',
            type: 'url',
            label: 'Image URL 3',
            placeholder: prodSelected.images[2],
          })}
        </div>
      </section>

      <section class="edit_dialog__submit_container">
        <button type="submit" class="edit_dialog__submit_btn">Update</button>
      </section>
    </form>
  `
}
