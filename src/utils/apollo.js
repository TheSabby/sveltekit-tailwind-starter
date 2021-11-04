import { ApolloClient, HttpLink } from '@apollo/client/core/core.cjs.js';
import { InMemoryCache } from '@apollo/client/cache/cache.cjs.js';
import { setContext } from '@apollo/client/link/context/context.cjs.js';

const { DOMAIN = 'http://localhost:3000' } = process.env;

export function generateClient(fetcher) {
	const httpLink = new HttpLink({
		uri: `${DOMAIN}/graphql`,
		fetch: fetcher,
	});

	const authLink = setContext((_, { headers }) => {
		const token = ''; // TODO: Get token from somewhere

		// return the headers to the context so httpLink can read them
		return {
			headers: {
				...headers,
				authorization: token ? `Bearer ${token}` : '',
			},
		};
	});

	const client = new ApolloClient({
		link: authLink.concat(httpLink),
		cache: new InMemoryCache(),
	});

	return client;
}
