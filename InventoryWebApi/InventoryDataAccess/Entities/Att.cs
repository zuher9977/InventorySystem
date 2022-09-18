using System;
using System.Collections.Generic;
using System.Text;

namespace InventoryDataAccess.Entities
{
    public class Att
    {
        public int id { set; get; }
        public string name { set; get; }
        public bool status { set; get; }
        public List<Att_val> Att_Vals { set; get; }

    }
}
