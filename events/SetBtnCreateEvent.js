import RenderDialog from '../render/RenderDialog.js'
import SetCreateDialogFormEvent from "./SetCreateDialogFormEvent.js"
import CreateDialog from "../components/Dialog/CreateDialog/CreateDialog.js"

export function handleCreateBtnClick(e) {
  RenderDialog({
    children: CreateDialog,
    id: 0
  })

  SetCreateDialogFormEvent()
}

export default function SetBtnCreateEvent() {
  const createBtn = document.querySelector('#create-new-product-btn')

  createBtn.addEventListener('click', handleCreateBtnClick)
}
