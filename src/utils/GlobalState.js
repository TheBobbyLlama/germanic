import React, { createContext, useContext } from "react";
import { usePartyReducer } from "./reducers-party";

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
	// Set default state here.
	const [state, dispatch] = usePartyReducer({
		party: {}
	});
	return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
	return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };