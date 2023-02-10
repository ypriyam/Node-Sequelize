const dbConfig = require('../config/db.config');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,
    }
});

sequelize.authenticate().then(() => {
    console.log('database connected successfull');
}).catch((error: string) => {
    console.log('failed to connect to db', error)
});

const db: any = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.todo = require('./todo.model')(sequelize, DataTypes);

db.sequelize.sync({force: false}).then(() => {
    console.log('syncing database');
}).catch((error: string) => {
    console.log('Failed to sync database', error);
});

module.exports = db;