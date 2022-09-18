using InventoryDataAccess.Context;
using InventoryDataAccess.DTO;
using InventoryDataAccess.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace InventoryBussnissLogic.SpecificRepository
{
   public class productRepository: IproductRepository
    {
        InventoryContext context;
        public productRepository(InventoryContext _context)
        {
            context = _context;
        }
        public List<Product> GetProducts()
        {
            return context.Products.Include("store").ToList();
        }


        

    }
}
