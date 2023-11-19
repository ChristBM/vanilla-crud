import CloseBtn from "./CloseBtn/CloseBtn.js";

export default function Dialog({ children, id }) {
  return `
    <dialog id="dialog" class="dialog_container">
      <div class="dialog__close_btn_container">${CloseBtn()}</div>

      <div class="dialog_wrapper">
        ${children(id)}
      </div>
    </dialog>
  `
}
