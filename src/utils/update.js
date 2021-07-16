const { closeConnection } = require("../db/connection");
const { Movie } = require("../movie/Movie.model");

exports.update = async (inputTitle, data) => {
  try {
    
        if (data.updateTitle !== undefined) {
           await Movie.updateOne(
            { title: inputTitle },
            { $set: { title: data.updateTitle } }
          );
          inputTitle = data.updateTitle;
        }
        if (data.actor !== undefined) {
           await Movie.updateOne(
            { title: inputTitle },
            { $set: { actor: data.actor } }
          );
        }
        if (data.watched !== undefined) {
           await Movie.updateOne(
            { title: inputTitle },
            { $set: { watched: data.watched } }
          );
        }
        if (data.rating !== undefined && data.rating < 6 && data.rating > 0) {
          await Movie.updateOne(
           { title: inputTitle },
           { $set: { rating: String(data.rating)} }
         );
       }else  if (data.rating !== undefined){
         console.log("Rating has to be a value between 1-5")
       }





        const findMovie = await Movie.find(
          { title: inputTitle },
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
      
      
  } catch (error) {
    console.log(error);
  }
  closeConnection();
};
