"use client";

import { useEffect } from "react";
import { library } from "@/app/data/books";
import Header from "@/components/Header";
import MainContainer from "@/components/MainContainer";
import ViewMoreModal from "@/components/ViewMoreModal";
import { useLibraryStore } from "@/store/store";
import { getGenres } from "@/utils/getGenres";

export default function Home() {
	const { setBooks, setGenres } = useLibraryStore();
	useEffect(() => {
		setBooks(library);
		if (library) {
			const genres = getGenres(library);
			setGenres(genres);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<>
			<Header />
			<MainContainer />
			<ViewMoreModal />
		</>
	);
}