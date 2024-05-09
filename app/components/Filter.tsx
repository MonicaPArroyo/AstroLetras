import { Chip, Select, SelectItem, Skeleton } from "@nextui-org/react";
import { useLibraryStore } from "@/store/store";

const Filter = () => {
	const { genres, filterGenres, setFilterGenres } = useLibraryStore();

	return (
		<div>
			<Skeleton isLoaded={genres.length > 0} className='rounded-lg'>
				<Select
					items={genres}
					label='Filtrar por género'
					variant='bordered'
					isMultiline={true}
					selectionMode='multiple'
					selectedKeys={filterGenres}
					onChange={(e) => {
						const selectedGenres = e.target.value.split(",");
						setFilterGenres(
							selectedGenres.length === 1 && selectedGenres[0] === ""
								? []
								: selectedGenres
						);
					}}
					renderValue={(items) => {
						return (
							<div className='flex flex-wrap gap-2'>
								{items.map((item) => (
									<Chip key={item.key}>{item.data?.label}</Chip>
								))}
							</div>
						);
					}}
				>
					{(genre) => (
						<SelectItem key={genre.value} value={genre.value}>
							{genre.label}
						</SelectItem>
					)}
				</Select>
			</Skeleton>
		</div>
	);
};

export default Filter;
