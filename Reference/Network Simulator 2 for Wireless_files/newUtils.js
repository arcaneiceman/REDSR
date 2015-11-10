var DealPlyEdenSettingsToastCls = function () { };
var DealPlyEdenSettingsToast = new DealPlyEdenSettingsToastCls();
var dealplyChosenIframe = "flach";
var dpFeed = "";
var dealplyLangTwoChars;
var dpFrameId = '';
var DealPlyUtilsCls = function () { };
var dealPlyUtils = new DealPlyUtilsCls();
dealPlyUtils.roundTripEnd = new Date().getTime();
dealPlyUtils.templateGroup = "Flach";
var isSuspendBoxOpen = false;
var isWidgetMaximizied = true;
var wlcmBroughtPartners = { amaz: true, dcab: true, gets: true, atom: true, sugg: true };
DealPlyUtilsCls.prototype.nextDealIndex = 0;
DealPlyUtilsCls.prototype.screenRes = "";




try {

	DealPlyUtilsCls.prototype.screenRes = screen.width + "X" + screen.height;

} catch (e1) { }

DealPlyUtilsCls.prototype.sendQuickEventMouseHover = function (time, offerid) {
	var url = "http://qck.dpstack.com/dealdo/event-report?type=quick&topic=mouseHover&pageUrl=" + offerid + "&placement=" + time + "&product=" + dealPlyUtils.productId + "&interactionId=" + dpVariables.interactionId + "&sessionId=" + dpVariables.interactionId;
	var qck_cmd = "var dpiframe=document.createElement(\"iframe\");dpQuery(dpiframe).attr(\"width\",\"1\");dpQuery(dpiframe).attr(\"height\",\"1\");dpQuery(dpiframe).css(\"top\",\"-10000px\");dpQuery(dpiframe).css(\"left\",\"-10000px\");dpQuery(dpiframe).css(\"position\",\"absolute\");dpQuery(dpiframe).css(\"visibility\",\"visible\");dpQuery(\"body\").append(dpiframe);dpQuery(dpiframe).attr(\"src\",\"" + url + "\");";
	DealPlyInteropInner.sendCommand(qck_cmd);
};

DealPlyUtilsCls.prototype.sendQuick = function (time, offerid, topic) {
	var url = "http://qck.dpstack.com/dealdo/event-report?type=quick&topic=" + topic +
			"&pageUrl=" + offerid + "&dwlt=" + dpVariables.dwlt + "&placement=" + time + "&interactionId=" + dpVariables.interactionId + "sessionid" + dpVariables.sessionid;
	var qck_cmd = "var dpiframe=document.createElement(\"iframe\");dpQuery(dpiframe).attr(\"width\",\"1\");dpQuery(dpiframe).attr(\"height\",\"1\");dpQuery(dpiframe).css(\"top\",\"-10000px\");dpQuery(dpiframe).css(\"left\",\"-10000px\");dpQuery(dpiframe).css(\"position\",\"absolute\");dpQuery(dpiframe).css(\"visibility\",\"visible\");dpQuery(\"body\").append(dpiframe);dpQuery(dpiframe).attr(\"src\",\"" + url + "\");";
	DealPlyInteropInner.sendCommand(qck_cmd);
};

DealPlyUtilsCls.prototype.initMouseOver = function () {
	setTimeout(function () {
		var timers = [];
		dpQuery("#flach .offer_block0").hover(
				function () {
					var index = 0;
					timers[index] = (new Date()).getMilliseconds();

				},
				function () {
					var index = 0;
					timers[index] = (new Date()).getMilliseconds()
							- timers[index];
					if (timers[index] > 100)
						dealPlyUtils.sendQuickEventMouseHover(
								timers[index], index);
				});

		dpQuery("#flach .offer_block1").hover(
				function () {
					var index = 1;

					timers[index] = (new Date()).getMilliseconds();

				},
				function () {
					var index = 1;
					timers[index] = (new Date()).getMilliseconds()
							- timers[index];
					if (timers[index] > 100)
						dealPlyUtils.sendQuickEventMouseHover(
								timers[index], index);
				});
		dpQuery("#flach .offer_block2").hover(
				function () {
					var index = 2;

					timers[index] = (new Date()).getMilliseconds();

				},
				function () {
					var index = 2;
					timers[index] = (new Date()).getMilliseconds()
							- timers[index];
					if (timers[index] > 100)
						dealPlyUtils.sendQuickEventMouseHover(
								timers[index], index);
				});
		dpQuery("#flach .offer_block3").hover(
				function () {
					var index = 3;

					timers[index] = (new Date()).getMilliseconds();

				},
				function () {
					var index = 3;
					timers[index] = (new Date()).getMilliseconds()
							- timers[index];
					if (timers[index] > 100)
						dealPlyUtils.sendQuickEventMouseHover(
								timers[index], index);
				});

	}, 5000);
};

DealPlyEdenSettingsToastCls.prototype.suspendByInterval = function (interval, doNotRemove) {
	try {
		var intervalInt = parseInt(interval);
		if (typeof ChickenBoss === 'undefined') {
			DealPlyEdenPersistencyHttpCookies.suspendAccordingToHttpCookie(intervalInt, "app_settings");
			if(typeof doNotRemove =='undefined'){
				var dealplyCmd = 'dpQuery("' + dpFrameId + '").remove(); dpQuery(\"body\").css(\"padding-top\", \"0px\");';
				DealPlyInteropInner.sendCommand(dealplyCmd);
			}
		} else {
			var time = new Date().getTime();
			intervalInt += time + intervalInt;
			ChickenBoss.suspend(intervalInt);
		}
	} catch (dealplyE) {
		DealPlyEdenToast.reportError(dealplyE);
	}
};

DealPlyEdenSettingsToastCls.prototype.suspendForever = function (isToRemove) {
	try {
		var dealplyMntrEvent2 =
			'try {' +
			'	if(typeof mntrDealPlyMngr !== "undefined" && mntrDealPlyMngr.userDisabledPrefs !== "undefined") {' +
			'		mntrDealPlyMngr.userDisabledPrefs();' +
			'	}' +
			'} catch(dealplyE71) {' +
			'}';

		DealPlyInteropInner.sendCommand(dealplyMntrEvent2);
	} catch (dealplyE4) {
		DealPlyEdenToast.reportError(dealplyE4);
	}

	try {
		DealPlyEdenPersistencyHttpCookies.suspendForeverAccordingToHttpCookie("app_settings");
		if(typeof doNotRemove =='undefined'){
			var dealplyCmd = 'dpQuery("' + dpFrameId + '").remove(); dpQuery(\"body\").css(\"padding-top\", \"0px\");';
			DealPlyInteropInner.sendCommand(dealplyCmd);
		}
	} catch (dealplyE) {
		DealPlyEdenToast.reportError(dealplyE);
	}
};


DealPlyUtilsCls.prototype.slideToMinimize = function () {
	var dealplyCmdMin = 'dpQuery("' + dpFrameId + '").css("width", "120px");';
	var dealplyCmdMinWhenSuspendBoxIsOpen = 'dpQuery("' + dpFrameId + '").css("width", "240px");';
	dealPlyUtils = this;

	dpQuery("#dealplyMinimizeButton").click(function () {
		if (isWidgetMaximizied == true) {
			isWidgetMaximizied = false;

			dpQuery("#dealplyItemsList").animate({ "right": "-800px" }, 500, function () {
				if (isSuspendBoxOpen == true) {
					DealPlyInteropInner.sendCommand(dealplyCmdMinWhenSuspendBoxIsOpen);
				} else {
					DealPlyInteropInner.sendCommand(dealplyCmdMin);
				}

			});
			//dpQuery(this).fadeOut(500);
			dpQuery(this).css("background-image", "url('/resources/eden/green/ngen/O.png')");

		} else {

			dealPlyUtils.maximize();
		}


	});

};

DealPlyUtilsCls.prototype.hoverProductImage = function () {
	var dealplyCmdMin = 'dpQuery("' + dpFrameId + '").css("width", "120px");';
	var dealplyCmdMinWhenSuspendBoxIsOpen = 'dpQuery("' + dpFrameId + '").css("width", "240px");';
	dealPlyUtils = this;

	dpQuery("#dealplyMinimizeButton").click(function () {
		if (isWidgetMaximizied == true) {
			isWidgetMaximizied = false;

			dpQuery("#dealplyItemsList").animate({ "right": "-800px" }, 500, function () {
				if (isSuspendBoxOpen == true) {
					DealPlyInteropInner.sendCommand(dealplyCmdMinWhenSuspendBoxIsOpen);
				} else {
					DealPlyInteropInner.sendCommand(dealplyCmdMin);
				}

			});
			//dpQuery(this).fadeOut(500);
			dpQuery(this).css("background-image", "url('/resources/eden/green/ngen/O.png')");

		} else {

			dealPlyUtils.maximize();
		}


	});

};


DealPlyUtilsCls.prototype.maximize = function () {
	isWidgetMaximizied = true;
	var dealplyCmdMax = 'dpQuery("' + dpFrameId + '").css("width", "510px");';
	dpQuery("#dealplyItemsList").animate({ "right": "0" }, 200, function () {
		DealPlyInteropInner.sendCommand(dealplyCmdMax);
	});
	dpQuery("#dealplyMinimizeButton").css("background-image", "url('/resources/eden/green/ngen/x.png')");

};


DealPlyUtilsCls.prototype.slideToMaximize = function () {
	dealPlyUtils = this;

	dpQuery("#dealplyWidgetControlPanel").mouseenter(function () {
		dealPlyUtils.maximize();

	});


};

