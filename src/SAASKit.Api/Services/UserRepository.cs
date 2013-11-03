using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SAASKit.Api.Models;

namespace SAASKit.Api.Services
{
    public class UserRepository
    {    
        public void Add(User user)
        {
            //StaticDatabase.Users.Add(user);
        }

        public User Get(int id)
        {
            return StaticDatabase.Users.FirstOrDefault(u => u.id == id);
        }

        public IEnumerable<User> GetAll()
        {
            return StaticDatabase.Users;
        }

        public void Save(User user)
        {
            // nothing to do here
            StaticDatabase.Save(user);
        }

        public void Remove(User user)
        {
            StaticDatabase.Remove(user);
        }

        public void Remove(int id)
        {
            var user = Get(id);
            Remove(user);
        }
    }
}