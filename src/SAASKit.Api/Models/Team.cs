using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SAASKit.Api.Models
{
    public class Team
    {
        public int id { get; set; }
        private IList<User> _users;
        public string name { get; set; }
        public string avatarImg { get; set; }

        public Team()
        {
            _users = new List<User>();
        }

        public IEnumerable<User> Users
        {
            get { return _users; }
            internal set { _users = (IList<User>) value; }
        }

        public void AddUser(User user)
        {
            _users.Add(user);
        }

        public void RemoveUser(User user)
        {
            _users.Remove(user);
        }

        public void RemoveUser(int id)
        {
            _users.Remove(_users.FirstOrDefault(x => x.id == id));
        }

        public void UpdateUser(User user)
        {
            RemoveUser(user.id);
            AddUser(user);
        }
    }
}