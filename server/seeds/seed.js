const db = require('../config/connection');
const { Sounds } = require('../models');

const soundData = require('../seeds/soundData.json');

db.once('open', async () => {
    await Sounds.deleteMany({});

  const soundsData = await Sounds.insertMany(soundData);

  console.log('Sounds seeded!');
  process.exit(0);
    });