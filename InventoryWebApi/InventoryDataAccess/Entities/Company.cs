
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace InventoryDataAccess.Entities
{
    public class Company
    {
        public int id { set; get; }
        [Required]
        public string name { set; get; }
        public int vatcharg { set; get; }
        public string address { set; get; }
        public string phone { set; get; }

        [ForeignKey("country")]
        public int country_id { set; get; }
        public Country country { set; get; }

        [ForeignKey("currency")]
        public int currency_id { set; get; }
        public Currency currency { set; get; }
    }
}
