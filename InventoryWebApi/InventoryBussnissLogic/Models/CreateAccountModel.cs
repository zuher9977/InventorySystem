using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace final.Models
{
    public class CreateAccountModel
    {
        public string Id { set; get; }
        public string UserName { set; get; }
        [Required]
        [EmailAddress]
        public string Email { set; get; }
        [Required]
        [Compare("ConfirmPassword")]
        public string Password { set; get; }
        public string ConfirmPassword { get; set; }
    }
}
