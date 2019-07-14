import Sequelize from 'sequelize';

const env = process.env.NODE_ENV || 'development';
const { database, username, password } = require('../config/config.js')[env];

const sequelize = new Sequelize(database, username, password, {
  dialect: 'postgres',
  operatorsAliases: Sequelize.Op,
  define: {
    paranoid: true,
    timestamps: true,
    underscored: false,
  },
});

const models = {
  Todo: sequelize.import('./todo'),
};

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
