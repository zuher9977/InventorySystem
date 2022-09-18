using InventoryBussnissLogic.SpecificRepository;
using InventoryDataAccess.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace InventoryWebApi.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        IAccountRepository accountServices;
        IConfiguration configuration;
        public AccountController(IAccountRepository _accountServices, IConfiguration _configuration)
        {
            accountServices = _accountServices;
            configuration = _configuration;
        }
        [Authorize(Roles = "Admin")]
        [HttpGet]
        [Route("GetRoles")]
        public List<IdentityRole> AddRole()
        {
            return accountServices.getRoles();
        }
        [Authorize(Roles = "Admin")]
        [HttpGet]
        [Route("GetuserRoles")]
        public async Task<List<string>> getuserrolesforadd(string name)
        {
            return await accountServices.getuserrolesforadd(name);
        }
        [Authorize(Roles = "Admin")]
        [HttpPost]
        [Route("NewRole")]
        public async Task NewRole(AddRoleModel addRoleModel)
        {
             await accountServices.AddRole(addRoleModel);
            
        }
        [Authorize(Roles = "Admin")]
        [HttpPost]
        [Route("addroleuser")]
        public async Task addRoleToUserByName(AddRoleToUserModel addRoleToUserModel)
        {
              await accountServices.AddRemoveRole(addRoleToUserModel);
        }

        [HttpPost]
        [Route("CreateAccount")]
        public async Task<IActionResult> CreateAcc(CreateAccountModel createAccountModel)
        {
            var Result = await accountServices.CreateAccount(createAccountModel);
            if (Result.Succeeded)
            {
                return Ok("some string");
            }
            else
            {
                return Ok("some string");
            }
        }

        [HttpPost]
        [Route("Login")]
        public async Task<IActionResult> Login(SignInModel signInModel)
        {
            var result = await accountServices.SignIn(signInModel);
            if (result.Succeeded)
            {
                var user = await accountServices.getUserbyname(signInModel.Username);
                var authClaim = new List<Claim>
                {
                    new Claim(ClaimTypes.Name, signInModel.Username),
                    new Claim("UniqueValue", Guid.NewGuid().ToString())
                };
                var roles = accountServices.getUserRoles(user);
                foreach (var item in roles)
                {
                    authClaim.Add(new Claim(ClaimTypes.Role, item));
                }
                var authSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["JWT:Secret"]));

                var token = new JwtSecurityToken(
                            issuer: configuration["JWT:ValidIssuer"],
                            audience: configuration["JWT:ValidAudience"],
                            expires: DateTime.Now.AddDays(15),
                            claims: authClaim,
                            signingCredentials: new SigningCredentials(authSigningKey, SecurityAlgorithms.HmacSha256)
                            );

                return Ok(
                    new
                    {
                        token = new JwtSecurityTokenHandler().WriteToken(token)
                    });

                // build token
            }
            else
            {
                return Unauthorized();
            }
        }

    }
}