DealPlyUtilsCls.prototype.setHoverImage = function (selectorStringForImage, imageSourceHover, width, height, bottom, right) {

	var originalSource = dpQuery(selectorStringForImage).attr("src");
	var originalWidth;
	var originalHeight;
	var originalBottom;
	var originalRight;
	originalWidth = dpQuery(selectorStringForImage).css("width");
	originalHeight = dpQuery(selectorStringForImage).css("height");
	originalBottom = dpQuery(selectorStringForImage).css("bottom");
	originalRight = dpQuery(selectorStringForImage).css("right");

	dpQuery(selectorStringForImage).hover(function () {
		dpQuery(this).attr("src", imageSourceHover);
		if (width) {
			dpQuery(this).css("width", width);
		}
		if (height) {
			dpQuery(this).css("height", height);
		}
		if (bottom) {
			dpQuery(this).css("bottom", bottom);
		}
		if (right) {
			dpQuery(this).css("right", right);
		}
	}, function () {
		dpQuery(this).attr("src", originalSource);
		dpQuery(this).css("width", originalWidth);
		dpQuery(this).css("height", originalHeight);
		dpQuery(this).css("bottom", originalBottom);
		dpQuery(this).css("right", originalRight);

	});


};

DealPlyUtilsCls.prototype.closeSuspendBox = function () {

	dpQuery("#dealplySettingHoverIcon").click(function () {
		isSuspendBoxOpen = false;
		dpQuery("#dealplySettingButton").css("display", "block");
		dpQuery("#dealplySuspend").css("display", "none");

	});

};

DealPlyUtilsCls.prototype.openSuspendBox = function () {
	var obj = this;
	dpQuery("#dealplySettingButton").click(function () {
		dpQuery("#dealplySuspend").css("display", "block");
		dpQuery("#closeSuspendWidget").click(function (e) {
			isSuspendBoxOpen = false;
			dpQuery("#dealplySettingButton").css("display", "block");
			dpQuery("#dealplySuspend").fadeOut(400);
		});
	});
};

DealPlyUtilsCls.prototype.closeWidget = function () {
	dpQuery('#dealplyCloseButton,#dealplyCloseAndOpenTray').live('click', function () {
		if (typeof ChickenBoss === 'undefined') {
			dpQuery("#dealplyItemsList").animate({ "right": "-800px" }, 400);
			var dealplyCmd = 'dpQuery("' + dpFrameId + '").slideUp(400);';
			DealPlyInteropInner.sendCommand(dealplyCmd);
			DealPlyEdenCommon.googleAnalytics("Close");
			var url = location.protocol+"//"+DealPlyOpDom.getQuickDomain()+"/dealdo/event-report?type=quick&topic=closeWidget&interactionId=" + dpVariables.interactionId + "&dwlt=" + dpVariables.dwlt + "&product=" + dealPlyUtils.productId;
			var cmd = "var dpiframe=document.createElement(\"iframe\");dpQuery(dpiframe).attr(\"width\",\"1\");dpQuery(dpiframe).attr(\"height\",\"1\");dpQuery(dpiframe).css(\"top\",\"-10000px\");dpQuery(dpiframe).css(\"left\",\"-10000px\");dpQuery(dpiframe).css(\"position\",\"absolute\");dpQuery(dpiframe).css(\"visibility\",\"visible\");dpQuery(\"body\").append(dpiframe);dpQuery(dpiframe).attr(\"src\",\"" + url + "\");";
			DealPlyInteropInner.sendCommand(cmd);

			setTimeout (function () {

				var postCommand = 'dpQuery("' + dpFrameId + '").css({"width":"0","height":"0"});';

				DealPlyInteropInner.sendCommand(postCommand);
			}, 500);
			if (!dealPlyUtils.allRetargeted())
			{
				retgtevnt = 'closed';
				
				var serverPrefix = DealPlyOpDom.getServedbyDomain();
				serverPrefix = serverPrefix.substring(serverPrefix.indexOf('.'))
				
				if (dpVariables.sampleSet == "qa")
					serverPrefix = "sqa"+serverPrefix;
				else if (dpVariables.sampleSet == "0")
					serverPrefix = "s0"+serverPrefix;
				else
					serverPrefix = "s"+serverPrefix;
				
				DealPlyEdenCommon.reportEventUrl(document.location.protocol + '//'+serverPrefix+'/dealdo/setcckserv?retgtevnt=' + retgtevnt + '&intrId=' + dpVariables.interactionId);
			}
		} else {
			ChickenBoss.hideWindow();
		}
	}
	);
	
		

};

DealPlyUtilsCls.prototype.allRetargeted = function () {
	var i;
	var deals = dpVariables.dealsJson;
	for (var deal in deals) {
		if (deals[deal].retgtIntrId == 0) {
			return false;
		} 
	}
	return true;
};


DealPlyUtilsCls.prototype.attachDealIndexToLinks = function () {
	dpQuery("#dealplyItemsList li").each(function () {
		var index = dpQuery(this).index();
		dpQuery(this).find(".productLink").each(function () {
			dpQuery(this).attr("dealindex", index);

		});
	});
};

DealPlyUtilsCls.prototype.langFixes = function () { };

DealPlyUtilsCls.prototype.forEverSelection = function () {
	dpQuery("#suspend").change(function () {
		var dealplySuspendVal = dpQuery("#suspend").val();
		if (dealplySuspendVal === "31536000000") {
			dpQuery("#dealplySuspendForEverMessage").show();
			if (document.documentMode !== undefined && document.documentMode == 5) {

			}
		}
		else {
			dpQuery("#dealplySuspendForEverMessage").hide();
		}
	});
};

DealPlyUtilsCls.prototype.getIeQuirksModeHandlerCode = function () {
	var dealplyCmd = 'if (document.documentMode !== undefined && document.documentMode ==5) {' +
	'	try {' +
	'		dpQuery("' + dpFrameId + '").css("position", "absolute");' +
	'		dpQuery(window).scroll(function() {' +
	'			var dealplyScrollPos = parseInt(dpQuery(window).scrollTop());' +
	'			dpQuery("' + dpFrameId + '").each(function() {' +
	'				dpQuery(this).css("bottom", "-" + dealplyScrollPos + "px");' +
	'			});' +
	'		});' +
	'	} catch (err) {' +
	'		DealPly.error("handleIeQuirksMode 1: " + err.message);' +
	'	}' +
	'}';

	return dealplyCmd;
};





DealPlyUtilsCls.prototype.retailerNameFeeds = {
	pgu: true,
	pgb: true,
	pmx: true,
	pca: true,
	pbr: true,
	yru: true
};

DealPlyUtilsCls.prototype.sub_desc = function (str, length) {
	if (typeof length === 'undefined') length = 45;
	if (str.length < length) {
		return str;

	}
	else {

		str = str.substring(0, length - 2) + '...';
		return str;
	}
};

DealPlyUtilsCls.prototype.handleSuspendClick = function () {
	dealPlyUtils = this;

	dpQuery("#dealplySuspendButton").click(function () {

		dealPlyUtils.handleSuspendSelectedOption();

	});


};


DealPlyUtilsCls.prototype.handleSuspendSelectedOption = function (doNotRemove) {
	try {

		var dealplySuspendVal = dpQuery('input[name=suspendOp]:checked').val();


		DealPlyEdenCommon.reportQuick({
			topic: 'suspend_click',
			interactionId: dpVariables.interactionId,
			partner: dpVariables.partner,
			channel: dpVariables.channel,
			sset: dpVariables.sampleSet,
			productId: dealPlyUtils.productId,
			sspend_time: dealplySuspendVal
		});


		if (dealplySuspendVal === "") {

			return;
		}


		if (dealplySuspendVal === "31536000000" && typeof ChickenBoss === 'undefined') {

			DealPlyEdenSettingsToast.suspendForever(doNotRemove);

			var suspendData = {
				"product": this.productId,
				"placement": document.domain,
				"md": "" + dealplySuspendVal
			};


			DealPlyEdenCommon.googleAnalytics("suspend");

		} else {
			DealPlyEdenSettingsToast.suspendByInterval(dealplySuspendVal, doNotRemove);

			var suspendData = {
				"product": this.productId,
				"placement": document.domain,
				"md": "" + dealplySuspendVal
			};


			DealPlyEdenCommon.googleAnalytics("suspend");
			if (typeof ChickenBoss !== 'undefined') ChickenBoss.hideWindow();

		}
	} catch (dealplyE) {
		//DealPlyEdenToast.reportError(dealplyE);
	}
};

DealPlyUtilsCls.prototype.extractInteractionOffer = function (url, index) {
	url = decodeURIComponent(url);
	var extracted = url.match(/trackingID=(.*?)?&/);
	if (extracted !== null) {
		return extracted[1];
	}
	extracted = url.match(/af_placement_id=(.*?)?(?:$|&)/);
	if (extracted !== null) {
		return extracted[1];
	}


	return dpVariables.interactionId + "" + index;

};

DealPlyUtilsCls.prototype.contionToLeave = document.URL.indexOf("TopBarAnimated") !== -1 &&  document.URL.indexOf("#rg") === -1;//first time run of animated top bar

