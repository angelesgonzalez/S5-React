/* eslint-disable react/no-unescaped-entities */
import "./FAQ.css";
import { Button } from "../00-shared/Button/Button";
import { FAQ_DATA } from "./faqData";
import { FAQitem } from "./FAQitem";
import { useState } from "react";

export const FAQ = () => {
	const handleToggle = (id: number) => {
		setExpandedId((prevId) => (prevId === id ? null : id));
	};

	const [expandedId, setExpandedId] = useState<number | null>(null);

	return (
		<>
			<section className="faq">
				<div className="faq__text">
					<h2>Frequently Asked Questions</h2>
					<p>
						Here are some of our FAQs. If you have any other questions you'd
						like answered please feel free to email us.
					</p>
				</div>
				<div className="faq__questions" id="questions-container"></div>
				{FAQ_DATA.map((item_data) => {
					return (
						<FAQitem
							key={`faq__item_${item_data.id}`}
							id={item_data.id}
							question={item_data.question}
							answer={item_data.answer}
							isExpanded={item_data.id === expandedId}
							onToggle={handleToggle}
						/>
					);
				})}
				<Button variant="primary">More Info</Button>
			</section>
		</>
	);
};
