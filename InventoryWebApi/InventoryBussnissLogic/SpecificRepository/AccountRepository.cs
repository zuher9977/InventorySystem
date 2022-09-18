using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using InventoryDataAccess.Models;
using System.Linq;

namespace InventoryBussnissLogic.SpecificRepository
{
    public class AccountRepository: IAccountRepository
    {
        UserManager<IdentityUser> userManager;
        SignInManager<IdentityUser> signInManager;
        RoleManager<IdentityRole> roleManager;
        public AccountRepository(UserManager<IdentityUser> _userManager, SignInManager<IdentityUser> _signInManager, RoleManager<IdentityRole> _roleManager)
        {
            userManager = _userManager;
            signInManager = _signInManager;
            roleManager = _roleManager;
        }

        public async Task<IdentityResult> CreateAccount(CreateAccountModel createAccountModel)
        {
            IdentityUser user = new IdentityUser();
            user.UserName = createAccountModel.UserName;
            user.Email = createAccountModel.Email;
            var result = await userManager.CreateAsync(user, createAccountModel.Password);
            return result;
        }
        public async Task<SignInResult> SignIn(SignInModel signInModel)
        {
            var result = await signInManager.PasswordSignInAsync(signInModel.Username, signInModel.Password, signInModel.RememberMe, false);
            return result;
        }
        public async Task Logout()
        {
            await signInManager.SignOutAsync();
        }

        public List<IdentityRole> getRoles()
        {
            List<IdentityRole> li = roleManager.Roles.ToList();
            return li;
        }
        public async Task AddRole(AddRoleModel addRoleModel)
        {
            IdentityRole role = new IdentityRole();
            role.Name = addRoleModel.Name;
            await roleManager.CreateAsync(role);
        }

        public IdentityUser getuser(string id)
        {
            IdentityUser identityUser = userManager.Users.Where(i => i.Id == id).First();
            return identityUser;
        }
        public async Task<IdentityUser> getUserbyname(string username)
        {
            var result = await userManager.FindByNameAsync(username);
            return result;
        }
        public List<string> getUserRoles(IdentityUser obj)
        {
            List<string> li = userManager.GetRolesAsync(obj).Result.ToList();
            return li;
        }
        public async Task<List<string>> getuserrolesforadd(string username)
        {
            IdentityUser user = await userManager.FindByNameAsync(username);
            List<string> li = userManager.GetRolesAsync(user).Result.ToList();
            return li;
        }

        public async Task AddRemoveRole(AddRoleToUserModel addRoleToUserModel)
        {
            IdentityUser user = userManager.Users.Where(n => n.UserName == addRoleToUserModel.username).First();
            IdentityRole role = roleManager.Roles.Where(n => n.Name == addRoleToUserModel.rolename).First();

            if (await userManager.IsInRoleAsync(user, role.Name) == false) 
            {
                 await userManager.AddToRoleAsync(user, role.Name);
            }
            else if (await userManager.IsInRoleAsync(user, role.Name) == true) 
            {
                 await userManager.RemoveFromRoleAsync(user, role.Name);
            }

        }
    }
}
