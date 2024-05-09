import { useEffect } from "react";
import {
	Badge,
	Button,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	useDisclosure,
} from "@nextui-org/react";
import SelectedBookItem from "@/components/SelectedBookItem";
import { useLibraryStore } from "@/store/store";

const SelectedBooksModal = () => {
	const { selectedBooksCounter, selectedBooks, setSelectedBooksCounter } =
		useLibraryStore();
	const { isOpen, onOpen, onClose } = useDisclosure();
	useEffect(() => {
		if (selectedBooks) {
			setSelectedBooksCounter(selectedBooks.length);
		}
	}, [selectedBooks, setSelectedBooksCounter]);

	return (
		<div className='mx-auto md:mx-0'>
			<Badge
				content={selectedBooksCounter}
				color='warning'
				size='lg'
				isInvisible={!selectedBooksCounter}
			>
				<Button color='secondary' size='lg' onPress={onOpen}>
					Lista de Lectura
				</Button>
			</Badge>
			<Modal
				size='xl'
				scrollBehavior='inside'
				isOpen={isOpen}
				onClose={onClose}
				className='bg-secondary-50'
			>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader>
								Lista de Lectura: {selectedBooksCounter} libros
							</ModalHeader>
							<ModalBody>
								{selectedBooks.length > 0 ? (
									<ul
										role='list'
										className='flex flex-col justify-between gap-x-4'
									>
										{selectedBooks &&
											selectedBooks.map((selectedBook) => (
												<SelectedBookItem
													book={selectedBook.book}
													key={selectedBook.book.ISBN}
												/>
											))}
									</ul>
								) : (
									<p className='text-xl font-semibold text-center'>
										¡Aún no agregas ningún libro!
									</p>
								)}
							</ModalBody>
							<ModalFooter>
								<Button variant='bordered' onPress={onClose}>
									Cerrar
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</div>
	);
};

export default SelectedBooksModal;
