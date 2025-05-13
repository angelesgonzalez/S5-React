import "./Button.css";

type ButtonProps = {
	variant: "primary" | "secondary" | "ghost" | "outlined";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ variant, children }: ButtonProps) {
	const classMap = {
		primary: "btn--primary",
		secondary: "btn--secondary",
		ghost: "btn--ghost",
		outlined: "btn--outlined",
	};

	const className = classMap[variant] || classMap.primary;

	return <button className={className}>{children}</button>;
}
