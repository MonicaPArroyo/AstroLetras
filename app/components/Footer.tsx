import { Divider, Link } from "@nextui-org/react";

const Footer = () => {
	return (
		<footer className='flex flex-col pt-12'>
			<Divider />
			<Link
				color='foreground'
				size='md'
				underline='hover'
				isExternal
				showAnchorIcon
				className='mx-auto pt-12'
				href='https://github.com/MonicaPArroyo'
			>
				Diseñado y Construido por Mónica P. Arroyo
			</Link>
		</footer>
	);
};

export default Footer;
