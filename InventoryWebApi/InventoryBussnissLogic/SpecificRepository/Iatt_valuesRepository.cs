using InventoryDataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace InventoryBussnissLogic.SpecificRepository
{
    public interface Iatt_valuesRepository
    {
        List<Att_val> GetAtt_Vals(int Id);

    }
}
