/* eslint-disable react/no-unescaped-entities */
import { Button } from "../00-shared/Button/Button";
import "./CTA.css";

export const CTA = () => {
	return (
		<section className="cta">
			<div className="cta__text">
				<h4 className="cta__subtitle">35,000+ already joined</h4>
				<h2>Stay up-to-date with what we're doing</h2>
			</div>
			<form className="cta__form" noValidate>
				<input
					type="email"
					placeholder="Enter your email address"
					required
					aria-label="Email address"
				/>
				<Button variant="secondary" type="submit">
					Contact us
				</Button>
			</form>
		</section>
	);
};