DealPlyUtilsCls.prototype.insert_content = function () {
	var INDEX_OF_LIST_WRAPPER_PRODUCT_IN_RETURN_ARRAY = 0;
	var INDEX_OF_IMAGE_PRODUCT_IN_RETURN_ARRAY = 1;
	var INDEX_OF_IMAGE_LOG_IN_RETURN_ARRAY = 2;

    var addErrorTopic = function(imgTopic, dealJson) {
    	var productImgPlaceHolderCssRule = {height: '25px', padding: '30px 0'};	
        var ERROR_IMAGE_URL_PATH = "/resources/retailers/placeholder1.jpg";
        var ERROR_ICON_URL_PATH = "/resources/retailers/placeholder1.jpg";

        return function(err){

			var isRetry = dpQuery(this).attr("image_retry") === "true";

			if (!isRetry) {
				//var newImage = dpQuery("img");
				var oldImage = dpQuery(this);

				setTimeout(function() {
				    //oldImage.replaceWith(newImage);

				    oldImage.attr("image_retry", "true");
                    oldImage.attr("class", oldImage.attr("class"));
                    oldImage.attr("src", oldImage.attr("src") +  "111222333444555666777888999");

                   // newImage[0].addEventListener("error", addErrorTopic(imgTopic, dealJson));
				}, 500);
			}
			else {
	            var errType;
				this.onerror = null;
				if(this["errorOccured"]){
				    return;
				}

				switch (imgTopic) {
	                case "prdImgError" :
	                    errType = "prod"
	                    break;
	                case "icoImgError" :
	                    errType = "logo";
	                    break;
	            }
				DealPlyEdenCommon.reportQuick({
	                topic: imgTopic,
	                 interactionid: dpVariables.interactionId ,
	                 img_url: this.src,
	                 feed:dealJson.sourceFeed ,
	                 template:encodeURIComponent(document.URL.substr(0,100)),
	                 error:"bad image"
	            });

	            thisDeal= dealJson;

	            DealPlyEdenCommon.reportBadImage({
	                img_type: errType,
	                img_url: this.src,
	                feed:thisDeal.sourceFeed
	            });

	            switch (imgTopic) {
	                case "prdImgError" :
	                    this.src = ERROR_IMAGE_URL_PATH;
	                    dpQuery(this).addClass("place_holder");
	                    dpQuery(this).css(productImgPlaceHolderCssRule);
	                    break;
	                case "icoImgError" :
	                    this.src = ERROR_ICON_URL_PATH;
	                    break;
	            }
				//dpQuery(this).css({"height": "25px","padding": "30px 0"});
				this["errorOccured"] = true;
			}
        };
    }

	if(this.contionToLeave){
		return; 
	}
	if (!this.deals || this.deals.length == 0) {
		dpQuery('.dealply_container').hide();
	}
	var template = dpQuery('#dpDealBoxTmplt');
	var dealElementAndProductImageArr;
	var dealElement;
	for (; this.nextDealIndex < this.dealsShowingAmount; this.nextDealIndex++) {
		dealElementAndProductImageArr = this.createDealElement(template.html());

		dealElement = dealElementAndProductImageArr[INDEX_OF_LIST_WRAPPER_PRODUCT_IN_RETURN_ARRAY]
		dpQuery('ul.offers_ul').append(dealElement);
		if(dealElementAndProductImageArr.length > 1){
			var imageOfProductArr = dpQuery('ul.offers_ul .prod_image' );
			var imageOfProduct = imageOfProductArr[imageOfProductArr.size()-1];
			var imageOfLogoArr = dpQuery('ul.offers_ul .logo');
			var imageOfLogo = imageOfLogoArr[imageOfLogoArr.size() -1];

			imageOfProduct.addEventListener("error", addErrorTopic("prdImgError", this.deals[this.nextDealIndex]));
			imageOfLogo.addEventListener("error", addErrorTopic("icoImgError", this.deals[this.nextDealIndex]));

			imageOfProduct.src = this.addTimeMarkToURL(dealElementAndProductImageArr[INDEX_OF_IMAGE_PRODUCT_IN_RETURN_ARRAY].src, "tm");
			imageOfLogo.src = this.addTimeMarkToURL(dealElementAndProductImageArr[INDEX_OF_IMAGE_LOG_IN_RETURN_ARRAY].src, "tm");
		}
		
		dpQuery(dealElement).show();
		
	}
	this.handleDynamicPoweredBy();
	dealPlyUtils.listenToClick();
};
DealPlyUtilsCls.prototype.addTimeMarkToURL = function(urlArg, paramNameArg) {

	var urlArray = urlArg.split("?");
	var urlParams = [];

	if (urlArray.length === 2) {
		urlParams = urlArray[1].split("&");
	}
	urlParams.push(paramNameArg + "=" + (new Date()).valueOf());

	return urlArray[0] + "?" + urlParams.join("&");

}
DealPlyUtilsCls.prototype.createDealElement = function (templateHtml) {
	
	var ERROR_IMAGE_URL_PATH = "/resources/retailers/placeholder1.jpg";
	if(this.contionToLeave){
		return;
	}
	var dealJson = this.deals[this.nextDealIndex];
	//dealJson.offerId = this.nextDealIndex;
	liElement = dpQuery('<li></li>');
	liElement.append(templateHtml);
	dpQuery('.offer_block', liElement).addClass('offer_block' + this.nextDealIndex);
	if (this.nextDealIndex === this.dealsShowingAmount - 1) dpQuery('.offer_block', liElement).addClass('last_offer');
	dpQuery('.offer_block', liElement).attr('rel', this.nextDealIndex);
	
	var selector = dpQuery('.prod_image', liElement);
	var imgProdToReturn = document.createElement("img");

	imgProdToReturn.src = dealJson.faviconUrl;
	var imgLogoToReturn = document.createElement("img");
	imgLogoToReturn.onerror = function(e){
		imgLogoToReturn.src = ERROR_IMAGE_URL_PATH;
	 };
	
	 if (typeof dealJson.retailerLogoUrl === 'undefined' || dealJson.retailerLogoUrl === "" || dealJson.retailerLogoUrl === "_") {
		if (this.retailerNameFeeds[dealJson.sourceFeed] && typeof isFlach !== 'undefined' && isFlach && typeof dealJson.retailerTitle !== 'undefined' && dealJson.retailerTitle.length > 0) {
			dpQuery('.retailerTitle', liElement).text(this.sub_desc(dealJson.retailerTitle, 13));
			dpQuery('.logo', liElement).remove();
		} else if(typeof isGaming!='undefined'){
			dpQuery('.retailerTitle', liElement).text(dealJson.retailerTitle);
			dpQuery('.retailerTitle', liElement).addClass('show');
			dpQuery('.logo', liElement).remove();
		}else {
			imgLogoToReturn.src = ERROR_IMAGE_URL_PATH;
		}
	} else {
		dpQuery('.logo', liElement).attr('src', dealJson.retailerLogoUrl);
		imgLogoToReturn.src = dealJson.retailerLogoUrl;
	}
	if (dpFeed === 'gau') {
		dpQuery(".feedImage", liElement).show();
	}
	dpQuery('.prod_desc a', liElement).html(this.sub_desc(dealJson.productTitle, typeof maxDescLength !== 'undefined' ? maxDescLength : 42));
	if (dpQuery('.prod_desc a', liElement).length == 0) {
		dpQuery('.prod_desc', liElement).html(this.sub_desc(dealJson.productTitle, typeof maxDescLength !== 'undefined' ? maxDescLength : 42));
	}
	dpQuery('.price', liElement).html(dealJson.productPriceWithCurrencySymbol);
	if (dpQuery('.getDealText').length !== 0) dpQuery('.getDealText', liElement).text(dpGetDealText);

	if ((typeof isFlach !== 'undefined' && isFlach) || (typeof isToUseLinkedTo !== 'undefined' && isToUseLinkedTo)) {
		dpQuery('a', liElement).attr('linkto', dealJson.url);
	} else {
		dpQuery('a', liElement).attr('href', dealJson.url);
	}

	return [liElement , imgProdToReturn , imgLogoToReturn];
};

DealPlyUtilsCls.prototype.getStyle = function (oElm, strCssRule) {
	var strValue = "";
	if (document.defaultView && document.defaultView.getComputedStyle) {
		strValue = document.defaultView.getComputedStyle(oElm, "").getPropertyValue(strCssRule);
	}
	else if (oElm.currentStyle) {
		strCssRule = strCssRule.replace(/\-(\w)/g, function (strMatch, p1) {
			return p1.toUpperCase();
		});
		strValue = oElm.currentStyle[strCssRule];
	}
	return strValue;
};


