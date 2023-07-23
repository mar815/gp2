import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/database';

class Item extends Model {
  public id!: number;
  public name!: string;
  public description!: string;
  public protocol!: string;
  public image!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Item.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false
    },
    description: {
      type: new DataTypes.STRING(128),
      allowNull: false
    },
    protocol: {
      type: new DataTypes.STRING(128),
      allowNull: false
    },
    image: {
      type: new DataTypes.STRING(128),
      allowNull: false
    }
  },
  {
    tableName: 'items',
    sequelize,
    // Removed custom timestamp names to accept Sequelize defaults
    timestamps: true
  }
);

export default Item;
