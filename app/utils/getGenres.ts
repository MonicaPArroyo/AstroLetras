import { Book } from "@/app/books";

export type Genre = {
	label: string;
	value: string;
};

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
