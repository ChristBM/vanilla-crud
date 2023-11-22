import { BASE_URL } from '../vars.js'

export default async function createProducts(callback, data) {
  try {
    const res = await window.fetch(`${BASE_URL}products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    const dat = await res.json()

    if (res.status === 201) callback(dat)
  } catch (error) {
    callback(false)
    throw new Error(error)
  }
}
