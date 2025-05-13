import "./NavBar.css";
import { NavLinks } from "./NavLinks";
import { BurgerMenuButton } from "./BurgerMenuButton";
import { Button } from "../shared/Button/Button";
import bookmarkLogo from "../../assets/logo-bookmark.svg";

export function NavBar() {
	return (
		<>
			<nav className="header-nav">
				<img src={bookmarkLogo}></img>
				<div className="header-nav__desktop-container">
					<NavLinks />
					<Button variant="secondary">LOGIN</Button>
				</div>
				<BurgerMenuButton />
			</nav>
		</>
	);
}
