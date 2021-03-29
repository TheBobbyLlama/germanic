import localize from "../../localization";
import './MainMenu.css';

function MainMenu({ transitionCallback }) {
	return (
		<div id="mainMenu">
			<h1>Germanic</h1>
			<div id="mainList">
				<div className="cursorActive" onClick={() => {transitionCallback(1)}}>{localize("MAIN_START_NEW_GAME")}</div>
			</div>
		</div>
	);
}

export default MainMenu;