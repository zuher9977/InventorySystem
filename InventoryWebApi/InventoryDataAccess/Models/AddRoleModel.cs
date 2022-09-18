using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace InventoryDataAccess.Models
{
    public class AddRoleModel
    {
        public string id { set; get; }
        [Required]
        public string Name { set; get; }


    }
}
