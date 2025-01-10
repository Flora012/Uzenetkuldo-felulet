const db = require("../db/dbContext");

const Friendship = require("../models/toy").Friendship;

class friendshipRepository
{
    constructor(db)
    {
        this.Friendship = db.friendships;
    }

    async updateFrienship(name, friendship)
    {
        return await this.Toy.date(
        { 
            name: toy.name,
            price: toy.price,
            company: toy.company
        },
        {
            where:
            {
                name: name,
            }
        })
    }
    
    async deleteToy(name)
    {
        return await this.Toys.destroy(
        {   
            where: 
            {
                name: name
            }
        })
    }

    async getToy(name){
        return await this.Toy.findOne({
            where:{
                name : name
            }
        });
    }

    async getToys()
    {
         return await this.Toys.findAll();
    }
         
    
    async createToys(toy)
    {
        return await this.Toy.create(
        {
            name: toy.name,
            price: toy.price,
            company: toy.company
        });
    }
}

module.exports = new toyRepository(db);