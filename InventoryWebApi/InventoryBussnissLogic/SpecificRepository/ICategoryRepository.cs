using InventoryDataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace InventoryBussnissLogic.SpecificRepository
{
    public interface ICategoryRepository
    {
        List<Category> GetCategoriesByName(string Name);
    }
}
