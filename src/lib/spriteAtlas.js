import nullImg from "../assets/images/sprites/null.png";
import skinMale from "../assets/images/sprites/character/skin/m.png";
import skinFemale from "../assets/images/sprites/character/skin/m.png"; // TODO!
import eyes from "../assets/images/sprites/character/eyes.png";
import mHairBald from "../assets/images/sprites/character/hair/m/0f.png";

const skinColorMap = [
	{
		g: {
			tone: [ 1.000, 0.875, 0.875 ],
			halfTone: [ 0.753, 0.565, 0.502 ]
		}
	},
	{
		g: {
			tone: [ 0.910, 0.784, 0.753 ],
			halfTone: [ 0.627, 0.471, 0.376 ]
		}
	}
];

const eyeColorMap = [
	{
		b: {
			tone: [ 0.5, 0.75, 1.00 ],
			halfTone: [ 0.25, 0.375, 0.5 ]
		}
	},
	{
		b: {
			tone: [ 0.375, 0.3125, 0.25 ],
			halfTone: [ 0.25, 0.1875, 0.125 ]
		}
	}
];

const hairColorMap = [
	{
		r: {
			tone: [ 0.75, 0.6875, 0.5 ],
			halfTone: [ 0.5, 0.4875, 0.25 ]
		}
	},
	{
		r: {
			tone: [ 0.375, 0.3125, 0.25 ],
			halfTone: [ 0.25, 0.1875, 0.125 ]
		}
	},
	{
		r: {
			tone: [ 0.15, 0.15, 0.15 ],
			halfTone: [ 0.0625, 0.0625, 0.0625 ]
		}
	},
]

const characterAtlas = {
	skin: {
		m: {
			name: "skinMale",
			source: skinMale,
			colorMap: skinColorMap
		},
		f: {
			name: "skinFemale",
			source: skinFemale,
			colorMap: skinColorMap
		},
	},
	eyes: {
		m: {
			name: "eyes",
			source: eyes,
			colorMap: eyeColorMap
		},
		f: {
			name: "eyes",
			source: eyes,
			colorMap: eyeColorMap
		}
	},
	hair0f: {
		m: {
			name: "hair0f",
			source: mHairBald,
			colorMap: hairColorMap
		},
		f: {
			name: "hair0f",
			source: mHairBald, // TODO!
			colorMap: hairColorMap
		},
	},
	hair0b: {
		m: {
			name: "hair0b",
			source: nullImg,
			colorMap: hairColorMap
		},
		f: {
			name: "hair0b",
			source: nullImg,
			colorMap: hairColorMap
		},
	},
}

const workingCanvas = document.createElement("canvas");
const loadedSprites = {};

const applyColorMap = (imgData, colorMap) => {
	for (var px = 0; px < imgData.length; px += 4) {
		let a = imgData[px + 3];

		if (a) {
			let r = imgData[px];
			let g = imgData[px + 1];
			let b = imgData[px + 2];
			let finalR = 0;
			let finalG = 0;
			let finalB = 0;

			if (colorMap.r) {
				let tone = r / 255;

				if (tone >= 0.5) {
					tone = 2 * (tone - 0.5);
					finalR += r * ((tone) * colorMap.r.tone[0] + (1 - tone) * colorMap.r.halfTone[0]);
					finalG += r * ((tone) * colorMap.r.tone[1] + (1 - tone) * colorMap.r.halfTone[1]);
					finalB += r * ((tone) * colorMap.r.tone[2] + (1 - tone) * colorMap.r.halfTone[2]);
				} else {
					tone = 2 * tone;
					finalR += tone * r * colorMap.r.halfTone[0];
					finalG += tone * r * colorMap.r.halfTone[1];
					finalB += tone * r * colorMap.r.halfTone[2];
				}
			} else {
				finalR += r;
			}

			if (colorMap.g) {
				let tone = g / 255;

				if (tone >= 0.5) {
					tone = 2 * (tone - 0.5);
					finalR += g * ((tone) * colorMap.g.tone[0] + (1 - tone) * colorMap.g.halfTone[0]);
					finalG += g * ((tone) * colorMap.g.tone[1] + (1 - tone) * colorMap.g.halfTone[1]);
					finalB += g * ((tone) * colorMap.g.tone[2] + (1 - tone) * colorMap.g.halfTone[2]);
				} else {
					tone = 2 * tone;
					finalR += tone * g * colorMap.r.halfTone[0];
					finalG += tone * g * colorMap.r.halfTone[1];
					finalB += tone * g * colorMap.r.halfTone[2];
				}
			} else {
				finalG += g;
			}

			if (colorMap.b) {
				let tone = b / 255;

				if (tone >= 0.5) {
					tone = 2 * (tone - 0.5);
					finalR += b * ((tone) * colorMap.b.tone[0] + (1 - tone) * colorMap.b.halfTone[0]);
					finalG += b * ((tone) * colorMap.b.tone[1] + (1 - tone) * colorMap.b.halfTone[1]);
					finalB += b * ((tone) * colorMap.b.tone[2] + (1 - tone) * colorMap.b.halfTone[2]);
				} else {
					tone = 2 * tone;
					finalR += tone * b * colorMap.r.halfTone[0];
					finalG += tone * b * colorMap.r.halfTone[1];
					finalB += tone * b * colorMap.r.halfTone[2];
				}
			} else {
				finalB += b;
			}

			imgData[px] = finalR;
			imgData[px + 1] = finalG;
			imgData[px + 2] = finalB;
		}
	}
}

export const cacheCharacterSprite = (char, key, num, handler) => {
	let sexPath = (char?.sex === "SEX_FEMALE") ? "f" : "m";

	num = Math.min(num, characterAtlas[key][sexPath].colorMap.length - 1);
	
	if (!loadedSprites[sexPath + key + num]) {
		let tmpImage = new Image();
		tmpImage.src = characterAtlas[key][sexPath].source;
		tmpImage.onload = () => {
			let ctx = workingCanvas.getContext("2d");
			workingCanvas.width = tmpImage.width;
			workingCanvas.height = tmpImage.height;
			ctx.clearRect(0, 0, workingCanvas.width, workingCanvas.height);
			ctx.drawImage(tmpImage, 0, 0);
			let tmpData = ctx.getImageData(0, 0, workingCanvas.width, workingCanvas.height);

			applyColorMap(tmpData.data,characterAtlas[key][sexPath].colorMap[num]);

			ctx.putImageData(tmpData, 0, 0);

			loadedSprites[sexPath + key + num] = workingCanvas.toDataURL("image/png");

			if (handler) handler();
		};
	}
}

export function getHairList() {
	return [ "hair0" ];
}

export const getSpriteCount = (char, key) => {
	let sex = "m";

	if (char?.sex === "SEX_FEMALE")
		sex = "f";
	
	return characterAtlas[key][sex].colorMap.length;
}

export const getCharacterSprite = (char, key, num) => {
	let sexPath = (char?.sex === "SEX_FEMALE") ? "f" : "m";

	num = Math.min(num, characterAtlas[key][sexPath].colorMap.length - 1);

	let imgData = loadedSprites[sexPath + key + num];

	return imgData;
}