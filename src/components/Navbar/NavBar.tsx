import "./NavBar.css";
import { NavLinks } from "./NavLinks";
import { MenuToggleButton } from "../shared/MenuToggleButton/MenuToggleButton";
import { Button } from "../shared/Button/Button";
import bookmarkLogo from "../../assets/logo-bookmark.svg";

function handleClick() {
	//aqui abrira y cerrara el mobileMenu
}

export function NavBar() {
	return (
		<>
			<nav className="header-nav">
				<img src={bookmarkLogo}></img>
				<div className="header-nav__desktop-container">
					<NavLinks />
					<Button variant="secondary">LOGIN</Button>
				</div>
				<MenuToggleButton
					icon="burguer"
					onClick={() => handleClick()}
					label="Burguer Menu"
					className="header-nav__burger-btn"
				/>
			</nav>
		</>
	);
}
