using InventoryBussnissLogic.SpecificRepository;
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
    public class attValuesController : ControllerBase
    {
        Iatt_valuesRepository att_ValuesRepository;
        IGeneric<Att_val> genericAtt_val;
        public attValuesController(Iatt_valuesRepository _att_ValuesRepository, IGeneric<Att_val> _genericAtt_val)
        {
            att_ValuesRepository = _att_ValuesRepository;
            genericAtt_val = _genericAtt_val;
        }

        [HttpGet]
        [Route("Getatt_Values")]
        public List<Att_val> GetCategories(int Id)
        {
            return att_ValuesRepository.GetAtt_Vals(Id);
        }

        [HttpPost]
        [Route("AddAttValues")]
        public void AddAttValues(Att_val att)
        {
            genericAtt_val.Insert(att);
        }
        [HttpGet]
        [Route("DeleteAttValues")]
        public void DeleteAttValues(int Id)
        {
            genericAtt_val.Delete(Id);
        }
        [HttpGet]
        [Route("editeAtt_value")]
        public Att_val editeAtt_value(int Id)
        {
            return genericAtt_val.LoadById(Id);
        }
        [HttpPost]
        [Route("updateAtt_value")]
        public void updateAtt_value(Att_val att)
        {
             genericAtt_val.Update(att);
        }
    }
}
