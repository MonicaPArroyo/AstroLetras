const Title = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return <h3 className='text-3xl font-semibold text-nowrap'>{children}</h3>;
};

export default Title;
