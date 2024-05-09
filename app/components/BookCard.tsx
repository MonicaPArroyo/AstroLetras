import NextImage from "next/image";
import { Button, Card, CardBody } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import { type Book } from "@/app/data/books";
import SaveIcon from "@/components/icons/SaveIcon";
import { useLibraryStore } from "@/store/store";

const BookCard = ({ book }: Book) => {
	const {
		selectedBooks,
		addSelectedBook,
		removeSelectedBook,
		onOpen,
		setViewBook,
	} = useLibraryStore();
	const saved = selectedBooks.some(
		(selectedBook) => selectedBook.book.ISBN === book.ISBN
	);

	const handlePress = () => {
		if (saved) {
			removeSelectedBook(book.ISBN);
		} else {
			addSelectedBook({ book: book });
		}
	};
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
						<Button
							isIconOnly
							className='absolute data-[hover]:bg-foreground/10 right-0'
							radius='full'
							color='warning'
							variant='light'
							onPress={handlePress}
						>
							<SaveIcon
								className={saved ? "[&>path]:stroke-transparent" : ""}
								fill={saved ? "currentColor" : "none"}
							/>
						</Button>
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