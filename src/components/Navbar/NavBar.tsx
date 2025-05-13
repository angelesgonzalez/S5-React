import "./NavBar.css";
import { Button } from "../shared/Button/Button";
import bookmarkLogo from "../../assets/logo-bookmark.svg";

export function NavBar() {
	return (
		<>
			<nav className="header-nav">
				<img src={bookmarkLogo}></img>
				<div className="header-nav__desktop-container">
					<ul className="header-nav__desktop-list">
						<li>
							<a href="#">FEATURES</a>
						</li>

						<li>
							<a href="#">PRICING</a>
						</li>

						<li>
							<a href="#">CONTACT</a>
						</li>
					</ul>
					<Button variant="secondary">LOGIN</Button>
				</div>

				<button
					className="header-nav__burger-btn"
					id="burger-menu"
					aria-label="Open navigation menu">
					<svg xmlns="http://www.w3.org/2000/svg" width="18" height="15">
						<path
							fillRule="evenodd"
							d="M0 0h18v3H0V0zm0 6h18v3H0V6zm0 6h18v3H0v-3z"
						/>
					</svg>
				</button>
			</nav>
		</>
	);
}
