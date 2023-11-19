import ControlBtn from "./ControlBtn/ControlBtn.js"

const controlLabels = ['details', 'edit', 'delete']

export default function Controls({ id }) {
  let controls = ''

  controlLabels.forEach((label) => {
    controls = controls + `
      ${ControlBtn({ label, id })}
    `
  })

  return `
    <div class="product_controls">
      ${controls}
    </div>
  `
}
