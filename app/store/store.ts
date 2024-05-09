import { persist } from "zustand/middleware";
import { create } from "zustand";
import { type Book } from "@/app/data/books";
import { type LibraryState } from "@/store/store.type";
import { Genre } from "@/utils/getGenres";

/**
 * Store personalizado para gestionar el estado relacionado con la biblioteca de libros.
 * Utiliza Zustand para proporcionar un estado global y acciones asociadas para la aplicación.
 */
export const useLibraryStore = create<LibraryState>()(
	persist(
		(set) => ({
			books: [],
			selectedBooks: [],
			booksCounter: undefined,
			selectedBooksCounter: undefined,
			genres: [],
			filterGenres: [],
			isOpen: false,
			viewBook: undefined, // Libro que se está visualizando en el modal
			setBooks: (books: Book[]) => set((state) => ({ books: books })),
			addSelectedBook: (book: Book) =>
				set((state) => ({ selectedBooks: [...state.selectedBooks, book] })),
			removeSelectedBook: (isbn: string) =>
				set((state) => ({
					selectedBooks: state.selectedBooks.filter(
						(book) => book.book.ISBN !== isbn
					),
				})),
			setBookCounter: (bookCounter: number) =>
				set(() => ({ booksCounter: bookCounter })),
			setSelectedBooksCounter: (selectedBooksCounter: number) =>
				set(() => ({ selectedBooksCounter: selectedBooksCounter })),
			setGenres: (genres: Genre[]) => set((state) => ({ genres: genres })),
			setFilterGenres: (filterGenres: string[]) =>
				set((state) => ({ filterGenres: filterGenres })),
			onOpen: () => set(() => ({ isOpen: true })),
			onClose: () => set(() => ({ isOpen: false })),
			setViewBook: (book: Book) => set(() => ({ viewBook: book })),
		}),
		{
			name: "library-store",
		}
	)
);
