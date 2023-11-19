import PriceTag from "./PriceTag/PriceTag.js"
import Controls from "./Controls/Controls.js"

export default function Product({ id, images, title, price }) {
  return `
    <li class="product_container">
      <div class="product_img_wrapper">
        <img src="${images[0]}" alt="product details" class="product_img" referrerpolicy="no-referrer">
      </div>

      <div class="product_info">
        <h2 class="product__info_title">${title}</h2>

        ${PriceTag({ price, currency: 'USD' })}
      </div>

      ${Controls({ id })}
    </li>
  `
}
