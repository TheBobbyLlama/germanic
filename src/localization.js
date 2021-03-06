const localizationList = [
	{
		language: "EN-US:",
		strings: [
			[ "SEX_MALE", "Male" ],
			[ "SEX_MALE_ABBR", "M" ],
			[ "SEX_MALE_DESC", "Boys have a penis." ],
			[ "SEX_FEMALE", "Female" ],
			[ "SEX_FEMALE_ABBR", "F" ],
			[ "SEX_FEMALE_DESC", "Girls have a vagina." ],
			[ "ATTRIBUTE_CHARISMA", "Charisma" ],
			[ "ATTRIBUTE_CHARISMA_ABBR", "Cha" ],
			[ "ATTRIBUTE_CHARISMA_DESC", "Force of Personality." ],
			[ "ATTRIBUTE_ENDURANCE", "Endurance" ],
			[ "ATTRIBUTE_ENDURANCE_ABBR", "End" ],
			[ "ATTRIBUTE_ENDURANCE_DESC", "Ability to withstand hardship." ],
			[ "ATTRIBUTE_FITNESS", "Fitness" ],
			[ "ATTRIBUTE_FITNESS_ABBR", "Fit" ],
			[ "ATTRIBUTE_FITNESS_DESC", "Physical Aptitude." ],
			[ "ATTRIBUTE_INTELLIGENCE", "Intelligence" ],
			[ "ATTRIBUTE_INTELLIGENCE_ABBR", "Int" ],
			[ "ATTRIBUTE_INTELLIGENCE_DESC", "Mental acuity and scholarly pursuits." ],
			[ "ATTRIBUTE_PERCEPTION", "Perception" ],
			[ "ATTRIBUTE_PERCEPTION_ABBR", "Per" ],
			[ "ATTRIBUTE_PERCEPTION_DESC", "Detecting or deducing information." ],
			[ "ATTRIBUTE_QUICKNESS", "Quickness" ],
			[ "ATTRIBUTE_QUICKNESS_ABBR", "Quk" ],
			[ "ATTRIBUTE_QUICKNESS_DESC", "Reaction time and hand-eye coordination." ],
			[ "SKILL_ALCHEMY", "Alchemy" ],
			[ "SKILL_ALCHEMY_ABBR", "Alc" ],
			[ "SKILL_ALCHEMY_DESC", "(Per) Mixing of formulaic compounds for wondrous effects." ],
			[ "SKILL_APPRAISE", "Appraise" ],
			[ "SKILL_APPRAISE_ABBR", "App" ],
			[ "SKILL_APPRAISE_DESC", "(Per) Determining the value of items." ],
			[ "SKILL_ARTIFICE", "Artifice" ],
			[ "SKILL_ARTIFICE_ABBR", "Art" ],
			[ "SKILL_ARTIFICE_DESC", "(Quk) Performing minute tasks with one's hands." ],
			[ "SKILL_LITERACY", "Literacy" ],
			[ "SKILL_LITERACY_ABBR", "Lit" ],
			[ "SKILL_LITERACY_DESC", "(Int) Reading and writing." ],
			[ "SKILL_MELEE", "Melee" ],
			[ "SKILL_MELEE_ABBR", "Mle" ],
			[ "SKILL_MELEE_DESC", "(Fit) Proficiency in close combat." ],
			[ "SKILL_PARRY", "Parry" ],
			[ "SKILL_PARRY_ABBR", "Pry" ],
			[ "SKILL_PARRY_DESC", "(End) Defending against attacks." ],
			[ "SKILL_PERSUASION", "Persuasion" ],
			[ "SKILL_PERSUASION_ABBR", "Prs" ],
			[ "SKILL_PERSUASION_DESC", "(Cha) Convincing others." ],
			[ "SKILL_RANGED", "Ranged" ],
			[ "SKILL_RANGED_ABBR", "Rng" ],
			[ "SKILL_RANGED_DESC", "(Quk) Proficiency with ranged weapons." ],
			[ "SKILL_RELIGION", "Religion" ],
			[ "SKILL_RELIGION_ABBR", "Rel" ],
			[ "SKILL_RELIGION_DESC", "(Int) Learning the intricacies of faith." ],
			[ "SKILL_RIDE", "Ride" ],
			[ "SKILL_RIDE_ABBR", "Rid" ],
			[ "SKILL_RIDE_DESC", "(Quk) Controlling a mount." ],
			[ "SKILL_STEALTH", "Stealth" ],
			[ "SKILL_STEALTH_ABBR", "Stl" ],
			[ "SKILL_STEALTH_DESC", "(Quk) Avoiding detection" ],
			[ "SKILL_WOODCRAFT", "Woodcraft" ],
			[ "SKILL_WOODCRAFT_ABBR", "WdC" ],
			[ "SKILL_WOODCRAFT_DESC", "(Per) Surviving in the wilderness." ],
			[ "CHARACTER_FAMILY_MERCHANT", "Merchants" ],
			[ "CHARACTER_FAMILY_MERCHANT_DESC", "Cosmopolitan and well-to-do." ],
			[ "CHARACTER_FAMILY_NOBILITY", "Nobility" ],
			[ "CHARACTER_FAMILY_NOBILITY_DESC", "Highborn and well-educated." ],
			[ "CHARACTER_FAMILY_PEASANT", "Peasants" ],
			[ "CHARACTER_FAMILY_PEASANT_DESC", "Commoners accustomed to rough country living." ],
			[ "CHARACTER_FAMILY_TOWNSFOLK", "Townsfolk" ],
			[ "CHARACTER_FAMILY_TOWNSFOLK_DESC", "Commoners who hail from a city or town." ],
			[ "CHARACTER_FAMILY_TRADESMEN", "Tradesmen" ],
			[ "CHARACTER_FAMILY_TRADESMEN_DESC", "Comfortable life as the child of a smith or artisan." ],
			[ "CHARACTER_TEMPERAMENT_CHOLERIC", "Choleric" ],
			[ "CHARACTER_TEMPERAMENT_CHOLERIC_DESC", "Impulsive and inspiring." ],
			[ "CHARACTER_TEMPERAMENT_MELANCHOLIC", "Melancholic" ],
			[ "CHARACTER_TEMPERAMENT_MELANCHOLIC_DESC", "Sensitive and diligent." ],
			[ "CHARACTER_TEMPERAMENT_PHLEGMATIC", "Phlegmatic" ],
			[ "CHARACTER_TEMPERAMENT_PHLEGMATIC_DESC", "Steadfast and caring." ],
			[ "CHARACTER_TEMPERAMENT_SANGUINE", "Sanguine" ],
			[ "CHARACTER_TEMPERAMENT_SANGUINE_DESC", "Outgoing and artistic." ],
			[ "CHARACTER_BACKGROUND_APPRENTICE", "Apprentice" ],
			[ "CHARACTER_BACKGROUND_APPRENTICE_DESC", "Learning a trade such as smithing." ],
			[ "CHARACTER_BACKGROUND_APOTHECARY", "Apothecary" ],
			[ "CHARACTER_BACKGROUND_APOTHECARY_DESC", "Specialist in medicinal concoctions." ],
			[ "CHARACTER_BACKGROUND_BANDIT", "Bandit" ],
			[ "CHARACTER_BACKGROUND_BANDIT_DESC", "A criminal who takes money by threat of force." ],
			[ "CHARACTER_BACKGROUND_COURTIER", "Courtier" ],
			[ "CHARACTER_BACKGROUND_COURTIER_DESC", "Accustomed to a leisurely life of nobility." ],
			[ "CHARACTER_BACKGROUND_FARMER", "Farmer" ],
			[ "CHARACTER_BACKGROUND_FARMER_DESC", "Growing crops and tending livestock." ],
			[ "CHARACTER_BACKGROUND_HERMIT", "Hermit" ],
			[ "CHARACTER_BACKGROUND_HERMIT_DESC", "Living a quiet, isolated life." ],
			[ "CHARACTER_BACKGROUND_HUNTER", "Hunter" ],
			[ "CHARACTER_BACKGROUND_HUNTER_DESC", "Stalking and killing animals for meat and fur." ],
			[ "CHARACTER_BACKGROUND_LABORER", "Laborer" ],
			[ "CHARACTER_BACKGROUND_LABORER_DESC", "Menial, arduous employment." ],
			[ "CHARACTER_BACKGROUND_MILITARY", "Military Recruit" ],
			[ "CHARACTER_BACKGROUND_MILITARY_DESC", "A soldier or guardsman." ],
			[ "CHARACTER_BACKGROUND_RELIGIOUS", "Religious Initiate" ],
			[ "CHARACTER_BACKGROUND_RELIGIOUS_DESC", "A neophyte in a religious order." ],
			[ "CHARACTER_BACKGROUND_PROSTITUTE", "Prostitute" ],
			[ "CHARACTER_BACKGROUND_PROSTITUTE_DESC", "The oldest profession." ],
			[ "CHARACTER_BACKGROUND_SEAMSTRESS", "Seamstress" ],
			[ "CHARACTER_BACKGROUND_SEAMSTRESS_DESC", "Making and mending clothing and other fabrics." ],
			[ "CHARACTER_BACKGROUND_SQUIRE", "Squire" ],
			[ "CHARACTER_BACKGROUND_SQUIRE_DESC", "Training to one day become a knight." ],
			[ "CHARACTER_BACKGROUND_STUDENT", "Student" ],
			[ "CHARACTER_BACKGROUND_STUDENT_DESC", "Training to become a scholar of note." ],
			[ "CHARACTER_BACKGROUND_SWINDLER", "Swindler" ],
			[ "CHARACTER_BACKGROUND_SWINDLER_DESC", "A scoundrel who cheats people of their money." ],
			[ "CHARACTER_BACKGROUND_THIEF", "Thief" ],
			[ "CHARACTER_BACKGROUND_THIEF_DESC", "A burglar or cutpurse." ],
			[ "CHARACTER_BACKGROUND_TRADER", "Trader" ],
			[ "CHARACTER_BACKGROUND_TRADER_DESC", "A shopkeep or traveling trader." ],
			[ "CHARACTER_BACKGROUND_VAGABOND", "Vagabond" ],
			[ "CHARACTER_BACKGROUND_VAGABOND_DESC", "A drifter." ],
			[ "MAIN_START_NEW_GAME", "Start New Game" ],
			[ "MENU_CREATE_CHARACTER", "Create Character" ],
			[ "BUTTON_START_GAME", "Start the Adventure!" ],
			[ "BUTTON_CONTINUE", "Continue" ],
			[ "BUTTON_BACK", "Back" ],
			[ "BUTTON_RANDOM", "Random" ],
			[ "CHARACTER_SEX", "Sex" ],
			[ "CHARACTER_UPBRINGING", "Upbringing" ],
			[ "CHARACTER_TEMPERAMENT", "Temperament" ],
			[ "CHARACTER_OCCUPATION", "Occupation" ],
			[ "CHARACTER_ATTRIBUTES", "Attributes" ],
			[ "CHARACTER_ATTRIBUTES_DESC", "Attributes are determined by sex, upbringing, occupation, and temperament." ],
			[ "CHARACTER_SKILLS", "Skills" ],
			[ "CHARACTER_SKILLS_DESC", "Base skill is Attr/5, with bonuses from upbringing, occupation, and temperament." ],
			[ "CHARACTER_NAME", "Name" ],
			[ "CHARACTER_SURNAME", "Surname" ],
			[ "CHARACTER_NAME_OF", "of {CITY}" ],
			[ "CUSTOMIZE_SKIN", "Skin" ],
			[ "CUSTOMIZE_EYES", "Eyes" ],
			[ "CUSTOMIZE_HAIR_STYLE", "Hair" ],
			[ "CUSTOMIZE_HAIR_FACIAL", "Beard" ],
			[ "CUSTOMIZE_HAIR_COLOR", "Color" ],
		]
	}
];

function localize(key) {
	const language = "EN-US"; // TODO - Use global state!
	const curLang = localizationList.find(list => list.language === language) || localizationList[0];

	const curLookup = curLang.strings.find(kvPair => kvPair[0] === key) || localizationList[0].strings.find(kvPair => kvPair[0] === key);

	if (curLookup) {
		return curLookup[1];
	} else {
		return key;
	}
}

export default localize;