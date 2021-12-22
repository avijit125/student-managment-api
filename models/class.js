const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const clasesSchema = new Schema({
  name:{
      type: String,
      required: true
  },
  desc:{
    type: String,
    required: true
},
timing: {
    type: String,
    required: true
},
createdAt:{
    type: Date,
    default: Date.now()
},
createdBy:[
    {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
]
},{ timestamps: true });

module.exports = mongoose.model('Class', clasesSchema);
