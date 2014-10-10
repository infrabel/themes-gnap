using System.Web.Http;
using ExampleHttpServer.Auth;

namespace ExampleHttpServer.Api
{
    public class TokensController : ApiController
    {
        [AllowAnonymous]
        public IHttpActionResult Post(Credentials credentials)
        {
            if (credentials == null)
                return BadRequest("Missing credentials.");

            if (!(credentials.Username == "user" && credentials.Password == "user"))
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