DealPlyUtilsCls.prototype.gotoDeal = function (index, hackForGreenArea) {

	if(this.isChrome()){
		dpVariables.nnnCreative = ".nnn00.";
		var cname = "__nnn";
		var cvalue = DealPlyEdenPersistencyHttpCookies.getCookie(cname);
		if(cvalue !== null &&  cvalue !== ""){
			if(cvalue === '0'){
				
				if(typeof hackForGreenArea !== "undefined" && hackForGreenArea == 999 ){
					return;
				}
				
			}else{
				dpVariables.nnnCreative = ".nnn01.";
			}
		}else{
			cvalueDp = (parseInt(Math.random()*10))%2;
			DealPlyEdenPersistencyHttpCookies.setCookie(cname, cvalueDp, 365*1000*60*60*24);
			if(!cvalueDp){
				
				if(typeof hackForGreenArea !== "undefined" && hackForGreenArea == 999 ){
					return;
				}
				
			}else{
				dpVariables.nnnCreative = ".nnn01.";
			}
		}


	}

	var obj = this;
	dpVariables.baseTrackingUrlClick = dpVariables.baseTrackingUrlClick.replace(/lpartner=.*?&/g, "").replace(/lchannel=.*?&/g, "");


	if (!(typeof hackForGreenArea === 'undefined')) {
		hackAsString = "" + hackForGreenArea;
		if ((hackAsString.search("888") >= 0 || hackAsString.search("999") >= 0)) {
			gotoUrl = dpQuery(".offer_block[rel=" + index + "] .prod_desc > a").last().attr("linkto");
		}
	}
	if (typeof dpVariables.partnerFromCookie === "undefined") {
		dpVariables.partnerFromCookie = "";
	}

	if (typeof dpVariables.channelFromCookie === "undefined") {
		dpVariables.channelFromCookie = "";
	}

	//	var clkid = this.extractInteractionOffer(gotoUrl, index);
	var relatedDeal = dpVariables.dealsJson[0];

	if (dpVariables.dealsJson.length > index)
		relatedDeal = dpVariables.dealsJson[index];

	var clkid = relatedDeal.clkid;
	var extra_otid = relatedDeal.otid ? relatedDeal.otid : "";
	var extra_ott = relatedDeal.ott ? relatedDeal.ott : "";


	var tdi = "";

	if (typeof this.deals[index].tdi !== "undefined") {
		tdi = this.deals[index].tdi;
	}
	var feed = this.deals[index].sourceFeed;

	var cId = dpVariables.creativeId;
	if(typeof dpVariables.nnnCreative !== "undefined"){
		cId += dpVariables.nnnCreative;
	}
	try {
		if (typeof this.deals[index].additionalData.FEED_ORIGIN !== "undefined" && this.deals[index].additionalData.FEED_ORIGIN.length != 0) {
			try {
				feed = this.deals[index].additionalData.FEED_ORIGIN;
			} catch (ex) {

			}
		}
	} catch (e435) {

	}

	var storeDomainUrl = (this.deals[index].storeDomainUrl ? this.deals[index].storeDomainUrl : "");
	var clickData = {
		"product": this.productId,
		"placement": dpVariables.documentHostName,
		"feed": feed,
		"zeroOffers": "false",
		"creativeId": cId,
		"origOffCount": dpVariables.origOffCount,
		"productTitle": this.deals[index].productTitle,
		"offerCount": "" + this.deals.length,
		"offerPrice": "",
		"offerPriceMin": "",
		"offerPriceMax": "",
		"offerPosition": index,
		"queryProductPrice": "",
		"screenRes": this.screenRes,
		"clickedFeedCategory": this.deals[index].clickedFeedCategory,
		"mappedStoreDomainUrl":(this.deals[index].mappedStoreDomainUrl ? this.deals[index].mappedStoreDomainUrl : "") ,
		"lpartner": dpVariables.partnerFromCookie,
		"lchannel": dpVariables.channelFromCookie,
		"sessionid": dpVariables.sessionid,
		"clkid": clkid,
		"tdi": tdi,
		"lang": dpVariables.langauge_two_chars,
		"extid": dpVariables.ext,
		"extVersion": dpVariables.extVersion,
		"oid": this.deals[index].oid,
		"storeDomainUrl": storeDomainUrl,
		opdom: dpVariables.opdom,
		"otid": extra_otid,
		"ott": extra_ott,
		"rowid" : dpVariables.rowId,
        "dwlt" : dpVariables.dwlt



	};
	if (!(typeof hackForGreenArea === 'undefined')) {
		clickData.offerPosition = hackForGreenArea;
	}

	if (typeof dpVariables.youtubeTaboola !== "undefined") {
		clickData.partner = dpVariables.partner;
		clickData.channel = dpVariables.channel;
		clickData.scountry = dpVariables.Affiliate.country;

	}

	clickCookie = {
		"clkid": clkid,
		"storeDomainUrl": storeDomainUrl
	};
	var clickCookieDecoded = DealPlyBase64.encode(DealPlyJSON.stringify(clickCookie));
	DealPlyEdenPersistencyHttpCookies.setCookie("clkcsb", clickCookieDecoded, 2592000000);
	DealPlyEdenCommon.reportEventEx("click", clickData);


};


DealPlyUtilsCls.prototype.lockImpression = false;

DealPlyUtilsCls.prototype.reportImpression = function () {

	var obj = this;
	if (typeof dpVariables.partnerFromCookie === "undefined") {
		dpVariables.partnerFromCookie = "";
	}

	if (typeof dpVariables.channelFromCookie === "undefined") {
		dpVariables.channelFromCookie = "";
	}

	var cId = dpVariables.creativeId;
	dpVariables.baseTrackingUrlImpression = dpVariables.baseTrackingUrlImpression.replace(/lpartner=.*?&/, "").replace(/lchannel=.*?&/, "");
	if (this.lockImpression == false && dealplyChosenIframe == "flach") {
		var exp = new Date().getTime() + 60 * 1000 * 60;

		var impressionData = {
			"product": this.productId,
			"placement": dpVariables.documentHostName,
			"feed": this.deals[0].sourceFeed,
			"zeroOffers": "false",
			"creativeId": cId,
			"origOffCount": dpVariables.origOffCount,
			"offerCount": "" + this.deals.length,
			"screenRes": this.screenRes,
			"lpartner": dpVariables.partnerFromCookie,
			"lchannel": dpVariables.channelFromCookie,
			"sessionid": dpVariables.sessionid,
			"lang": dpVariables.langauge_two_chars,
			"extid": dpVariables.ext,
			"extVersion": dpVariables.extVersion,
			"opdom": dpVariables.opdom,
			"rowid" : dpVariables.rowId,
			"dwlt" : dpVariables.dwlt
		};

		DealPlyEdenCommon.reportEventEx("impression", impressionData);
		if (typeof obj.extraParams === "undefined") {
			obj.extraParams = "&product=" + obj.productId + "&screenRes=" + obj.screenRes;
		}

		this.lockImpression = true;

		DealPlyInteropInner.sendCommand("DealPly.reportQuickEvent({'topic':'gen_ui_imp','interactionid':dpVariables.interactionId,'dwlt':dpVariables.dwlt,'product':"+dealPlyUtils.productId+"});");
		
	}


};

DealPlyUtilsCls.prototype.runToasterProduction = function (dealplyCmd) {

	try {
		if (typeof ChickenBoss === 'undefined') {
			if (!(dpQuery.browser.msie && (dpQuery.browser.version).search('7.') != -1)) {
				DealPlyInteropInner.sendCommand('try { DealPly.engagedWithIframe = false; } catch(dealplyE3) {}');

			}
			if (dpVariables.jsdebugger) {
				dpQuery.getScript('http://localhost.dealply.com:8080/dealdo/jsdebugger?level=DEBUG&msg=' + encodeURIComponent('starting to instruct outer frame to enlarge IFRAME'));
			}

			var dealplyI = 0;
			DealPlyInteropInner.sendCommandInLoop(dealplyCmd + dealPlyUtils.getIeQuirksModeHandlerCode());

		} else {
			ChickenBoss.showWindow();
		}
	} catch (e234) { }


};





DealPlyUtilsCls.prototype.iframeManipulation = function (dealplyIframeStyleToManipulate, isAddit) {
	var str = undefined;

	if (typeof isAddit === 'undefined') {
		str = " try {" + "	if(typeof DealPly.skinInjected == 'undefined'){" + "DealPly.skinInjected ={};" + "				}	" + "if(typeof DealPly.skinInjected[\""
		+ dpFrameId + "\"] === \"undefined\" || DealPly.skinInjected[\"" + dpFrameId + "\"] == false  )  {" +

		"		DealPly.skinInjected[\"" + dpFrameId + "\"] = true;" + dealplyIframeStyleToManipulate +

		"	}" + "} catch(dealplyE3) { }";
	} else {
		str = ' try {' +

		'	if(typeof DealPly.skyLighterInjected === "undefined" || DealPly.skyLighterInjected == false  )  {' +


		'		DealPly.skyLighterInjected = true;' +

			dealplyIframeStyleToManipulate +

		'	}' +
		'} catch(dealplyE3) { }';

	}

	return str;

};


DealPlyUtilsCls.prototype.closeFrame = function () {
	var miliseconds = 500;
	if (typeof delayClose !== 'undefined' && !delayClose) {
		miliseconds = 0;
	}

	dpQuery('#xSpan , #closeAddit').live('click', function () {
		dpQuery('.dealply_container').slideUp(miliseconds);
		var dealplyCmd = 'dpQuery("' + dpFrameId + '").slideUp(' + miliseconds + ');';
		var dealplyDeferredCmd = "DealPlyInteropInner.sendCommand('" + dealplyCmd + "');";
		setTimeout(dealplyDeferredCmd, 1000);
		DealPlyEdenCommon.googleAnalytics("Close");
	});


};

DealPlyUtilsCls.prototype.injectAdditionalFrameToThePage = function () {



	var dealplyCmd = '(function(){try {' +

	'if(dpQuery("' + dpVariables.mainImageSelector + '").length!== 0){ ' +
	' var iframe = document.createElement("iframe");' +
	'iframe.setAttribute("allowTransparency","true");' +
	'iframe.setAttribute("src","' + document.URL + '#additionaliframe");' +
	'iframe.setAttribute("frameBorder","0"); iframe.setAttribute("scrolling","no");iframe.setAttribute("id","dpAdditionalFrame"); iframe.setAttribute("border","no");' +
	' iframe.setAttribute("style","overflow:hidden;position:absolute;top:-10000px; filter:alpha(opacity=0);background-color:transparent; ");' +
	'if(dpQuery("#dpAdditionalFrame").length!== 0){return false;} ' +
	'document.body.appendChild(iframe)(); ' +
	'}}catch(e){}})();';

	//var dealplyDeferredCmd = "DealPlyInteropInner.sendCommand('" + dealplyCmd + "');";
	//setInterval(dealplyDeferredCmd,  1000);
	var dealplyI = 0;
	for (dealplyI = 0; dealplyI < 40; dealplyI++) {
		var dealplyDeferredCmd = "DealPlyInteropInner.sendCommand('" + dealplyCmd + "');";
		setTimeout(dealplyDeferredCmd, (500 * dealplyI) + 100);
	}
};





