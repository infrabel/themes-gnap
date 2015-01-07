using System;

namespace ExampleHttpServer.Core.Api
{
    using System.Collections.Generic;
    using System.Web.Http;
    using Newtonsoft.Json;
    
    public class BankAccountsController : ApiController
    {
        [Authorize]
        public IEnumerable<dynamic> GetAll()
        {
            return JsonConvert.DeserializeObject<IEnumerable<dynamic>>(BankAccountsResources.BankAccounts);
        }
    }
}
