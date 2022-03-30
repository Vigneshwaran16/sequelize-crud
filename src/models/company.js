'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  // class Company extends Model {
  //   /**
  //    * Helper method for defining associations.
  //    * This method is not a part of Sequelize lifecycle.
  //    * The `models/index` file will call this method automatically.
  //    */
  //   static associate(models) {
  //     // define association here
  //   }
  // }
  // Company.init({
  //   name: DataTypes.STRING
  // }, {
  //   sequelize,
  //   modelName: 'Company',
  // });
  // return Company;

  var company = sequelize.define(
    'company',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      // define helper functions here, if any
    }
  );
  company.associate = (models) => {
    //define any associations here
  }

  return company
};