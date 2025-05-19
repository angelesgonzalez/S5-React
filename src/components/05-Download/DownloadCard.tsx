import { Button } from "../00-shared/Button/Button";

type Props = {
	id: string;
	className?: string;
	imgSrc: string;
	title: string;
	requirements: string;
};

export const DownloadCard = ({
	id,
	className,
	title,
	imgSrc,
	requirements,
}: Props) => {
	return (
		<article className="download__card" id={id}>
			<img src={imgSrc} />
			<div className={className || "download__card-content"}>
				<h3>{title}</h3>
				<p>{requirements}</p>
			</div>
			<div className="download__card-divider"></div>
			<div className="download__card-btn-container">
				<Button variant="primary">Add & Install Extension</Button>
			</div>
		</article>
	);
};
