const { Schema } = require('mongoose');

const characterSchema = new Schema({
  name: {
    type: String,
  },
  link: {
    type: String,
  },
});

module.exports = characterSchema;
