import localize from "../../../localization";
import { systemLib } from "../../../lib/systemLib";
import './AttributeDisplay.css';

function AttributeDisplay({ character, tooltipCallback }) {
	const setTooltip = (tooltip) => {
		if (tooltipCallback) {
			tooltipCallback(tooltip);
		}
	}
	return (
		<div className="attributeDisplay">
			<h2 onMouseEnter={() => {setTooltip("CHARACTER_ATTRIBUTES")}}>{localize("CHARACTER_ATTRIBUTES")}</h2>
			{systemLib.characterAttributeList.map(attribute => {
				return <div key={attribute} onMouseEnter={() => {setTooltip(attribute)}}>
					<div>{localize(attribute)}</div>
					<div>{character.getAttribute(attribute)}</div>
				</div>
			})}
		</div>
	);
}

export default AttributeDisplay;