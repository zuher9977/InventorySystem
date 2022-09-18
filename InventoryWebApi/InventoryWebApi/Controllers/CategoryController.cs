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
    public class CategoryController : ControllerBase
    {
        IGeneric<Category> categoryGeneric;
        ICategoryRepository categoryRepository;
        public CategoryController(IGeneric<Category> _categoryGeneric, ICategoryRepository _categoryRepository)
        {
            categoryGeneric = _categoryGeneric;
            categoryRepository = _categoryRepository;
        }
        
        [HttpPost]
        [Route("AddCajegory")]
        public void AddCajegory(Category category)
        {
            categoryGeneric.Insert(category);
        }
        [HttpGet]
        [Route("GetCategories")]
        public List<Category> GetCategories()
        {
            return categoryGeneric.LoadAll();
        }
        [HttpGet]
        [Route("DeleteCategory")]
        public void DeleteCategory(int id)
        {
            categoryGeneric.Delete(id);
        }
        [HttpGet]
        [Route("GetCategoryById")]
        public Category GetCategoryById(int id)
        {
            return categoryGeneric.LoadById(id);
        }

        [HttpPost]
        [Route("UpdateCategory")]
        public void UpdateCategory(Category category)
        {
            categoryGeneric.Update(category);
        }
        [HttpGet]
        [Route("GetCategoryByName")]
        public List<Category> GetCategoryByName(string name)
        {
            return categoryRepository.GetCategoriesByName(name);
        }
    }
}

