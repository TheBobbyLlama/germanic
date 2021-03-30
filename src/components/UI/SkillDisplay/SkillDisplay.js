import localize from "../../../localization";
import { systemLib } from "../../../lib/systemLib";
import './SkillDisplay.css';

function SkillDisplay({ character, tooltipCallback }) {
	const setTooltip = (tooltip) => {
		if (tooltipCallback) {
			tooltipCallback(tooltip);
		}
	}
	return (
		<div className="skillDisplay">
			<h2 onMouseEnter={() => {setTooltip("CHARACTER_SKILLS")}}>{localize("CHARACTER_SKILLS")}</h2>
			{Object.keys(systemLib.characterSkillList).map(key => {
				return <div key={key} onMouseEnter={() => {tooltipCallback(key)}}>
					<div>{localize(key)}</div>
					<div>{character.getSkillLevel(key)}</div>
				</div>
			})}
		</div>
	);
}

export default SkillDisplay;