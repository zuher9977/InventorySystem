using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace task.Models
{
    public class AddRoleModel
    {
        public string id { set; get; }
        [Required]
        public string Name { set; get; }


    }
}
