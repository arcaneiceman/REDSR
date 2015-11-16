var dealplyMainImageSelector;
var blackTtl = false;
var wlcmBroughtAB = -1;
var dealplyNumOfProducts;
var removeBr;
var langTwoChars;
var dpGetDealText;
var dealplyToastWidth;

var hasDiscount = function(deals) {
	for ( var i = 0; i < deals.length; i++) {
		if (deals[i].discountPercentage > 0) {
			return true;
		}
	}
	return false;
};

DealPlyUtilsCls.prototype.setHoverImage = function() {
};

DealPlyUtilsCls.prototype.isFirefox = function() {
	if (typeof navigator.userAgent === "undefined") {
		return false;
	}

	if (navigator.userAgent === null) {
		return false;
	}

	if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
		return true;
	}

	if (navigator.userAgent.toLowerCase().indexOf('opera') > -1) {
		return true;
	}

	return false;
};

DealPlyUtilsCls.prototype.generateIframeStyleString = function(){
	var toastHeight = '';
	
	var botLeftBorderRad = '';
	var dealplyToastWidthInteger = '';
	var moreStrCss = '';
	if (typeof dpVariables.skin != 'undefined') {
		toastHeight = dpVariables.skin.toastHeight;
		botLeftBorderRad = dpVariables.skin.botLeftBorderRad;
		dealplyToastWidthInteger = dpVariables.skin.dealplyToastWidthInteger;
		moreStrCss = dpVariables.skin.moreStrCss;
	}
	
	dealplyToastWidth = dealplyToastWidthInteger + dealplyNumOfProducts * 230;
	
	var useAnimation = true;
	
	var heightStyle = 'dpQuery("' + dpFrameId + '").css("height", "1px");';
	if (useAnimation) {
		if(this.isFirefox()){
			heightStyle = heightStyle + 'dpQuery("' + dpFrameId + '").css({height: "' + toastHeight + '"});';
		}else{
			heightStyle = heightStyle + 'dpQuery("' + dpFrameId + '").animate({height: "' + toastHeight + '"}, 170);';
		}
	} else {
		heightStyle = heightStyle + 'dpQuery("' + dpFrameId + '").animate({height: "' + toastHeight + '"}, 170);';
	}
	var domLocationToInsertTheIframe = '';
	var strCssPos = 'dpQuery("' + dpFrameId + '").css({"width":"' + dealplyToastWidth
	+ 'px" , "bottom":"0px" , "top":"auto" ,"overflow-x":"hidden" , "display" : "block" , "border-bottom" :"solid 0px #ccc" , '
	+ '			"position":"fixed" , "border-top-left-radius" : "10px", "-webkit-border-top-left-radius":"10px","-webkit-border-bottom-left-radius":"'
	+ botLeftBorderRad + 'px","-moz-border-radius-topleft":"10px",' + '			"-moz-border-radius-bottomleft":"' + botLeftBorderRad
	+ 'px","border-top-left-radius":"10px","border-bottom-left-radius":"' + botLeftBorderRad + 'px" , "right" :"0px"  , "z-index" :"9999999999999",'
	+ '			"margin-bottom": "0px" , "box-sizing" : "content-box", "margin-top": "-22px" , "visibility":"visible"' + moreStrCss
	+ '}).attr("allowTransparency","true");';
	var dealplyIframeStyleToManipulate = 'dpQuery("' + dpFrameId + '").removeAttr("style");' + strCssPos + heightStyle + domLocationToInsertTheIframe;
	DealPlyUtilsCls.prototype.dealplyCmd = dealPlyUtils.iframeManipulation(dealplyIframeStyleToManipulate);
};




var greenBGSupportedLangs = {
	de : true,
	dk : true,
	en : true,
	es : true,
	fr : true,
	it : true,
	jp : true,
	nl : true,
	no : true,
	pt : true,
	ru : true,
	se : true,
	tr : true,
	pl : true
};

