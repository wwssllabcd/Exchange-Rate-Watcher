	var http_request = false;
	var msg;

	//Ajax的部份
    function makeRequest(url) {
        http_request = false;

        if (window.XMLHttpRequest) { // Mozilla, Safari,...
            http_request = new XMLHttpRequest();
			
            if (http_request.overrideMimeType) {
                http_request.overrideMimeType('text/xml');
            }
        } else if (window.ActiveXObject) { // IE
            try {
                http_request = new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {
                try {
                    http_request = new ActiveXObject("Microsoft.XMLHTTP");
                } catch (e) {}
            }
        }

        if (!http_request) {
            alert('Giving up :( Cannot create an XMLHTTP instance');
            return false;
        }
		//http_request.setRequestHeader("Content-Type","application/x-www-form-urlencoded;");
		//http_request.setRequestHeader("charset","utf-8");
        http_request.onreadystatechange = alertContents;
        http_request.open('get', url, true);
        http_request.send(null);

    }

	//移掉所有在該節點的元素
	function removeAllChild(eleName){
		var parent = document.getElementById(eleName);
		while (parent.hasChildNodes()){
			parent.removeChild(parent.lastChild);
		}	
	}
	
	//加一行到指定的 toolTipId 中
	function addLine(toolTipId,msg){
		var parent =  document.getElementById(toolTipId);
		aEl = document.createElement("label");
		aEl.setAttribute("value",msg);
		parent.appendChild(aEl);
		aEl=null;
		parent=null;
	}
	
	function showInTooltip(toolTipId,msg){
		removeAllChild(toolTipId);
		var parent =  document.getElementById(toolTipId);
		var high = msg.length/150;
		for(i=0; i<10; i++){
			var aLine = msg.substring(0+i*150,150+i*150);
			addLine(toolTipId,aLine);
			aLine=null;
		}
	}
	
	
    function alertContents() {
		//window.alert(http_request.readyState);
		switch(http_request.readyState){               
		case 1:
			removeAllChild("erw-vbox");
			addLine("erw-vbox","正在連接...")
			break;
		case 2:
			removeAllChild("erw-vbox");
			addLine("erw-vbox","正在讀取...")                       
			break;
		case 3:
			removeAllChild("erw-vbox");
			addLine("erw-vbox","正在交互...")                                                  
			break;
		case 4:
            if (http_request.status == 200) {
				try{	
					//window.alert(http_request.getAllResponseHeaders());
					removeAllChild("erw-vbox");
					msg = http_request.responseText;
					
					addLine("erw-vbox","幣別： 現金買入 , 即期買入");
					//showInTooltip("erw-vbox",msg);
					
					var result;
					result = findKeyWord("美金 (USD)",msg,2);
					result2 = findKeyWord("美金 (USD)",msg,4);
					addLine("erw-vbox","美金：" + result +" , "+ result2);
					
					result = findKeyWord("港幣 (HKD)",msg,2);
					result2 = findKeyWord("港幣 (HKD)",msg,4);
					addLine("erw-vbox","港幣：" + result +" , "+ result2);
					
					result = findKeyWord("英鎊 (GBP)",msg,2);
					result2 = findKeyWord("英鎊 (GBP)",msg,4);
					addLine("erw-vbox","英鎊：" + result +" , "+ result2);
					
					result = findKeyWord("澳幣 (AUD)",msg,2);
					result2 = findKeyWord("澳幣 (AUD)",msg,4);
					addLine("erw-vbox","澳幣：" + result +" , "+ result2);
					
					result = findKeyWord("加拿大幣 (CAD)",msg,2);
					result2 = findKeyWord("加拿大幣 (CAD)",msg,4);
					addLine("erw-vbox","加拿大幣：" + result +" , "+ result2);
					
					result = findKeyWord("新加坡幣 (SGD)",msg,2);
					result2 = findKeyWord("新加坡幣 (SGD)",msg,4);
					addLine("erw-vbox","新加坡幣：" + result +" , "+ result2);
					
					result = findKeyWord("瑞士法朗 (CHF)",msg,2);
					result2 = findKeyWord("瑞士法朗 (CHF)",msg,4);
					addLine("erw-vbox","瑞士法朗：" + result +" , "+ result2);
					
					result = findKeyWord("日圓 (JPY)",msg,2);
					result2 = findKeyWord("日圓 (JPY)",msg,4);
					addLine("erw-vbox","日圓：" + result +" , "+ result2);
					
					result = findKeyWord("南非幣 (ZAR)",msg,2);
					result2 = findKeyWord("南非幣 (ZAR)",msg,4);
					addLine("erw-vbox","南非幣 ：" + result +" , "+ result2);
					
					result = findKeyWord("瑞典幣 (SEK)",msg,2);
					result2 = findKeyWord("瑞典幣 (SEK)",msg,4);
					addLine("erw-vbox","瑞典幣：" + result +" , "+ result2);
					
					result = findKeyWord("紐元 (NZD)",msg,2);
					result2 = findKeyWord("紐元 (NZD)",msg,4);
					addLine("erw-vbox","紐元：" + result +" , "+ result2);
					
					result = findKeyWord("泰幣 (THB)",msg,2);
					result2 = findKeyWord("泰幣 (THB)",msg,4);
					addLine("erw-vbox","泰幣：" + result +" , "+ result2);
					
					result = findKeyWord("菲國比索 (PHP)",msg,2);
					result2 = findKeyWord("菲國比索 (PHP)",msg,4);
					addLine("erw-vbox","菲國比索：" + result +" , "+ result2);
					
					result = findKeyWord("印尼幣 (IDR)",msg,2);
					result2 = findKeyWord("印尼幣 (IDR)",msg,4);
					addLine("erw-vbox","印尼幣：" + result +" , "+ result2);

					result = findKeyWord("歐元 (EUR)",msg,2);
					result2 = findKeyWord("歐元 (EUR)",msg,4);
					addLine("erw-vbox","歐元：" + result +" , "+ result2);
					
					result = findKeyWord("韓元 (KRW)",msg,2);
					result2 = findKeyWord("韓元 (KRW)",msg,4);
					addLine("erw-vbox","韓元：" + result +" , "+ result2);
					
					result = findKeyWord("越南盾 (VND)",msg,2);
					result2 = findKeyWord("越南盾 (VND)",msg,4);
					addLine("erw-vbox","越南盾：" + result +" , "+ result2);
					
					result = findKeyWord("馬來幣 (MYR)",msg,2);
					result2 = findKeyWord("馬來幣 (MYR)",msg,4);
					addLine("erw-vbox","馬來幣 ：" + result +" , "+ result2);
					
					result = findKeyWord("人民幣 (CNY)",msg,2);
					result2 = findKeyWord("人民幣 (CNY)",msg,4);
					addLine("erw-vbox","人民幣：" + result +" , "+ result2);
		
				}catch(err){
					removeAllChild("erw-vbox");	
					addLine("erw-vbox"," == An Error occur ==");					
					addLine("erw-vbox","Error name ：" + err.name);
					addLine("erw-vbox","Error message ： " + err.message);
					addLine("erw-vbox","Error description ： " + err.description);
				}
				
            } else {
                alert('There was a problem with the request.');
            }
        }
    }	
	
function show()
{
	//正常編碼
	//makeRequest("https://ibank.hncb.com.tw/netbank/servlet/TrxDispatcher?trx=com.lb.wibc.trx.ExtSelect&state=prompt&rate=chinese");
	
	//不正常編碼
	//makeRequest("http://consumer.chinatrust.com.tw/ch/int_rate/EX_RATE.html");	
	
	//utf-8，大陸網站
	//makeRequest("http://www.xe.com/zh/");	
	
	//國外網站
	//makeRequest("http://www.x-rates.com/d/TWD/table.html");	
	
	//台灣銀行 UTF-8
	makeRequest("http://rate.bot.com.tw/Pages/Static/UIP003.zh-TW.htm");	
}

function findKeyWord(keyWord,source,cellNo){
	var startWord = "/Images/Flags/America.gif";
	var endWord = "</td><td class=";
	
	//通常是Table的起始
	var startIdx = source.indexOf(startWord);
	
	//從table的起點往後找KeyWord
	var keyWordIdx = source.indexOf(keyWord,startIdx);

	//從keyword往後找結束符號
	var temp = keyWordIdx;
	for(i=0; i<cellNo; i++){
		temp = source.indexOf(endWord,temp)+1;
	}
	endIdx = temp-1;
	
	//從EndIndex往前找，找>關鍵字，但是要往前移一個
	var curIdx = source.lastIndexOf(">",endIdx)+1;
	return source.substring(curIdx,endIdx);
}

