(function(){
	var af = window.af;
	if (!af) throw new Error("Missing AtomicFireball core object.");

	af.context = {};

	var currentname = "af";

	// renames AtmoicFireball to use a new global object name.  If not name
	// provided, uses "af" by default.
	af.context.rename = function(newname) {
		newname = newname || "af";
		if (currentname===newname) return af;

		window[newname] = window[currentname];
		delete window[currentname];

		currentname = newname;

		return af;
	}
})();