var gotoUrl;
DealPlyUtilsCls.prototype.listenToClick = function () {
	var utils = this;
	var intrId = undefined;
	var retgtevnt = undefined;
	var feed = this.feed;
	dpQuery('.offer_block').click(function (e) {
		if(typeof utils.additionalClickActions != 'undefined'){
			utils.additionalClickActions()
		}
		
		e.stopImmediatePropagation();

		try {
			if (feed === 'mhbr' || feed === 'mbr') {
				DealPlyEdenPersistencyHttpCookies.setCookie("mbrsusp", "1", 1000 * 60 * 5);
			}
		} catch (ee) { }

		var rel = dpQuery(this).attr('rel');
		gotoUrl = dpQuery(this).find('a').eq(0).attr("linkto");
		if (typeof gotoUrl === "undefined") {
			gotoUrl = dpQuery(this).find('a').eq(0).attr("href");
		}

		//var clkid = dealPlyUtils.extractInteractionOffer(gotoUrl, rel);

		//otid     //offer tracking id
		var relatedDeal = dpVariables.dealsJson[0];

		if (dpVariables.dealsJson.length > rel)
			relatedDeal = dpVariables.dealsJson[rel];

		var clkid = relatedDeal.clkid;
		var extra_otid = relatedDeal.otid ? "&otid=" + relatedDeal.otid : "";
		var extra_ott = relatedDeal.ott ? "&ott=" + relatedDeal.ott : "";

		DealPlyEdenCommon.reportEventUrl(document.location.protocol + '//q.interstats.org/dealdo/event-report?type=quick&topic=qck_clk&sessionid=' + dpVariables.sessionid + '&dwlt=' + dpVariables.dwlt + '&clkid=' + clkid + '&interactionId=' + dpVariables.interactionId + '&cb=' + Math.random() + extra_otid + extra_ott);
		
		if ((typeof DealPlyEdenPersistencyHttpCookies !== "undefined") && (typeof relatedDeal.storeDomainUrl == "string") 
			&& (relatedDeal.storeDomainUrl.length > 0)) {
			var storeDomainTrimed = relatedDeal.storeDomainUrl.replace(/ /g, '-');
			if(DealPlyEdenPersistencyHttpCookies.getCookie("dp-clck-"+ storeDomainTrimed) != "true"){
				DealPlyEdenPersistencyHttpCookies.setCookie("dp-clck-" + storeDomainTrimed, "true",432000000);
			}
		}

		if (relatedDeal.retgtIntrId == 0){
			intrId = dpVariables.interactionId;
		} else {
			intrId = relatedDeal.retgtIntrId;
		}
		retgtevnt = 'click';
		
		var serverPrefix = DealPlyOpDom.getServedbyDomain();
		serverPrefix = serverPrefix.substring(serverPrefix.indexOf('.'))
		
		if (dpVariables.sampleSet == "qa")
			serverPrefix = "sqa"+serverPrefix;
		else if (dpVariables.sampleSet == "0")
			serverPrefix = "s0"+serverPrefix;
		else
			serverPrefix = "s"+serverPrefix;
		
		DealPlyEdenCommon.reportEventUrl(document.location.protocol + '//'+serverPrefix+'/dealdo/setcckserv?retgtevnt=' + retgtevnt + '&intrId=' + intrId);
		var is888Template = function(){

			if (dpQuery("body.no888").length > 0) return false;

			//return (dpQuery("body.do888Clicks").length > 0);
			var templatesThatShouldNotUse888 = ["operaPush.html" ,"SkinedYndxTop.html" , "SkinedYndxBottom.html", "LargeStripLargeOffers.html", "SkinedInPageCompact.html"];
			for(var index in templatesThatShouldNotUse888){

				var indexOftemplate = document.URL.indexOf(templatesThatShouldNotUse888[index]);
				if(indexOftemplate !== -1){
					return false;
				}
			}
			return true;

		};
		
//		if (is888Template() && typeof hasOverLink !== 'undefined' && hasOverLink && (e.pageY < 30 || e.pageY > 124) && !dpQuery(e.srcElement).is("a.cliackableArea:not('.wider')")) {
//			if (dealPlyUtils.feed.toLowerCase() === 'ede') {
//				gotoUrl = gotoUrl.replace('linkin_id%3D8074152', 'linkin_id%3D8082843');
//			}
//			dealPlyUtils.gotoDeal(rel, '888');
//		} else if (!dpQuery(e.srcElement).is(".wider")){
//			dealPlyUtils.gotoDeal(rel);
//		}
//		else {
//			return;
//		}

		if (is888Template() && typeof hasOverLink !== 'undefined' && hasOverLink && (e.pageY < 30 || e.pageY > 124) && !dpQuery(e.srcElement).is("a.cliackableArea:not('.wider')")) {
			if (dealPlyUtils.feed.toLowerCase() === 'ede') {
				gotoUrl = gotoUrl.replace('linkin_id%3D8074152', 'linkin_id%3D8082843');
			}
			dealPlyUtils.gotoDeal(rel, '888');
		} else {
			dealPlyUtils.gotoDeal(rel);
		}
		if (typeof isToUseLinkedTo !== 'undefined' && isToUseLinkedTo) {
			if (dpVariables.widgetType == 'HOTELS' && (feed === 'etbh' || feed === 'romh' || feed === 'ssf')) {
				window.parent.location.href = gotoUrl;
			} else {
				window.open(gotoUrl, "_blank");
			}
			return false;
		}


	});

};

/*DealPlyUtilsCls.prototype.changeDeal = function(dealToChange){
	if (this.nextDealIndex < this.deals.length){
		var template = dpQuery('#dpDealBoxTmplt');
		var dealElement = this.createDealElement(template.html());
		dpQuery('.offer_block', dealElement).attr('class',dpQuery(dealToChange).attr('class'));
		dpQuery(dealToChange).parent().html(dealElement.html());
		dealPlyUtils.listenToClick();
		this.nextDealIndex++;
	}
};*/

DealPlyUtilsCls.prototype.addDealClickCookie = function (dealToChange) {
	if (document.cookie.split("; ").length >= 20) return; // minimal amount of cookies per domain that browsers support
	var dealIndex = dpQuery(dealToChange).attr('class').match(/offer_block[0-9]+/g)[0].replace(/\D/g, '');
	var offerId = this.deals[dealIndex].offerId;
	DealPlyEdenPersistencyHttpCookies.setCookie('clicked_offer_' + offerId, 'click', 24 * 60 * 60 * 1000);
};

DealPlyUtilsCls.prototype.scrollLock = function () {
	if (dpQuery.browser.mozilla) {

		dpQuery(window).scroll(function () {
			dpQuery(this).scrollTop(0);
		});
	}
};

DealPlyUtilsCls.prototype.handlePartnerRelatedLinks = function () {
	if (langTwoChars === 'jp') {
		dpQuery('.powered_by_txt').append(dpVariables.strings.BROUGHT_2U_BY + ' ');
		dpQuery('.powered_by_link').text(dpVariables.Affiliate.broughtByTextForAffiliate);
	} else {
		dpQuery('.powered_by_txt').prepend(dpVariables.strings.BROUGHT_2U_BY + ' ');
		dpQuery('.powered_by_link').text(dpVariables.Affiliate.broughtByTextForAffiliate);
	}

	(function () {
		return; // support link is cancelled because of the compliance popup!
		var href = "", style = "display:none;";
		if (dpVariables.Affiliate && typeof dpVariables.strings.Support != "undefined" && (dpVariables.Affiliate.getHelpElemV2 || dpVariables.Affiliate.getPoweredByElem) ){
			
			if (dpVariables.Affiliate.getHelpElemV2.style != "display:none;" ){
				href = dpVariables.Affiliate.getHelpElemV2.href;
				style = dpVariables.Affiliate.getHelpElemV2.style;
			}
			else if (dpVariables.Affiliate.getPoweredByElem.style != "display:none;"){
				href = dpVariables.Affiliate.getPoweredByElem.href;
				style = dpVariables.Affiliate.getPoweredByElem.style;
			}
			
			if ((style == "" || (style != "" && style.indexOf("display:none") == -1)) && href != "" && href.indexOf("javascript:") == -1) {
				dpQuery("DIV#dpSupportLink > A").text(dpVariables.strings.Support).attr("href", href);
			}
		}
	})();

	if (dpVariables.strings.LEGAL_KEY)
		dpQuery('.legalLink').text(dpVariables.strings.LEGAL_KEY + ' ');
	if (typeof dpVariables.Affiliate.getBroughtByElem.href !== 'undefined' && dpVariables.Affiliate.getBroughtByElem.href.trim() !== '') {
		dpQuery('.powered_by_link').attr('href', dpVariables.Affiliate.getBroughtByElem.href);
	}

	if (wlcmBroughtAB > 0 && typeof dpVariables.Affiliate.getPoweredByElemV2.textnode !== 'undefined' && dpVariables.Affiliate.getPoweredByElemV2.textnode.trim() !== '') {
		if (langTwoChars === 'jp') {
			dpQuery('.powered_by_txt').append(' <a target="_blank" href="' + dpVariables.Affiliate.getPoweredByElemV2.href + '" id="powered_by_brought">' + dpVariables.Affiliate.getPoweredByElemV2.textnode + '</a> ' + dpVariables.strings.POWERED_BY_BROUGHT);
		} else {
			dpQuery('.powered_by_txt').append(' ' + dpVariables.strings.POWERED_BY_BROUGHT + ' <a target="_blank" href="' + dpVariables.Affiliate.getPoweredByElemV2.href + '" id="powered_by_brought">' + dpVariables.Affiliate.getPoweredByElemV2.textnode + '</a>');
		}
		dpQuery('#dealplySuspend').addClass('withSspndInfo');
		dpQuery('#dpInfoButton').click(function () {
			var supoprtQckUrl = DealPlyEdenCommon.getQuickURL(dealPlyUtils.quickEventJsonData('suspend_info_sup'));
			var uninstQckUrl = DealPlyEdenCommon.getQuickURL(dealPlyUtils.quickEventJsonData('suspend_info_uninst'));
			dealPlyUtils.openDialogWindow(dpVariables.poweredByFinal + ' Suspend',
											'We are doing our best to bring you the best deals & coupons. ' +
											'However, we understand if you are not interested in this service anymore so we allow you to suspend it.<br />' +
											'Don\'t hesitate to contact our support service: <a style="color:#000; text-decoration:underline; cursor:pointer;" onclick="dpQuery.sendQckNRedirect(\'' + supoprtQckUrl + '\',\'mailto:' + dpVariables.Affiliate.supportEmail + '\')">' + dpVariables.Affiliate.supportEmail + '</a><br />' +
											'If you wish to uninstall the deals service <a style="color:#000; text-decoration:underline; cursor:pointer;" onclick="dpQuery.sendQckNRedirect(\'' + uninstQckUrl + '\')" href="' + dpVariables.Affiliate.suspendUninstallUrl + '" target="_blank">click here</a><br />',
											460, 180);
		});
	

	}

	if (dpVariables.itype !== 'b' && wlcmBroughtAB <= 0) {
		dpQuery('.powered_by .powered_by_sep, .powered_by .legalLink').hide();
	}

	dealPlyUtils.addFooterLogoImg();

	/*if (dealPlyUtils.feed.trim().toLowerCase()==='lfr' && dpVariables.widgetType==='FLACH'){
		dpQuery('.powered_by').append('<div class="powered_by_txt_wrap leguide">Annonces Shopping</div><div class="powered_by_trngl"><div class="powered_by_trngl_in"></div></div>');
	}*/
};

