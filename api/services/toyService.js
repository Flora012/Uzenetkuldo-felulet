const toyRepository = require("../repositories/toyRepository");
const shopRepository = require("../repositories/groupmembers");


class ToyService
{
    async updateToy(name, toy)
    {
        
    }
    
    async deleteToy(name)
    {
        
    }

    async getToy(name)
    {
        
    }

    async getToys()
    {

    }
         
    
    async createToys(toy)
    {
        if(!toy.name || !toy.price || !toy.company)
        {
            const error = new Error("Missing input");
    
            error.status = 400;
    
            throw error;
        }
        toy.price = Number(toy.price);

        if(isNaN(price))
        {
            const error = new Error("Price must be a number");
        
            error.status = 404;
        
            throw error;
        }

        if(!shopRepository.getShop(toy.shopID))
        {
            const error = new Error("Shop not found!");
            
            error.status = 404;
            
            throw error;
        }
        return await toyRepository.createToy(toy);
    }
}