import { BASE_URL } from '../vars.js'

export default async function getProductById(callback, id) {
  try {
    const res = await window.fetch(`${BASE_URL}products/${id}`)
    const data = await res.json()

    if (res.ok) callback(data)
  } catch (error) {
    callback(false)
    throw new Error(error)
  }
}
