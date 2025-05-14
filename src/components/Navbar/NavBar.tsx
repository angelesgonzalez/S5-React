import "./NavBar.css";
import { NavLinks } from "../shared/NavLinks/NavLinks";
import { MenuToggleButton } from "../shared/MenuToggleButton/MenuToggleButton";
import { Button } from "../shared/Button/Button";
import bookmarkLogo from "../../assets/logo-bookmark.svg";

function showMobileMenu() {
	//aqui abrira y cerrara el mobileMenu
	console.log("Burguer Menu clickado");
}

function handleClickButton() {
	//aqui abrira un link desde el button
	console.log("Boton secondario clickado desde nav");
}

export function NavBar() {
	return (
		<>
			<nav className="header-nav">
				<img src={bookmarkLogo}></img>
				<div className="header-nav__desktop-container">
					<NavLinks className="header-nav__desktop-list" />
					<Button variant="secondary" onClick={() => handleClickButton()}>
						LOGIN
					</Button>
				</div>
				<MenuToggleButton
					icon="burguer"
					onClick={() => showMobileMenu()}
					label="Burguer Menu"
					className="header-nav__burger-btn"
				/>
			</nav>
		</>
	);
}
