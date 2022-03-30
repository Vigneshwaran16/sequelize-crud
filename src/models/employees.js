'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  // class Employees extends Model {
  //   /**
  //    * Helper method for defining associations.
  //    * This method is not a part of Sequelize lifecycle.
  //    * The `models/index` file will call this method automatically.
  //    */
  //   static associate(models) {
  //     // define association here
  //   }
  // }
  // Employees.init({
  //   firstName: DataTypes.STRING,
  //   lastname: DataTypes.STRING,
  //   email: DataTypes.STRING,
  //   companyId: DataTypes.INTEGER
  // }, {
  //   sequelize,
  //   modelName: 'Employees',
  // });
  // return Employees;

  var employees = sequelize.define(
    'employees',
    {
      firstName: { 
        type: DataTypes.STRING,
        allowNull: false
      },
      lastname: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      companyId: DataTypes.INTEGER
    },
    {
      // define helper functions here, if any
    }
  )
};