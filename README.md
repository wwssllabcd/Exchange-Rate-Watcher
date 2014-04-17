Exchange-Rate-Watcher
=====================
看匯率的 firefox extension

這個套件是用ajax去台灣銀行抓網頁回來parse
所以說，台灣銀行網頁若是換格式，就不能用了 

目前是顯示在status bar，如果沒有 status bar的話，建議安裝 barlesque(可顯示status bar)套件


==== 如何安裝 =====
Build 環境為 window

clone 本專案後，根目錄下有個build.bat
執行'build.bat' 之後，就會自動生成 erw.xpi
再把該檔案拖到firefox上面，即可開始安裝
