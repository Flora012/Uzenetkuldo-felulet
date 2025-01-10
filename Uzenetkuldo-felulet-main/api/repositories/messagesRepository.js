const db = require("../db/dbContext");

const Toy = require("../models/toy").Toy;

class shopRepository
{
    constructor(db)
    {
        this.Shop = db.shops;
    }

    async createShop(shop)
    {
        return await this.Shop.create(shop);
    }

    async getShop(ID)
    {
        return await this.Shop.findOne(
        {
            include: Toy,

            where:
            {
                ID: ID,
            }
        })
    }
    
    async updateShop(ID, shop)
    {
        return await this.Shop.update(
        { 
            ID: shop.ID, 
            ownerName: shop.ownerName,
        },
        {
            where:
            {
                ID: ID,
            }
        })
    }

    async deleteShop(shop)
    {
        return await this.Shop.destroy(
        {
            where:
            {
                ID: shop.ID,
            }
        });
    }
}

module.exports = new shopRepository(db);