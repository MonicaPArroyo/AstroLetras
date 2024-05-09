import NextImage from "next/image";
import { Image } from "@nextui-org/react";
import SelectedBooksModal from "@/components/SelectedBooksModal";

const Header = () => {
	return (
		<header className='pb-12'>
			<div className='flex justify-between flex-col md:flex-row gap-12'>
				<div className='flex flex-col md:flex-row items-center gap-12 '>
					<Image
						as={NextImage}
						width={128}
						height={128}
						src='/icon.png'
						alt='Logo de la Librería'
						isBlurred
					/>
					<h1 className='text-6xl font-bold bg-gradient-to-r from-secondary-500 to-primary-500 bg-clip-text text-transparent'>
						AstroLetras
					</h1>
				</div>
				<SelectedBooksModal />
			</div>
		</header>
	);
};

export default Header;
