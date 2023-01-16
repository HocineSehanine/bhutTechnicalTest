"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = Schema;
const logSchema = new Schema({
    id: ObjectId,
    data_hora: String,
    car_id: String,
});
const logModule = mongoose.model('log', logSchema);
exports.default = logModule;
