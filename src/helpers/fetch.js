const getHeaders = ({ method = 'GET' }) => {
	if (method === 'GET') {
		return {};
	}

	return {
		headers: {
			'Content-Type': 'applications/json',
		},
	};
};

const getBody = ({ method = 'GET', data }) => {
	if (method === 'GET') {
		return {};
	}

	return JSON.stringify(data);
};

export default ({ url, method = 'GET', data }) => {
	const options = {
		method,
		...getHeaders({ method }),
		...getBody({ method, data }),
	};

	return fetch(url, options).then((response) => response.json());
};
