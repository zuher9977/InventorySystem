using InventoryDataAccess.Models;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace InventoryBussnissLogic.SpecificRepository
{
    public interface IAccountRepository
    {
        Task<IdentityResult> CreateAccount(CreateAccountModel createAccountModel);
        Task<SignInResult> SignIn(SignInModel signInModel);
        Task Logout();
        Task AddRemoveRole(AddRoleToUserModel addRoleToUserModel);
        List<IdentityRole> getRoles();
        Task AddRole(AddRoleModel addRoleModel);
        IdentityUser getuser(string id);
        Task<IdentityUser> getUserbyname(string username);
        List<string> getUserRoles(IdentityUser obj);
        Task<List<string>> getuserrolesforadd(string username);
    }
}
