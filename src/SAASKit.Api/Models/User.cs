using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SAASKit.Api.Models
{
    public class User
    {
        public string username { get; set; }
        public int id { get; set; }

        public string emailAddress { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public bool isActive { get; set; }
        public bool isLocked { get; set; }
        public string avatarImg { get; set; }

        public string checkInLocation { get; set; }
        public string checkInTime { get; set; }
        public bool isMale { get; set; }

        public void Deactivate()
        {
            isActive = false;
        }

        public void Activate()
        {
            isActive = true;
        }

        public void Lock()
        {
            isLocked = true;
        }

        public void Unlock()
        {
            isLocked = false;
        }
    }
}