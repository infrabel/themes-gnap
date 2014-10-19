using Newtonsoft.Json;
using System.Collections.Generic;
using System.IO;
using System.Web.Http;

namespace ExampleHttpServer.Api
{
    public class BankAccountsController : ApiController
    {
        [Authorize]
        public IEnumerable<dynamic> GetAll()
        {
            return JsonConvert.DeserializeObject<IEnumerable<dynamic>>(File.ReadAllText(@"Api\BankAccounts.json"));
        }
    }
}
