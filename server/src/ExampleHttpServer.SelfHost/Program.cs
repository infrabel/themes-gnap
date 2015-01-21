namespace ExampleHttpServer.SelfHost
{
    using Arguments;
    using Core.Bootstrap;
    using Microsoft.Owin.Hosting;
    using System;

    class Program
    {
        static void Main(string[] args)
        {
            // parse command line args
            if (!CommandLineArguments.Parse(args))
            {
                // command line args not valid
                Console.Write(CommandLineArguments.GetUsage());

                return;
            }

            var baseAddress = BuildBaseAddress();
            var root = CommandLineArguments.Parsed.Root;

            var startup = new Startup(root);

            WebApp.Start(baseAddress, startup.Configuration);

            Console.WriteLine("Listening at " + baseAddress);
            Console.ReadLine();
        }

        private static string BuildBaseAddress()
        {
            return string.Format("http://localhost:{0}", CommandLineArguments.Parsed.Port);
        }
    }
}
