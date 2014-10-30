using System.Web.Http;
using ExampleHttpServer.Properties;
using Microsoft.Owin.FileSystems;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.Jwt;
using Microsoft.Owin.StaticFiles;
using Microsoft.Owin.StaticFiles.ContentTypes;
using Owin;

namespace ExampleHttpServer.Bootstrap
{
    internal class Startup
    {
        private readonly string _staticFilesRoot;

        public Startup(string staticFilesRoot)
        {
            _staticFilesRoot = staticFilesRoot;
        }

        public void Configure(IAppBuilder builder)
        {
            ConfigureAuth(builder);
            ConfigureWebApi(builder);
            ConfigureStaticFileServer(builder);
        }

        private static void ConfigureAuth(IAppBuilder builder)
        {
            var issuer = Settings.Default.Issuer;
            var audience = Settings.Default.Audience;
            var tokenSigningKey = Settings.Default.TokenSigningKey;

            builder.UseJwtBearerAuthentication(
                new JwtBearerAuthenticationOptions
                {
                    AuthenticationMode = AuthenticationMode.Active,
                    AllowedAudiences = new[] { audience },
                    IssuerSecurityTokenProviders = new IIssuerSecurityTokenProvider[]
                                                   {
                                                       new SymmetricKeyIssuerSecurityTokenProvider(issuer, tokenSigningKey)
                                                   }
                });
        }

        private void ConfigureStaticFileServer(IAppBuilder builder)
        {
            var contentTypeProvider = new FileExtensionContentTypeProvider();
            contentTypeProvider.Mappings.Add(".json", "application/json");

            var options = new FileServerOptions
            {
                EnableDirectoryBrowsing = true,
                FileSystem = new PhysicalFileSystem(_staticFilesRoot)
            };

            options.StaticFileOptions.ContentTypeProvider = contentTypeProvider;

            // static file server
            builder.UseFileServer(options);
        }

        private static void ConfigureWebApi(IAppBuilder builder)
        {
            // API
            var config = new HttpConfiguration();
            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
                );
            builder.UseWebApi(config);
        }
    }
}
