using InventoryDataAccess.Entities;
using InventoryDataAccess.Generic;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InventoryWebApi.Controllers
{
    [Authorize(Roles = "Admin")]
    [Route("api/[controller]")]
    [ApiController]
    public class CountryController : ControllerBase
    {
        IGeneric<Country> genericCountry;
        public CountryController(IGeneric<Country> _genericCountry)
        {
            genericCountry = _genericCountry;
        }
        [HttpPost]
        [Route("AddCountry")]
        public void AddCountry(Country country)
        {
             genericCountry.Insert(country);
        }
        [HttpGet]
        [Route("getCountry")]
        public List<Country> getCountry()
        {
            return genericCountry.LoadAll();
        }
    }
}
