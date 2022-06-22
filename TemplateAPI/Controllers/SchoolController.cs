using Microsoft.AspNetCore.Mvc;

namespace TemplateAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SchoolController : ControllerBase
    {
        private readonly ILogger<SchoolController> _logger;

        public SchoolController(ILogger<SchoolController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetSchool")]
        public IEnumerable<School> Get()
        {
            return GetTestData();
        }

        private IEnumerable<School> GetTestData()
        {
            return new List<School>()
            {
                new School() { Name = "School A", Code = "XAS", Description = "Bingo Jingo Tingo"},
                new School() { Name = "Another School", Code = "S234", Description = "Jelly Belly High School"},
                new School() { Name = "Velvet Underground", Code = "34556", Description = "Countdown" }
            };
        }
    }
}