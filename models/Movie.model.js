const { Mongoose } = require("mongoose");
const Schema = mongoose.Schema;

const moviesSchema = new Mongoose.Schema({
    title: String,
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtime: [Date],
  });
  
  const Movie = mongoose.model("Movie", moviesSchema);

  module.exports = Movie;