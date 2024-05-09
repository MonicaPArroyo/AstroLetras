import NextImage from "next/image";
import {
	Button,
	Image,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	Tooltip,
} from "@nextui-org/react";
import SaveIcon from "@/components/icons/SaveIcon";
import { useLibraryStore } from "@/store/store";
import SaveButton from "./SaveButton";

const ViewMoreModal = () => {
	const {
		isOpen,
		onClose,
		viewBook,
		selectedBooks,
		removeSelectedBook,
		addSelectedBook,
	} = useLibraryStore();
	const saved = selectedBooks.some(
		(selectedBook) => selectedBook.book.ISBN === viewBook?.book.ISBN
	);
	const handlePress = () => {
		if (viewBook) {
			if (saved) {
				removeSelectedBook(viewBook?.book.ISBN);
			} else {
				addSelectedBook({ book: viewBook.book });
			}
		}
	};
	return (
		<Modal
			as='article'
			size='xl'
			scrollBehavior='inside'
			isOpen={isOpen}
			onClose={onClose}
			className='bg-secondary-50'
		>
			<ModalContent>
				{(onClose) => (
					<>
						<ModalHeader>Libro: {viewBook?.book.title}</ModalHeader>
						<ModalBody>
							<div className='flex w-full'>
								<SaveButton book={viewBook} />
							</div>

							<div className='flex flex-col items-center md:flex-row gap-4 w-full'>
								<figure className='flex flex-col gap-2'>
									<Image
										as={NextImage}
										width={150}
										height={208}
										src={viewBook?.book.cover}
										alt={`Portada del libro ${viewBook?.book.title}`}
										className='overflow-hidden rounded-md object-cover object-center'
									/>
									<figcaption className='text-gray-400 text-center'>
										Año {viewBook?.book.year}
									</figcaption>
								</figure>
								<div className='flex flex-col flex-1 h-full gap-2'>
									<h3 className='text-xl font-bold mt-auto'>
										{viewBook?.book.title}
									</h3>
									<p>
										Autor:{" "}
										<span className='text-gray-400'>
											{viewBook?.book.author.name}
										</span>
									</p>
									<p>
										Género:{" "}
										<span className='text-gray-400'>
											{viewBook?.book.genre}
										</span>
									</p>
									<p>
										No. de páginas:{" "}
										<span className='text-gray-400'>
											{viewBook?.book.pages}
										</span>
									</p>
									<div className='mb-auto'>
										<p className='font-semibold'>Sinopsis:</p>
										<p className='text-gray-400'>{viewBook?.book.synopsis}</p>
									</div>
								</div>
							</div>
							<div>
								<h3 className='text-md font-bold my-2'>Más obras del Autor:</h3>
								<p className='flex-wrap'>
									{viewBook?.book.author.otherBooks.join(", ")}
								</p>
							</div>
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
	);
};

export default ViewMoreModal;
