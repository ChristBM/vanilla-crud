export function saveInLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function readLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
