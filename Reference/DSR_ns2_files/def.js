dpVariables.skin = {
	toastHeight:'143px',
	botLeftBorderRad:0,
	dealplyToastWidthInteger:29,
	dealplyFlightWidthInteger:26,
	showLngTtl:true,
	moreStrCss:''
};

dpVariables.skin.readyFunc = function(){
	if (!dpVariables.bStyle && dpVariables.extType===-1 && dealPlyUtils.feed === 'kpt'){
		dpQuery('#flach').addClass('kptBnr');
		dpQuery('#logoBnr').attr('src','/resources/eden/green/strip/kpt.png');
	}
};