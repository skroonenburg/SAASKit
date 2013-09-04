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
    }
}