export default function PriceTag({ price, currency }) {
  return `
    <div class="price_tag_container">
      <p class="product__info_price">${price}</p>
      <p class="product__info_currency">${currency}</p>
    </div>
  `
}
