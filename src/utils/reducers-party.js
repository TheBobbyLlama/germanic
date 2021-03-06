import { useReducer } from "react";

import {
	SET_PLAYER_CHARACTER,
	SET_PLAYER_NAME,
	SET_PLAYER_CUSTOMIZATION,
} from "./actions";

export const reducer = (state, action) => {
	let newState;

	switch (action.type) {
		case SET_PLAYER_CHARACTER:
			newState = { ...state };

			newState.party.player = action.player;

			return newState;
		case SET_PLAYER_NAME:
			newState = { ...state};

			newState.party.player.name = action.name;
			newState.party.player.surname = action.surname;

			return newState;
		case SET_PLAYER_CUSTOMIZATION:
			newState = { ...state};

			newState.party.player.customization = action.customization;

			return newState;
		default:
			return state;
	}
}

export function usePartyReducer(initialState) {
	return useReducer(reducer, initialState);
}