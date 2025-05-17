import "./App.css";
import { useState } from "react";
import { NavBar } from "./components/Navbar/NavBar";
import { MobileMenu } from "./components/MobileMenu/MobileMenu";
import { Hero } from "./components/Hero/Hero";

function App() {
	const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);
	const toggleMobileMenu = () => setMobileMenuVisible((current) => !current);

	return (
		<>
			<NavBar onToggleMenu={toggleMobileMenu}></NavBar>
			{isMobileMenuVisible && <MobileMenu onClick={toggleMobileMenu} />}
			<Hero />

			{/* 
			<Features />
			<DownloadSection />
			<FAQ />
			<CTA />
			<Footer /> */}
		</>
	);
}

export default App;
