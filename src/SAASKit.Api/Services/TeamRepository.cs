using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SAASKit.Api.Models;

namespace SAASKit.Api.Services
{
    public class TeamRepository
    {
        public void Add(Team team)
        {
            StaticDatabase.Add(team);
        }

        public void Save(Team team)
        {
            // nothing to do here
        }

        public IEnumerable<Team> GetAll()
        {
            return StaticDatabase.Teams;
        }

        public Team Get(int id)
        {
            return StaticDatabase.Teams.FirstOrDefault(t => t.id == id);
        }

        public void Remove(Team team)
        {
            StaticDatabase.Remove(team);
        }

        public void Remove(int id)
        {
            //StaticDatabase.Remove(id);
        }
    }
}