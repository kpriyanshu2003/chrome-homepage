chrome.runtime.onInstalled.addListener(function () {
  chrome.action.onClicked.addListener(function () {
    chrome.identity.getProfileUserInfo(function (userInfo) {
      var username = userInfo.email || userInfo.id;
      console.log("Username: " + username);
      // Do further processing with the username
    });
  });
});
