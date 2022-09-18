using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace InventoryDataAccess.Entities
{
    public class Product
    {
        public int id { set; get; }
        public string name { set; get; }
        public string sku { set; get; }
        public int qty { set; get; }
        public int price { set; get; }
        public string desc { set; get; }




        [ForeignKey("Size")] //size
        public int? size_id { set; get; }
        public Att_val Size { set; get; }

        [ForeignKey("Color")] //color
        public int? color_id { set; get; }
        public Att_val Color { set; get; }




        [ForeignKey("brand")] //brand
        public int brand_id { set; get; }
        public Brand brand { set; get; }

        [ForeignKey("category")]//category
        public int category_id { set; get; }
        public Category category { set; get; }

        [ForeignKey("store")]//store
        public int store_id { set; get; }
        public Store store { set; get; }
        
        public bool avi { set; get; }

        public List<Order> orders { set; get; }

        public string ImgPath { set; get; } // file upload step #5 img path coll in db then migration


        [NotMapped]
        public IFormFile Image { set; get; } // file upload step #2
    }
}
