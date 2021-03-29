export const systemLib = {
	characterAttributeList: [
		"ATTRIBUTE_CHARISMA",
		"ATTRIBUTE_ENDURANCE",
		"ATTRIBUTE_FITNESS",
		"ATTRIBUTE_INTELLIGENCE",
		"ATTRIBUTE_PERCEPTION",
		"ATTRIBUTE_QUICKNESS"
	],

	characterSkillList: {
		SKILL_ALCHEMY: {
			governed: "ATTRIBUTE_PERCEPTION"
		},
		SKILL_APPRAISE: {
			governed: "ATTRIBUTE_PERCEPTION"
		},
		SKILL_ARTIFICE: {
			governed: "ATTRIBUTE_QUICKNESS"
		},
		SKILL_LITERACY: {
			governed: "ATTRIBUTE_INTELLIGENCE"
		},
		SKILL_MELEE: {
			governed: "ATTRIBUTE_FITNESS"
		},
		SKILL_PARRY: {
			governed: "ATTRIBUTE_ENDURANCE"
		},
		SKILL_PERSUASION: {
			governed: "ATTRIBUTE_CHARISMA"
		},
		SKILL_RELIGION: {
			governed: "ATTRIBUTE_INTELLIGENCE"
		},
		SKILL_RANGED: {
			governed: "ATTRIBUTE_QUICKNESS"
		},
		SKILL_RIDE: {
			governed: "ATTRIBUTE_QUICKNESS"
		},
		SKILL_STEALTH: {
			governed: "ATTRIBUTE_QUICKNESS"
		},
		SKILL_WOODCRAFT: {
			governed: "ATTRIBUTE_PERCEPTION"
		}
	},

	characterSexTemplate: {
		SEX_FEMALE: {
			attributes: {
				ATTRIBUTE_CHARISMA: 5,
				ATTRIBUTE_ENDURANCE: 5,
				ATTRIBUTE_FITNESS: -10
			}
		},
		SEX_MALE: {
			attributes: { },
			isMale: true
		}
	},

	characterFamilyTemplate: {
		CHARACTER_FAMILY_MERCHANT: {
			attributes: {
				ATTRIBUTE_CHARISMA: 10,
				ATTRIBUTE_FITNESS: -10,
				ATTRIBUTE_INTELLIGENCE: 5,
				ATTRIBUTE_QUICKNESS: -5
			},
			skillBonus: "SKILL_APPRAISE"
		},
		CHARACTER_FAMILY_NOBILITY: {
			attributes: {
				ATTRIBUTE_CHARISMA: 5,
				ATTRIBUTE_ENDURANCE: -5,
				ATTRIBUTE_INTELLIGENCE: 5,
				ATTRIBUTE_QUICKNESS: -5
			},
			skillBonus: "SKILL_LITERACY",
		},
		CHARACTER_FAMILY_PEASANT: {
			attributes: {
				ATTRIBUTE_CHARISMA: -5,
				ATTRIBUTE_ENDURANCE: 10,
				ATTRIBUTE_FITNESS: 5,
				ATTRIBUTE_INTELLIGENCE: -10
			},
			skillBonus: "SKILL_WOODCRAFT"
		},
		CHARACTER_FAMILY_TOWNSFOLK: {
			attributes: {
				ATTRIBUTE_CHARISMA: 5,
				ATTRIBUTE_FITNESS: -5
			},
			skillBonus: "SKILL_PERSUASION"
		},
		CHARACTER_FAMILY_TRADESMEN: {
			attributes: {}, // Baseline
			skillBonus: "SKILL_ARTIFICE"
		}
	},

	characterBackgroundTemplate: {
		CHARACTER_BACKGROUND_APOTHECARY: {
			attributes: {
				ATTRIBUTE_FITNESS: -5,
				ATTRIBUTE_INTELLIGENCE: 5,
				ATTRIBUTE_PERCEPTION: 5,
				ATTRIBUTE_QUICKNESS: -5
			},
			skillBonus: "SKILL_ALCHEMY"
		},
		CHARACTER_BACKGROUND_APPRENTICE: {
			attributes: {
				ATTRIBUTE_PERCEPTION: 5,
				ATTRIBUTE_QUICKNESS: -5
			},
			skillBonus: "SKILL_APPRAISE"
		},
		CHARACTER_BACKGROUND_BANDIT: {
			attributes: {
				ATTRIBUTE_CHARISMA: -5,
				ATTRIBUTE_FITNESS: 5,
				ATTRIBUTE_INTELLIGENCE: -5,
				ATTRIBUTE_PERCEPTION: 5
			},
			skillBonus: "SKILL_STEALTH",
			requirements: {
				commoner: true
			}
		},
		CHARACTER_BACKGROUND_COURTIER: {
			attributes: {
				ATTRIBUTE_CHARISMA: 5,
				ATTRIBUTE_ENDURANCE: -5,
				ATTRIBUTE_FITNESS: -5,
				ATTRIBUTE_PERCEPTION: 5
			},
			skillBonus: "SKILL_PERSUASION",
			requirements: {
				noble: true
			}
		},
		CHARACTER_BACKGROUND_FARMER: {
			attributes: {
				ATTRIBUTE_ENDURANCE: 5,
				ATTRIBUTE_INTELLIGENCE: -5
			},
			skillBonus: "SKILL_RIDING",
			requirements: {
				commoner: true
			}
		},
		CHARACTER_BACKGROUND_HERMIT: {
			attributes: {
				ATTRIBUTE_CHARISMA: -5,
				ATTRIBUTE_ENDURANCE: 5
			},
			skillBonus: "SKILL_WOODCRAFT"
		},
		CHARACTER_BACKGROUND_HUNTER: {
			attributes: {
				ATTRIBUTE_CHARISMA: -5,
				ATTRIBUTE_INTELLIGENCE: -5,
				ATTRIBUTE_PERCEPTION: 5,
				ATTRIBUTE_QUICKNESS: 5
			},
			skillBonus: "SKILL_WOODCRAFT"
		},
		CHARACTER_BACKGROUND_LABORER: {
			attributes: {
				ATTRIBUTE_ENDURANCE: 5,
				ATTRIBUTE_FITNESS: 5,
				ATTRIBUTE_INTELLIGENCE: -5,
				ATTRIBUTE_QUICKNESS: -5
			},
			skillBonus: "SKILL_MELEE",
			requirements: {
				commoner: true
			}
		},
		CHARACTER_BACKGROUND_MILITARY: {
			attributes: {
				ATTRIBUTE_CHARISMA: -5,
				ATTRIBUTE_ENDURANCE: 5,
				ATTRIBUTE_FITNESS: 5,
				ATTRIBUTE_INTELLIGENCE: -5
			},
			skillBonus: "SKILL_PARRY",
			requirements: {
				commoner: true,
				male: true
			}
		},
		CHARACTER_BACKGROUND_PROSTITUTE: {
			attributes: {
				ATTRIBUTE_CHARISMA: 5,
				ATTRIBUTE_INTELLIGENCE: -5
			},
			skillBonus: "SKILL_PERSUASION",
			requirements: {
				commoner: true,
				female: true
			}
		},
		CHARACTER_BACKGROUND_RELIGIOUS: {
			attributes: {
				ATTRIBUTE_ENDURANCE: -5,
				ATTRIBUTE_FITNESS: -5,
				ATTRIBUTE_INTELLIGENCE: 10
			},
			skillBonus: "SKILL_RELIGION"
		},
		CHARACTER_BACKGROUND_SEAMSTRESS: {
			attributes: {
				ATTRIBUTE_ENDURANCE: 5,
				ATTRIBUTE_INTELLIGENCE: -5
			},
			skillBonus: "SKILL_ARTIFICE",
			requirements: {
				female: true
			}
		},
		CHARACTER_BACKGROUND_SQUIRE: {
			attributes: {
				ATTRIBUTE_FITNESS: 5,
				ATTRIBUTE_PERCEPTION: -5
			},
			skillBonus: "SKILL_RIDING",
			requirements: {
				male: true,
				noble: true
			}
		},
		CHARACTER_BACKGROUND_STUDENT: {
			attributes: {
				ATTRIBUTE_FITNESS: -5,
				ATTRIBUTE_INTELLIGENCE: 5
			},
			skillBonus: "SKILL_LITERACY"
		},
		CHARACTER_BACKGROUND_SWINDLER: {
			attributes: {
				ATTRIBUTE_CHARISMA: 5,
				ATTRIBUTE_ENDURANCE: -5,
				ATTRIBUTE_FITNESS: -5,
				ATTRIBUTE_QUICKNESS: -5
			},
			skillBonus: "SKILL_PERSUASION"
		},
		CHARACTER_BACKGROUND_THIEF: {
			attributes: {
				ATTRIBUTE_ENDURANCE: -5,
				ATTRIBUTE_INTELLIGENCE: -5,
				ATTRIBUTE_PERCEPTION: 5,
				ATTRIBUTE_QUICKNESS: 5
			},
			skillBonus: "SKILL_STEALTH",
			requirements: {
				commoner: true
			}
		},
		CHARACTER_BACKGROUND_TRADER: {
			attributes: {
				ATTRIBUTE_CHARISMA: 5,
				ATTRIBUTE_QUICKNESS: -5
			},
			skillBonus: "SKILL_APPRAISE"
		},
		CHARACTER_BACKGROUND_VAGABOND: {
			attributes: {
				ATTRIBUTE_ENDURANCE: 5,
				ATTRIBUTE_INTELLIGENCE: -5
			},
			skillBonus: "SKILL_WOODCRAFT"
		}
	},

	characterTemperamentTemplate: {
		CHARACTER_TEMPERAMENT_CHOLERIC: {
			attributes: {
				ATTRIBUTE_CHARISMA: 5,
				ATTRIBUTE_PERCEPTION: -5
			},
			skillBonus: "SKILL_PERSUASION"
		},
		CHARACTER_TEMPERAMENT_MELANCHOLIC: {
			attributes: {
				ATTRIBUTE_CHARISMA: -5,
				ATTRIBUTE_INTELLIGENCE: 5
			},
			skillBonus: "SKILL_LITERACY"
		},
		CHARACTER_TEMPERAMENT_PHLEGMATIC: {
			attributes: {},
			skillBonus: "SKILL_ALCHEMY"
		},
		CHARACTER_TEMPERAMENT_SANGUINE: {
			attributes: {
				ATTRIBUTE_CHARISMA: 5,
				ATTRIBUTE_INTELLIGENCE: -5
			},
			skillBonus: "SKILL_APPRAISE"
		}
	}
};

