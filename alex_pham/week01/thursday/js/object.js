// Exercises: Objects

// The Reading List
//
// Keep track of which books you read and which books you want to read!

// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

console.log("---book ---");

let books = [
  {
      title: "One Hundred Years of Solitude",
      author: "Gabriel Garcia Marquez",
      alreadyRead: false
  },
  {
      title: "One Hundred Years of Solitude",
      author: "Gabriel Garcia Marquez",
      alreadyRead: false
  },
  {
    title: "Tender is the Night",
    author: "F. Scott Fitzgerald",
    alreadyRead: true


   },
  {
    title: "Wuthering Heights",
    author: "Emily Bronte",
    alreadyRead: false
  }
];

for (let i = 0; i < books.length; i++) {
  let currentBook = books[i];
  let readString = '';
  if(currentBook.alreadyRead) {
    readString = 'You already read';
  } else {
    readString = 'You have not read yet ';
  }
  console.log(`${readString} ${currentBook.title} by ${currentBook.author}`);
}


// The Recipe Card
//
// Never forget another recipe!
//
// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
//
// On separate lines (one console.log statement for each), log the recipe information so it looks like:

// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

console.log("---- start myCake ------");

const myCake = {
  title: 'Chololate Cake',
  serves: 4,
  ingredients: ['cinnamon', 'cumin', 'cocoa']

};

console.log(myCake.title);
console.log(`Servers : ${myCake.serves}`);
for (let i = 0; i < myCake.ingredients.length; i++) {
  console.log(myCake.ingredients[i]);
}

// The Movie Database

//
// It's like IMDB, but much much smaller!
//
// Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
// Maybe the join method will be helpful here

console.log(" --- movies start from here ---");
const favoriteMovie = {
  title: '',
  duration: 120,
  stars: ['Puff', 'Jackie', 'Living Sneezes']
};

const favMovie = function( movie) {
  console.log(`You favMovie movie ${movie.title}and take ${movie.duration} minutes`);
  console.log(`Stars ${movie.stars.join(', ') }`);
};

favMovie(favoriteMovie);
