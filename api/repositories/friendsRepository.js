const db = require("../db/dbContext");

const friends= require("../models/friends").friends;

class friendsRepository
{
    constructor(db)
    {
        this.friends = db.friends;
    }

    async updateFriens(name, friends)
    {
        return await this.friends.date(
        { 
            name: friends.name/*,
            price: toy.price,
            company: toy.company*/
        },
        {
            where:
            {
                name: name,
            }
        })
    }
    
    async deleteFriend(name)
    {
        return await this.friends.destroy(
        {   
            where: 
            {
                name: name
            }
        })
    }

    async getFriend(name){
        return await this.friends.findOne({
            where:{
                name : name
            }
        });
    }

    async getFriends()
    {
         return await this.friends.findAll();
    }
         
    
    async createFriends()
    {
        return await this.friends.create(
        {
            name: toy.name/*,
            price: toy.price,
            company: toy.company*/
        });
    }
}

module.exports = new friendsRepository(db);