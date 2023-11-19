export function openDialog(id) {
  const dialog = document.querySelector(id)

  dialog.showModal();
}

export function closeDialog(id) {
  const dialog = document.querySelector(id)

  dialog.close();
}
