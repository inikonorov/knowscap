import escapeLatinExtendedSymbols from './escapeLatinExtendedSymbols';

export default (country) => ({
	name: escapeLatinExtendedSymbols(country.name),
	capital: escapeLatinExtendedSymbols(country.capital),
	code: country.alpha3Code,
	latlng: [...country.latlng].reverse(),
});
