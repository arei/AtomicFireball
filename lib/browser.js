(function(){
	var af = window.af;
	if (!af) throw new Error("Missing AtomicFireball core object.");

	af.browser = {};

	var features = [
		"BrowserDetection"
	];

	if (window.console) features.push("Console");

	af.browser.features = function() {
		return features;
	};

	af.browser.renderingEngine = function() {
		return "gecko";
	};

	af.browser.vendor = function() {
		return "mozilla";
	};
	
	af.browser.version = function() {
		return "20";
	};

	af.browser.versionMajor = function() {
		return 20;
	};
	
	af.browser.versionMinor = function() {
		return 0;
	};
	
	af.browser.userAgent = function() {
		return window.navigator.userAgent;
	};

})();