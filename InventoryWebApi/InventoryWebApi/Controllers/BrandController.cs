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
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Roles = "Admin")]
    public class BrandController : ControllerBase
    {
        IGeneric<Brand> brandGeneric;
        public BrandController(IGeneric<Brand> _brandGeneric)
        {
            brandGeneric = _brandGeneric;
        }

        [HttpPost]
        [Route("AddBrand")]
        public void AddBrand(Brand brand)
        {
             brandGeneric.Insert(brand);
        }
        [HttpGet]
        [Route("GetBrands")]
        public List<Brand> GetBrands()
        {
            return brandGeneric.LoadAll();
        }
        [HttpGet]
        [Route("DeleteBrand")]
        public void Delete(int id)
        {
             brandGeneric.Delete(id);
        }
        [HttpGet]
        [Route("getBrandData")]
        public Brand getBrandData(int id)
        {
            return brandGeneric.LoadById(id);
        }
        [HttpPost]
        [Route("UpdateBrand")]
        public void update(Brand brand)
        {
            brandGeneric.Update(brand);
        }
    }
}
