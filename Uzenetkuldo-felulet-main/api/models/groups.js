const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) =>
{
    
    class Groups extends Model {};

    Groups.init
    (
        {
            id:
            {
                type: DataTypes.INTEGER,
                defaultValue: 0,
                allowNull: false,
            },

           description:
            {
                type: DataTypes.STRING,
                defaultValue: "Unknown"
            },
            name:
            {
                type: DataTypes.STRING(30),
                primaryKey: true,
            },

        },

        {
            sequelize,
            modelName: "Groups",
            timestamps: false,
            createdAt: "creatd_at",
            updatedAt: false,
        }
    )

    return Groups;

}