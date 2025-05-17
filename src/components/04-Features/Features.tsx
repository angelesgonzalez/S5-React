import { FeaturesTabs } from "./FeaturesTabs";
import "./Features.css";

export const Features = () => {
	return (
		<section className="features">
			<h2>Features</h2>
			<p>
				Our aim is to make it quick and easy for you to access your favourite
				websites. Your bookmark sync between your devices so you can access them
				on the go.
			</p>
			<FeaturesTabs></FeaturesTabs>
		</section>
	);
};
