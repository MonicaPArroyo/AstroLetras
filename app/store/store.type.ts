import { type Book } from "@/app/data/books";
import { type Genre } from "@/utils/getGenres";

export type LibraryState = {
	books: Book[];
	selectedBooks: Book[];
	booksCounter: number | undefined;
	selectedBooksCounter: number | undefined;
	genres: Genre[];
	filterGenres: string[];
	isOpen: boolean;
	viewBook: Book | undefined;
	setBooks: (books: Book[]) => void;
	addSelectedBook: (book: Book) => void;
	removeSelectedBook: (isbn: Book["book"]["ISBN"]) => void;
	setBookCounter: (number: number) => void;
	setSelectedBooksCounter: (number: number) => void;
	setGenres: (genres: Genre[]) => void;
	setFilterGenres: (filterGenres: string[]) => void;
	onOpen: () => void;
	onClose: () => void;
	setViewBook: (book: Book) => void;
};
