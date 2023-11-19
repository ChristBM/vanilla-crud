import Logo from "./Logo/Logo.js"
import NewProductBtn from "./NewProductBtn/NewProductBtn.js"

const label ='Create Product'
const title = "vanilla-CRUD"

export default function NavBar() {
  return `
    <nav class="navbar_container">
      ${Logo({ title })}

      ${NewProductBtn({ label })}
    </nav>
  `
}
