let allMovies = [];
var text = document.getElementById("A");

//Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
class Movie {
	constructor(t, r, hW){
		this.title = t;
		this.rating = r;
		this.haveWatched = hW;
	}
}

//add a movie OBJECT to the allMovies array
let addMovie = (movie) => {
	allMovies.push(movie);
}

//iterate through all elements of allMovies array
//Display the total number of movies in allMovies array
let printMovies = () => {
	console.log("Printing all movies....");
	text.textContent += "Printing all movies....";
	text.textContent += "\r\n";
	for (let i = 0; i < allMovies.length; i++) {
		console.log(allMovies[i].title + ", rating of " + allMovies[i].rating + ", haveWatched: " + allMovies[i].haveWatched);
		text.textContent += allMovies[i].title + ", rating of " + allMovies[i].rating + ", haveWatched: " + allMovies[i].haveWatched;
		text.textContent += "\r\n";
 	}
 	console.log("You have " + allMovies.length + " movies in total");
 	text.textContent += "You have " + allMovies.length + " movies in total";
	text.textContent += "\r\n";
}


//Display only the movies that has a rating higher than rating(argument)
//Display the total number of matches
let highRatings = (rating) => {
	console.log("Printing all movies that have a rating higher than " + rating);
	text.textContent += "Printing all movies that have a rating higher than " + rating;
	text.textContent += "\r\n";
	let count = 0;
	for (let i = 0; i < allMovies.length; i++) {
		if (allMovies[i].rating > rating){
			console.log(allMovies[i].title + " has a rating of " + allMovies[i].rating);
			count++;
			text.textContent += allMovies[i].title + " has a rating of " + allMovies[i].rating;
			text.textContent += "\r\n";
		}
	}
	console.log("In total, there are " + count + " matches");
}


//Toggle the 'haveWatched' property of the specified movie 
let changeWatched = (title) => {
	console.log("Changing the status of the movie...");
	text.textContent += "Changing the status of the movie...";
	text.textContent += "\r\n";
	for (let i = 0; i < allMovies.length; i++) {
		if (allMovies[i].title	== title) {
			allMovies[i].haveWatched = !allMovies[i].haveWatched;
		}
	}
}

////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

/*replace console.log with display on web page*/
console.log("----------------");
console.log("running program......");
console.log("----------------");
printMovies();


let movie1 = new Movie("Parasite", 2, false);

/*replace console.log with display on web page*/
console.log("----------------");
addMovie(movie1);
console.log("----------------");



changeWatched("Spiderman");
/*replace console.log with display on web page*/
console.log("----------------");

printMovies();

/*replace console.log with display on web page*/
console.log("----------------");

changeWatched("Spiderman");
/*replace console.log with display on web page*/
console.log("----------------");

printMovies();
/*replace console.log with display on web page*/
console.log("----------------");

highRatings(3.5);