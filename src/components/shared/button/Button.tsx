import "./Button.css";

type ButtonProps = {
	variant: "primary" | "secondary" | "ghost" | "outlined";
	onClick: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ variant, children, onClick }: ButtonProps) => {
	const classMap = {
		primary: "btn--primary",
		secondary: "btn--secondary",
		ghost: "btn--ghost",
		outlined: "btn--outlined",
	};

	const className = classMap[variant] || classMap.primary;

	return (
		<button className={className} onClick={onClick}>
			{children}
		</button>
	);
};
