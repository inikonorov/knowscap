import fetch from '../helpers/fetch';

export const SET_IS_MAP_LOADED = 'SET_IS_MAP_LOADED';

export const SET_REGION = 'SET_REGION';

export const SET_IS_GAME_LAUNCHED = 'SET_IS_GAME_LAUNCHED';

export const GET_COUNTRIES_REQUEST = 'GET_COUNTRIES_REQUEST';
export const GET_COUNTRIES_SUCCESS = 'GET_COUNTRIES_SUCCESS';
export const GET_COUNTRIES_FAIL = 'GET_COUNTRIES_FAIL';

export const GET_NEXT_COUNTRY = 'GET_NEXT_COUNTRY';

export const SET_ENTERED_CAPITAL = 'SET_ENTERED_CAPITAL';
export const SET_IS_ENTERED_CAPITAL_CORRECT = 'SET_IS_ENTERED_CAPITAL_CORRECT';
export const ADD_COMPLETED_COUNTRY_CODE = 'ADD_COMPLETED_COUNTRY_CODE';

export const setIsMapLoaded = () => ({
	type: SET_IS_MAP_LOADED,
});

export const setRegion = (region) => ({
	type: SET_REGION,
	payload: region,
});

export const setIsGameLaunched = () => ({
	type: SET_IS_GAME_LAUNCHED,
});

export const getCountries = (region) => (dispatch) => {
	dispatch({
		type: GET_COUNTRIES_REQUEST,
	});

	fetch({ url: `https://restcountries.eu/rest/v2/region/${region}` })
		.then((response) => {
			dispatch({
				type: GET_COUNTRIES_SUCCESS,
				payload: response,
			});

			dispatch(setIsGameLaunched());
		})
		.catch((error) =>
			dispatch({
				type: GET_COUNTRIES_FAIL,
				payload: error,
			})
		);
};

export const setEnteredCapital = (capital = '') => ({
	type: SET_ENTERED_CAPITAL,
	payload: capital,
});

export const setIsEnteredCapitalCorrect = (isEnteredCapitalCorrect) => ({
	type: SET_IS_ENTERED_CAPITAL_CORRECT,
	payload: isEnteredCapitalCorrect,
});

export const getNextCountry = (country) => ({
	type: GET_NEXT_COUNTRY,
	payload: country,
});

export const addCompletedCountryCode = (countryCode) => ({
	type: ADD_COMPLETED_COUNTRY_CODE,
	payload: countryCode,
});