DealPlyUtilsCls.prototype.closeSuspendBox = function() {
	// cancel out existing function
};
DealPlyUtilsCls.prototype.openSuspendBox = function() {
	var obj = this;
	dpQuery("#dealplySettings").click(function() {
		dpQuery("#dealplySuspend").toggle();
		dpQuery("#flach .sideControls#dealplySettings").toggleClass('open');

		dpQuery("#closeSuspendWidget").click(function(e) {
			// dpQuery("#dealplySettingButton").css("display","block");
			dpQuery("#dealplySuspend").hide();
			dpQuery("#flach .sideControls#dealplySettings").removeClass('open');
		});
	});

};

DealPlyUtilsCls.prototype.isChrome = function() {
	if (typeof navigator.userAgent === "undefined") {
		return false;
	}

	if (navigator.userAgent === null) {
		return false;
	}

	if (typeof ChickenBoss !== 'undefined') {
		return false;
	}

	if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
		return true;
	}

	if ((navigator.userAgent.toLowerCase().indexOf('apple') > -1) && (navigator.userAgent.toLowerCase().indexOf('safari') > -1)) {
		return true;
	}

	return false;
};


DealPlyUtilsCls.prototype.goto999 = function() {
	
	dealPlyUtils.gotoDeal(0, 999);
	urlSuffix = "";
	if(typeof dpVariables.nnnCreative !== "undefined"){
		if(dpVariables.nnnCreative === ".nnn00."){
			return;
		}else{
			urlSuffix = "&nnn=true";
		}
	} 
	var anchorStr = "linkto";
	var url = dpQuery("*["+ anchorStr +"]")
				.last().attr(anchorStr);
	url += urlSuffix;
	dealPlyUtils.debugflag999 || dpVariables.country === "br"  ? (top.location.href =  url) : window.open(url, '_blank');
	
};



