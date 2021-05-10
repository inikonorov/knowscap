import {
	ADD_COMPLETED_COUNTRY_CODE,
	GET_COUNTRIES_FAIL,
	GET_COUNTRIES_REQUEST,
	GET_COUNTRIES_SUCCESS,
	SET_ENTERED_CAPITAL,
	SET_IS_ENTERED_CAPITAL_CORRECT,
	SET_IS_GAME_LAUNCHED,
	SET_IS_MAP_LOADED,
	SET_REGION,
	GET_COUNTRY_BOUNDS_FAIL,
	GET_COUNTRY_BOUNDS_REQUEST,
	GET_COUNTRY_BOUNDS_SUCCESS,
	GET_NEXT_COUNTRY,
} from '../actions';

import REGIONS from '../components/unique/GameSettings/constants';

import mapCountry from '../helpers/mapCountry';

const initialState = {
	isMapLoaded: false,
	region: REGIONS[0],
	isGameLaunched: false,
	countries: [],
	enteredCapital: '',
	isEnteredCapitalCorrect: false,
	currentCountry: {},
	completedCountriesCode: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_IS_MAP_LOADED:
			return {
				...state,
				isMapLoaded: true,
			};
		case SET_REGION: {
			return {
				...state,
				region: action.payload,
			};
		}
		case SET_IS_GAME_LAUNCHED:
			return {
				...state,
				isGameLaunched: true,
			};
		case GET_COUNTRIES_SUCCESS:
			return {
				...state,
				areCountriesLoading: false,
				countries: action.payload.map(mapCountry),
			};
		case GET_COUNTRIES_REQUEST:
			return {
				...state,
				areCountriesLoading: true,
			};
		case GET_COUNTRIES_FAIL:
			return {
				...state,
				areCountriesLoading: false,
			};
		case SET_ENTERED_CAPITAL:
			return {
				...state,
				enteredCapital: action.payload,
			};
		case SET_IS_ENTERED_CAPITAL_CORRECT:
			return {
				...state,
				isEnteredCapitalCorrect: action.payload,
			};
		case GET_NEXT_COUNTRY:
			return {
				...state,
				currentCountry: action.payload,
			};
		case GET_COUNTRY_BOUNDS_REQUEST:
			return state;
		case GET_COUNTRY_BOUNDS_FAIL:
		case GET_COUNTRY_BOUNDS_SUCCESS:
			return {
				...state,
				currentCountry: {
					...state.currentCountry,
					...action.payload,
				},
			};
		case ADD_COMPLETED_COUNTRY_CODE:
			return {
				...state,
				completedCountriesCode: [...state.completedCountriesCode, action.payload],
			};
		default:
			return state;
	}
};
