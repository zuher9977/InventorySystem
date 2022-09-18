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
    public class CompanyController : ControllerBase
    {
        ICompanyRepository companyRepository;
        IGeneric<Company> genericCompany;
        public CompanyController(IGeneric<Company> _genericCompany, ICompanyRepository _companyRepository)
        {
            genericCompany = _genericCompany;
            companyRepository = _companyRepository;
        }
        [HttpGet]
        [Route("GetCompany")]
        public Company GetCompany(int id)
        {
            return companyRepository.GetCompany();
        }
        [HttpPost]
        [Route("updateCompany")]
        public void updateCompany(Company company)
        {
            companyRepository.update(company);
        }
        [HttpPost]
        [Route("insert")]
        public void insert(Company company)
        {
            genericCompany.Insert(company);
        }

    }
}