var func_2 = function() {
	if (navigator.userAgent.toLowerCase().indexOf('safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1 ) {
		if(!(typeof isToShowSuspendMenu=='boolean' && isToShowSuspendMenu)){
			dpQuery('a#dealplySettings').css('display','none');
		}
	} 
	dealplyMainImageSelector = dpVariables.mainImageSelector;
	if (wlcmBroughtPartners[dpVariables.partner.toLowerCase()]) {
		wlcmBroughtAB = 1;
	}
	dealplyNumOfProducts = dealPlyUtils.deals.length;
	if (dealplyNumOfProducts > 4) {
		dealplyNumOfProducts = 4;
	}
	
	
	dealPlyUtils.productId = 802442;

	if (dpVariables.productID instanceof Array && dpVariables.productID.length > 0) {
		dealPlyUtils.productId = dpVariables.productID[0];
	}
	if(dpVariables.iag!=null && dpVariables.iag.search("client100")>=0){
		dealPlyUtils.productId = 805442;
		if(typeof dpVariables.productIDself != 'undefined'){
			dealPlyUtils.productId = dpVariables.productIDself;
		}
	}
	
	removeBr = dpVariables.strings.MORE_DEALS2;
	removeBr = removeBr.replace("<BR/>", '');
	
	langTwoChars = dpVariables.langauge_two_chars;
	
	dpGetDealText = dpVariables.strings.GET_DEAL + ">>";
	if (langTwoChars.search("ru") !== -1) {
		dpGetDealText = dealPlyUtils.sub_desc(dpVariables.strings.GET_DEAL, 22);
		dpGetDealText += ">>";
	}

	dealPlyUtils.generateIframeStyleString();
    
};

dealPlyUtils.handle999 = function(){
	var shouldRemove = false;
	var condForShouldRemove = typeof dpVariables.country !== "undefined" &&
				 	dpVariables.country!== "br";

	if(dealPlyUtils.isChrome() ){
		if(condForShouldRemove){
			shouldRemove = true;
		}
	}else if(document.URL.indexOf("TopBarAnimated") !== -1){
		if(condForShouldRemove){
			shouldRemove = true;
		}
	}

	shouldRemove && dpQuery("div#goto999").size() >  0  &&
			 	  dpQuery("div#goto999").remove();

};
var func_4 = function() {
	dealPlyUtils.handle999();

	dealPlyUtils.insert_content();

	// add ratings, featured and additional data to deals
	if (dpQuery('#flach').length > 0) {
		var itter_max = 4;
		if (dealPlyUtils.deals.length < itter_max) {
			itter_max = dealPlyUtils.deals.length;
		}
		var curDeal, hasPayments;
		for ( var i = 0; i < itter_max; i++) {
			child_index = i + 2;
			curDeal = dealPlyUtils.deals[i];
			hasPayments = typeof curDeal.payments !== 'undefined' && curDeal.payments.trim() !== '';
			if (typeof curDeal.rating === 'undefined' || curDeal.rating<4){
				dpQuery('li:nth-child('+child_index+') .starsWrap').remove();
			} else {
				var rating = curDeal.rating;
				var fullStars = Math.floor(rating);
				var isHalfStar = Math.round(rating) > fullStars;
				var emptyStarsStart = isHalfStar ? fullStars + 1 : fullStars;
				var starsEl = dpQuery('li:nth-child('+child_index+') .star');
				for (var j=0;j<fullStars;j++){
					dpQuery(starsEl[j]).show();
				}
				if (isHalfStar) {
					dpQuery(starsEl[fullStars]).addClass('star_half').show();
				}
				for (var j=emptyStarsStart;j<5;j++){
					dpQuery(starsEl[j]).addClass('star_empty').show();
				}
				// set number of reviews if possible, otherwise - remove element
				if (typeof curDeal.numOfProductRaters !== 'undefined' && curDeal.numOfProductRaters>0 && curDeal.numOfProductRaters<10000){
					dpQuery('li:nth-child('+child_index+') .ratersAmount').text('('+curDeal.numOfProductRaters+')');
				} else {
					dpQuery('li:nth-child('+child_index+') .ratersAmount').remove();
				}
			}	
			
			// set discount badge and featured banner
			if (curDeal.discountPercentage > 0) {
				dpQuery('li:nth-child(' + child_index + ') .dealDiscount').text('-' + curDeal.discountPercentage + '%');
				if (!hasPayments) {
					var priceBefore = (100 * curDeal.productPrice) / (100 - curDeal.discountPercentage);
					priceBefore = Math.floor(priceBefore * 100) / 100;

					if (/[0-9.,]$/.test(curDeal.productPriceWithCurrencySymbol)) {
						dpQuery('li:nth-child(' + child_index + ') .priceBefore').text(curDeal.productPriceCurrencySymbol + priceBefore);
					} else {
						dpQuery('li:nth-child(' + child_index + ') .priceBefore').text(priceBefore + curDeal.productPriceCurrencySymbol);
					}

					dpQuery('li:nth-child(' + child_index + ') .logo').addClass('withDiscount');
					dpQuery('li:nth-child(' + child_index + ') .retailerTitle').addClass('withDiscount');
					dpQuery('li:nth-child(' + child_index + ') .priceBefore').css('height', '14px');
				}
			} else {
				dpQuery('li:nth-child(' + child_index + ') .dealDiscount').remove();
			}
			if (curDeal.isFeatured && !hasPayments) {
				dpQuery('li:nth-child(' + child_index + ') .featuredBan').show();
				dpQuery('li:nth-child(' + child_index + ') .logo').addClass('withDiscount');
				dpQuery('li:nth-child(' + child_index + ') .retailerTitle').addClass('withDiscount');
				dpQuery('li:nth-child(' + child_index + ') .priceBefore').css('height', '14px');
			}
			if (hasPayments) {
				dpQuery('li:nth-child(' + child_index + ') .payments').text(dealPlyUtils.sub_desc(curDeal.payments, 40));
				dpQuery('li:nth-child(' + child_index + ') .rightDiv').addClass('withPayments');
				dpQuery('li:nth-child(' + child_index + ') .priceBefore').hide();
			}
			// set additional notes
			if (curDeal.dealNotes !== "" && curDeal.dealNotes.length > 4) {
				dpQuery('li:nth-child(' + child_index + ') .offerMoreData').text(dealPlyUtils.sub_desc(curDeal.dealNotes, 100));
				dpQuery('li:nth-child(' + child_index + ') .offerMoreData').addClass('hasMoreData');
			}
		}

		dpQuery('li .numOfRaters span.numOfRatersTxt').text(dpVariables.strings.REVIEWS_TEXT);
	}
	// end of add ratings, featured and additional data to deals

	// changes according to dpVariables
	if (typeof dpVariables.skin != 'undefined' && dpVariables.skin.showLngTtl) {
		if (greenBGSupportedLangs[langTwoChars]) {
			dpQuery('#flach #dealplyWidgetControlPanel').css('background-image',
					'url(/resources/eden/green/strip/ttls/blue/' + langTwoChars + '_dealsTitle.png)');
		} else {
			dpQuery('#flach #dealplyWidgetControlPanel').css('background-image', 'url(/resources/eden/green/strip/ttls/blue/en_dealsTitle.png)');
		}
	}
	dpQuery('.dealply_container').addClass(langTwoChars + 'lang');
	dealPlyUtils.handleDynamicPoweredBy();
	if(typeof dpVariables.Affiliate!='undefined' && typeof dpVariables.Affiliate.broughtByTextForAffiliate=='string' && dpVariables.Affiliate.broughtByTextForAffiliate.match(/dealply/i)){
		dpVariables.Affiliate.broughtByTextForAffiliate = "Offers4U";
	}
	
	dealPlyUtils.handlePartnerRelatedLinks();
	dpQuery('#dealplySuspandForTextPanel span').append(dpVariables.strings.SETTINGS_TOAST_SUSPEND_DEALPLY);
	dpQuery('#suspendOp0 + label').append(dpVariables.strings.SETTINGS_TOAST_SUSPEND_1_HOUR);
	dpQuery('#suspendOp1 + label').append(dpVariables.strings.SETTINGS_TOAST_SUSPEND_1_DAY);
	dpQuery('#suspendOp2 + label').append(dpVariables.strings.SETTINGS_TOAST_SUSPEND_1_WEEK);
	dpQuery('#dealplySuspendButton').text(dpVariables.strings.SUSPEND);
	dpQuery('#dealplySuspend #dpSuspendUninstall').text(dpVariables.strings.SUSPEND_UNINSTALL);
	dpQuery('#dealplySuspend #dpSuspendUninstall').append(
			' <a id="sspndUninstlClick" href="' + dpVariables.Affiliate.suspendUninstallUrl + '" target="_blank">'
					+ dpVariables.strings.SUSPEND_UNINSTALL_CLICK + '</a>.');
	dpQuery('#dealplySuspend #dpInfoButton').text(dpVariables.strings.SUSPEND_WHAT);
	
	var firstRun =  document.URL.indexOf("TopBar") !== -1 && document.URL.indexOf("#rg") === -1;//first time run of animated top bar
	
	if(!firstRun){
		
		var maximumNumberOfAttempts = 8;
		intervalIDforcreateAboutService = 0;
		intervalIDforcreateAboutService = window.setInterval(function() {
			if (dealPlySkinObj.createAboutService(false)) {
				window.clearInterval(intervalIDforcreateAboutService);
			}else if(maximumNumberOfAttempts==0){
				dealPlySkinObj.createAboutService(true);
				window.clearInterval(intervalIDforcreateAboutService);
			}
			maximumNumberOfAttempts--;
		}, 50);
	}

	
	if (typeof dpVariables.Affiliate != 'undefined' && dpVariables.Affiliate.suspendUninstallUrl == 'remove') {
		dpQuery("#dpSuspendUninstall").css("visibility", "hidden");
	} else {
		dpQuery('#sspndUninstlClick').click(function() {
			DealPlyEdenCommon.reportQuick({
				topic : 'suspend_uninstall_click',
				interactionId : dpVariables.interactionId,
				partner : dpVariables.partner,
				channel : dpVariables.channel,
				sset : dpVariables.sampleSet,
				productId : dealPlyUtils.productId
			});
		});
	}

	dpQuery('#dealplySettingButton').attr('title', dpVariables.strings.SUSPEND);
	dpQuery('#dealplyFaqButton').attr('title', dpVariables.strings.FAQ);
	dpQuery('#dealplyFaqLink').attr('style', dpVariables.Affiliate.getHelpElem.style);
	if (dpVariables.Affiliate.getHelpElem.href === 'javascript:DealPlyEdenToast.handleHelpClick();void(0);') {
		dpQuery('#dealplyFaqLink').attr('href', 'http://offers4u.org/FAQ');
	} else {
		if(dpVariables.itype!=="BUNDLE" && typeof dpVariables.Affiliate !='undefined' && typeof dpVariables.Affiliate.getHelpElem !='undefined' && typeof dpVariables.Affiliate.getHelpElem.href=='string' && dpVariables.Affiliate.getHelpElem.href.match(/dealply/i)){
			dpQuery('#dealplyFaqLink').attr('href', 'http://offers4u.org/FAQ');
		}else{
			dpQuery('#dealplyFaqLink').attr('href', dpVariables.Affiliate.getHelpElem.href);
		}
	}
	if (dpVariables.partner.indexOf('ctmamf') === 0) {
		dpQuery('#dealplySettings').hide();
		dpQuery('#dealplySettingButton').hide();
		dpQuery('#dealplyFaqButton').attr('title', 'what\'s this');
		dpQuery('#dealplyFaqLink').attr('target', '');
	}

	// end changes according to dpVariables
	/*
	 * if(typeof dpVariables !== 'undefined' && typeof
	 * dpVariables.Affiliate !== 'undefined' &&
	 * dpVariables.Affiliate.isDoPixel !== 'undefined' &&
	 * dpVariables.Affiliate.isDoPixel === true && dpVariables.channel
	 * !== 'null' && dpVariables.partner !== 'null' &&
	 * dpVariables.partner !== 'dealply' && typeof dpVariables.channel
	 * !== 'undefined' && typeof dpVariables.partner !== 'undefined' &&
	 * dpVariables.partner !== null && dpVariables.partner !== null){
	 * dpQuery('#rmSecondImg').attr('src','http://ad.yieldmanager.com/pixel?id='+dpVariables.dpRMXPixelRegionId+'&t=2'); }
	 */

	dpQuery("#dealplyWidgetControlPanel,#goto999").click(function() {
		dealPlyUtils.goto999();
	});
	/*
	 * dpQuery("#dealplyRelatedOfferTextPanel").css("cursor","pointer").click(function(){
	 * dpQuery("#greenAreaClickable").click(); });
	 */

	dpQuery("#xSpan").hover(function() {
		dpQuery(this).css("font-weight", "bold");
	}, function() {
		dpQuery(this).css("font-weight", "normal");
	});

	str = '<span style = "text-decoration:none; position:absolute; top:35px; " ><< </span><span style ="position:absolute; left:25px;">'
			+ dpVariables.strings.MORE_DEALS2 + '</span> ';
	dpQuery("#dpShopNoStar").html(str);
	if (dpVariables.langauge_two_chars == 'fr' || dpVariables.langauge_two_chars == 'jp') {
		dpQuery("#dpShopNoStar span").eq(1).css({
			"bottom" : "-32px"
		});
	}

	DealPlyUtilsCls.prototype.hoverProductImage = function() {
		var dealplyCmdMinWidth = 'dpQuery("' + dpFrameId + '").css({' + dealplyToastWidth + ' });';
		var dealplyCmdMaxWidth = 'dpQuery("' + dpFrameId + '").css("width", "215px");';

		var dealPlyUtils = this;
		var defaultWidth = "53px";
		if (dealplyLangTwoChars.search("pt") !== -1) {
			defaultWidth = "60px";
		}
	};

	dealPlyUtils.hoverProductImage();

	dpQuery('#flach').addClass(dpVariables.classes);
	if (typeof dpVariables.skin != 'undefined') {
		dpVariables.skin.readyFunc();
	}

};
