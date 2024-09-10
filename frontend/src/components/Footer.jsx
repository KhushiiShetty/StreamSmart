const Footer = () => {
	return (
		<footer className='py-6 md:px-8 md:py-0 bg-black text-white border-t border-gray-800'>
			<div className='flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row'>
				<p className='text-balance text-center text-sm leading-loose text-muted-foreground md:text-left'>
					Built by{" "}
					<a
						href='https://github.com/khushiishetty'
						target='_blank'
						className='font-medium underline underline-offset-4'
					>
						Khushii Shetty
					</a>
					. The source code is available on{" "}
					<a
						href='https://github.com/khushiishetty'
						target='_blank'
						rel='noreferrer'
						className='font-medium underline underline-offset-4'
					>
						GitHub
					</a>
					
					.
				</p>
				<a href="https://www.flaticon.com/free-icons/man-avatar" title="man avatar icons">Man avatar icons created by Lizel Arina - Flaticon</a>
			</div>
		</footer>
	);
};
export default Footer;