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
    public class StoreController : ControllerBase
    {
        IGeneric<Store> storeGeneric;
        public StoreController(IGeneric<Store> _storeGeneric)
        {
            storeGeneric = _storeGeneric;
        }

        [HttpPost]
        [Route("AddStore")]
        public void AddStore(Store store)
        {
            storeGeneric.Insert(store);
        }
        [HttpGet]
        [Route("GetStore")]
        public List<Store> GetStore()
        {
            return storeGeneric.LoadAll();
        }
        [HttpGet]
        [Route("DeleteStore")]
        public void DeleteStore(int id)
        {
            storeGeneric.Delete(id);
        }
        [HttpGet]
        [Route("GetStoreById")]
        public Store GetStoreById(int id)
        {
            return storeGeneric.LoadById(id);
        }

        [HttpPost]
        [Route("UpdateStore")]
        public void UpdateStore(Store store)
        {
            storeGeneric.Update(store);
        }
    }
}