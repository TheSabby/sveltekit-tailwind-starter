const isVisible = elem => !!elem && !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);

export function away(node) {
	const outsideClickListener = event => {
		if (!node.contains(event.target) && isVisible(node)) {
			node.dispatchEvent(new CustomEvent('away'));
		}
	};

	const removeClickListener = () => {
		document.removeEventListener('click', outsideClickListener);
	};

	document.addEventListener('click', outsideClickListener);

	return {
		destroy() {
			removeClickListener();
		},
	};
}
