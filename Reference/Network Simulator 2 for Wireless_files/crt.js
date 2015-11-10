/*(function () {
 */
dpQuery.fn.on = function(types, selector, data, fn, /*INTERNAL*/one) {
	var type, origFn;

	// Types can be a map of types/handlers
	if (typeof types === "object") {
		// ( types-Object, selector, data )
		if (typeof selector !== "string") {
			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for (type in types) {
			this.on(type, selector, data, types[type], one);
		}
		return this;
	}

	if (data == null && fn == null) {
		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if (fn == null) {
		if (typeof selector === "string") {
			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {
			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if (fn === false) {
		fn = returnFalse;
	} else if (!fn) {
		return this;
	}

	if (one === 1) {
		origFn = fn;
		fn = function(event) {
			// Can use an empty set, since event contains the info
			jQuery().off(event);
			return origFn.apply(this, arguments);
		};
		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
	}
	return this.each(function() {
		if (typeof jQuery != "undefined") {
			jQuery.event.add(this, types, fn, data, selector);
		} else {
			dpQuery.event.add(this, types, fn, data, selector);
		}

	});
};



// add .off to dpQuery.
dpQuery.fn.off = function(types, selector, fn) {
	var handleObj, type;
	if (types && types.preventDefault && types.handleObj) {
		// ( event )  dispatched jQuery.Event
		handleObj = types.handleObj;
		jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector,
				handleObj.handler);
		return this;
	}
	if (typeof types === "object") {
		// ( types-object [, selector] )
		for (type in types) {
			this.off(type, selector, types[type]);
		}
		return this;
	}
	if (selector === false || typeof selector === "function") {
		// ( types [, fn] )
		fn = selector;
		selector = undefined;
	}
	if (fn === false) {
		fn = returnFalse;
	}
	return this.each(function() {
		if (typeof jQuery != "undefined") {
			jQuery.event.remove(this, types, fn, selector);
		} else {
			dpQuery.event.remove(this, types, fn, selector);
		}

	});
};

DealPly.addToCart = function() {
	if(typeof DealPly.Cartier != 'undefined' && DealPly.Cartier==true){
	   return;	
	}
	if(typeof DealPly.dpCartSelectors === "undefined" ){
		return;
	}
	var addToCartSelector = DealPly.dpCartSelectors.toString();

	//dpQuery(addToCartSelector).off('click');

	dpQuery(addToCartSelector).on('click', function(evt) {
		try {
//			evt.stopImmediatePropagation();
//	        evt.preventDefault();
			DealPly.cartCurrentTarget = evt.target;
			if(!triggered){
				triggered = true;
				DealPly.reportQuickEvent({
					'topic' : 'add_to_cart',
					'interactionID' : dpVariables.interactionId
				});				
			}
			
//			DealPly.cartCurrentTarget.click();

		} catch (e) {
			DealPly.reportQuickEvent({
				'topic' : 'addTocart_ClickError',
				'interactionID' : dpVariables.interactionId,
				'Error' : e
			});

		}

	});

};

try {
	var triggered = false;
	DealPly.addToCart();
} catch (e) {
	//console.log("fail to init cart!!! ",e);
	DealPly.reportQuickEvent({
		'topic' : 'addTocart_InitError',
		'interactionID' : dpVariables.interactionId,
		'Error' : e
	});
}

/*})();
 */
