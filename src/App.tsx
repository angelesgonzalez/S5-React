import "./App.css";
import { useState } from "react";
import { NavBar } from "./components/01-Navbar/NavBar";
import { MobileMenu } from "./components/02-MobileMenu/MobileMenu";
import { Hero } from "./components/03-Hero/Hero";
import { Features } from "./components/04-Features/Features";
import { Download } from "./components/05-Download/Download";

function App() {
	const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);
	const toggleMobileMenu = () => setMobileMenuVisible((current) => !current);

	return (
		<>
			<NavBar onToggleMenu={toggleMobileMenu}></NavBar>
			{isMobileMenuVisible && <MobileMenu onClick={toggleMobileMenu} />}
			<Hero />

			<main>
				<Features />
				<Download />
			</main>
		</>
	);
}

export default App;
