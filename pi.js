(function(){
	'use strict';

	const piLimit = 25;

	/**
 	* Represents a formula for calculating pi using John Machin's formula {@link https://en.wikipedia.org/wiki/John_Machin#Formula}.
 	* @param {int} limit - How many digits to calculate pi to.
 	*/
	var pi = function(limit){
		if(!limit || limit > piLimit || limit < 0){
			console.error('Please use a limit that is greater than 0 and less than ' + limit, limit)
			return;
		}

		console.log(16 * Math.atan(1 / 5) - 4 * Math.atan(1 / 239).toFixed(limit));
	}

	if(process.argv.length < 3){
		console.error('Please provide a limit. Usage: node pi.js _limit_');
		return;
	}

	var commandLineLimit = process.argv[2];

	pi(process.argv[2]);	
})();