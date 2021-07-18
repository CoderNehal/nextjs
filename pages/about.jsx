import React from 'react';
import { useRouter } from 'next/router';
const About = () => {
	const router = useRouter();
	const {
		query: { name },
	} = router;
	return <h1>This is fookin about page {name}</h1>;
};

export default About;
