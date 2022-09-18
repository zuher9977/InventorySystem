using InventoryDataAccess.Context;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace InventoryDataAccess.Generic
{
    public class Generic<T>: IGeneric<T> where T:class
    {
        InventoryContext context;
        public Generic(InventoryContext _context)
        {
            context = _context;
        }

        public void Insert(T obj)
        {
            context.Set<T>().Add(obj);
            context.SaveChanges();
        }
        public void Update(T obj)
        {
            context.Set<T>().Attach(obj);
            context.Entry(obj).State = EntityState.Modified;
            context.SaveChanges();
        }
        public void Delete(int Id)
        {
            T obj = context.Set<T>().Find(Id);
            context.Set<T>().Remove(obj);
            context.SaveChanges();
        }
        public T LoadById(int Id)
        {
            T obj = context.Set<T>().Find(Id);
            return obj;
        }
        public List<T> LoadAll()
        {
            List<T> obj = context.Set<T>().ToList();
            return obj;
        }
    }
}
