using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SAASKit.Api.Models;

namespace SAASKit.Api.Services
{
    public static class StaticDatabase
    {
        private static IList<Team> _teams = new List<Team>()
            {
                new Team { id = 1, name = "Marketing", avatarImg = "/image/team/marketing.png", Users = new List<User>()
                    {
                        new User { id = 1, emailAddress = "john@smith.com", firstName = "John", lastName = "Smith", username = "john.smith", avatarImg = "/image/1.jpg", checkInTime = "1:32PM", checkInLocation = "Meeting Room #1", isMale = true },
                        new User { id = 2, emailAddress = "james@jones.com", firstName = "James", lastName = "Jones", username = "james.jones", avatarImg = "/image/9.jpg", checkInTime = "2:16PM", checkInLocation = "Boardroom", isMale = true  },
                        new User { id = 3, emailAddress = "sally@brown.com", firstName = "Sally", lastName = "Brown", username = "sally.brown", avatarImg = "/image/4.jpg", checkInTime = "9:45AM", checkInLocation = "Meeting Room #2" },
                        new User { id = 4, emailAddress = "bianca@cole.com", firstName = "Bianca", lastName = "Cole", username = "bianca.cole", avatarImg = "/image/5.jpg",  checkInTime = "10:49PM", checkInLocation = "Cafe"},
                        new User { id = 5, emailAddress = "rebecca@north.com", firstName = "Rebecca", lastName = "North", username = "rebecca.north", avatarImg = "/image/6.jpg",  checkInTime = "1:37PM", checkInLocation = "Out of Office" }
                    }
                },
                new Team { id = 2, name = "Administration", avatarImg = "/image/team/marketing.png", Users = new List<User>()
                    {
                        new User { id = 6, emailAddress = "sally@brown.com", firstName = "Sally", lastName = "Brown", username = "sally.brown", avatarImg = "/image/4.jpg", checkInTime = "9:45AM", checkInLocation = "Meeting Room #2" },
                        new User { id = 7, emailAddress = "bianca@cole.com", firstName = "Bianca", lastName = "Cole", username = "bianca.cole", avatarImg = "/image/5.jpg",  checkInTime = "10:49PM", checkInLocation = "Cafe"},
                        new User { id = 8, emailAddress = "rebecca@north.com", firstName = "Rebecca", lastName = "North", username = "rebecca.north", avatarImg = "/image/6.jpg",  checkInTime = "1:37PM", checkInLocation = "Out of Office" }
                    }
                },
                new Team { id = 3, name = "Sales", avatarImg = "/image/team/marketing.png", Users = new List<User>()
                    {
                        new User { id = 9, emailAddress = "john@smith.com", firstName = "John", lastName = "Smith", username = "john.smith", avatarImg = "/image/1.jpg", checkInTime = "1:32PM", checkInLocation = "Meeting Room #1", isMale = true  },
                        new User { id = 10, emailAddress = "james@jones.com", firstName = "James", lastName = "Jones", username = "james.jones", avatarImg = "/image/9.jpg", checkInTime = "2:16PM", checkInLocation = "Boardroom", isMale = true  },
                        new User { id = 11, emailAddress = "sally@brown.com", firstName = "Sally", lastName = "Brown", username = "sally.brown", avatarImg = "/image/4.jpg", checkInTime = "9:45AM", checkInLocation = "Meeting Room #2" },
                        new User { id = 12, emailAddress = "bianca@cole.com", firstName = "Bianca", lastName = "Cole", username = "bianca.cole", avatarImg = "/image/5.jpg",  checkInTime = "10:49PM", checkInLocation = "Cafe"},
                    }
                }
                
            };
        
        public static IEnumerable<User> Users
        {
            get { return _teams.SelectMany(team => team.Users); }
        }

        public static IEnumerable<Team> Teams
        {
            get { return _teams; }
        }

        public static void Save(User user)
        {
            var team = _teams.FirstOrDefault(x => x.Users.Any(u => u.id == user.id));

            if (team != null)
            {
                team.UpdateUser(user);
            }
        }

        public static void Remove(User user)
        {
            var team = _teams.FirstOrDefault(x => x.Users.Any(u => u.id == user.id));

            if (team != null)
            {
                team.RemoveUser(user);
            }
        }

        public static void Add(Team team)
        {
            _teams.Add(team);
        }

        public static void Remove(Team team)
        {
            _teams.Remove(team);
        }
    }
}