import { Button, Tooltip } from "@nextui-org/react";
import SaveIcon from "@/components/icons/SaveIcon";
import { type Book } from "@/data/books";
import { useLibraryStore } from "@/store/store";

type SaveButtonProps = {
	book: Book | undefined;
};

/**
 * Componente para agregar o eliminar un libro de la lista de lectura.
 * Este componente proporciona un botón con un icono de guardado que permite al usuario agregar o eliminar un libro de la lista de lectura.
 * @param book Objeto de tipo `Book` que representa el libro al que se aplicará la acción de guardar o eliminar.
 */
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
				data-testid={`button-save-book-${book?.book.ISBN}`}
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
