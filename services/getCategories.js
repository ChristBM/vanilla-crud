import { BASE_URL } from '../vars.js'

export default async function getCategories(callback) {
  try {
    const res = await window.fetch(`${BASE_URL}categories`)
    const data = await res.json()

    if (res.ok) callback(data)
  } catch (error) {
    throw new Error(error)
  }
}
