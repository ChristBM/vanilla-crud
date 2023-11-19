import DeleteDialog from "../components/Dialog/DeleteDialog/DeleteDialog.js"
import RenderDialog from "../render/RenderDialog.js"
import SetDeleteDialogBtnEvents from "./SetDeleteDialogBtnEvents.js"

export function handleDeleteBtnClick(e) {
  const productId = e.target.dataset.id

  RenderDialog({
    children: DeleteDialog,
    id: productId
  })

  SetDeleteDialogBtnEvents(productId)
}

export default function SetBtnDeleteEvent() {
  const allDeleteBtn = document.querySelectorAll('.delete')
  const allDeleteBtnArr = [...allDeleteBtn]

  allDeleteBtnArr.forEach((btn) => {
    btn.addEventListener('click', handleDeleteBtnClick)
  })
}
