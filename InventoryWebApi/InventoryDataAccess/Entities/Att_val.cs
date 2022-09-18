using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace InventoryDataAccess.Entities
{
    public class Att_val
    {
        public int id { set; get; }
        public string name { set; get; }
        [ForeignKey("att")]
        public int Att_id { set; get; }
        public Att att { set; get; }
        [InverseProperty("Size")]
        public List<Product> LiProductSize { set; get; }
        [InverseProperty("Color")]
        public List<Product> LiProductColor { set; get; }
    }
}
