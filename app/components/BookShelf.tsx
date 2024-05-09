import BookCard from "@/components/BookCard";
import { useLibraryStore } from "@/store/store";

const BookShelf = () => {
	const { books, filterGenres } = useLibraryStore();

	const getFilteredBooks = (genre: string) => {
		return filterGenres.length === 0 || filterGenres.includes(genre);
	};
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 py-4'>
			{books
				.filter((book) => getFilteredBooks(book.book.genre))
				.map((book) => (
					<BookCard book={book.book} key={book.book.ISBN} />
				))}
		</div>
	);
};

export default BookShelf;
