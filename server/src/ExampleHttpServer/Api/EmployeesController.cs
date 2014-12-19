namespace ExampleHttpServer.Api
{
    using System.Net;
    using System.Web.Http;

    public class EmployeesController : ApiController
    {
        [Authorize]
        public IHttpActionResult Get()
        {
            return StatusCode(HttpStatusCode.Forbidden);
        }
    }
}
