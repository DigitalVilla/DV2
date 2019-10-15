// ——————————————————————————————————————————————————
// TextScramble
// Modified from https://codepen.io/soulwire/pen/mErPAK
// ——————————————————————————————————————————————————

export default class TextScramble {

	constructor(elementId, options) {
		this.el = document.getElementById(elementId);
		this.rolls = options.rolls || 60;
		this.speed = options.speed || 0.2;
		this.charClass = options.charClass || 'n-char';
		this.chars = options.chars || '!<>-_\\/[]{}&—=+*^?#___()____';
		this.update = this.update.bind(this);
	}

	setText(newText, animate) {
		const oldText = this.el.innerText;
		const length = Math.max(oldText.length, newText.length);

		const promise = new Promise((resolve, reject) => {
			if (!animate) reject("stop Animation");
			this.resolve = resolve;
		});

		this.queue = [];
		// for (let i = 0; i < length; i++) {
		for (let i = length; i >= 0; i--) {
			const from = oldText[i] || '';
			const to = newText[i] || '';
			const start = Math.floor(Math.random() * this.rolls);
			const end = start + Math.floor(Math.random() * this.rolls);
			this.queue.push({ from, to, start, end});
		}
		cancelAnimationFrame(this.frameRequest);
		this.frame = 0;
		this.update();
		return promise;
	}

	update() {
		let output = '';
		let complete = 0;
		// for (let i = 0, n = this.queue.length; i < n; i++) {
		for (let i = this.queue.length-1; i >= 0; i--) {
			let { from, to, start, end, char } = this.queue[i];
			if (this.frame >= end) {
				complete++;
				output += to;
			} else if (this.frame >= start) {
				if (!char || Math.random() < this.speed) {
					char = this.randomChar();
					this.queue[i].char = char;
				}
				output += `<span class="${this.charClass}">${char}</span>`;
			} else {
				output += from;
			}
		}
		this.el.innerHTML = output;
		if (complete === this.queue.length) {
			this.resolve();
		} else {
			this.frameRequest = requestAnimationFrame(this.update);
			this.frame++;
		}
	}

	randomChar() {
		return this.chars[Math.floor(Math.random() * this.chars.length)];
	}
}