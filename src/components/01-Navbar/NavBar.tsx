import "./NavBar.css";
import { NavLinks } from "../00-shared/NavLinks/NavLinks";
import { MenuToggleButton } from "../00-shared/MenuToggleButton/MenuToggleButton";
import { Button } from "../00-shared/Button/Button";
import bookmarkLogo from "../../assets/logo-bookmark.svg";

function handleClick() {}

type NavBarProps = {
	onToggleMenu: () => void;
};

export const NavBar = ({ onToggleMenu }: NavBarProps) => {
	return (
		<>
			<nav className="header-nav">
				<img src={bookmarkLogo} alt="Bookmark logo" />
				<div className="header-nav__desktop-container">
					<NavLinks className="header-nav__desktop-list" />
					<Button variant="secondary" onClick={() => handleClick()}>
						LOGIN
					</Button>
				</div>
				<MenuToggleButton
					icon="burguer"
					onClick={onToggleMenu}
					label="Burguer Menu"
					className="header-nav__burger-btn"
				/>
			</nav>
		</>
	);
};
