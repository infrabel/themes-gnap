using System;
using System.IdentityModel.Tokens;
using System.Security.Claims;
using ExampleHttpServer.Properties;
using Microsoft.Owin.Security.DataHandler.Encoder;

namespace ExampleHttpServer.Auth
{
    public class JwtTokenService
    {

        private static readonly JwtSecurityTokenHandler TokenHandler = new JwtSecurityTokenHandler();
        private readonly string _issuer;
        private readonly string _audience;
        private readonly byte[] _tokenSigningKey;
        
        public JwtTokenService() : this(
            Settings.Default.Issuer,
            Settings.Default.Audience,
            TextEncodings.Base64.Decode(Settings.Default.TokenSigningKey))
        {
        }

        public JwtTokenService(string issuer, string audience, byte[] tokenSigningKey)
        {
            _issuer = issuer;
            _audience = audience;
            _tokenSigningKey =  tokenSigningKey;
        }

        public string GenerateToken(string username)
        {
            if (username == null)
                throw new ArgumentNullException("username");

            // create JWT token
            var token = TokenHandler.CreateToken(
                subject: new ClaimsIdentity(new[] {
				    new Claim(ClaimTypes.Name, username),
                    new Claim(ClaimTypes.GivenName, "John"),
                    new Claim(ClaimTypes.Surname, "Doe"),
                    new Claim(ClaimTypes.Email, "john@doe.com")
			    }),
                issuer: _issuer,
                audience: _audience,
                signingCredentials: new SigningCredentials(
                    new InMemorySymmetricSecurityKey(_tokenSigningKey),
                    "http://www.w3.org/2001/04/xmldsig-more#hmac-sha256",
                    "http://www.w3.org/2001/04/xmlenc#sha256")
                );

            // write JWT token to string format
            return TokenHandler.WriteToken(token);
        }

    }
}
