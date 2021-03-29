import localize from "../../../localization";
import React, { useState, useEffect } from "react";
import { systemLib, Character } from "../../../lib/systemLib";
import ListSelect from "../../UI/ListSelect/ListSelect";
import AttributeDisplay from "../../UI/AttributeDisplay/AttributeDisplay";
import SkillDisplay from "../../UI/SkillDisplay/SkillDisplay";
import './CharacterCreationStats.css';

function CharacterCreationStats({props, closeScroll}) {
	const [ character, setCharacter ] = useState(new Character());
	const [ tooltipText, setToolTipText ] = useState("");
	const [curTimeout, setCurTimeout ] = useState(undefined);

	const calculateValidOccupations = (sex, family) => {
		let templates = systemLib.characterBackgroundTemplate;
		return Object.keys(templates).filter(occupation => {
			let requirements = templates[occupation].requirements;
			if (requirements) {
				if ((requirements.male) && (sex !== "SEX_MALE"))
					return false;
				
				if ((requirements.female) && (sex !== "SEX_FEMALE"))
					return false;
				
				if ((requirements.noble) && (family !== "CHARACTER_FAMILY_NOBILITY"))
					return false;
				
				if ((requirements.commoner) && (family === "CHARACTER_FAMILY_NOBILITY"))
					return false;
			}

			return true;
		});
	}

	let validOccupations = calculateValidOccupations(character.sex, character.family);


	const setTooltip = (key) => {
		if (key)
			setToolTipText(localize(key + "_DESC"));
		else
			setToolTipText("");
	}

	const setSex = (sex) => {
		validOccupations = calculateValidOccupations(sex, character.family);

		if (!validOccupations.find(element => element === character.background))
			delete character.background;

		setCharacter(new Character({...character, sex}));			
	}

	const setUpbringing = (family) => {
		setCharacter(new Character({...character, family}));
	}

	const setTemperament = (temperament) => {
		setCharacter(new Character({...character, temperament}));
	}

	const setOccupation = (background) => {
		setCharacter(new Character({...character, background}));
	}

	const proceedToCustomization = () => {
		closeScroll();
		setCurTimeout(setTimeout(() => { props.changeMode(1); }, 500));
	}

	const returnToMainMenu = () => {
		closeScroll();
		setCurTimeout(setTimeout(() => { props.changeMode(-1); }, 500));
	}

	useEffect(() => {
		return () => { clearTimeout(curTimeout); }
	}, [ curTimeout ]);

	return (
		<div id="charCreateStats" onMouseLeave={() => {setTooltip("")}}>
			<h1>{localize("MENU_CREATE_CHARACTER")}</h1>
			<div id="statContainer">
				<div>
					<div>
						<h2>{localize("CHARACTER_SEX")}</h2>
						<ListSelect height={24} width={84} keyList={Object.keys(systemLib.characterSexTemplate)} defaultValue={character.sex} changeCallback={setSex} hoverCallback={setTooltip} />
					</div>
					<div>
						<h2>{localize("CHARACTER_UPBRINGING")}</h2>
						<ListSelect height={60} width={84} keyList={Object.keys(systemLib.characterFamilyTemplate)} defaultValue={character.family} changeCallback={setUpbringing} hoverCallback={setTooltip} />
					</div>
					<div>
						<h2>{localize("CHARACTER_TEMPERAMENT")}</h2>
						<ListSelect height={48} width={84} keyList={Object.keys(systemLib.characterTemperamentTemplate)} defaultValue={character.temperament} changeCallback={setTemperament} hoverCallback={setTooltip} />
					</div>
				</div>
				<div>
					<h2>{localize("CHARACTER_OCCUPATION")}</h2>
					<ListSelect height={12 * validOccupations.length} width={84} keyList={validOccupations} defaultValue={character.background} changeCallback={setOccupation} hoverCallback={setTooltip} />
				</div>
				<AttributeDisplay character={character} tooltipCallback={setTooltip} />
				<SkillDisplay character={character} tooltipCallback={setTooltip} />
				<div id="createCharacterButtonHolder">
					<div className={((character.sex) && (character.family) && (character.temperament) && (character.background)) ? "cursorActive" : "inactive"} onClick={proceedToCustomization}>{localize("BUTTON_CONTINUE")}</div>
					<div className="cursorActive" onClick={returnToMainMenu}>{localize("BUTTON_BACK")}</div>
				</div>
			</div>
			<div id="statTooltip">{tooltipText}</div>
		</div>
	);
}

export default CharacterCreationStats;