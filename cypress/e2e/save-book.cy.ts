//! Es importante mencionar que este test funciona sólo si el libro no estaba seleccionado ya
//! Se necesita mejorar el test

describe("Guardar libro", () => {
	it("debería guardar un libro en la lista del modal", () => {
		// Visitar la página
		cy.visit("http://localhost:3000/");

		// Hacer clic en el botón para guardar el libro
		cy.get('[data-testid="button-save-book-978-0618640157"]').click();

		// Hacer clic en el botón para abrir el modal
		cy.get('[data-testid="boton-view-books"]').click();

		// Verificar que el libro se añadió correctamente a la lista en el modal
		cy.get('[data-testid="list-books"]').should(
			"contain",
			"El Señor de los Anillos"
		);
	});
});
