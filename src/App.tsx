import "./App.css";
import { useState } from "react";
import { NavBar } from "./components/Navbar/NavBar";
import { MobileMenu } from "./components/MobileMenu/MobileMenu";

function App() {
	const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);
	const toggleMobileMenu = () => setMobileMenuVisible((current) => !current);

	return (
		<>
			<NavBar onToggleMenu={toggleMobileMenu}></NavBar>
			{isMobileMenuVisible && <MobileMenu onClick={toggleMobileMenu} />}

			{/* 
			<MobileMenu />
			<Hero />
			<Features />
			<DownloadSection />
			<FAQ />
			<CTA />
			<Footer /> */}
		</>
	);
}

export default App;
