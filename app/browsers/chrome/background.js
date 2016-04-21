/*
chrome.app.runtime.onLaunched.addListener(function() {
	chrome.app.window.create('window.html', {
		/*
		outerBounds: {
			width: 400,
			height: 500
		},* /
		//frame: 'none', // http://stackoverflow.com/a/33741035/1640892
		state: 'fullscreen' // enum of "normal" (default), "fullscreen", "maximized", or "minimized"
	});
	webview.addEventListener('permissionrequest', function(e) {
		if (e.permission /*=== 'media'* /) {
			e.request.allow();
		}
	});
});
*/

// http://stackoverflow.com/a/31208866/1640892

chrome.app.runtime.onLaunched.addListener(function() {
  runApp();
});

function runApp() {
  chrome.app.window.create('window.html', {
		state: 'fullscreen' // enum of "normal" (default), "fullscreen", "maximized", or "minimized"
  });
}

// http://stackoverflow.com/a/34266811/1640892
