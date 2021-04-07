import nullImg from "../assets/images/sprites/null.png";
import skinMale from "../assets/images/sprites/character/skin/m.png";
import skinFemale from "../assets/images/sprites/character/skin/m.png"; // TODO!
import eyes from "../assets/images/sprites/character/eyes.png";
import mHairBald from "../assets/images/sprites/character/hair/m/0f.png";
import mClothingHosen from "../assets/images/sprites/character/clothing/m/hosen.png";

const skinColorMap = [
	{
		g: {
			tone: [ 0.9375, 0.825, 0.8125 ],
			halfTone: [ 0.753, 0.565, 0.502 ]
		}
	},
	{
		g: {
			tone: [ 0.910, 0.784, 0.753 ],
			halfTone: [ 0.627, 0.471, 0.376 ]
		}
	},
	{
		g: {
			tone: [ 0.8, 0.65, 0.5875 ],
			halfTone: [ 0.5, 0.35, 0.3 ]
		}
	},
	{
		g: {
			tone: [ 0.6875, 0.5675, 0.5 ],
			halfTone: [ 0.375, 0.3, 0.2875 ]
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
			tone: [ 0.375, 0.4325, 0.75 ],
			halfTone: [ 0.125, 0.25, 0.375 ]
		}
	},
	{
		b: {
			tone: [ 0.5, 0.625, 0.375 ],
			halfTone: [ 0.3125, 0.375, 0.25 ]
		}
	},
	{
		b: {
			tone: [ 0.5, 0.5, 0.25 ],
			halfTone: [ 0.25, 0.1875, 0.125 ]
		}
	},
	{
		b: {
			tone: [ 0.375, 0.3125, 0.25 ],
			halfTone: [ 0.25, 0.1875, 0.125 ]
		}
	},
	{
		b: {
			tone: [ 0.5, 0.5625, 0.625 ],
			halfTone: [ 0.25, 0.2725, 0.375 ]
		}
	}
];

const hairColorMap = [
	{
		r: {
			tone: [ 0.75, 0.7125, 0.5 ],
			halfTone: [ 0.5, 0.4875, 0.25 ]
		}
	},
	{
		r: {
			tone: [ 0.75, 0.45, 0.25 ],
			halfTone: [ 0.5, 0.35, 0.325 ]
		}
	},
	{
		r: {
			tone: [ 0.5, 0.3, 0.2 ],
			halfTone: [ 0.375, 0.25, 0.1875 ]
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
			tone: [ 0.25, 0.2, 0.15 ],
			halfTone: [ 0.15, 0.125, 0.1 ]
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
	beard0f: {
		m: {
			name: "beard0f",
			source: nullImg,
			colorMap: hairColorMap
		}
	},
	beard0b: {
		m: {
			name: "beard0b",
			source: nullImg,
			colorMap: hairColorMap
		}
	},
	clothingPeasant: {
		m: {
			name: "clothingPeasantMale",
			source: mClothingHosen,
			colorMap: [
				{
					r: {
						tone: [ 0.75, 0.75, 0.5 ],
						halfTone: [ 0.5, 0.5, 0.375 ]
					},
					g: {
						tone: [ 0.3, 0.5, 0.25 ],
						halfTone: [ 0.2, 0.4, 0.15 ]
					},
					b: {
						tone: [ 0.35, 0.25, 0.2 ],
						halfTone: [ 0.25, 0.1875, 0.125 ]
					}
				}
			]
		},
		f: {
			name: "clothingPeasantFemale",
			source: mClothingHosen,
			colorMap: [
				{
					r: {
						tone: [ 0.75, 0.75, 0.5 ],
						halfTone: [ 0.5, 0.5, 0.375 ]
					},
					g: {
						tone: [ 0.3, 0.5, 0.25 ],
						halfTone: [ 0.2, 0.4, 0.15 ]
					},
					b: {
						tone: [ 0.35, 0.25, 0.2 ],
						halfTone: [ 0.25, 0.1875, 0.125 ]
					}
				}
			]
		}
	}
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

export function getBeardList() {
	return [ "beard0" ];
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