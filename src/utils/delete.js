const { closeConnection } = require("../db/connection");
const { Movie } = require("../movie/Movie.model");

exports.remove = async (Title, data) => {
    try {
        const deletedMovie = await Movie.findOneAndDelete({title : Title})
      
    } catch (error) {
      console.log(error);
    }
    closeConnection()
  };
  