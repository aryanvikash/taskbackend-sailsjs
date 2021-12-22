/**
 * Notes.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    "content": {
      "type": "string",
      "required": true
    },
    "completed": {
      "type": "boolean",
      "required": false,
      "defaultsTo": false
    },
    // board
    "board": {
      "model": "Boards",
      "required": true
    },

  }
};

