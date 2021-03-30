import React, { useState } from "react";
import MenuScroll from "../UI/MenuScroll/MenuScroll";
import CharacterCreationStats from "../CharacterCreation/Stats/CharacterCreationStats";

import './NewGame.css';

function NewGame({transitionCallback}) {
	const [ creationMode, setCreationMode ] = useState(0);
	const [ lastMode, setLastMode ] = useState(-1);

	const changeMode = (mode) => {
		if (mode < 0)
			transitionCallback(0); // Back to main menu.
		else {
			setLastMode(creationMode);
			setCreationMode(mode);
		}
	}

	return (
		<div id="newGame">
			{(creationMode === 0) ? <MenuScroll MyComponent={CharacterCreationStats} height={284} width={420} delay={(lastMode >= 0) ? 200 : 500} props={{changeMode}} /> : <></>}
			{(creationMode === 1) ? <MenuScroll MyComponent={CharacterCreationStats} height={284} width={420} delay={200} props={{changeMode}} /> : <></>}
		</div>
	);
}

export default NewGame;