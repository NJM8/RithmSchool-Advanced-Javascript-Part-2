
var request = require('request');

// Write a function called inOrder that accepts two callbacks and invokes them in order regardless of timing

// function run(func){
// 	return new Promise(function(resolve, reject){
// 		resolve(func);
// 	})
// }

// async function inOrder(func){
// 	await func;
// }

//Promise.all([inOrder(logOne), inOrder(logTwo)]);

function inOrder(...cb){
	cb.forEach(function(element){
		element;
	})
}

let logOne = setTimeout(function(){
    console.log('one!');
}, Math.random() * 1000);

let logTwo = setTimeout(function(){
    console.log('two!');
}, Math.random() * 1000);

inOrder(logOne, logTwo); 

// can't figure this one out without putting logTwo inside of logOne

// one
// two

// Refactor the code above to use promises

// Make an AJAX call to the OMDB API for all the episodes in season one for Game of Thrones. Once you have finished that, loop through the array of imdbIDs and make another AJAX call to get an array of all the plots. Join that array together to form a large string which contains all the plots.

function getData(title) {
	return new Promise(function(resolve, reject){
		request(`http://www.omdbapi.com/?${title}&apikey=bb5f0ed2`, function(err, res, body){
			if (err) {
				reject(err);
			}
			resolve(body);
		});
	});
}

async function showDataWithAsync(title){
	let data = await getData(title);

	let plotIds = JSON.parse(data).Episodes.reduce((array, item) => {
		array.push(item.imdbID);
		return array;
	}, []);

	//console.log(await getData(`i=${plotIds[0]}`));
	let plots = [];
	for (let i = 0; i < plotIds.length; i++) {
		let thisEpisode = JSON.parse(await getData(`i=${plotIds[i]}`));
		plots.push(`Episode: ${thisEpisode.Episode}, Plot: ${thisEpisode.Plot}`);
	}
	console.log(plots);
}

//showDataWithAsync('t=game of thrones&season=1');

// Implement a simple version of Promise.all. This function should accept an array of promises and return an array of resolved values. If any of the promises are rejected, the function should catch them.


async function promiseAll(...promises){
	let results = [];
	for (let i = 0; i < promises.length; i++) {
		results.push(await promises[i]);
	} 
	console.log(results);
}













