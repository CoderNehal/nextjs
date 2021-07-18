
export const getStaticProps = async (context) => {
	return {
		props: { name: 'Nehal' },
	};
};
//Work on context
import Link from 'next/link';
export default function Home() {
	return (
		<>
			<a id='btn'>
				<Link href='/Movies'> Go for Movies</Link>
			</a>
		</>
	);
}
