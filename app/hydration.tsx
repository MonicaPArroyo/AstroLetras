"use client";

import { useEffect } from "react";
import { useLibraryStore } from "@/store/store";

/**
 * Componente utilizado para la hidratación de datos persistentes.
 * Este componente se encarga de rehidratar los datos del store al cargar la aplicación,
 * permitiendo así la persistencia de la información incluso después de recargar la página.
 */
const Hydration = () => {
	useEffect(() => {
		// Utiliza el método `rehydrate` del store para restaurar los datos persistentes
		useLibraryStore.persist.rehydrate();
	}, []);

	// Devuelve `null` ya que este componente no renderiza ningún contenido visible
	return null;
};

export default Hydration;
