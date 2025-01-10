module.exports = (sequelize, DataTypes) => { 
    const Users = require("./users")(sequelize, DataTypes);
    const Friendships = require("./friendships")(sequelize, DataTypes);
    const Messages = require("./messages")(sequelize, DataTypes);
    const Groups = require("./groups")(sequelize, DataTypes);
    const GroupMemberships = require("./groupMemberships")(sequelize, DataTypes);

    Users.hasMany(Friendships, {
        foreignKey: "user_id",
        as: "friendships"
    });

    Users.hasMany(Messages, {
        foreignKey: "sender_id",
        as: "sentMessages"
    });

    Users.hasMany(Messages, {
        foreignKey: "receiver_id",
        as: "receivedMessages"
    });

    Users.belongsToMany(Groups, {
        through: GroupMemberships,
        foreignKey: "user_id",
        as: "groups"
    });

    Friendships.belongsTo(Users, {
        foreignKey: "user_id",
        as: "user"
    });

    Friendships.belongsTo(Users, {
        foreignKey: "friend_id",
        as: "friend"
    });

    Messages.belongsTo(Users, {
        foreignKey: "sender_id",
        as: "sender"
    });

    Messages.belongsTo(Users, {
        foreignKey: "receiver_id",
        as: "receiver"
    });

    Groups.belongsToMany(Users, {
        through: GroupMemberships,
        foreignKey: "group_id",
        as: "members"
    });

    GroupMemberships.belongsTo(Users, {
        foreignKey: "user_id",
        as: "user"
    });

    GroupMemberships.belongsTo(Groups, {
        foreignKey: "group_id",
        as: "group"
    });

    return { Users, Friendships, Messages, Groups, GroupMemberships };
};
