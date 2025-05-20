type Props = {
	id: number;
	question: string;
	answer: string;
	isExpanded: boolean;
	onToggle: (id: number) => void;
};

export const FAQitem = ({
	id,
	question,
	answer,
	isExpanded,
	onToggle,
}: Props) => {
	return (
		<article className="faq__item">
			<button
				className="faq__question-btn"
				aria-expanded={isExpanded}
				aria-controls={`answer-${id}`}
				onClick={() => onToggle(id)}>
				<h4>{question}</h4>
				<svg
					className="faq__arrow-icon"
					xmlns="http://www.w3.org/2000/svg"
					width="18"
					height="12">
					<path fill="none" strokeWidth="3" d="M1 1l8 8 8-8" />
				</svg>
			</button>
			<div className="faq__answer" id={`answer-${id}`} hidden={!isExpanded}>
				<p>{answer}</p>
			</div>
		</article>
	);
};
