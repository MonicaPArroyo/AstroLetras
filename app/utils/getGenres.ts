import { Book } from "@/app/data/books";

export type Genre = {
	label: string;
	value: string;
};

/**
 * Obtiene los géneros únicos de una lista de libros.
 * @param books Lista de libros de la que se extraerán los géneros.
 * @returns Un array de objetos de tipo `Genre`, que contiene los géneros únicos de la lista de libros.
 */
export const getGenres = (books: Book[]) => {
	const uniqueGenres: { [key: string]: string } = {};
	const genresArray: Genre[] = [];

	books.forEach((item) => {
		const bookGenre = item.book.genre;
		if (!uniqueGenres[bookGenre]) {
			uniqueGenres[bookGenre] = bookGenre;
			genresArray.push({ label: bookGenre, value: bookGenre });
		}
	});

	return genresArray;
};
