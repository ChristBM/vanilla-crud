import { BASE_URL } from '../vars.js'

export default async function deleteProduct(callback, id) {
  try {
    const res = await window.fetch(`${BASE_URL}products/${id}`, {
      method: 'DELETE'
    })

    if (res.ok) callback(true)
  } catch (error) {
    callback(false)
    throw new Error(error)
  }
}
