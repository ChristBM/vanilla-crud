const detailsDialogContainer = document.querySelector('#product-datails-contianer')

const productDetails = (product) => {
  detailsDialogContainer.innerHTML = `
    <h2 class="product__details_title">${product.title}</h2>
    <img src="${product.images[0]}" alt="product detail picture">
    <p class="product__details_price">${product.price}</p>
    <p class="product__details_description">${product.description}</p>
    <p class="product__details_category_name">${product.category.name}</p>
  `
}

export default productDetails
