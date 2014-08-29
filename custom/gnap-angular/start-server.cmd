@ECHO OFF
SET PORT=40829
ECHO Launching browser at http://localhost:%PORT%/examples.html - It is possibly you will have to refresh.
explorer.exe http://localhost:%PORT%/examples.html

ECHO Starting server at http://localhost:%PORT%/
server\simple-http-server.exe %PORT% ..\