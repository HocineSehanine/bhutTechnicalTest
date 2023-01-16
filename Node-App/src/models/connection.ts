import 'dotenv/config';
import mongoose from 'mongoose';

const MONGO_DB_URL = 'mongodb://localhost:27017/cars_manager';

const connectToDatabase = (
  mongoDatabaseURI = process.env.MONGO_URI
    || MONGO_DB_URL,
) => mongoose.connect(mongoDatabaseURI
  || MONGO_DB_URL);

export default connectToDatabase;
