using InventoryBussnissLogic.SpecificRepository;
using InventoryDataAccess.Entities;
using InventoryDataAccess.Generic;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace InventoryWebApi.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        IGeneric<Product> ProductGeneric;
        IproductRepository productRepository;
        public ProductController(IGeneric<Product> _ProductGeneric, IproductRepository _productRepository)
        {
            ProductGeneric = _ProductGeneric;
            productRepository = _productRepository;
        }
        [Authorize(Roles = "Admin")]
        [HttpPost]
        [Route("addProduct")]
        public void addProduct(Product product)
        {
            ProductGeneric.Insert(product);
        }
        [Authorize(Roles = "Admin")]
        [HttpGet]
        [Route("getProducts")]
        public List<Product> getProducts()
        {
            List<Product> li= productRepository.GetProducts();
            return li;
        }
        [Authorize(Roles = "Admin")]
        [HttpGet]
        [Route("deleteProducts")]
        public void deleteProducts(int id)
        {
             ProductGeneric.Delete(id);
        }
        [Authorize(Roles = "Admin")]
        [HttpGet]
        [Route("getProductbyId")]
        public Product getProductbyId(int id)
        {
            return ProductGeneric.LoadById(id);
        }
        [Authorize(Roles = "Admin")]
        [HttpPost]
        [Route("updateProduct")]
        public void updateProduct(Product product)
        {
            ProductGeneric.Update(product);
        }


        [HttpPost]
        [Route("uploadFile")]
        public string uploadFile()
        {
            IFormFile file = HttpContext.Request.Form.Files[0];

            string filePath = Path.Combine(Directory.GetCurrentDirectory(), @"wwwroot/Uploads", file.FileName);
            file.CopyTo(new FileStream(filePath, FileMode.Create));

            return file.FileName;
        }


    }
}
