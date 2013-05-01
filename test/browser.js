(function(){
	var aftests = document.getElementById("AFTests");

	var tests = [];

	var next = function() {
		var f = tests.shift();
		if (f) setTimeout(f,100);
	};

	var createTest = function(name,test) {
		var e = document.createElement("div");
		e.className = "test";
		aftests.appendChild(e);

		var t = document.createElement("div");
		t.className = "title";
		t.innerHTML = name;
		e.appendChild(t);

		var s = document.createElement("div");
		s.className = "state pending";
		s.innerHTML = "Pending";
		e.appendChild(s);

		var responder = {
			pass: function() {
				s.className = "state passed";
				s.innerHTML = "Passed";
				next();
			},
			fail: function() {
				s.className = "state failed";
				s.innerHTML = "Failed";
				next();
			},
			skip: function() {
				s.className = "state skipped";
				s.innerHTML = "Skipped";
				next();
			}
		}

		var run = function() {
			if (!test) responder.fail();
			test(responder);
		};

		tests.push(function(){
			s.className = "state running";
			s.innerHTML = "Running";
			try {
				run();
			}
			catch (ex) {
				responder.fail(ex);
			}
		});

	};

	createTest("AtomicFireball Loaded?",function(responder){
		if (af) responder.pass();
		else responder.fail();
	});

	createTest("Rename Global Object",function(responder){
		af.context.rename("win");
		var yes = !!window.win;
		win.context.rename();
		if (yes) responder.pass();
		else responder.fail();
	});

	next();

})();