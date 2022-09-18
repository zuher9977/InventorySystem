using InventoryDataAccess.Context;
using InventoryDataAccess.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace InventoryBussnissLogic.SpecificRepository
{
    public class CompanyRepository: ICompanyRepository
    {
        InventoryContext context;
        public CompanyRepository(InventoryContext _context)
        {
            context = _context;
        }
        public void insert()
        {

        }

        public void update(Company comp)
        {
            context.companies.Attach(comp);
            context.Entry(comp).State = EntityState.Modified;
            context.SaveChanges();
        }
        public Company GetCompany()
        {
            Company company = context.companies.First();
            return company;
        }
    }
}
