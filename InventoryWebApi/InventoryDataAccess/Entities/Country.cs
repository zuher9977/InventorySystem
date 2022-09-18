using System;
using System.Collections.Generic;
using System.Text;

namespace InventoryDataAccess.Entities
{
    public class Country
    {
        public int id { set; get; }
        public string name { set; get; }
        public List<Company> companies { set; get; }
    }
}
