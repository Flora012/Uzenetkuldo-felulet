const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) =>
{

    class Shop extends Model {};

    Shop.init
    (
        {
            id:
            {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },

            user_id:
            {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            friend_id:
            {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            status:
            {
                type: DataTypes.STRING(30),
                allowNull: false,
            }
        },

        {
            sequelize,
            modelName: "Friendship",
            timestamps: false,
            createdAt: true,
            updatedAt: false,
        }
    )


}