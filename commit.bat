@echo off

git add .
set /P commit="Insert the Commit Message: "
git commit -m "%commit%"
git push