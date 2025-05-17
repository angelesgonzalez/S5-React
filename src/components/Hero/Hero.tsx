import "./Hero.css";
import { Button } from "../shared/Button/Button";
import heroImg from "../../assets/illustration-hero.svg";

export const Hero = () => {
	return (
		<header className="hero">
			<div className="hero__image-wrapper">
				<div className="hero__image-bg"></div>
				<img className="hero__image" src={heroImg} alt="Hero image" />
			</div>
			<div className="hero__content">
				<div className="hero__text">
					<h1> A simple Bookmark Manager</h1>
					<p>
						A clean and simple interface to organize your favourte websites.
						Open a new browser tab and see your sitesf load instantly. Try it
						for free.
					</p>
				</div>
				<div className="hero__cta-container">
					<Button variant="primary">Get it on Chrome</Button>
					<Button variant="ghost">Get it on Chrome</Button>
				</div>
			</div>
		</header>
	);
};
