import { BASE_URL } from '../vars.js'

export default async function getProducts(callback, query) {
  try {
    const res = await window.fetch(`${BASE_URL}products?${query}`)
    const data = await res.json()

    if (res.ok) callback(data)
  } catch (error) {
    callback([])

    throw new Error(error)
  }
}
