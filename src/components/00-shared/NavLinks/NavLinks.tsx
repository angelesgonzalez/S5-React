type NavLinksProps = {
	className: string;
};

export const NavLinks = ({ className }: NavLinksProps) => {
	return (
		<ul className={className}>
			<li>
				<a href="#">FEATURES</a>
			</li>
			<li>
				<a href="#">PRICING</a>
			</li>
			<li>
				<a href="#">CONTACT</a>
			</li>
		</ul>
	);
};
