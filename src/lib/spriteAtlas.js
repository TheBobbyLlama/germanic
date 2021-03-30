import skinM1 from "../assets/images/sprites/character/skin/m/1.png";
import skinM2 from "../assets/images/sprites/character/skin/m/2.png";

export const spriteAtlas = {
	skin: {
		m: [
			skinM1,
			skinM2,
		],
		f: [
			skinM1,
			skinM2,
		],
	}
}

export const getSpriteCount = (char, key) => {
	let sex = "m";

	if (char?.sex === "SEX_FEMALE")
		sex = "f";
	
	return spriteAtlas[key][sex].length;
}

export const getCharacterSkin = (char, num) => {
	if (char?.sex === "SEX_FEMALE") {
		num = Math.min(num, spriteAtlas.skin.f.length - 1);
		return spriteAtlas.skin.f[num];
	} else {
		num = Math.min(num, spriteAtlas.skin.m.length - 1);
		return spriteAtlas.skin.m[num];
	}
}