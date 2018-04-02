/*
File Name       debounce.js
Author          Snir.Shechter
Date            4/2/2018 6:54 PM
Description     A debounce util function
--------------------------------------
Input           function:Object(Function) - the function to be invoked
								wait:Number               - milliseconds to wait for the function to not be invoked before invoking the actual function
								immediate:Boolean         - should the function be invoked immediately no matter what
								
Output          function - the debounced function
*/
export function debounce(func, wait, immediate) {
	var timeout;
	return function () {
		var context = this, args = arguments;
		var later = function () {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};