import { Button, Tooltip } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import { type Book } from "@/app/data/books";
import DeleteIcon from "@/components/icons/DeleteIcon";
import { useLibraryStore } from "@/store/store";

const SelectedBookItem = ({ book }: Book) => {
	const { removeSelectedBook } = useLibraryStore();
	return (
		<li className='dark:bg-default-100/50 shadow-lg overflow-hidden  m-2 rounded-3xl'>
			<div className='flex gap-4 m-4 items-center'>
				<figure className='w-100 h-100'>
					<Image
						src={book.cover}
						alt={`Portada del libro ${book.title}`}
						width={50}
						height={72}
						className='overflow-hidden rounded-sm object-cover object-center'
					/>
				</figure>
				<div className='flex-1'>
					<h3 className='text-lg leading-6 font-medium text-warning-500'>
						{book.title}
					</h3>
					<p className='mt-1 max-w-2xl text-sm text-gray-500'>
						{book.author.name}
					</p>
				</div>
				<Tooltip content='Eliminar de la Lista'>
					<Button
						isIconOnly
						className='data-[hover]:bg-foreground/10'
						radius='full'
						color='danger'
						variant='light'
						onPress={() => removeSelectedBook(book.ISBN)}
						aria-label='Eliminar de la Lista'
					>
						<DeleteIcon />
					</Button>
				</Tooltip>
			</div>
		</li>
	);
};

export default SelectedBookItem;
