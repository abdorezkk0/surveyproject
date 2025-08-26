// MongoDB Playground
// To disable this template go to Settings > MongoDB > Use Default Template For Playground.
// Make sure you are connected to your MongoDB Atlas cluster AND your local MongoDB

// Get data from local MongoDB
use('internsurvey');
const collections = db.getCollectionNames();
const exportData = {};

for (const collName of collections) {
  exportData[collName] = db.getCollection(collName).find({}).toArray();
}

// Switch to MongoDB Atlas and import the data
// Replace YOUR_ATLAS_DB_NAME with your actual Atlas database name
use('internsurvey');

for (const collName in exportData) {
  // Drop existing collection if it exists to avoid duplicates
  db.getCollection(collName).drop();
  
  // Insert the data
  if (exportData[collName].length > 0) {
    db.getCollection(collName).insertMany(exportData[collName]);
  }
}

// Verify the data was imported
for (const collName in exportData) {
  const count = db.getCollection(collName).countDocuments();
  print(`Collection ${collName}: ${count} documents`);
}
