using InventoryDataAccess.Context;
using InventoryDataAccess.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace InventoryBussnissLogic.SpecificRepository
{
    public class ATTRepository: IATTRepository
    {
        InventoryContext context;
        public ATTRepository(InventoryContext _context)
        {
            context = _context;
        }

        public List<vmATT> LoadAll()
        {
            //IGeneric<Attributes> generic = new Generic<Attributes>();
            //List<Attributes> li = generic.LoadAll();
            //return li;

            List<vmATT> li = context.Attributes.Select(data =>
            new vmATT
            {
                Att = data,
                Count = data.Att_Vals.Count()
            }
            ).ToList();
            return li;
        }
    }
}
