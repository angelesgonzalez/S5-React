import { useState } from "react";
import { FEATURES } from "./featuresData";
import { TabButton } from "./TabButton";
import { TabPanel } from "./TabPanel";

export const FeaturesTabs = () => {
	const [activeTab, setActiveTab] = useState(1);

	const activeFeature = FEATURES.find((feature) => feature.id === activeTab);

	return (
		<div className="features__tabs">
			<nav className="features__tab-nav" role="tablist">
				{FEATURES.map((feature) => (
					<TabButton
						key={feature.id}
						id={feature.id}
						isActive={activeTab === feature.id}
						onClick={() => setActiveTab(feature.id)}>
						{feature.tabTitle}
					</TabButton>
				))}
			</nav>

			<div className="features__panel-container">
				{activeFeature && (
					<TabPanel
						id={activeFeature.id}
						isActive={true}
						imageSrc={activeFeature.imgSrc}
						imageAlt={activeFeature.imgAlt}
						title={activeFeature.panelTitle}
						description={activeFeature.description}
					/>
				)}
			</div>
		</div>
	);
};
