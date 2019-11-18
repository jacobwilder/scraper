var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Create a new UserSchema object
var NoteSchema = new Schema({
  title: String,
  body: String
});

var Note = mongoose.model("Note", NoteSchema);

// exports model
module.exports = Note;
