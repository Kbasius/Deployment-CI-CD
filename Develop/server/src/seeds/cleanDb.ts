import models from '../models/index.js';
import db from '../config/connection.js';

/*
export default async (modelName: "Question", collectionName: string) => {
  try {
    let modelExists = await models[modelName].db.db.listCollections({
      name: collectionName
    }).toArray()

    if (modelExists.length) {
      await db.dropCollection(collectionName);
    }
  } catch (err) {
    throw err;
  }
}
*/

// Getting a typescript error from above because model is not definded yet. Changed it to below because idk when or if ill add it.

export default async (modelName: "Question", collectionName: string) => {
  try {
    const model = models[modelName];

    // Check if the model exists
    if (!model) {
      throw new Error(`Model "${modelName}" does not exist.`);
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