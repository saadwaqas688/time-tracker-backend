const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  teamId: {
    type: Schema.Types.ObjectId,
    ref: 'Team', // Assuming you have a Team model
    default: null, // project may exist without a team
  },
});

module.exports = mongoose.model('Project', projectSchema);
