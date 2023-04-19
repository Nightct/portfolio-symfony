@echo off

echo "Starting the server..."
symfony server:start

echo "Compiling assets..."
yarn encore dev --watch