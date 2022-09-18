using InventoryDataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace InventoryBussnissLogic.SpecificRepository
{
    public interface ICompanyRepository
    {
        void insert();
        void update(Company comp);
        Company GetCompany();
    }
}
