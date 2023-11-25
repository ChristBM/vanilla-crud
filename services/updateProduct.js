import { BASE_URL } from '../vars.js'

export default async function updateProduct(callback, id, data) {
  try {
    const res = await window.fetch(`${BASE_URL}products/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    const dat = await res.json()

    if (res.status === 200) callback(dat)
  } catch (error) {
    callback(false)
    throw new Error(error)
  }
}
