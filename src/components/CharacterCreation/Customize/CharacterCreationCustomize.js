import localize from "../../../localization";
import { getSpriteCount, getCharacterSkin } from "../../../lib/spriteAtlas"
import React, { useState, useEffect } from "react";

import { generateRandomName, generateRandomSurname } from "../../../utils/namegeneration";
import { SET_PLAYER_CHARACTER, SET_PLAYER_NAME } from "../../../utils/actions";
import { useStoreContext } from "../../../utils/GlobalState";

import './CharacterCreationCustomize.css';

function CharacterCreationCustomize({props, closeScroll}) {
	const [state, dispatch] = useStoreContext();
	const [charName, setCharName] = useState(state.party.player.name || "");
	const [charSurname, setCharSurname] = useState(state.party.player.surname || "");
	const [rotation, setRotation ] = useState(0);
	const [curSkin, setCurSkin ] = useState(0);
	const [curTimeout, setCurTimeout ] = useState(undefined);

	const randomizeCharacterName = () => {
		setCharName(generateRandomName(null, state.party.player.sex === "SEX_FEMALE"));
		setCharSurname(generateRandomSurname(null, state.party.player.family === "CHARACTER_FAMILY_NOBILITY"));
	}

	const changeRotation = (offset) => {
		let newRotation = (rotation + offset) % 8;
		
		if (newRotation < 0)
			newRotation += 8;

		setRotation(newRotation);
	}

	const changeCharacterSkin = (offset) => {
		let spriteCount = getSpriteCount(state.party.player, "skin")
		let newSprite = (curSkin + offset) % spriteCount;

		if (newSprite < 0)
			newSprite += spriteCount;
		
		setCurSkin(newSprite);
	}

	const finishCustomization = () => {
		/*
		dispatch({
			type: SET_PLAYER_CHARACTER,
			player: character
		});*/
		closeScroll();
		setCurTimeout(setTimeout(() => { props.changeMode(-1); }, 500));
	}

	const cancelCustomization = () => {
		closeScroll();
		setCurTimeout(setTimeout(() => { props.changeMode(0); }, 500));
	}

	useEffect(() => {
		dispatch({
			type: SET_PLAYER_NAME,
			name: charName || "",
			surname: charSurname || ""
		});
	}, [charName, charSurname, dispatch]);

	useEffect(() => {
		return () => { clearTimeout(curTimeout); }
	}, [ curTimeout ]);

	return (
		<div id="charCreateCustomization">
			<h1>Customize</h1>
			<div id="characterNameSection">
				<input id="characterName" type="text" placeholder={localize("CHARACTER_NAME")} maxLength="10" value={charName} onChange={(event) => {setCharName(event.target.value);}}></input>
				<input id="characterSurname" type="text" placeholder={localize("CHARACTER_SURNAME")} maxLength="24" value={charSurname} onChange={(event) => {setCharSurname(event.target.value);}}></input>
				<button id="characterNameRandom" type="button" onClick={randomizeCharacterName}>{localize("BUTTON_RANDOM")}</button>
			</div>
			<div id="createCharacterSprite">
				<div id="characterSpriteHolder">
					<div className="rotateLeft cursorGlow" onClick={() => {changeRotation(-1);}} />
					<div id="characterSpriteFrame" className={"rotate" + rotation}>
						<div style={{backgroundImage: `url(${getCharacterSkin(state.party.player, curSkin)}`}} />
					</div>
					<div className="rotateRight cursorGlow" onClick={() => {changeRotation(1);}} />
				</div>
				<div id="characterSpriteOptions">
					<div>
						<button type="button" onClick={() => {changeCharacterSkin(-1);}}>-</button>
						<div>Skin</div>
						<button type="button" onClick={() => {changeCharacterSkin(1);}}>+</button>
					</div>
				</div>
			</div>
			<div id="createCharacterButtonHolder">
					<div className={((charName) && (charSurname)) ? "cursorGlow" : "inactive"} onClick={finishCustomization}>{localize("BUTTON_START_GAME")}</div>
					<div className="cursorGlow" onClick={cancelCustomization}>{localize("BUTTON_BACK")}</div>
			</div>
		</div>
	);
}

export default CharacterCreationCustomize;