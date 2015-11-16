
if(typeof DealPlyOpDomCls === "undefined") {
	DealPlyOpDomCls = function() {};
	
	DealPlyOpDom = new DealPlyOpDomCls();
	
	DealPlyOpDomCls.prototype.getSampleSetSuffix = function() {
		var suffix = DealPlyOpDom.getSampleSetSuffixForServedby();
		
		if(suffix.toLowerCase().indexOf("qa") >= 0) {
			return "";
		}
		
		return suffix;
	};
	
	/**
	 * Returns the suffix to be used for sub-domains of this user. Possible values:
	 * 
	 * "0" (without the quotes) - the staging set, resulting in host names like so: f0.dealply.com
	 * "_qa" (without the quotes) - the QA set, resulting in host names like so: f_qa.dealply.com
	 * "" (empty string) - the production set, resulting in hostnames like so: f.dealply.com
	 */
	DealPlyOpDomCls.prototype.getSampleSetSuffixForServedby = function() {
		try {
			if(typeof DealPly !== "undefined" && typeof DealPly.getSampleSet !== "undefined" && DealPly.getSampleSet() !== null) {
				var sampleSet = DealPly.getSampleSet();
				if(sampleSet === "0") {
					return "0";
				}
				if(sampleSet.toLowerCase().indexOf("q") === 0) {
					return "_qa";
				}
				return "";
			}
		} catch(e23) {
			
		}	
		
		try {
			if(typeof DealPlyEphemeralConfig !== "undefined" && typeof DealPlyEphemeralConfig.getSampleSet !== "undefined" && DealPlyEphemeralConfig.getSampleSet() !== null) {
				var sampleSet = DealPlyEphemeralConfig.getSampleSet();
				if(sampleSet === "0") {
					return "0";
				}
				if(sampleSet.toLowerCase().indexOf("q") === 0) {
					return "_qa";
				}
				return "";
			}
		} catch(e28) {
			
		}	
		
		try {
			var hostname = window.location.hostname.toLowerCase();
			
			//TODO: This is a dangerous check, since if the hostname incidentally contains a zero followed by a dot, we will assume this is the staging set (#0).
			if(hostname.indexOf("0.") >= 0) {
				return "0";
			}
		} catch(e2811) {
			
		}	
		
		return "";
	};
	
	DealPlyOpDomCls.prototype.getBaseDomain = function() {
		try {
			if(typeof ChickenApp !== "undefined" || typeof ChickenBoss !== "undefined"){
				var parts = location.hostname.split('.');
				var subdomain = parts.shift();
				var domainWithNoSub = parts.join('.');
				return domainWithNoSub;
			}
			
			if(typeof XulJavaScriptJsDom !== "undefined" && XulJavaScriptJsDom != null && XulJavaScriptJsDom != "") {
				return XulJavaScriptJsDom;
			} else if(typeof DealPlyDomParams !== "undefined" && typeof DealPlyDomParams.dom !== "undefined" && DealPlyDomParams.dom != null && DealPlyDomParams.dom != "" && DealPlyDomParams.dom.indexOf("Magic") < 0) {
				return DealPlyDomParams.dom;
			} else if(top.location === window.location) {
				if(typeof JavaScriptJsTagUrl !== "undefined" && JavaScriptJsTagUrl != null) {
					var newHostName = JavaScriptJsTagUrl;
					var startPos = newHostName.indexOf("//") + 2;
					newHostName = newHostName.substr(startPos);
					var endPos = newHostName.indexOf("/");
					if(endPos > 0) {
						newHostName = newHostName.substr(0, endPos);
					}

					if(newHostName.replace(".", "-").indexOf(".") >= 0) {
						newHostName = newHostName.substring(newHostName.indexOf(".") + 1);
					}

					return newHostName;
				}
				
				return DealPlyOpDom.getLocalConfigDom();
			} else {
				//Probably inside Flach
				var hostname = document.location.hostname;
				
				if(hostname.replace(".", "-").indexOf(".") >= 0) {
					hostname = hostname.substring(hostname.indexOf(".") + 1);
				}
				
				return hostname;
			}
		} catch(e82) {
			
		}	
		
		return DealPlyOpDom.getLocalConfigDom();
	};
	
	DealPlyOpDomCls.prototype.getLocalConfigDom = function() {
		var defaultDom = "dealply.com";
		
		if(typeof DealPlyConfigLocal !== "undefined" && DealPlyConfigLocal != null && typeof DealPlyConfigLocal.getDom !== "undefined" && DealPlyConfigLocal.getDom() != null && DealPlyConfigLocal.getDom() !== "") {
			return DealPlyConfigLocal.getDom();
		}
		
		return defaultDom;
	};
	
	DealPlyOpDomCls.prototype.getStaticfDomain = function() {
		var sampleSetSuffix = DealPlyOpDom.getSampleSetSuffix();
		
		return "f" + sampleSetSuffix + "." + DealPlyOpDom.getBaseDomain();
	};
	
	DealPlyOpDomCls.prototype.getServedbyDomain = function() {
		var sampleSetSuffix = DealPlyOpDom.getSampleSetSuffixForServedby();
		
		if(DealPlyOpDom.isHttps()) {
			var lowerBase = DealPlyOpDom.getBaseDomain().toLowerCase();
			
			//var useDomain = "apollocdn.com";
			var useDomain = "tlscdn.com";

			if(lowerBase === "dealply.com" || lowerBase === "dpstack.com") {
				useDomain = "dealply.com";
			} 
			return "s" + sampleSetSuffix + "."+ useDomain ;
		}
		
		return "s" + sampleSetSuffix + "." + DealPlyOpDom.getBaseDomain();
	};
	
	
	DealPlyOpDomCls.prototype.getServedbySuffixForStaticf = function() {
		if(typeof dpVariables !== "undefined" && typeof dpVariables.sampleSet !== "undefined" && dpVariables.sampleSet !== null) {
			var sampleSet = dpVariables.sampleSet;
			if(sampleSet === "0") {
				sampleSetSuffix =  "0";
			}else if (sampleSet === "qa"){
				sampleSetSuffix = "qa";
			}else{
				sampleSetSuffix = "";
			}
			
		}else{
			sampleSetSuffix = "";
		}
		
		return sampleSetSuffix;
	};
	DealPlyOpDomCls.prototype.getServedbyBaseUrlWithSuffix = function() {
		var sampleSetSuffix = DealPlyOpDom.getServedbySuffixForStaticf();
		
		if(DealPlyOpDom.isHttps()) {
			var lowerBase = DealPlyOpDom.getBaseDomain().toLowerCase();
			
			//var useDomain = "apollocdn.com";
			var useDomain = "tlscdn.com";

			if(lowerBase === "dealply.com" || lowerBase === "dpstack.com") {
				useDomain = "dealply.com";
			} 
			return "s" + sampleSetSuffix + "."+ useDomain ;
		}
		
		return '//'+"s" + sampleSetSuffix + "." + DealPlyOpDom.getBaseDomain();
	};
	
	DealPlyOpDomCls.prototype.getCrownDomain = function() {
		var sampleSetSuffix = DealPlyOpDom.getSampleSetSuffix();
		
		var domain = DealPlyOpDom.getBaseDomain();
		
		if(domain.toLowerCase() === "tlscdn.com") {
			domain = "apollocdn.com";
		}
		
		return "c" + sampleSetSuffix + "." + domain;
	};
	
	DealPlyOpDomCls.prototype.getImpressionDomain = function() {
		var sampleSetSuffix = DealPlyOpDom.getSampleSetSuffix();
		
		var domain = DealPlyOpDom.getBaseDomain();
		
		if(domain.toLowerCase() === "tlscdn.com") {
			domain = "apollocdn.com";
		}
		
		return "m" + sampleSetSuffix + "." + domain;
	};
	
	DealPlyOpDomCls.prototype.getAccessDomain = function() {
		var sampleSetSuffix = DealPlyOpDom.getSampleSetSuffix();
		
		var domain = DealPlyOpDom.getBaseDomain();
		
		if(domain.toLowerCase() === "tlscdn.com") {
			domain = "apollocdn.com";
		}
		
		return "x" + sampleSetSuffix + "." + domain;
	};
	
	DealPlyOpDomCls.prototype.getClickDomain = function() {
		var sampleSetSuffix = DealPlyOpDom.getSampleSetSuffix();
		
		var domain = DealPlyOpDom.getBaseDomain();
		
		if(domain.toLowerCase() === "tlscdn.com") {
			domain = "apollocdn.com";
		}
		
		return "l" + sampleSetSuffix + "." + domain;
	};
	
	DealPlyOpDomCls.prototype.getHeartbitDomain = function() {
		var sampleSetSuffix = DealPlyOpDom.getSampleSetSuffix();
		
		var domain = DealPlyOpDom.getBaseDomain();
		
		if(domain.toLowerCase() === "tlscdn.com") {
			domain = "apollocdn.com";
		}
		
		return "h" + sampleSetSuffix + "." + domain;
	};
	
	DealPlyOpDomCls.prototype.getQuickDomain = function() {
		var sampleSetSuffix = DealPlyOpDom.getSampleSetSuffix();
		
		var domain = DealPlyOpDom.getBaseDomain();
		
		if(domain.toLowerCase() === "tlscdn.com") {
			domain = "apollocdn.com";
		}
		
		return "q" + sampleSetSuffix + "." + domain;
	};
	
	DealPlyOpDomCls.prototype.getEdgeDomain = function() {
		var sampleSetSuffix = DealPlyOpDom.getSampleSetSuffix();
		
		return "d" + sampleSetSuffix + "." + DealPlyOpDom.getBaseDomain();
	};
	
	DealPlyOpDomCls.prototype.getIeDomain = function() {
		var sampleSetSuffix = DealPlyOpDom.getSampleSetSuffix();
		
		return "ie" + sampleSetSuffix + "." + DealPlyOpDom.getBaseDomain();
	};
	
	DealPlyOpDomCls.prototype.getFirefoxDomain = function() {
		var sampleSetSuffix = DealPlyOpDom.getSampleSetSuffix();
		
		return "ff" + sampleSetSuffix + "." + DealPlyOpDom.getBaseDomain();
	};
	
	DealPlyOpDomCls.prototype.getChromeDomain = function() {
		var sampleSetSuffix = DealPlyOpDom.getSampleSetSuffix();
		
		return "ch" + sampleSetSuffix + "." + DealPlyOpDom.getBaseDomain();
	};
	
	DealPlyOpDomCls.prototype.getOptDomain = function() {
		var sampleSetSuffix = DealPlyOpDom.getSampleSetSuffix();
		
		return "i" + sampleSetSuffix + "." + DealPlyOpDom.getBaseDomain();
	};
	
	DealPlyOpDomCls.prototype.getSearchDomain = function() {
		var sampleSetSuffix = DealPlyOpDom.getSampleSetSuffix();
		
		return "i" + sampleSetSuffix + "." + DealPlyOpDom.getBaseDomain();
	};
	
	DealPlyOpDomCls.prototype.getEsterBaseUrl = function() {
		var sampleSetSuffix = DealPlyOpDom.getSampleSetSuffix();
		
		return "es" + sampleSetSuffix + "." + DealPlyOpDom.getBaseDomain();
	};

	DealPlyOpDomCls.prototype.isHttps = function() {
		try {
			if(document.location.protocol.toLowerCase() === "https:") {
				return true;
			}
			
			return false;
		} catch(e) {
			return false;
		}
	};
		
	DealPlyOpDomCls.prototype.getStaticfBaseUrl = function() {
		return DealPlyOpDom.getStaticBaseUrlForDomain("f");
	};
	
	DealPlyOpDomCls.prototype.getServedbyBaseUrl = function() {
		return DealPlyOpDom.getDynamicBaseUrlForSubDomain("s");
	};
	
	DealPlyOpDomCls.prototype.getCrownBaseUrl = function() {
		return DealPlyOpDom.getStaticBaseUrlForDomain("c");
	};
	
	DealPlyOpDomCls.prototype.getImpressionBaseUrl = function() {
		return DealPlyOpDom.getDynamicBaseUrlForSubDomain("m");
	};
	
	DealPlyOpDomCls.prototype.getAccessBaseUrl = function() {
		return DealPlyOpDom.getDynamicBaseUrlForSubDomain("x");
	};
	
	DealPlyOpDomCls.prototype.getClickBaseUrl = function() {
		return DealPlyOpDom.getDynamicBaseUrlForSubDomain("l");
	};
	
	DealPlyOpDomCls.prototype.getHeartbitBaseUrl = function() {
		return DealPlyOpDom.getDynamicBaseUrlForSubDomain("h");
	};
	
	DealPlyOpDomCls.prototype.getQuickBaseUrl = function() {
		return DealPlyOpDom.getDynamicBaseUrlForSubDomain("q");
	};
	
	DealPlyOpDomCls.prototype.getEdgeBaseUrl = function() {
		return "http://d." + DealPlyOpDom.getBaseDomain() + "/";
	};
	
	DealPlyOpDomCls.prototype.getIeBaseUrl = function() {
		return DealPlyOpDom.getStaticBaseUrlForDomain("ie");
	};
	
	DealPlyOpDomCls.prototype.getFirefoxBaseUrl = function() {
		return DealPlyOpDom.getStaticBaseUrlForDomain("ff");
	};
	
	DealPlyOpDomCls.prototype.getChromeBaseUrl = function() {
		return DealPlyOpDom.getStaticBaseUrlForDomain("ch");
	};
	
	DealPlyOpDomCls.prototype.getOptBaseUrl = function() {
		return DealPlyOpDom.getStaticBaseUrlForDomain("i");
	};
	
	DealPlyOpDomCls.prototype.getSearchBaseUrl = function() {
		return DealPlyOpDom.getStaticBaseUrlForDomain("i");
	};
	
	DealPlyOpDomCls.prototype.getStaticBaseUrlForDomain = function(subDomain) {
		var sampleSetSuffix = DealPlyOpDom.getSampleSetSuffix();
		
		if(DealPlyOpDom.isHttps()) {
			var lowerBase = DealPlyOpDom.getBaseDomain().toLowerCase();
			
			var useDomain = "tlscdn.com";
			
			if(lowerBase === "dealply.com" || lowerBase === "dpstack.com") {
				useDomain = "dealply.com";
			} else {
				subDomain = "foxi180_" + subDomain;
			}

			return "https://" + subDomain + sampleSetSuffix + "." + useDomain + "/";
		}
		
		return "http://" + subDomain + sampleSetSuffix + "." + DealPlyOpDom.getBaseDomain() + "/";
	};
	
	DealPlyOpDomCls.prototype.getDynamicBaseUrlForSubDomain = function(subDomain) {
		var sampleSetSuffix = DealPlyOpDom.getSampleSetSuffixForServedby();
		
		if(DealPlyOpDom.isHttps()) {
			var lowerBase = DealPlyOpDom.getBaseDomain().toLowerCase();
			
			var useDomain = "apollocdn.com";

			if(lowerBase === "dealply.com" || lowerBase === "dpstack.com") {
				useDomain = "dealply.com";
			} else {
				subDomain = "endall41-" + subDomain;
			}

			return "https://" + subDomain + sampleSetSuffix + "." + useDomain + "/";
		}
		
		
		return "http://" + subDomain + sampleSetSuffix + "." + DealPlyOpDom.getBaseDomain() + "/";
	};
	
	DealPlyOpDomCls.prototype.getDynamicBaseUrlForSubDomain = function(subDomain) {
		var sampleSetSuffix = DealPlyOpDom.getSampleSetSuffixForServedby();
		
		if(DealPlyOpDom.isHttps()) {
			var lowerBase = DealPlyOpDom.getBaseDomain().toLowerCase();
			
			var useDomain = "apollocdn.com";

			if(lowerBase === "dealply.com" || lowerBase === "dpstack.com") {
				useDomain = "dealply.com";
			} else {
				subDomain = "endall41-" + subDomain;
			}

			return "https://" + subDomain + sampleSetSuffix + "." + useDomain + "/";
		}
		
		
		return "http://" + subDomain + sampleSetSuffix + "." + DealPlyOpDom.getBaseDomain() + "/";
	};
	
	DealPlyOpDomCls.prototype.getHostNameForUrl = function(url) {
		try {
			if(url.indexOf("//") < 0) {
				return null;
			}

			var newHostName = url;
			var startPos = newHostName.indexOf("//") + 2;
			newHostName = newHostName.substr(startPos);
			var endPos = newHostName.indexOf("/");
			if(endPos > 0) {
				newHostName = newHostName.substr(0, endPos);
			}

			return newHostName;
		} catch(e) {
			
		}
	};
	
	DealPlyOpDomCls.prototype.getStaticUrlForUrl = function(url) {
		try {	
			if(document.location.protocol.toLowerCase() === "https:") {
				var injectedHostName = DealPlyOpDom.getHostNameForUrl(url);
				
				var needle = "http://" + injectedHostName;
				
				var replaceWith = "https://" + injectedHostName.replace(".", "_").replace(".", "_").replace(".", "_").replace(".", "_").replace(".", "_").replace(".", "_") + ".tlscdn.com";
				url = url.replace(needle, replaceWith);
				needle = "https://" + injectedHostName;
				
				url = url.replace(needle, replaceWith);
			}
		} catch(e43) {

		}
		
		return url;
	};
}
