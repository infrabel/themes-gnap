using Newtonsoft.Json;
using System.Collections.Generic;
using System.IO;
using System.Web.Http;

namespace ExampleHttpServer.Api
{
    public class DomainsController : ApiController
    {
        [Authorize]
        public IEnumerable<dynamic> GetAll()
        {
            return JsonConvert.DeserializeObject<IEnumerable<dynamic>>(File.ReadAllText(@"Api\Domains.json"));
        }
    }
}
