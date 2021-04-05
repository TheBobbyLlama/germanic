import namedata from "../assets/data/namegeneration.json";
import localize from "../localization";
import { setRandomSeed, getRandom } from "./random";

function combine(original, addition) {
	for (var i = addition.length - 2; i > 0; i--) {
		if (original.endsWith(addition.substring(0, i))) {
			return original + addition.substring(i);
		}
	}

	return original + addition;
}

export function generateRandomName(seed, isFemale) {
	setRandomSeed(seed);
	let nameSet = (isFemale) ? namedata.names.female : namedata.names.male;
	let nameForm = (nameSet.length > 1) ? getRandom() % nameSet.length : 0;
	let result = nameSet[nameForm].start[getRandom() % nameSet[nameForm].start.length];
	let newPiece;
	
	if (nameSet[nameForm].middle) {
		newPiece = nameSet[nameForm].middle[getRandom() % nameSet[nameForm].middle.length];

		while (result.toLowerCase().endsWith(newPiece.charAt(newPiece.length - 1))) {
			newPiece = nameSet[nameForm].middle[getRandom() % nameSet[nameForm].middle.length];
		}

		result = combine(result, newPiece);
	}

	newPiece = nameSet[nameForm].end[getRandom() % nameSet[nameForm].end.length];

	while (result.toLowerCase().endsWith(newPiece.charAt(newPiece.length - 1))) {
		newPiece = nameSet[nameForm].end[getRandom() % nameSet[nameForm].end.length];
	}

	result = combine(result, newPiece);

	return result;
}

export function generateRandomSurname(seed, noCityNames) {
	setRandomSeed(seed);
	let nameSet = namedata.surnames;
	let nameForm = (nameSet.length > 1) ? getRandom() % nameSet.length : 0;
	let result;
	let newPiece;

	if ((noCityNames) || (getRandom() % 5)) {
		result = nameSet[nameForm].start[getRandom() % nameSet[nameForm].start.length];

		if (nameSet[nameForm].middle) {
			for (let i = getRandom() % 2; i >= 0; i--) {
				newPiece = nameSet[nameForm].middle[getRandom() % nameSet[nameForm].middle.length];

				while (result.toLowerCase().endsWith(newPiece.charAt(newPiece.length - 1))) {
					newPiece = nameSet[nameForm].middle[getRandom() % nameSet[nameForm].middle.length];
				}

				result = combine(result, newPiece);
			}
		}

		newPiece = nameSet[nameForm].end[getRandom() % nameSet[nameForm].end.length];

		while (result.toLowerCase().endsWith(newPiece.charAt(newPiece.length - 1))) {
			newPiece = nameSet[nameForm].end[getRandom() % nameSet[nameForm].end.length];
		}

		result = combine(result, newPiece);
	} else {
		result = localize("CHARACTER_NAME_OF").replace(/{CITY}/, generateCityNameInternal())
	}

	return result;
}

export function generateCityName(seed) {
	setRandomSeed(seed);
	generateCityNameInternal();
}

function generateCityNameInternal() {
	let nameSet = namedata.cities;
	let nameForm = (nameSet.length > 1) ? getRandom() % nameSet.length : 0;
	let result = nameSet[nameForm].start[getRandom() % nameSet[nameForm].start.length];
	let newPiece;

	for (let i = getRandom() % 2; i >= 0; i--) {
		newPiece = nameSet[nameForm].middle[getRandom() % nameSet[nameForm].middle.length];

		while (result.toLowerCase().endsWith(newPiece.charAt(newPiece.length - 1))) {
			newPiece = nameSet[nameForm].middle[getRandom() % nameSet[nameForm].middle.length];
		}

		result = combine(result, newPiece);
	}

	newPiece = nameSet[nameForm].end[getRandom() % nameSet[nameForm].end.length];

	while (result.toLowerCase().endsWith(newPiece.charAt(newPiece.length - 1))) {
		newPiece = nameSet[nameForm].end[getRandom() % nameSet[nameForm].end.length];
	}

	result = combine(result, newPiece);

	return result;
}