export class Character {
	constructor(copyMe) {
		if (copyMe) {
			Object.keys(copyMe).forEach(key => {
				this[key] = copyMe[key];
			});
		} else {
			this.name = "";
			this.sex = "SEX_MALE";
			this.family = "CHARACTER_FAMILY_PEASANT";
			this.skills = {};
		}

		this.setAllStartingSkills();
	}

	getAttribute(attribute) {
		let result = 50;

		if (this.sex) {
			let curTemplate = systemLib.characterSexTemplate[this.sex];
			if (curTemplate.attributes[attribute])
				result += curTemplate.attributes[attribute];
		}

		if (this.family) {
			let curTemplate = systemLib.characterFamilyTemplate[this.family];
			if (curTemplate.attributes[attribute])
				result += curTemplate.attributes[attribute];
		}

		if (this.background) {
			let curTemplate = systemLib.characterBackgroundTemplate[this.background];
			if (curTemplate.attributes[attribute])
				result += curTemplate.attributes[attribute];
		}

		if (this.temperament) {
			let curTemplate = systemLib.characterTemperamentTemplate[this.temperament];
			if (curTemplate.attributes[attribute])
				result += curTemplate.attributes[attribute];
		}

		return result;
	}

	getSkillLevel(skill) {
		let skillPts = this.skills[skill];

		if (!skillPts)
			return 0;

		let threshold = 0;

		while (skillPts >= (1 << threshold)) {
			threshold++;
		}

		return threshold - 1;
	}

	setStartingSkillLevel(skill) {
		let curSkill = systemLib.characterSkillList[skill];

		if (!curSkill)
			return -1;

		let result = Math.floor(this.getAttribute(curSkill.governed) / 5);

		if (this.family) {
			let curTemplate = systemLib.characterFamilyTemplate[this.family];
			if (curTemplate.skillBonus === skill)
				result ++;
		}

		if (this.background) {
			let curTemplate = systemLib.characterBackgroundTemplate[this.background];
			if (curTemplate.skillBonus === skill)
				result ++;
		}

		if (this.temperament) {
			let curTemplate = systemLib.characterTemperamentTemplate[this.temperament];
			if (curTemplate.skillBonus === skill)
				result ++;
		}

		this.skills[skill] = 1 << result;
	}

	setAllStartingSkills() {
		Object.keys(systemLib.characterSkillList).forEach(key => {
			this.setStartingSkillLevel(key);
		});
	}
}