"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(sequelize, DataTypes) {
    const Employee = sequelize.define("Employee", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        employee_name: {
            type: DataTypes.STRING
        },
        employee_lastName: {
            type: DataTypes.STRING
        },
        employee_participation: {
            type: DataTypes.FLOAT
        }
    });
    return Employee;
}
exports.default = default_1;
