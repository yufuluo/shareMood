"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const noteSchema = new Schema({
  // userId: String,
  month: Number,
  date: Number,
  mood: String,
  health: String,
  period: String,
  note: String
});

const NoteModel = mongoose.model('Note', noteSchema);

module.exports = NoteModel;
