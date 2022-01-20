using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission2.Models
{
    public class GradesModel
    {
        [Range(0, 100, ErrorMessage = "Please enter a number between 0 and 100")]
        public int Assign {get; set;}

        [Range(0, 100, ErrorMessage = "Please enter a number between 0 and 100")]
        public int Group { get; set; }

        [Range(0, 100, ErrorMessage = "Please enter a number between 0 and 100")]
        public int Quiz { get; set; }

        [Range(0, 100, ErrorMessage = "Please enter a number between 0 and 100")]
        public int Exam { get; set; }

        [Range(0, 100, ErrorMessage = "Please enter a number between 0 and 100")]
        public int Intex { get; set; }

    }
}
