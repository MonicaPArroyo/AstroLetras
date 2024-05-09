import NextImage from "next/image";
import { Button, Card, CardBody } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import { type Book } from "@/app/data/books";
import SaveIcon from "@/components/icons/SaveIcon";
import { useLibraryStore } from "@/store/store";
import SaveButton from "./SaveButton";

const BookCard = ({ book }: Book) => {
	const { onOpen, setViewBook } = useLibraryStore();
	const handleClick = () => {
		onOpen();
		setViewBook({ book: book });
	};
	return (
		<Card isBlurred className='border-none dark:bg-default-100/50' shadow='sm'>
			<CardBody>
				<div className='flex items-center gap-4 h-[240px] w-full'>
					<Image
						as={NextImage}
						width={150}
						height={208}
						src={book.cover}
						alt={`Portada del libro ${book.title}`}
						className='overflow-hidden rounded-md object-cover object-center'
					/>
					<div className='flex flex-col flex-1 h-full relative'>
						<SaveButton book={{ book: book }} />
						<div className='flex flex-col gap-2 flex-1 '>
							<h4 className='text-xl font-bold mt-auto'>{book.title}</h4>
							<p className='text-gray-400 mb-auto'>{book.author?.name}</p>
						</div>
						<Button onPress={handleClick}>Ver más</Button>
					</div>
				</div>
			</CardBody>
		</Card>
	);
};

export default BookCard;