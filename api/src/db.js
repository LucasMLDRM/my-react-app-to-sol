import { Sequelize } from 'sequelize';

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const database = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,{
    logging: true,
}) //logging true para que nos muestre en consola cada cosa que haga POST GET etc..

export default database 