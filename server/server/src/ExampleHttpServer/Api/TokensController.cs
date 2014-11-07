using ExampleHttpServer.Auth;
using System.Web.Http;

namespace ExampleHttpServer.Api
{
    public class TokensController : ApiController
    {
        [AllowAnonymous]
        public IHttpActionResult Post(Credentials credentials)
        {
            if (credentials == null)
                return BadRequest("Missing credentials.");

            if (!(credentials.Username == "john" && credentials.Password == "1234"))
                return BadRequest("Invalid credentials.");

            var token = new JwtTokenService().GenerateToken(credentials.Username);

            return Ok(new { Token = token });
        }
    }

    public class Credentials
    {
        public string Username { get; set; }

        public string Password { get; set; }
    }
}
