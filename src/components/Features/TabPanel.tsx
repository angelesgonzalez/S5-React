import { Button } from "../shared/Button/Button";

type Props = {
	id: number;
	isActive: boolean;
	imageSrc: string;
	imageAlt: string;
	title: string;
	description: string;
};

export const TabPanel = ({
	id,
	isActive,
	imageSrc,
	imageAlt,
	title,
	description,
}: Props) => {
	return (
		<div
			className={`features__panel ${isActive ? "is-active" : ""}`}
			id={`tab${id}-panel`}
			role="tabpanel"
			aria-labelledby={`tab${id}-button`}
			hidden={!isActive}>
			<div className="features__image-wrapper">
				<div className="features__image-bg" />
				<img className="features__image" src={imageSrc} alt={imageAlt} />
			</div>
			<div className="features__content">
				<h3>{title}</h3>
				<p>{description}</p>
				<Button variant="primary">More Info</Button>
			</div>
		</div>
	);
};
