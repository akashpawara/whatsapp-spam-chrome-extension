chrome.runtime.onMessage.addListener(function(message, sender) {
	if(!message.myPopupIsOpen) return;
	else{chrome.tabs.executeScript({
		file: 'assets/js/inject.js'
	}); 
	}
});