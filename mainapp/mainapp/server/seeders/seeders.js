const db = require('../config/connection');
const { User, Package} = require('../models');
const userSeeds = require('./userSeeds.json');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await Package.deleteMany({});
    
    await User.create(userSeeds);

    console.log('all good in the hood.');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});