"use client";

import { useEffect } from "react";
import { useLibraryStore } from "@/store/store";

const Hydration = () => {
	useEffect(() => {
		useLibraryStore.persist.rehydrate();
	}, []);

	return null;
};

export default Hydration;
