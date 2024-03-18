@echo off

git pull

echo 1. Normal Commit.
echo 2. Fork Commit [Igor]
set choice=
set /P choice=Escreva o número do commit que deseja: 
if not '%choice%'=='' set choice=%choice:~0,1%
if '%choice%'=='1' goto commit1
if '%choice%'=='2' goto commit2
echo "%choice%" não é uma opção válida.
echo.

goto start
:commit1
git add .
set /P commit="Insert the Commit Message: "
git commit -m "%commit%"
git push
goto end

:commit2
git add .
set /P commit="Insert the Commit Message: "
git commit -m "%commit%"
git push DBCarlos main
goto end
:end
pause