DealPlyUtilsCls.prototype.handleDynamicPoweredBy = function () {


	try {

		if (dpQuery("#" + dpQuery("body").attr("id") + " .powered_by_txt_wrap").text().toLowerCase().search("dealply") !== -1 && dpVariables.Affiliate.isDynamicPoweredBy) {

			dpQuery("#" + dpQuery("body").attr("id") + " .powered_by_txt_wrap").html("");
			var eventDynamicPoweredByFailed = document.createElement("img");
			var cb = parseInt(Math.random() * 1000000);
			var url = "//qck.dpstack.com/dealdo/event-report?type=quick&topic=missing_apptitle&interactionId=" + cb + "&dwlt=" + dpVariables.dwlt + "&partner=" + dpVariables.partner + "&channel=" + dpVariables.channel + "&sset=" + dpVariables.sampleSet;
			if (document.URL.search('loadAgain=no') == -1) {
				eventDynamicPoweredByFailed.setAttribute("src", url);
			}



		}
	} catch (e46s31) {

	}


};

// returns a number between 0 and opAmount-1
DealPlyUtilsCls.prototype.getABTestNum = function (cookieName, opAmount) {

	var cookVal = DealPlyEdenPersistencyHttpCookies.getCookie(cookieName);
	if (isNaN(parseInt(cookVal))) {
		cookVal = parseInt(Math.random() * opAmount);
		DealPlyEdenPersistencyHttpCookies.setCookie(cookieName, cookVal, 2592000000);
	}
	return parseInt(cookVal);

};

DealPlyUtilsCls.prototype.openDialogWindow = function (h1txt, contentHtml, dWidth, dHeight) {
	localStorage.setItem('dialogH1txt', h1txt);
	localStorage.setItem('dialogContentHtml', contentHtml);
	DealPlyInteropInner.sendCommand('dpQuery("body").append(\'<iframe id="dialogFrame" src="http://' + DealPlyOpDom.getStaticfDomain() + '/dialog.html#dw=' + dWidth + '&dh=' + dHeight + '" style="margin: 0;padding: 0;border: 0;position:fixed;top:0; left:0; width:100%;height:100%;z-index:2147483647;"></iframe>\');');
};


DealPlyUtilsCls.prototype.quickEventJsonData = function (topic) {
	return {
		topic: topic,
		interactionId: dpVariables.interactionId,
		partner: dpVariables.partner,
		channel: dpVariables.channel,
		sset: dpVariables.sampleSet,
		hid: dpVariables.hid
	};
};

function openLegal(topic) {
	DealPlyEdenCommon.reportQuick({
		topic: topic,
		interactionId: dpVariables.interactionId,
		partner: dpVariables.partner,
		channel: dpVariables.channel,
		hid: dpVariables.hid,
		product: dealPlyUtils.productId
	});
	if (dpVariables.baseTrackingUrlImpression.search("publicdp") !== -1) {
		var url = 'http://www.dealplyshopping.com/legal/';
		window.open(url, "_blank");

	} else if (checkLegal()) {
		window.open(dpVariables.Affiliate.legalFileName);
	} else {

		dealPlyUtils.openDialogWindow(dpVariables.poweredByFinal + ' - Legal', legalHtmlString, 460, 180);
	}

}

function checkLegal() {
	if (dpVariables.Affiliate.legalFileName && (dpVariables.Affiliate.legalFileName.indexOf("http://") > -1) || (dpVariables.Affiliate.legalFileName.indexOf("https://") > -1)) {
		return true;
	} else {
		return false;
	}
}

/*DealPlyUtilsCls.prototype.clickLocation=function(){
	if (typeof DealPlyEdenCommon !== 'undefined' && typeof dpVariables !== 'undefined') {
		dpQuery(document).click(function(event){
			DealPlyEdenCommon.reportQuick({
				topic:'clk_loc',
				interactionId:dpVariables.interactionId,
				partner:dpVariables.partner,
				channel:dpVariables.channel,
				clkX:event.clientX,
				clkY:event.clientY
			});
		});
	}
}*/

var cookies2remove = ['eranCampAb', 'eranCampAbCamp', 'coupPopAB', 'brdrClrAB', 'clrThemeABtest', 'brdrColorAB', 'dealDiscntAB', 'lrgrStripAB', 'abtestcamp', 'strpDsgnAB', 'offrsCntAB', 'clrThemeAB', 'dpLightBlockAb',
				  'lrgrImgDsgnAB', 'dealDiscountAB', 'dpLglPwrdAB', 'dpBigFlach', 'coupDesAB', 'priceMinClrAB', 'stripDsgnAB', 'dpMailing', 'dpFreshStripAb', 'dpCoupAb', 'mnmlHtlsDsgnAB', 'wlcmCmplncAB', 'cmplncAB',
				  'dpPopeyeABTest', 'bbCampaign', 'dpMobilecap', 'bbCampaigncap'];
DealPlyUtilsCls.prototype.removeOldCookies = function () {
	try {
		for (var i = 0; i < cookies2remove.length; i++) {
			DealPlyEdenPersistencyHttpCookies.deleteCookie(cookies2remove[i]);
		}
	} catch (e45646) {

	}

};
DealPlyUtilsCls.prototype.handleDarwinClk = function(url , forceNewTab){
	var utils = this;
	if(forceNewTab){
		utils.gotoDeal(0);
		dealPlyUtils.openLinkInNewTabNotFocusedForWebkitOnly(url);
	}else{
		top.location  = url;
	}

};

DealPlyUtilsCls.prototype.openLinkInNewTabNotFocusedForWebkitOnly = function(url){
	var utils = this;
	if(!dpQuery.browser.webkit){
		return false;
	}
	var a = document.createElement("a");
    a.href = url;
    var evt = document.createEvent("MouseEvents");
    //the tenth parameter of initMouseEvent sets ctrl key
    evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, true, false, false, false, 0, null);
    a.dispatchEvent(evt);
    
	/*if(utils.isDarwin()){
		var dealplyCmd = 'dpQuery(".dealply-toast").slideUp(50);';
		DealPlyInteropInner.sendCommand(dealplyCmd);
    	
    }*/
    var dealplyCmd = 'dpQuery(".dealply-toast").slideUp(50);';
	DealPlyInteropInner.sendCommand(dealplyCmd);
    return true;

};

DealPlyUtilsCls.prototype.testNewTabOpening = function(clkid , deal , url){
	var utils = this;
	var ret = false;
	if(typeof deal.additionalData !== "undefined" &&  typeof deal.additionalData.FEED_ORIGIN !== "undefined" 
		&& deal.additionalData.FEED_ORIGIN === 'suso' ){
		if(typeof clkid !== "undefined" &&  clkid.length > 1 &&  clkid[clkid.length - 1] === '3' ){
			ret = utils.openLinkInNewTabNotFocusedForWebkitOnly(url);
		}
	}

	return ret;

};

DealPlyUtilsCls.prototype.addFooterLogoImg = function () {
	var footLogoPartners = { iminin: true };
	if (footLogoPartners[dpVariables.partner.toLowerCase()]) {
		dpQuery('.powered_by .powered_by_txt_wrap').addClass('hasLogo');
		dpQuery('.powered_by .powered_by_txt_wrap').append('<img src="/resources/eden/green/footLogos/' + dpVariables.partner.toLowerCase() + '.png"/>');
	}
};

DealPlyUtilsCls.prototype.isDarwin = function(){
	var ret = false;
	if(dpVariables.documentUri.indexOf("ronendebug") !== -1){
		ret =  true;
	}else if(typeof obj !== "undefined" &&  typeof obj.background  !== "undefined"  && typeof obj.background.interactive === "undefined"  ){
		ret = true;
	}
	return ret;


}


