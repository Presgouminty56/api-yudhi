import {Sequelize} from "sequelize";

const db = new Sequelize('crud_db','replica','bimo123',{
    host: '192.168.159.130',
    dialect: 'mysql'
});

export default db;