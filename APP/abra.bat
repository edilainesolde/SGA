@echo off
setlocal

set "APP_DIR=%~dp0"

if /I "%~1"=="api" goto run_api
if /I "%~1"=="telemetria" goto run_telemetria
if /I "%~1"=="frontend" goto run_frontend

netstat -ano | findstr /R /C:":3001 .*LISTENING" >nul
if errorlevel 1 (
	start "SGA API (3001)" /D "%APP_DIR%beck_end" "%ComSpec%" /k call "%~f0" api
	call :wait_port 3001
	if errorlevel 1 goto api_failed
)

netstat -ano | findstr /R /C:":3002 .*LISTENING" >nul
if errorlevel 1 (
	start "Telemetria (3002)" /D "%APP_DIR%font_end\backend" "%ComSpec%" /k call "%~f0" telemetria
	call :wait_port 3002
	if errorlevel 1 goto telemetry_failed
)

netstat -ano | findstr /R /C:":3000 .*LISTENING" >nul
if errorlevel 1 (
	start "Frontend (3000)" /D "%APP_DIR%font_end" "%ComSpec%" /k call "%~f0" frontend
)

echo Aguardando o frontend iniciar...
for /L %%I in (1,1,60) do (
	curl.exe --silent --fail http://localhost:3000/ >nul 2>nul
	if not errorlevel 1 goto open_browser
	timeout /t 2 /nobreak >nul
)

echo O frontend nao respondeu em 120 segundos. Verifique a janela Frontend (3000).
pause
exit /b 1

:open_browser
start "" "http://localhost:3000/"
exit /b 0

:wait_port
for /L %%I in (1,1,60) do (
	netstat -ano | findstr /R /C:":%~1 .*LISTENING" >nul
	if not errorlevel 1 exit /b 0
	timeout /t 2 /nobreak >nul
)
exit /b 1

:api_failed
echo A API nao respondeu na porta 3001. Verifique a janela SGA API (3001).
pause
exit /b 1

:telemetry_failed
echo A telemetria nao respondeu na porta 3002. Verifique a janela Telemetria (3002).
pause
exit /b 1

:run_api
if not exist node_modules (
	call npm.cmd install
	if errorlevel 1 (
		echo Falha ao instalar as dependencias da API.
		pause
		exit /b 1
	)
)
call npm.cmd start
exit /b

:run_telemetria
if not exist node_modules (
	call npm.cmd install
	if errorlevel 1 (
		echo Falha ao instalar as dependencias da telemetria.
		pause
		exit /b 1
	)
)
node.exe server.js
exit /b

:run_frontend
if not exist node_modules (
	call npm.cmd install
	if errorlevel 1 (
		echo Falha ao instalar as dependencias do frontend.
		pause
		exit /b 1
	)
)
set "BROWSER=none"
call npm.cmd start
exit /b