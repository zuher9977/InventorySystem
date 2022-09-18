using System;
using System.Collections.Generic;
using System.Text;

namespace InventoryDataAccess.Entities
{
    public class Currency
    {
        public int id { set; get; }
        public string nme { set; get; }

        public List<Company> companies { set; get; }
    }
}
