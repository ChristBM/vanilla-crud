export function handleEditBtnClick(e) {
  console.log(e.target.dataset.id)
}

export default function SetBtnEditEvent() {
  const allEditBtn = document.querySelectorAll('.edit')
  const allEditBtnArr = [...allEditBtn]

  allEditBtnArr.forEach((btn) => {
    btn.addEventListener('click', handleEditBtnClick)
  })
}
