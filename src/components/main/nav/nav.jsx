import NavMenu from "./nav-menu/navMenu"
import Logo from "../../../img/logo.png"

function Nav() {
  return (
    <nav className="main__nav nav">
      <svg className="nav__logo logo">
        <img className="logo__image" src={Logo} alt="logo" />
      </svg>
      <div className="nav__burger burger">
        <span className="burger__line" />
        <span className="burger__line" />
        <span className="burger__line" />
      </div>
      <NavMenu />
    </nav>
  )
}

export default Nav
