const Title = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return <h2 className='text-3xl font-semibold text-nowrap'>{children}</h2>;
};

export default Title;
