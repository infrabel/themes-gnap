@ECHO OFF
SET PORT=40829

ECHO Starting server at http://localhost:%PORT%/
pushd server
npm install && explorer.exe http://localhost:%PORT%/ && node.exe app.js %PORT% ..\
popd