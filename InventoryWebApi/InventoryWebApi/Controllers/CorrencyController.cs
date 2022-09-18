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
    public class CurrencyController : ControllerBase
    {

        IGeneric<Currency> genericCurrency;
        public CurrencyController(IGeneric<Currency> _genericCurrency)
        {
            genericCurrency = _genericCurrency;
        }
        [HttpPost]
        [Route("AddCurrency")]
        public void AddCountry(Currency country)
        {
            genericCurrency.Insert(country);
        }
        [HttpGet]
        [Route("getCurrency")]
        public List<Currency> getCurrency()
        {
            return genericCurrency.LoadAll();
        }
    }
}