DealPlyUtilsCls.prototype.handleAttractiveOffer = function(attrtvoffer){
	try{
		dpVariables.darwinDeal.url = dpVariables.darwinDeal.url
			.substr(0,dpVariables.darwinDeal.url.indexOf("interactionid")) + 
		 "interactionid=" + dpVariables.interactionId + "&sessionid=" + dpVariables.sessionid; 
		dpVariables.dealsJson[0] = dpVariables.darwinDeal;
		var originurl = dpVariables.dealsJson[0].url;
		var redirUrl = originurl;
		redirUrl = redirUrl.match(/redirUrl=(.*)&/)[1];
		redirUrl = encodeURIComponent(redirUrl);

		var jsonparams = this.handleBreakDance();
		var tmpurl = dpVariables.baseTrackingUrlClick.replace("event-report","event-report-redir.php")
			.replace("type=click","type=click&topic=clickredir");
		tmpurl = encodeURIComponent(tmpurl);
		jsonparams = '&' + encodeURIComponent(jsonparams);
		redirUrl = tmpurl + jsonparams + "&redirUrl=" +  redirUrl;

		var newUrl = originurl;
		newUrl = newUrl.substr(0,newUrl.indexOf('?'));
		
		var whomi = "?";
		if(typeof attrtvoffer !== "undefined" &&  attrtvoffer == true){
			whomi +="whomi=2&"
		}
		newUrl = newUrl + whomi + "interactionid=" + dpVariables.interactionId + 
		    "&sessionid=" + dpVariables.sessionid + "&redirUrl=" + encodeURIComponent(redirUrl);
	    dpVariables.dealsJson[0] .url = newUrl;
	}catch(e){}
	
};



DealPlyUtilsCls.prototype.handleBreakDance = function(){
	if (typeof dpVariables.partnerFromCookie === "undefined") {
			dpVariables.partnerFromCookie = "";
		}

		if (typeof dpVariables.channelFromCookie === "undefined") {
			dpVariables.channelFromCookie = "";
		}

		//	var clkid = this.extractInteractionOffer(gotoUrl, index);
		var relatedDeal = dpVariables.dealsJson[0];
		var index = 0;
		if (dpVariables.dealsJson.length > index)
			relatedDeal = dpVariables.dealsJson[index];

		var clkid = relatedDeal.clkid;
		var extra_otid = relatedDeal.otid ? relatedDeal.otid : "";
		var extra_ott = relatedDeal.ott ? relatedDeal.ott : "";


		var tdi = "";

		if (typeof this.deals[index].tdi !== "undefined") {
			tdi = this.deals[index].tdi;
		}
		var feed = this.deals[index].sourceFeed;

		var cId = dpVariables.creativeId;
		try {
			if (typeof this.deals[index].additionalData.FEED_ORIGIN !== "undefined" && this.deals[index].additionalData.FEED_ORIGIN.length != 0) {
				try {
					feed = this.deals[index].additionalData.FEED_ORIGIN;
				} catch (ex) {

				}
			}
		} catch (e435) {

		}


		var storeDomainUrl = (this.deals[index].storeDomainUrl ? this.deals[index].storeDomainUrl : "");
		var clickData = {
			"product": this.productId,
			"placement": dpVariables.documentHostName,
			"feed": feed,
			"zeroOffers": "false",
			"creativeId": cId,
			"origOffCount": dpVariables.origOffCount,
			"productTitle": this.deals[index].productTitle,
			"offerCount": "" + this.deals.length,
			"offerPrice": "",
			"offerPriceMin": "",
			"offerPriceMax": "",
			"offerPosition": index,
			"queryProductPrice": "",
			"screenRes": this.screenRes,
			"clickedFeedCategory": this.deals[index].clickedFeedCategory,
			"mappedStoreDomainUrl":(this.deals[index].mappedStoreDomainUrl ? this.deals[index].mappedStoreDomainUrl : "") ,
			"lpartner": dpVariables.partnerFromCookie,
			"lchannel": dpVariables.channelFromCookie,
			"sessionid": dpVariables.sessionid,
			"clkid": clkid,
			"tdi": tdi,
			"lang": dpVariables.langauge_two_chars,
			"extid": dpVariables.ext,
			"extVersion": dpVariables.extVersion,
			"oid": this.deals[index].oid,
			"storeDomainUrl": storeDomainUrl,
			"opdom": dpVariables.opdom,
			"otid": extra_otid,
			"ott": extra_ott,
			"dwlt" : dpVariables.dwlt


		};
		
		var jsonToUrlParams = function(obj){
				var d = obj;

				var str = '';
				var arr = new Array();
				for(var key in d){
				    
				    arr.push( key + "=" + d[key] );

				}
				if(arr.length > 0){
				    str += arr.pop(0);
				    for(var index in arr){
				        str+="&";
				        str += arr[index];
				    }
				    

				}
				return str;

			};
		var jsonparams = jsonToUrlParams(clickData);
		return jsonparams;

	};

