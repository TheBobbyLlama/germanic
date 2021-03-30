import { useReducer } from 'react';

import {
	SET_PLAYER_CHARACTER,
} from './actions';

export const reducer = (state, action) => {
	switch (action.type) {
		case SET_PLAYER_CHARACTER:
			const newState = { ...state };

			newState.party.player = action.player;

			return newState;
		default:
			return state;
	}
}

export function usePartyReducer(initialState) {
	return useReducer(reducer, initialState);
}