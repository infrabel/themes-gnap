using System.Net;
using System.Web.Http;

namespace ExampleHttpServer.Api
{
    public class EmployeesController : ApiController
    {
        [Authorize]
        public IHttpActionResult Get()
        {
            return StatusCode(HttpStatusCode.Forbidden);
        }
    }
}
