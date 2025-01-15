const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) =>
{
    
    class GroupMembers extends Model {};

    GroupMembers.init
    (
        { id:
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
            group_id:
            {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            role:
            {
                type: DataTypes.INTEGER,
                allowNull: false,
            }
        },

        {
            sequelize,
            modelName: "Groupmembers",
            timestamps: false,
            createdAt: "joined_at",
            updatedAt: false,
        }
    )

}