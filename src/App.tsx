import "./App.css";
import { useState } from "react";
import { NavBar } from "./components/Navbar/NavBar";
import { MobileMenu } from "./components/MobileMenu/MobileMenu";
import { Hero } from "./components/Hero/Hero";
import { Features } from "./components/Features/Features";

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
			</main>
		</>
	);
}

export default App;
