const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = Schema;

const logSchema = new Schema({
  id: ObjectId,
  'data_hora': String,
  'car_id': String,
});

const logModule = mongoose.model('log', logSchema);

export default logModule;
