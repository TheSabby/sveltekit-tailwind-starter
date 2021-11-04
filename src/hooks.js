import { parse as parseCookieHeader } from 'cookie';

export function getSession(request) {
	let auth = null;

	try {
		if (request.headers.cookie) {
			const cookies = parseCookieHeader(request.headers.cookie);
			if (cookies.auth) {
				// TODO: Probably do something else here
				auth = JSON.parse(cookies.auth);
			}
		}
	} catch (error) {
		// TODO: Investigate redirect
		console.error(error);
		return { error };
	}

	return {
		auth,
	};
}

export async function handle({ request, resolve }) {
	const response = await resolve(request);

	return response;
}
