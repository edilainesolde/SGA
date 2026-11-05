@echo off
setlocal

set "APP_DIR=%~dp0"

netstat -ano | findstr /R /C:":3001 .*LISTENING" >nul
if errorlevel 1 (
	start "SGA API (3001)" /D "%APP_DIR%beck_end" cmd /k "if not exist node_modules npm.cmd install & npm.cmd start"
)

netstat -ano | findstr /R /C:":3002 .*LISTENING" >nul
if errorlevel 1 (
	start "Telemetria (3002)" /D "%APP_DIR%font_end\backend" cmd /k "if not exist node_modules npm.cmd install & node server.js"
)

netstat -ano | findstr /R /C:":3000 .*LISTENING" >nul
if errorlevel 1 (
	start "Frontend (3000)" /D "%APP_DIR%font_end" cmd /k "if not exist node_modules npm.cmd install & set BROWSER=none & npm.cmd start"
)

echo Aguardando o frontend iniciar...
for /L %%I in (1,1,30) do (
	curl.exe --silent --fail http://localhost:3000/ >nul 2>nul
	if not errorlevel 1 goto open_browser
	timeout /t 2 /nobreak >nul
)

echo O frontend ainda nao respondeu; abrindo o endereco mesmo assim.

:open_browser
start "" "http://localhost:3000/"
endlocal