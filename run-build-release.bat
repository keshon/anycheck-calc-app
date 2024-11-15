@echo off

echo Deleting previous release APK...
del /f /q android\app\build\outputs\apk\release\*.apk
del /f /q android\app\build\outputs\apk\release\*.json

echo Building release APK...
npx react-native run-android --variant=release

echo Opening Release folder
explorer android\app\build\outputs\apk\release