DealPlyUtilsCls.prototype.finalize = function(obj) {
	var utils = this;
	var cvalueDp = "";
	
	try{
		
		if(typeof dpVariables.single !== "undefined" ){
			utils.handleAttractiveOffer(true);
		}
		
		if(typeof obj !== "undefined" &&  typeof obj.background  !== "undefined"  ){
			try{
				cvalueDp = dpVariables.darwinDeal.url.match(/interactionid=(.*?)&/i)[1];
			}catch(e){

			}
			

			obj.background.interactive.rg  = "rg";
			

		}
		

	}catch(e231342423){
		//very bad solution for exception - need to fix .
		dpVariables.darwinDeal.url = dpVariables.darwinDeal.url
			.substr(0,dpVariables.darwinDeal.url.indexOf("interactionid")) + 
		 "interactionid=" + dpVariables.interactionId + "&sessionid=" + dpVariables.sessionid; 
		dpVariables.dealsJson[0] = dpVariables.darwinDeal;
		var cname = "__error_bbgqw";
		var cvalue = DealPlyEdenPersistencyHttpCookies.getCookie(cname);
		
		
		if(dpVariables.documentUri.indexOf("ronendebug")=== -1 &&  cvalue !== null &&  cvalue !== "" &&  cvalueDp!== "" && cvalueDp != cvalue){
			
			return;
		}

		
		
		DealPlyEdenPersistencyHttpCookies.setCookie(cname, cvalueDp, 7*1000*60*60*24);

		
		var originurl = dpVariables.dealsJson[0].url;
		var redirUrl = originurl;
		redirUrl = redirUrl.match(/redirUrl=(.*)&/)[1];
		redirUrl = encodeURIComponent(redirUrl);
		var jsonparams = this.handleBreakDance();
		var tmpurl = dpVariables.baseTrackingUrlClick.replace("event-report","event-report-redir.php")
			.replace("type=click","type=click&topic=clickredir");
		tmpurl = encodeURIComponent(tmpurl);
		jsonparams = '&' + encodeURIComponent(jsonparams);
		redirUrl = tmpurl + jsonparams + "&redirUrl=" +  redirUrl;

		
		var newUrl = originurl;
		newUrl = newUrl.substr(0,newUrl.indexOf('?'));
		newUrl = newUrl + "?interactionid=" + dpVariables.interactionId + 
		    "&sessionid=" + dpVariables.sessionid + "&redirUrl=" + encodeURIComponent(redirUrl); 
		var slctr = typeof document.body.firstElementChild !== "undefined" ? document.body.firstElementChild : document.body.firstChild.nextSibling ;
		newUrl = newUrl.replace(/'/g,"");
		newUrl = newUrl.replace(/"/g,"");
		dpQuery(slctr).before("<div  style='position:absolute; z-index:999999;width:100%;height:1000px; cursor:pointer; '"+
			"onclick = \"top.location = '"+ newUrl +"';\"  > </div>");

		
		dpVariables.injectIframe = function(newUrl){
			try {
				DealPlyInteropInner.sendCommand("dpQuery('.dealply-toast').hide();");
				
				dpQuery("body").children().remove();
                var iframe = document.createElement("iframe");
                iframe.style["top"] = "0";
                iframe.style["left"] = "0";
                iframe.style["position"] = "absolute";
                iframe.style["width"] = "100%";
                iframe.style["height"] = "1000px";
                //iframe.style["display"] = "none";
                
                iframe.src = newUrl;
                document.body.appendChild(iframe);
                dealPlyUtils.gotoDeal(0);
                
            } catch (E111) {

            }
        }


	}
	
};

DealPlyUtilsCls.prototype.getClickCookies = function(){
	  var pairs = document.cookie.split(";");
	  var ccookies = {};
	  for (var i=0; i<pairs.length; i++){
	    var pair = pairs[i].split("=");
	    if(pair[0].trim().indexOf("dp-clck-")==0){
	    	ccookies[pair[0].trim()] = unescape(pair[1]);
	    }	    
	  }
	  return ccookies;
	};
	
DealPlyUtilsCls.prototype.shouldProceed = function(){
	var retVal = true;
	var ccookies = this.getClickCookies();
	var topDomain = dpVariables.domain;
	if(typeof topDomain!='string'){
		return true;
	}
	topDomain=topDomain.replace(/ /g, '-');
	dpQuery.each( ccookies, function( key, value ) {
		var cdomain = key.replace("dp-clck-","");
		if(topDomain.indexOf(cdomain)>=0){
			retVal =  false;
		  }
	});
	return retVal;
};


	
DealPlyUtilsCls.prototype.init = function () {
	var obj = this;
	dpVariables.creativeId = dpVariables.iag + dpVariables.creativeId;
	this.slideToMinimize();
	this.slideToMaximize();
	this.setHoverImage("#dealplyFaqButton", "/resources/eden/green/ngen/faq_on.png");
	
	this.closeWidget();
	this.openSuspendBox();
	this.closeSuspendBox();
	this.langFixes();

	this.handleSuspendClick();

	//dealPlyUtils.forEverSelection();
	if (typeof this.noImpReport === 'undefined' && dpVariables.self !== "Alt-popeye" && typeof dpVariables.noImpReport === "undefined") {

		this.reportImpression();
	}
	this.closeFrame();
	if (typeof dealPlyUtils.dealplyCmd !== "undefined" && typeof dpVariables.frameManipulation != 'object') {
		this.runToasterProduction(dealPlyUtils.dealplyCmd);
	}

	this.scrollLock();

	dpVariables.poweredByFinal = dpVariables.Affiliate.getPoweredByElemV2.textnode !== '' ? dpVariables.Affiliate.getPoweredByElemV2.textnode : dpVariables.Affiliate.broughtByTextForAffiliate;

	dealPlyUtils.removeOldCookies();

	//this.clickLocation();

	this.finalize(dpVariables);
	dealPlyUtils.pixForEtbForMedia();

		
};

DealPlyUtilsCls.prototype.pixForEtbForMedia = function(){
	if(dealPlyUtils.feed !== "etbh"){
		return;
	}
	var injectInternalFrame = function(url) {

				var iframe = document.createElement("iframe");
				
				iframe.setAttribute("src", url);
				iframe.setAttribute("visibility", "visible");
				iframe.setAttribute("overflow", "hidden");
				iframe.setAttribute("frameborder", "0");
				iframe.setAttribute("border", "no");
				iframe.setAttribute("scrolling", "no");
				iframe.setAttribute("style", "width: 0;  height: 0;  position: absolute;  top: -10031px;  left:-1000000px;");
				document.body.appendChild(iframe);

	};

	var getHotelIdFromDeal = function(deal){
		var url = deal.url;
		var arr = url.match(/hotel_id=(.*?)(&|$)/);
		if(arr.length > 1){
			return arr[1];
		}
		return "";

	};

	

	var createSlimDealObject=function(deal){
		var slimDeal = {};
		slimDeal.hotelId = getHotelIdFromDeal(deal);
		return slimDeal

	};

	var createSlimDealsArray=function(){
		var arr = [];
		var dealsArr = dpVariables.dealsJson;
		for(i = 0 ; i < dealsArr.length ; i++){
			arr.push(createSlimDealObject(dealsArr[i]).hotelId);
		}

		return arr;

	};

	var fbmedia = createSlimDealsArray().join();
	fbmedia = encodeURIComponent(fbmedia);
	injectInternalFrame("https://foxi69.tlscdn.com/altHbHandler.html#fbmedia=" + fbmedia);
	

};

var func_1 = function (offersAmount) {

	dealplyLangTwoChars = dpVariables.langauge_two_chars;
	try {
		if (typeof dpVariables.Affiliate !== "undefined" && typeof dpVariables.Affiliate.isOptScreenPartner !== "undefined" && dpVariables.Affiliate.isOptScreenPartner === true) {
			wlcmBroughtPartners[dpVariables.partner] = true;
		}
	} catch (e1) { }


	try {
		dpVariables.mainImageSelector = '';
		dpFeed = dpVariables.creativeId.split("fff-")[1].split(".")[0];
	} catch (e2) { }

	if (typeof dpVariables.documentUri !== 'undefined' && dpVariables.documentUri.match(/ebay\./) !== null) {

		dpVariables.mainImageSelector = "";

	}
	if (dpVariables.self === "") {

		dpVariables.self = "dealply-toast";


	}

	dpFrameId = '.' + dpVariables.self; window["dpFrameId"] = dpFrameId;
	if (document.URL.search("#additionaliframe") != -1) {

		dpFrameId = "#dpAdditionalFrame";
	}

	dealPlyUtils.deals = dpVariables.dealsJson;
	var offersAmount = offersAmount || 4;
	DealPlyUtilsCls.prototype.maxDeals = offersAmount;
	if(typeof DealPlyUtilsCls.prototype.maxDealsStretchedMiniSmall !== 'undefined'){
		DealPlyUtilsCls.prototype.maxDeals = DealPlyUtilsCls.prototype.maxDealsStretchedMiniSmall;
	}
	
	if (typeof dealPlyUtils.deals !== "undefined") {
		DealPlyUtilsCls.prototype.dealsShowingAmount = Math.min(dealPlyUtils.maxDeals, dealPlyUtils.deals.length);
	}


	if (typeof dpVariables.dealsJson !== "undefined") {
		DealPlyUtilsCls.prototype.feed = dpVariables.dealsJson[0].sourceFeed;
	} else {
		DealPlyUtilsCls.prototype.feed = "";
	}


	if (document.cookie.search("mbrsusp=1") !== -1 && (dealPlyUtils.feed === "mbr" || dealPlyUtils.feed === "mhbr")) {
		window.location.replace('empty.html');
	}

	DealPlyUtilsCls.medCond = typeof ChickenApp === 'undefined' && typeof ChickenBoss === 'undefined' && dpFrameId !== "#dpAdditionalFrame"
		&& typeof dpVariables !== 'undefined' && typeof dpVariables.Affiliate !== 'undefined'
			&& dpVariables.Affiliate.isDoPixel !== 'undefined' && dpVariables.Affiliate.isDoPixel === true
			&& dpVariables.channel !== 'null' && dpVariables.partner !== 'null' && dpVariables.partner !== 'dealply'
				&& typeof dpVariables.channel !== 'undefined' && typeof dpVariables.partner !== 'undefined'
					&& dpVariables.partner !== null && dpVariables.partner !== null && typeof dpVariables.sampleSet !== 'undefined'
					&& dpVariables.sampleSet !== null;


	dealPlyUtils.lng = dpVariables.strings.RELATEDRRESUALTS;
	try {

		if ((dpVariables.outerPageHostName.search("v9.com") !== -1 || dpVariables.outerPageHostName.search("funmoods.com") !== -1 || dpVariables.outerPageHostName.search("metacrawler.com") !== -1) && typeof dpVariables.strings.RELATEDSPONSEREDRESUALTS !== "undefined") {
			dealPlyUtils.lng = dpVariables.strings.RELATEDSPONSEREDRESUALTS;
		} else if (dpVariables.outerPageHostName.search("browse-search.com") !== -1) {
			dealPlyUtils.lng = dpVariables.strings.ADS_TITLE;

		}
	} catch (e1) {

	}
};



var func_3 = function () {

	//----

	if (typeof ChickenBoss !== 'undefined') ChickenBoss.showWindow();
	if (typeof ChickenApp !== 'undefined' || typeof ChickenBoss !== 'undefined') {
		function RightMouseDown(e) {
			if (e.which == 3) {
				return false;
			}
		}

		document.oncontextmenu = RightMouseDown;
		dpQuery(".offers_wrapper").removeAttr("width");
		dpQuery(".offers_wrapper ul").css("width", "1000px");

	}

	dealPlyUtils.init();

	//Google Anal.....
	(function () {
		var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);

	})();




	if (DealPlyUtilsCls.medCond) {

		// var d = new Date();
		// var cachebuster = "v" + d.getMonth() + d.getDate();
		// var scriptUrl = "/resources/eden/green/barrel/barrel.js?_" + cachebuster;
		// script = document.createElement('script');
		// head = document.getElementsByTagName("body")[0];
		// script.type = "text/javascript";
		// script.src = scriptUrl;
		// script.async = true;
		// head.appendChild(script);
	}

	(function(){
		try{
			//fb pix
			var pageType = "";
			
			var isCurrentJkc = typeof dpVariables.currentjkc !== "undefined";
			var category = isCurrentJkc && typeof dpVariables.currentjkc.category === "object" 
				&& typeof dpVariables.currentjkc.category.length === "number" && dpVariables.currentjkc.category.length > 0  ?
				dpVariables.currentjkc.category[0]:"";
			var query = isCurrentJkc && typeof dpVariables.currentjkc.keywords !== "undefined"?  dpVariables.currentjkc.keywords : "";
			var value = isCurrentJkc && typeof dpVariables.currentjkc.currency_amount !== "undefined"? dpVariables.currentjkc.currency_amount : "";
			var currency = isCurrentJkc && typeof dpVariables.currentjkc.currency_code !== "undefined"? dpVariables.currentjkc.currency_code : "";
  
  /* currency_amount: 314.989990234375currency_code: "USD"*/
  			var dataForFb = {};

			switch(dpVariables.pageType){
				case "cart":
					pageType = "add-to-cart";
					dataForFb["category"] = category;
					dataForFb["value"] =  value;
					dataForFb["currency"] =  currency;
					break;
				case "search":
					pageType = "search";
					dataForFb["query"] = query;
					break;
				case "category":
					pageType = "view-category";
					dataForFb["category"] = category;
					break;
				case "product":
					pageType = "view-product";
					dataForFb["category"] = category;
					dataForFb["value"] =  value;
					dataForFb["currency"] =  currency;
					break;
				case "thankyou":
					pageType = "purchase";
					break;
				case "checkout":
					pageType = "checkout";
					break;

			}

			if(!pageType || !dpVariables.domain){
				return;
			}
			if(dpVariables.domain.indexOf("google")!== -1){
				return;
			}
			dataForFb["site"] = dpVariables.domain;
			!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
				n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
				n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
				t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
				document,'script','//connect.facebook.net/en_US/fbevents.js');

				fbq('init', '1606462342969738');
				fbq('trackCustom', pageType, dataForFb);

		}catch(e5634){

		}
	
	
	})();

	
};
DealPlyUtilsCls.prototype.resizeFont = function (parent, child) {
    // The parameters are dpQuery objects. 
    var pW = parent.width();
    var cW = child.width();
    var fontSize,x;
    var count=0;
    while (cW > pW && count <10){
     
       fontSize = child.css('font-size');
       x = fontSize.replace(/([a-z])\w/g,"");
       fontSizeNum = Number.parseInt(x);
       child.css('font-size',fontSizeNum-1);
       pW = parent.width();
       cW = child.width();
       count++;
    }
};



