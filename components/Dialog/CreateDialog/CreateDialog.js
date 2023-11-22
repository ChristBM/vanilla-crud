import { readLocalStorage } from "../../../common/utils/handleLocalStorage.js";
import { STORAGE_KEY_CATEGORIES } from "../../../vars.js";
import TextField from "../../TextField/TextField.js";

export default function CreateDialog(id) {
  const categoriesIds = readLocalStorage(STORAGE_KEY_CATEGORIES).map(({id}) => id).join(', ')
  const categoryFieldSubtitle = `Available ids: (${categoriesIds})`

  return `
    <form id="create-new-product-form" class="create_dialog_container">
      <section class="create_dialog__title_container">
        <h3 class="create_dialog__title">Create New Product</h3>
      </section>

      <section class="create_dialog__form_container">
        <div class="create_dialog__form_wrapper">
          ${TextField({
            id: 'title-new-product',
            type: 'text',
            label: 'Title',
            placeholder: 'Add the title here',
          })}

          ${TextField({
            id: 'price-new-product',
            type: 'number',
            label: 'Price',
            placeholder: 'Add the price here',
          })}

          ${TextField({
            id: 'description-new-product',
            type: 'text',
            label: 'Description',
            placeholder: 'Add the description here',
          })}
        </div>

        <div class="create_dialog__form_wrapper">
          ${TextField({
            id: 'image-new-product-1',
            type: 'url',
            label: 'Image URL 1',
            placeholder: 'Add the image url 1 here',
          })}

          ${TextField({
            id: 'image-new-product-2',
            type: 'url',
            label: 'Image URL 2',
            placeholder: 'Add the image url 2 here',
          })}

          ${TextField({
            id: 'image-new-product-3',
            type: 'url',
            label: 'Image URL 3',
            placeholder: 'Add the image url 3 here',
          })}
        </div>
      </section>

      <section class="create_dialog__form_categories">
        ${TextField({
          id: 'category-id-new-product',
          type: 'number',
          label: 'Category Id',
          subtitle: categoryFieldSubtitle,
          placeholder: 'Add the category id here',
        })}
      </section>

      <section class="create_dialog__submit_container">
        <button type="submit" class="create_dialog__submit_btn">Create</button>
      </section>
    </form>
  `
}
