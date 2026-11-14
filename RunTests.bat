@echo off
node "%~dp0test\activationSwitch.js" || exit /b 1
node "%~dp0test\run.js"
