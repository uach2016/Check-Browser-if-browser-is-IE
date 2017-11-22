
function isIE(userAgent) {
	  userAgent = userAgent || navigator.userAgent;
	  return userAgent.indexOf("MSIE ") > -1 || userAgent.indexOf("Trident/") > -1 || userAgent.indexOf("Edge/") > -1;
	}
	
	function checkBrowser(){
		if(isIE() === true){
			$('#ws-site-content section:nth-child(1) :nth-child(2).ws-box-header-item').css('margin-right', '0px');
			$('#ws-site-content section:nth-child(1) :nth-child(2).ws-box-header-item').css('margin-left', '500px');
			console.log("helo");
		};
	}
	checkBrowser();

