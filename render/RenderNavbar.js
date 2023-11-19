import NavBar from "../components/NavBar/NavBar.js"
import setBtnCreateEvent from "../events/setBtnCreateEvent.js"

const header = document.querySelector('#header-nav-bar')

const RenderNavBar = () => {
  header.innerHTML = NavBar()

  setBtnCreateEvent()
}

export default RenderNavBar
