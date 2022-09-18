using InventoryDataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace InventoryBussnissLogic.SpecificRepository
{
    public interface IproductRepository
    {
        List<Product> GetProducts();
    }
}
