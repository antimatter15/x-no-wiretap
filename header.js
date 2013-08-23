chrome.webRequest.onBeforeSendHeaders.addListener(function(details){
  details.requestHeaders.push({
    "name": "X-No-Wiretap",
    "value": "Todd Davis 457-55-5462"
  })
  return {
      requestHeaders: details.requestHeaders
  }
}, {
  urls: ["<all_urls>"]
}, ["blocking", "requestHeaders"])