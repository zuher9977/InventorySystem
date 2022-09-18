using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace InventoryDataAccess.Entities
{
    public class Order
    {
        public int id { set; get; }
        public string cusName { set; get; }
        public string cusPhone { set; get; }
        public string cusAddress { set; get; }
        public DateTime date { set; get; }
        public int totalProduct { set; get; }
        
        public double priceBefore { set; get; }
        public double totalammount { set; get; }
        public Boolean status { set; get; }

        [ForeignKey("product")] //size
        public int product_id { set; get; }

        public Product product { set; get; }
        public int discount { set; get; }
    }
}
