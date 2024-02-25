'use strict';

/** @type {import('sequelize-cli').Migration} */
const { Spot } = require('../models')
let options = { tableName: 'Spots'}
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await Spot.bulkCreate([
      {
        ownerId: 1,
        address: 'Chapel of Anticipation',
        city: 'Stormveil Castle',
        state: 'Limgrave',
        country: 'Lands Between',
        lat: 80,
        lng: -179,
        name: 'Chapel of beginnings',
        description: 'Area where all tarnished begin their journey',
        price: 10.99
      },
      {
        ownerId: 2,
        address: 'South of Carian Study Hall',
        city: 'Liurnia',
        state: 'Liurnia of the Lakes',
        country: 'Lands Between',
        lat: 83,
        lng: -144,
        name: 'Jarburg',
        description: 'A peaceful village hidden on the side of a cliff. Home to many friendly Jars, who only wish to be left alone.',
        price: 300.99
      },
      {
        ownerId: 3,
        address: 'West of Three Sisters',
        city: 'Three Sisters',
        state: 'Liurnia of the Lakes',
        country: 'Lands Between',
        lat: 49,
        lng: -105,
        name: 'Ranni\'s Rise',
        description: 'A tower beset by large chunks of glintstone emerging from the ground and penetrating its interiors. Home to a mysterious figure observing The Lands Between.',
        price: 350.99
      },
      {
        ownerId: 2,
        address: 'Foot of the Erdtree',
        city: 'Royal Capital',
        state: 'Leyndell',
        country: 'Lands Between',
        lat: 90,
        lng: -102,
        name: 'Leyndell, Royal Capital',
        description: 'The Capital City, located at the foot of the Erdtree. Despite being partially destroyed by the dragon Gransax, it still holds strong to this day. It houses many strong foes, along with the mysterious Veiled Monarch, Morgott.',
        price: 150.99
      },
      {
        ownerId: 1,
        address: 'North of Consecrated Ground',
        city: 'Ordina',
        state: 'Consecrated Snowfield',
        country: 'Lands Between',
        lat: 90,
        lng: -63,
        name: 'Ordina, Liturgical Town',
        description: 'A long abandoned town in the snowfield. If one wishes to open the gate, they must enter the evergaol and light three statues in order to proceed',
        price: 5.99
      },
      {
        ownerId: 3,
        address: 'Above the Siofra River',
        city: 'Eternal City',
        state: 'Underground',
        country: 'Lands Between',
        lat: 90,
        lng: -180,
        name: 'Nokron, Eternal City',
        description: 'The Nokron, Eternal City region is a sprawling city ruin located a level above the Siofra River. Much like the Siofra River, this underground region has features that you could mistake for an overland area - the fauna, growing vegetation, and a sky seemingly filled with stars. It is an ancient city punished for high treason against the Greater Will',
        price: 500.99
      },
      {
        ownerId: 3,
        address: 'Great Lake of Liurnia',
        city: 'Raya Lucaria',
        state: 'Liurnia',
        country: 'Lands Between',
        lat: 49,
        lng: -105,
        name: 'Academy of Raya Lucaria',
        description: 'The Academy of Raya Lucaria sits in the middle of the great lake of Liurnia, and is the place of study for Glintstone Sorcerers. Long ago, Rennala charmed the Academy with her lunar magic. She became the Academy\'s master and established the house of Caria as royalty. However, when Rennala\'s husband Radagon left her to become the second Elden Lord, Rennala\'s heart went along with him. Those at the Academy then realised that Rennala was no champion, and she was confined to the great library. She still clutches the amber egg given to her by Radagon, which contains the Great Rune of the Unborn.',
        price: 230
      },
    ], options, { validate: true})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    const Op = Sequelize.Op
    return queryInterface.bulkDelete(options, {
      ownerId: { [Op.in]: [1,2,3,4,5,6]}
    })
  }
};
