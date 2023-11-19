import { closeDialog } from "../common/utils/dialogFns.js"
import removeClick from '../common/utils/removeClick.js'
import { RemoveDialog } from "../render/RenderDialog.js"

export function handleCloseDialogClick() {
  const closeBtn = document.querySelector('#dialog-close-btn')

  closeDialog('#dialog')

  removeClick(handleCloseDialogClick, closeBtn)

  RemoveDialog()
}

export default function SetBtnCloseDialogEvent() {
  const closeBtn = document.querySelector('#dialog-close-btn')

  closeBtn.addEventListener('click', handleCloseDialogClick)
}
