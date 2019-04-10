using System;

namespace contact_app.Models
{
    public class Contact
    {
        public long ID { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public byte Gender { get; set; }
        public DateTime? BirthDate { get; set; }
        public string techno { get; set; }
        public string message { get; set; }
    }
}
