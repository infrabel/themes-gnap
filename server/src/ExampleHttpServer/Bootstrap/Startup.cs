namespace ExampleHttpServer.Bootstrap
{
    using System;
    using System.Security.Claims;
    using GNaP.Owin.Authentication.Jwt;
    using System.Web.Http;
    using Properties;
    using Microsoft.Owin.FileSystems;
    using Microsoft.Owin.Security;
    using Microsoft.Owin.Security.Jwt;
    using Microsoft.Owin.StaticFiles;
    using Microsoft.Owin.StaticFiles.ContentTypes;
    using Owin;

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

            builder.UseJwtTokenIssuer(new JwtTokenIssuerOptions
            {
                Issuer = issuer,
                Audience = audience,
                TokenSigningKey = tokenSigningKey,
                IssuerPath = "api/tokens",
                Authenticate = (username, password) =>
                {
                    // Dummy example authentication check
                    if (!(username == Settings.Default.DummyUser && password == Settings.Default.DummyPass))
                        return null;

                    return new[]
                    {
                        new Claim(ClaimTypes.AuthenticationInstant, DateTime.UtcNow.ToString("yyyy-MM-ddTHH:mm:ss.fffZ")),
                        new Claim(ClaimTypes.AuthenticationMethod, AuthenticationTypes.Password),
                        new Claim(ClaimTypes.Name, username),
                        new Claim(ClaimTypes.GivenName, "John"),
                        new Claim(ClaimTypes.Surname, "Doe"),
                        new Claim(ClaimTypes.Email, "john@doe.com")
                    };
                }
            });

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
                EnableDefaultFiles = true,
                FileSystem = new PhysicalFileSystem(_staticFilesRoot)
            };

            options.DefaultFilesOptions.DefaultFileNames.Add("about.html");

            options.StaticFileOptions.ContentTypeProvider = contentTypeProvider;

            builder.UseFileServer(options);
        }

        private static void ConfigureWebApi(IAppBuilder builder)
        {
            var config = new HttpConfiguration();

            config.Routes.MapHttpRoute(name: "DefaultApi",
                                       routeTemplate: "api/{controller}/{id}",
                                       defaults: new { id = RouteParameter.Optional });

            builder.UseWebApi(config);
        }
    }
}
