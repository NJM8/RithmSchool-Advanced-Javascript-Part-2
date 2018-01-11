
var request = require('request');

function getMovieWithPromises(title) {
	return new Promise(function(resolve, reject){
		request(`http://www.omdbapi.com/?t=${title}&apikey=bb5f0ed2`, function(err, res, body){
			if (err) {
				reject(err);
			}
			resolve(body);
		});
	});
}

function showDataWithPromises(title){
	getMovieWithPromises(title).then(function(data){
		console.log('movie loaded!');
		console.log(data);
	}).catch(function(err){
		console.log(err);
	})
}

// showDataWithPromises('Titanic');

async function showDataWithAsync(title){
	var data = await getMovieWithPromises(title);
	//console.log(data);
	return data;
}

// the below works but then returns undefined?  *** This is because the data is not getting passed through to this function, if you comment out console.log(data); in the async function and return the data it will come through.
showDataWithAsync("Titanic").then(function(data){
    console.log("movie loaded!");
    console.log(data);
}).catch(function(err){
    console.log("Something went wrong!", err);
})

// same here  *** This is because the data is not getting passed through to this function, if you comment out console.log(data); in the async function and return the data it will come through.
Promise.all([showDataWithAsync('Titanic'), showDataWithAsync('GhostBusters')]).then(function(data){
	console.log(data);
});

// but this works fine
// Promise.all([showDataWithAsync('Titanic'), showDataWithAsync('GhostBusters')]);








