/**
 * initiate closure:  class/component Root
 *
 * @param {string} rootName
 * @param {string} disable
 * @returns  {Function} closure
 */
export default (rootName, disable) => {
	const fn = (typeof console != 'undefined') && (process.env.NODE_ENV === 'development') ? console : () => {};

	/**
	 * @param {array | any} args
	 * @param {number} code
	 * @param {boolean} colorAll
	 * @returns console invocation
	 */
	return (args, code, colorAll) => {
		if (disable) return () => {};


		let mode = '';
		let advanced = Array.isArray(args);
		let special = false;

		switch (code) {
			case 1: // 'success'
				mode = advanced ? 'log' : 'Green';
				break
			case 2: // 'warning'
				mode = advanced ? 'warn' : 'Orange';
				break;
			case 3: // 'error'
				mode = advanced ? 'error' : 'Red';
				break;
			case 4: // 'info'
				mode = advanced ? 'info' : 'Blue';
				break;
			case 5: // 'extra'
				mode = advanced ? 'table' : 'Purple';
				special = true;
				break;
			case 6: // 'extra'
				mode = advanced ? 'trace' : 'Navy';
				break;
			case 7: // 'count'
				// Advanced: args requires only 1 element ['customName']
				mode = advanced ? 'count' : 'Pink';
				special = true;
				break;
			case 8: // 'dir'
				// Advanced: args requires 2 elements ['customName', function]
				mode = advanced ? 'dir' : 'Grey';
				special = true;
				break;
			case 9: // 'dir'
				// Advanced: args requires 2 elements ['customName', function]
				mode = advanced ? 'memory' : 'Grey';
				special = true;
				break;
			case 0: // 'default'
				// Advanced: args requires only 1 element ['customName']
				mode = advanced ? 'clear' : 'Black';
				special = true;
				break
			case '[': // 'dir'
				// Advanced: args requires 2 elements ['customName', function]
				mode = advanced ? 'group' : 'Red';
				special = true;
				break;
			case ']': // 'dir'
				// Advanced: args requires 2 elements ['customName', function]
				mode = advanced ? 'groupEnd' : 'Red';
				special = true;
				break;
			case '+': // 'default'
				// Advanced: args requires only 1 element ['customName']
				mode = advanced ? 'time' : 'Red';
				special = true;
				break
			case '-': // 'dir'
				// Advanced: args requires 2 elements ['customName', function]
				mode = advanced ? 'timeEnd' : 'Grey';
				special = true;
				break;
			default:
				mode = advanced ? 'log' : 'Navy';
		}

		let logger = advanced ? fn[mode] : fn['log'];
		let msg = advanced ? `logger.${mode}:` : `color:${mode}`;

		// IF console is not available
		if (!logger) return () => {};

		// if advance is not enabled
		if (!advanced) {
			return typeof args !== 'string' && !code ? logger(...[rootName, args]) :
				logger(`%c${rootName} %c${args.length ? args : msg}`, `color:${mode}`, `color:${colorAll? mode : 'Black'}`);
		}

		if (!special) {
			return args.length ? logger(...[rootName, ...args]) : logger(rootName + msg);

		} else {
			return mode === 'count' || mode === 'clear' || mode === 'group' || mode === 'groupEnd' ? logger(rootName + (args[0] ? args[0] : msg)) :
				mode === 'dir' || mode === 'table' || mode === 'time' || mode === 'timeEnd' ? (fn.log(rootName + (args[1] ? args[0] : msg)) || logger(args[1] ? args[1] : args[0])) :
				mode === 'memory' ? (fn.log(rootName + (args[0] ? args[0] : msg)) || fn.log(logger)) :
				() => {};
		}
	}

// export default (debug, compName) => {
//   return debug
//     ? (...args) => console.log(...[`<${compName}/> Debug Log: `, ...args])
//     : () => {};
// };


};