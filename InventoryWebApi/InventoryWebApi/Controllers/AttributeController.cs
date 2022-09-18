using InventoryBussnissLogic.SpecificRepository;
using InventoryDataAccess.DTO;
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
    public class AttributeController : ControllerBase
    {
        IGeneric<Att> attGeneric;
        IATTRepository iATTRepository;
        public AttributeController(IGeneric<Att> _attGeneric, IATTRepository _iATTRepository)
        {
            attGeneric = _attGeneric;
            iATTRepository = _iATTRepository;
        }
        [HttpPost]
        [Route("AddAttribute")]
        public void AddCajegory(Att att)
        {
            attGeneric.Insert(att);
        }
        [HttpGet]
        [Route("getAttribute")]
        public List<Att> getAttribute()
        {
            return attGeneric.LoadAll();
        }
        [HttpGet]
        [Route("GetAttributeById")]
        public Att GetAttributeById(int id)
        {
            return attGeneric.LoadById(id);
        }
        [HttpPost]
        [Route("updateAttribute")]
        public void updateAttribute(Att att)
        {
            attGeneric.Update(att);
        }
        [HttpGet]
        [Route("DeleteAttribute")]
        public void DeleteAttribute(int id)
        {
            attGeneric.Delete(id);
        }


        [HttpGet]
        [Route("LoadAllwithc")]
        public List<vmATT> LoadAllwithc()
        {
            List<vmATT> li = iATTRepository.LoadAll();
            return li;
        }
    }
}
