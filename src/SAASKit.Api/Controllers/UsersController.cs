using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Web.Http;
using SAASKit.Api.Models;
using SAASKit.Api.Services;

namespace SAASKit.Api.Controllers
{
    public class UsersController : ApiController
    {
        private const int UiPauseTime = 1000;
        private readonly UserRepository _userRepository = new UserRepository();

        // GET api/users
        public IEnumerable<User> Get()
        {
            Thread.Sleep(UiPauseTime);
            return _userRepository.GetAll().OrderBy(x => x.firstName);
        }

        // GET api/users/5
        public User Get(int id)
        {
            Thread.Sleep(UiPauseTime);
            return _userRepository.Get(id);
        }

        // POST api/users
        public void PostNewUser([FromBody]User value)
        {
            _userRepository.Add(value);
        }

        // POST api/users/5/updateprofile
        [HttpPost]
        [ActionName("UpdateProfile")]
        public void UpdateProfile(int id, [FromBody]User value)
        {
            Thread.Sleep(UiPauseTime);
            _userRepository.Save(value);
        }

        // DELETE api/users/5
        public void Delete(int id)
        {
            _userRepository.Remove(id);
        }

        // POST api/users/5/deactivate
        [HttpPost]
        [ActionName("Deactivate")]
        public User Deactivate(int id)
        {
            Thread.Sleep(UiPauseTime);

            var user = _userRepository.Get(id);
            user.Deactivate();
            return user;
        }

        // POST api/users/5/activate
        [HttpPost]
        [ActionName("Activate")]
        public User Activate(int id)
        {
            Thread.Sleep(UiPauseTime);

            var user = _userRepository.Get(id);
            user.Activate();

            return user;
        }

        // POST api/users/5/unlock
        [HttpPost]
        [ActionName("Unlock")]
        public User Unlock(int id)
        {
            Thread.Sleep(UiPauseTime*5);

            var user = _userRepository.Get(id);
            user.Unlock();

            return user;
        }

        // POST api/users/5/lock
        [HttpPost]
        [ActionName("Lock")]
        public User Lock(int id)
        {
            Thread.Sleep(UiPauseTime * 5);

            var user = _userRepository.Get(id);
            user.Lock();

            return user;
        }
    }
}