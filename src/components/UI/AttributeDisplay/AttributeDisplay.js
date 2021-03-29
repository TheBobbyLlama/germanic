import localize from "../../../localization";
import { systemLib } from "../../../lib/systemLib";
import './AttributeDisplay.css';

function AttributeDisplay({ character, tooltipCallback }) {
	return (
		<div className="attributeDisplay">
			<h2>{localize("CHARACTER_ATTRIBUTES")}</h2>
			{systemLib.characterAttributeList.map(attribute => {
				return <div key={attribute} onMouseEnter={() => {tooltipCallback(attribute)}}>
					<div>{localize(attribute)}</div>
					<div>{character.getAttribute(attribute)}</div>
				</div>
			})}
		</div>
	);
}

export default AttributeDisplay;