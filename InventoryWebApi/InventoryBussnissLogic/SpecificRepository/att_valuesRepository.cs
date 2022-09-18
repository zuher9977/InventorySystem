using InventoryDataAccess.Context;
using InventoryDataAccess.DTO;
using InventoryDataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace InventoryBussnissLogic.SpecificRepository
{
    public class att_valuesRepository: Iatt_valuesRepository
    {
        InventoryContext context;
        public att_valuesRepository(InventoryContext _context)
        {
            context = _context;
        }
        public List<Att_val> GetAtt_Vals(int Id)
        {
            return context.Att_Vals.Where(i=>i.Att_id==Id).ToList();
        }
        
    }


}
