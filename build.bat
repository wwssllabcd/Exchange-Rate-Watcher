rmdir /s /q build
md build 
xcopy erw build /s
cd build/chrome
jar cvf erw.jar content/
rmdir /s /q content
cd ..
jar cvf erw.xpi .
copy erw.xpi ..

cd..
rmdir /s /q build

pause
