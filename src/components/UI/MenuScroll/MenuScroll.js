import React, { useRef, useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import './MenuScroll.css';

function MenuScroll({ MyComponent, height, width, delay, props }) {
	const scrollRef = useRef(null);
	const [delayTimer, setDelayTimer] = useState(undefined);
	const [showScroll, setShowScroll] = useState(!delay);

	const styleProp = {
		maxHeight: height,
		width: width
	};

	if ((!delayTimer) && (delay)) {
		setDelayTimer(setTimeout(() => { setShowScroll(true) }, delay));
	}

	const closeScroll = () => {
		setShowScroll(false);
	}

	useEffect(() => {
		return () => { clearTimeout(delayTimer); }
	}, [ delayTimer ]);

	return (
		<CSSTransition
			nodeRef={scrollRef}
			in={showScroll}
			appear={showScroll}
			timeout={500}
			classNames="show"
		>
			<div className="menuScroll" style={styleProp} ref={scrollRef}>
				<MyComponent props={props} closeScroll={closeScroll} />
			</div>
		</CSSTransition>
	);
}

export default MenuScroll;