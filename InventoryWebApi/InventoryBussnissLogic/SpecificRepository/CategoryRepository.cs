using InventoryDataAccess.Context;
using InventoryDataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace InventoryBussnissLogic.SpecificRepository
{
    public class CategoryRepository: ICategoryRepository
    {
        InventoryContext context;
        public CategoryRepository(InventoryContext _context)
        {
            context = _context;
        }
        public List<Category> GetCategoriesByName(string Name)
        {
            return context.Categories.Where(n => n.name == Name).ToList();
        }
    }
}
