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
                        new User { id = 1, emailAddress = "john@smith.com", firstName = "John", lastName = "Smith", username = "john.smith", avatarImg = "/image/1.jpg", checkInTime = "1:32PM", checkInLocation = "Meeting Room #1", isMale = true, locationX = 205, locationY = 640},
                        new User { id = 2, emailAddress = "james@jones.com", firstName = "James", lastName = "Jones", username = "james.jones", avatarImg = "/image/3.jpg", checkInTime = "2:16PM", checkInLocation = "Boardroom", isMale = true, locationX = 135, locationY = 330 },
                        new User { id = 3, emailAddress = "sally@brown.com", firstName = "Sally", lastName = "Brown", username = "sally.brown", avatarImg = "/image/2.jpg", checkInTime = "9:45AM", checkInLocation = "Sally Brown's Office", locationX = 30, locationY = 85 },
                        new User { id = 4, emailAddress = "bianca@cole.com", firstName = "Bianca", lastName = "Cole", username = "bianca.cole", avatarImg = "/image/7.jpg",  checkInTime = "10:49PM", checkInLocation = "Cafe", locationX = 960, locationY = 360},
                    }
                },
                new Team { id = 2, name = "Administration", avatarImg = "/image/team/marketing.png", Users = new List<User>()
                    {
                        new User { id = 6, emailAddress = "julie@green.com", firstName = "Julie", lastName = "Green", username = "julie.green", avatarImg = "/image/8.jpg", checkInTime = "9:45AM", checkInLocation = "Meeting Room #2", locationX = 60, locationY = 560 },
                        new User { id = 7, emailAddress = "chin@hu.com", firstName = "Chin", lastName = "Hu", username = "chin.hu", avatarImg = "/image/10.jpg",  checkInTime = "10:49PM", checkInLocation = "Cafe", locationX = 905, locationY = 80},
                        new User { id = 8, emailAddress = "hendry@lyle.com", firstName = "Henry", lastName = "Lyle", username = "henry.lyle", avatarImg = "/image/6.jpg",  checkInTime = "1:37PM", checkInLocation = "Out of Office", isMale = true, locationX = 205, locationY = 60  }
                    }
                },
                new Team { id = 3, name = "Sales", avatarImg = "/image/team/marketing.png", Users = new List<User>()
                    {
                        new User { id = 9, emailAddress = "sam@french.com", firstName = "Sam", lastName = "French", username = "sam.french", avatarImg = "/image/4.jpg", checkInTime = "1:32PM", checkInLocation = "Meeting Room #1", isMale = true, locationX = 205, locationY = 560  },
                        new User { id = 10, emailAddress = "sean@bowles.com", firstName = "Sean", lastName = "Bowles", username = "sean.bowles", avatarImg = "/image/5.jpg", checkInTime = "2:16PM", checkInLocation = "Boardroom", isMale = true , locationX = 40, locationY = 280 },
                        new User { id = 11, emailAddress = "raj@amit.com", firstName = "Raj", lastName = "Amit", username = "raj.amit", avatarImg = "/image/9.jpg", checkInTime = "9:45AM", checkInLocation = "Meeting Room #2", isMale = true, locationX = 60, locationY = 640  },
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