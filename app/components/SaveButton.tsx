import { Button, Tooltip } from "@nextui-org/react";
import SaveIcon from "@/components/icons/SaveIcon";
import { type Book } from "@/data/books";
import { useLibraryStore } from "@/store/store";

type SaveButtonProps = {
	book: Book | undefined;
};

const SaveButton = ({ book }: SaveButtonProps) => {
	const { selectedBooks, removeSelectedBook, addSelectedBook } =
		useLibraryStore();
	const saved = selectedBooks.some(
		(selectedBook) => selectedBook.book.ISBN === book?.book.ISBN
	);
	const handlePress = () => {
		if (book) {
			if (saved) {
				removeSelectedBook(book.book.ISBN);
			} else {
				addSelectedBook(book);
			}
		}
	};
	return (
		<Tooltip content='Agregar A Lista de Lectura'>
			<Button
				isIconOnly
				className='data-[hover]:bg-foreground/10 right-0 ml-auto'
				radius='full'
				color='warning'
				variant='light'
				onPress={handlePress}
				aria-label='Agregar A Lista de Lectura'
			>
				<SaveIcon
					className={saved ? "[&>path]:stroke-transparent" : ""}
					fill={saved ? "currentColor" : "none"}
				/>
			</Button>
		</Tooltip>
	);
};

export default SaveButton;
