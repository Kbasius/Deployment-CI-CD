import models from '../models/index.js';
import db from '../config/connection.js';

/*
export default async (modelName: "Question", collectionName: string) => {
  try {
    const model = models[modelName];


    if (!model) {
      throw new Error(`Model "${modelName}" does not exist.`);
    }

  
    if (!model.db || !model.db.db) {
      throw new Error(`Database connection for model "${modelName}" is not defined.`);
    }

    let modelExists = await model.db.db.listCollections({
      name: collectionName
    }).toArray();

    if (modelExists.length) {
      await db.dropCollection(collectionName);
    }
  } catch (err) {
    throw err;
  }
}