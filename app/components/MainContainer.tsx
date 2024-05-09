import { useEffect } from "react";
import BookShelf from "@/components/BookShelf";
import Filter from "@/components/Filter";
import Title from "@/components/Title";
import { useLibraryStore } from "@/store/store";

const MainContainer = () => {
	const { books, booksCounter, selectedBooks, setBookCounter } =
		useLibraryStore();
	useEffect(() => {
		if (books) {
			setBookCounter(books.length - selectedBooks.length);
		}
	}, [books, selectedBooks, booksCounter, setBookCounter]);
	return (
		<main className='flex flex-col justify-between align-center w-full'>
			<div className='flex flex-col-reverse gap-12 justify-between items-center md:flex-row'>
				<Title>Libros disponibles: {booksCounter}</Title>
				<Filter />
			</div>

			<BookShelf />
		</main>
	);
};

export default MainContainer;
