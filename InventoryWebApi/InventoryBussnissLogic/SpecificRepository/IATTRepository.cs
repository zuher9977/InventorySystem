using InventoryDataAccess.DTO;
using System;
using System.Collections.Generic;
using System.Text;

namespace InventoryBussnissLogic.SpecificRepository
{
    public interface IATTRepository
    {
        List<vmATT> LoadAll();
    }
}
