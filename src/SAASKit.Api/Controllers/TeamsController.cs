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
    public class TeamsController : ApiController
    {
        private const int UiPauseTime = 1000;
        private readonly TeamRepository _teamRepository = new TeamRepository();

        // GET api/users
        public IEnumerable<Team> Get()
        {
            Thread.Sleep(UiPauseTime);
            return _teamRepository.GetAll().OrderBy(x => x.name);
        }

        // GET api/teams/5
        public Team Get(int id)
        {
            Thread.Sleep(UiPauseTime);
            return _teamRepository.Get(id);
        }

        // POST api/teams/5/users
        [HttpGet]
        [ActionName("users")]
        public IEnumerable<User> UpdateTeam(int id)
        {
            Thread.Sleep(UiPauseTime);
            return _teamRepository.Get(id).Users;
        }

        // POST api/teams
        public void PostNewUser([FromBody]Team value)
        {
            _teamRepository.Add(value);
        }

        // POST api/teams/5/updateteam
        [HttpPost]
        [ActionName("UpdateTeam")]
        public void UpdateTeam(int id, [FromBody]Team value)
        {
            Thread.Sleep(UiPauseTime);
            _teamRepository.Save(value);
        }

        // DELETE api/teams/5
        public void Delete(int id)
        {
            _teamRepository.Remove(id);
        }
    }
}