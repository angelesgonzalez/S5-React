import { Icon } from "../icon/Icon";

type Props = {
	icon: "burguer" | "close";
	onClick: () => void;
	label: string;
	className?: string;
};

export const MenuToggleButton = ({
	icon,
	onClick,
	label,
	className,
}: Props) => {
	return (
		<button onClick={onClick} className={className} aria-label={label}>
			{icon === "burguer" ? (
				<Icon icon={icon} label={label} size={18} className="burguer-icon" />
			) : (
				<Icon icon={icon} label={label} size={18} className="light-icon" />
			)}
		</button>
	);
};
