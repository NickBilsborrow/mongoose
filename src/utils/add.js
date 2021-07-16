const { closeConnection } = require("../db/connection");
const { Movie } = require("../movie/Movie.model");

exports.add = async (entryObj) => {
  try {
    const movie = new Movie(entryObj);
    const savedMovie = await movie.save();
    console.log(savedMovie);
  } catch (error) {
    if (error.code === 11000) {
      console.log("This film is already in the database.");
    } else {
      console.log(error);
    }
  }
  closeConnection();
};
