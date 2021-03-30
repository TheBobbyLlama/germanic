import localize from "../../../localization";
import { getSpriteCount, getCharacterSkin } from "../../../lib/spriteAtlas"
import React, { useState, useEffect } from "react";

import { SET_PLAYER_CHARACTER, SET_PLAYER_NAME } from "../../../utils/actions";
import { useStoreContext } from "../../../utils/GlobalState";

import './CharacterCreationCustomize.css';

function CharacterCreationCustomize({props, closeScroll}) {
	const [state, dispatch] = useStoreContext();
	const [charName, setCharName] = useState(state.party.player.name || "");
	const [charNameShort, setCharNameShort] = useState(state.party.player.shortName || "");
	const [rotation, setRotation ] = useState(0);
	const [curSkin, setCurSkin ] = useState(0);
	const [curTimeout, setCurTimeout ] = useState(undefined);

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
			shortName: charNameShort || ""
		});
	}, [charName, charNameShort]);

	useEffect(() => {
		return () => { clearTimeout(curTimeout); }
	}, [ curTimeout ]);

	return (
		<div id="charCreateCustomization">
			<h1>Customize</h1>
			<div id="characterNameSection">
				<input id="characterNameShort" type="text" placeholder="Short Name" maxLength="10" value={charNameShort} onChange={(event) => {setCharNameShort(event.target.value);}}></input>
				<input id="characterName" type="text" placeholder="Full Name" maxLength="24" value={charName} onChange={(event) => {setCharName(event.target.value);}}></input>
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
						<div className="cursorGlow" onClick={() => {changeCharacterSkin(-1);}}>-</div>
						<div>Skin</div>
						<div className="cursorGlow" onClick={() => {changeCharacterSkin(1);}}>+</div>
					</div>
				</div>
			</div>
			<div id="createCharacterButtonHolder">
					<div className={((charName) && (charNameShort)) ? "cursorGlow" : "inactive"} onClick={finishCustomization}>{localize("BUTTON_START_GAME")}</div>
					<div className="cursorGlow" onClick={cancelCustomization}>{localize("BUTTON_BACK")}</div>
			</div>
		</div>
	);
}

export default CharacterCreationCustomize;