using System;
using System.Collections.Generic;
using System.Text;

namespace InventoryDataAccess.Entities
{
    public class Brand
    {
        public int id { set; get; }
        public string name { set; get; }
        public bool status { set; get; }

        public List<Product> liProducts { set; get; }
    }
}
