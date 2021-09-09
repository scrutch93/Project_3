const db = require('../config/connection');
const { Carriers, Package, Services, Tracking } = require('../models');
const userSeeds = require('./userSeeds.json');

db.once('open', async () => {
  try {
    await Carriers.deleteMany({});
    await Package.deleteMany({});
    await Services.deleteMany({});
    await Tracking.deleteMany({});
    
    await User.create(userSeeds);

    console.log('all good in the hood.');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});