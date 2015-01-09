namespace ExampleHttpServer.SelfHost.Arguments
{
    using CommandLine;
    using CommandLine.Text;

    public class CommandLineArguments
    {
        [Option('p', "port", DefaultValue = 9000, HelpText = "The port at which the server will be listening")]
        public int Port { get; set; }

        [Option('r', "root", DefaultValue = ".", HelpText = "The static files root path")]
        public string Root { get; set; }

        public static CommandLineArguments Parsed { get; private set; }

        [HelpOption]
        public static string GetUsage()
        {
            return HelpText.AutoBuild(new CommandLineArguments(),
                                      current => HelpText.DefaultParsingErrorsHandler(new CommandLineArguments(), current));
        }

        public static bool Parse(string[] args)
        {
            var options = new CommandLineArguments();
            if (!Parser.Default.ParseArguments(args, options))
            {
                // command line args not valid
                return false;
            }

            Parsed = options;
            return true;
        }
    }
}
