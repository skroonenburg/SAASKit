using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Web.Http;
using SAASKit.Api.Models;

namespace SAASKit.Api.Controllers
{
    public class UsersController : ApiController
    {
        private const int UiPauseTime = 2000;
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
            Thread.Sleep(UiPauseTime * 2);
            return users.OrderBy(x => x.firstName);
        }

        // GET api/users/5
        public User Get(int id)
        {
            Thread.Sleep(UiPauseTime);
            return users.FirstOrDefault(x => x.id == id);
        }

        // POST api/users
        public void PostNewUser([FromBody]User value)
        {
            users.Add(value);
        }

        // PUT api/users/5
        public void PutExistingUser(int id, [FromBody]User value)
        {
            Thread.Sleep(UiPauseTime);
            Delete(id);
            users.Add(value);
        }

        // DELETE api/users/5
        public void Delete(int id)
        {
            users.Remove(users.FirstOrDefault(x => x.id == id));
        }

        // POST api/users/5/deactivate
        [HttpPost]
        [ActionName("Deactivate")]
        public User Deactivate(int id)
        {
            Thread.Sleep(UiPauseTime);

            var user = users.FirstOrDefault(x => x.id == id);
            user.Deactivate();
            return user;
        }

        // POST api/users/5/activate
        [HttpPost]
        [ActionName("Activate")]
        public User Activate(int id)
        {
            Thread.Sleep(UiPauseTime);

            var user = users.FirstOrDefault(x => x.id == id);
            user.Activate();
            return user;
        }

        // POST api/users/5/unlock
        [HttpPost]
        [ActionName("Unlock")]
        public User Unlock(int id)
        {
            Thread.Sleep(UiPauseTime*5);

            var user = users.FirstOrDefault(x => x.id == id);
            user.Unlock();

            return user;
        }

        // POST api/users/5/lock
        [HttpPost]
        [ActionName("Lock")]
        public User Lock(int id)
        {
            Thread.Sleep(UiPauseTime * 5);

            var user = users.FirstOrDefault(x => x.id == id);
            user.Lock();

            return user;
        }
    }
}