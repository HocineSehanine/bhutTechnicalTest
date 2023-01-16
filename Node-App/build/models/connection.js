"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const mongoose = require('mongoose');
const MONGO_DB_URL = 'mongodb://localhost:27017/cars_manager';
const connectToDatabase = (mongoDatabaseURI = process.env.MONGO_URI
    || MONGO_DB_URL) => mongoose.connect(process.env.MONGO_URI
    || MONGO_DB_URL);
exports.default = connectToDatabase;
