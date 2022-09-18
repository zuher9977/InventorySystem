using InventoryDataAccess.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace InventoryDataAccess.Context
{
    public class InventoryContext:IdentityDbContext<IdentityUser>
    {
        public InventoryContext(DbContextOptions<InventoryContext> options) : base(options)
        {

        }

        public DbSet<Brand> Brands { set; get; }
        public DbSet<Category> Categories { set; get; }
        public DbSet<Store> Stores { set; get; }
        public DbSet<Att> Attributes { set; get; }
        public DbSet<Att_val> Att_Vals { set; get; }
        public DbSet<Product> Products { set; get; }

        public DbSet<Country> Countries { set; get; }
        public DbSet<Currency> Currencies { set; get; }
        public DbSet<Company> companies { set; get; }
        public DbSet<Order> Orders { set; get; }

    }
}
