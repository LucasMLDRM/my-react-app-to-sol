import database from '../db.js';
import { DataTypes } from 'sequelize';

const Genre = database.define("Genre", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    image_background: {
        type: DataTypes.TEXT
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}
, {timestamps: false}
)

export default Genre