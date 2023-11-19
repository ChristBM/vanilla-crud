
export default function CreateDialog(id) {
  return `
    <form id="create-new-product-form" class="create_dialog_container">
      <section>
        <h3>Create New Product</h3>
      </section>

      <section>
        <label for="title-new-product">
          Title
          <input type="text" id="title-new-product" data-set="title" name="title-new-product">
        </label>

        <label for="price-new-product">
          Price
          <input type="number" id="price-new-product" data-set="price" name="price-new-product" min="0" max="1000">
        </label>

        <label for="description-new-product">
          Description
          <textarea name="description-new-product" data-set="description" id="description-new-product" cols="30" rows="10"></textarea>
        </label>

        <label for="category-id-new-product">
          Category Id

          <select name="category-id-new-product" id="category-list-select">
          </select>
        </label>

        <label for="image-new-product">
          Image
          <input type="url" id="image-new-product" data-set="images" name="image-new-product">
        </label>
      </section>

      <section>
        <button type="submit">Create</button>
      </section>
    </form>
  `
}
