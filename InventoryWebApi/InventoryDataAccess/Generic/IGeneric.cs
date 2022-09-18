using System;
using System.Collections.Generic;
using System.Text;

namespace InventoryDataAccess.Generic
{
    public interface IGeneric<T> where T:class
    {
        void Insert(T obj);
        void Update(T obj);
        void Delete(int Id);
        T LoadById(int Id);
        List<T> LoadAll();
    }
}
