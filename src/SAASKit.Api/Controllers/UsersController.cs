using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SAASKit.Api.Models;

namespace SAASKit.Api.Controllers
{
    public class UsersController : ApiController
    {
        public static List<User> users = new List<User>
            {
                new User { id = 1, emailAddress = "john@smith.com", firstName = "John", lastName = "Smith", username = "john.smith" },
                new User { id = 2, emailAddress = "james@jones.com", firstName = "James", lastName = "Jones", username = "james.jones" },
                new User { id = 3, emailAddress = "steven@brown.com", firstName = "Steven", lastName = "Brown", username = "steven.brown" },
                new User { id = 4, emailAddress = "bianca@cole.com", firstName = "Bianca", lastName = "Cole", username = "bianca.cole" }
            };

        // GET api/users
        public IEnumerable<User> Get()
        {
            return users;
        }

        // GET api/users/5
        public User Get(int id)
        {
            return users.FirstOrDefault(x => x.id == id);
        }

        // POST api/users
        public void Post([FromBody]User value)
        {
            users.Add(value);
        }

        // PUT api/users/5
        public void Put(int id, [FromBody]User value)
        {
            Delete(id);
            users.Add(value);
        }

        // DELETE api/users/5
        public void Delete(int id)
        {
            users.Remove(users.FirstOrDefault(x => x.id == id));
        }
    }
}