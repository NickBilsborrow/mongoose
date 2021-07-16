const { closeConnection } = require("../db/connection");
const { Movie } = require("../movie/Movie.model");

exports.list = async (Title, Rating) => {
  try {
    if (Title !== undefined) {
      
     const findMovie = await Movie.find(
        { title: Title },
        "title watched actor rating"
      );
     
      findMovie.map((movie) => {
        console.log(`Title: ${movie.title}`);
        console.log(`Watched: ${movie.watched}`);
        console.log(`Rating: ${movie.rating}`)
        if (movie.actor !== undefined) {
          console.log(`Main Actor: ${movie.actor}`);
        }
      });
    }else if(Rating !== undefined){
      const findMovie = await Movie.find(
        { rating: Rating },
        "title watched actor rating"
      );
     
      findMovie.map((movie) => {
        console.log(`Title: ${movie.title}`);
        console.log(`Watched: ${movie.watched}`);
        console.log(`Rating: ${movie.rating}`)
        if (movie.actor !== undefined) {
          console.log(`Main Actor: ${movie.actor}`);
        }
      });
    } else {

     const findMovie = await Movie.find();
      findMovie.map((movie) => {
        console.log(`Title: ${movie.title}`);
        console.log(`Watched: ${movie.watched}`);
        console.log(`Rating: ${movie.rating}`)
        if (movie.actor !== undefined) {
          console.log(`Main Actor: ${movie.actor}`);
        }
        console.log("");
      });
    }
  } catch (error) {
    console.log(error);
  }
  closeConnection()
};
