"use strict";
/*eslint-env es6*/
const plugin = {};
const Promise = require("bluebird");
const fs = require("fs");
const Path = require("path");
const assert = require("assert");
const Note = require("../model/note");
const User = require("../model/user");

plugin.register = function (server, options, next) {
  server.route({
    method: "GET",
    path: "/image/favicon.ico",
    handler: function (request, reply) {
      reply.file(Path.join(__dirname, "../../client/images/favicon.ico"));
    }
  });

  server.route({
    method: "POST",
    path: "/submitNote",
    handler: noteHandler
  });

  server.route({
    method: "POST",
    path: "/changeMonth",
    handler: monthHandler
  });

  next();
};

function monthHandler(request, reply) {
  const noteData = {
    // userId: request.payload.userId,
    currMonth: request.payload.currMonth
  };

  Note.find({month: noteData.currMonth}, (err, result) => {
    if (err) {
      return reply({error: "DB_ERROR"});
    }
    const monthNotes = {};
    result.forEach((elem) => {
      monthNotes[elem.date] = {
        _id: elem._id,
        month: elem.month,
        date: elem.date,
        mood: elem.mood,
        health: elem.health,
        period: elem.period,
        note: elem.note
      }
    });

    return reply(monthNotes);
  });
}

function noteHandler(request, reply) {
  const noteData = {
    // userId: request.payload.userId,
    month: request.payload.month,
    date: request.payload.date,
    mood: request.payload.mood,
    health: request.payload.health,
    period: request.payload.period,
    note: request.payload.note
  };

  Note.create(noteData, (err, result) => {
    if (err) {
      return reply({error: "DB_ERROR"});
    }

    reply({note: noteData.note});
  });
}

plugin.register.attributes = {
  name: "api",
  version: "0.0.1"
};

module.exports = plugin;