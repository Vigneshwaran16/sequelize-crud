'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  // class Project extends Model {
  //   /**
  //    * Helper method for defining associations.
  //    * This method is not a part of Sequelize lifecycle.
  //    * The `models/index` file will call this method automatically.
  //    */
  //   static associate(models) {
  //     // define association here
  //   }
  // }
  // Project.init({
  //   name: DataTypes.STRING,
  //   employeeId: DataTypes.INTEGER,
  //   companyId: DataTypes.INTEGER
  // }, {
  //   sequelize,
  //   modelName: 'Project',
  // });
  // return Project;
  var project = sequelize.define(
    'project',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      employeeId: DataTypes.INTEGER,
      companyId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      // define helper functions here, if any
    }
  )
};