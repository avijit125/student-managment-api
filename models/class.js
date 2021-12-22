const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const clasesSchema = new Schema({
  name:{
      type: String,
  },
  desc:{
    type: String,
},
timing: {
    type: String,
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
