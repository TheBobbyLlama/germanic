import localize from "../../../localization";
import React, { useState } from "react";
import './ListSelect.css';

function ListSelect({ height, width, keyList, defaultValue, changeCallback, hoverCallback }) {
	const [ selectedItem, SetSelectedItem ] = useState(defaultValue);
	const styleProp = {
		height,
		width
	};

	const setSelection = (key) => {
		if (key !== selectedItem)
		{
			SetSelectedItem(key);
			changeCallback(key);
		}
	}

	const doHoverCallback = (key) => {
		if (hoverCallback)
			hoverCallback(key);
	}

	return (
		<div className="listSelect" style={styleProp}>
			{ keyList.map(key => <div className={(defaultValue === key) ? " selected" : "cursorActive"} key={key} onClick={() => {setSelection(key);}} onMouseEnter={() => {doHoverCallback(key);}}>{localize(key)}</div>)}
		</div>
	);
}

export default ListSelect;