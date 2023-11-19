import { openDialog } from "../common/utils/dialogFns.js"
import Dialog from "../components/Dialog/Dialog.js"
import SetBtnCloseDialogEvent from "../events/setBtnCloseDialogEvent.js"

const dialogNode = document.querySelector('#global-dialog')

const RenderDialog = ({ children, id }) => {
  dialogNode.innerHTML = Dialog({ children, id })

  openDialog('#dialog')

  SetBtnCloseDialogEvent()
}

export const RemoveDialog = () => {
  dialogNode.innerHTML = ''
}

export default RenderDialog
