export default function removeClick(fn, node) {
  node.removeEventListener('click', fn)
}
