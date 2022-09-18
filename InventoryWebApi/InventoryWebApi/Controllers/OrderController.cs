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
    public class OrderController : ControllerBase
    {
        IGeneric<Order> genericOrder;
        public OrderController(IGeneric<Order> _genericOrder)
        {
            genericOrder = _genericOrder;
        }

        [HttpPost]
        [Route("insert")]
        public void insert(Order order)
        {
            DateTime date1 = DateTime.Now;
            order.date=date1;
            genericOrder.Insert(order);
        }

        [HttpGet]
        [Route("getOrders")]
        public List<Order> getOrders()
        {
            return genericOrder.LoadAll();
        }

        [HttpGet]
        [Route("getOrderById")]
        public Order getOrderById(int id)
        {
            return genericOrder.LoadById(id);
        }

        [HttpPost]
        [Route("update")]
        public void update(Order order)
        {
            DateTime date1 = DateTime.Now;
            order.date = date1;
            genericOrder.Update(order);
        }

        [HttpGet]
        [Route("delete")]
        public void delete(int id)
        {
             genericOrder.Delete(id);
        }
    }
}
