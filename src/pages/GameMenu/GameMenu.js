import React, { useRef, useEffect, useState } from "react";
import MainMenu from "../../components/MainMenu/MainMenu";
import NewGame from "../../components/NewGame/NewGame";
import { CSSTransition } from "react-transition-group";
import './GameMenu.css';

const menuStates = [
	"MainMenu",
	"NewGame",
]

function GameMenu() {
	const menuRef = useRef(null);
	const [showItems, setShowItems] = useState(true);
	const [menuState, setMenuState] = useState(menuStates[0]);
	const [menuTransition, setMenuTransition] = useState(false);

	const changeMenu = function(index) {
		setShowItems(false);
		setMenuTransition(menuStates[index]);
	}

	useEffect(() => {
		if (!menuTransition) return;

		var transition = setTimeout(() => { setMenuState(menuTransition); setShowItems(true); }, 1000);

		return () => { clearTimeout(transition); }
	}, [ menuTransition ]);

	return (
		<CSSTransition
			nodeRef={menuRef}
			in={showItems}
			appear={true}
			timeout={(showItems) ? 1000 : 500}
			classNames="show"
		>
			<div id="gameMenu"  ref={menuRef}>
				{(menuState === menuStates[0]) ? <MainMenu transitionCallback={changeMenu} /> : <></>}
				{(menuState === menuStates[1]) ? <NewGame transitionCallback={changeMenu} /> : <></>}
			</div>
		</CSSTransition>
	);
}

export default GameMenu;