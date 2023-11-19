import Product from "./Product/Product.js";

export default function ProductList(list) {
  let productList = ''

  list.forEach((product) => {
    productList = productList + `${Product(product)}`;
  })

  return `
    <ul class="list_of_product">
      ${productList}
    </ul>
  `
}
