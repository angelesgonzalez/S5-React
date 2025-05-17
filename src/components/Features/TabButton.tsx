type Props = {
	id: number;
	isActive: boolean;
	onClick: () => void;
	className?: string;
	children: React.ReactNode;
};

export const TabButton = ({
	id,
	isActive,
	onClick,
	className,
	children,
}: Props) => {
	return (
		<button
			className={`features__tab-btn ${
				isActive ? "is-active" : ""
			} ${className}`}
			id={`tab${id}-button`}
			role="tab"
			aria-selected={isActive}
			aria-controls={`tab${id}-panel`}
			onClick={onClick}>
			<h3>{children}</h3>
			<div className="features__tab-indicator"></div>
		</button>
	);
};
