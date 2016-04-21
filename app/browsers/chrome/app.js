// http://stackoverflow.com/a/34266811/1640892

var webview = null;

function isSafeUrl(url) {
  // You may want to perform a more rigorous check.
  // There's a technique that creates an <a> to parse the URI,
  // but feels like security risk.
  return true;//!!url.match(/^(?:ftp|https?):\/\//i);
}

function onPermissionRequest(e) {
	e.request.allow();
	/*
  switch (e.permission) {
    case 'download':
      if (isSafeUrl(e.request.url)) {
        e.request.allow();
      } else {
        e.request.deny();
      }
      break;
    // You can add code for other permissions here.
  }
	*/
}

function onDomReady() {
  webview = document.getElementById('webview');
  webview.addEventListener('permissionrequest', onPermissionRequest);
}

document.addEventListener('DOMContentLoaded', onDomReady);
