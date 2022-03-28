#!/usr/bin/env sh

yarn build &&
cd build &&
git init &&
git add . &&
git commit -m 'deploy' &&
git remote add origin git@gitee.com:heycn/react-todo-website.git &&
git push -u origin master -f
cd -