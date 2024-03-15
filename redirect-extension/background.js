chrome.webRequest.onBeforeRequest.addListener(
   function (details) {
      // Check for Twitter redirection
      if (
         details.url.startsWith("https://twitter.com/home") ||
         details.url.startsWith("https://mobile.twitter.com")
      ) {
         return { redirectUrl: "https://github.com/" };
      } else if (details.url.startsWith("https://www.instagram.com")) {
         return { redirectUrl: "https://leetcode.com/problemset/" };
      }
      // No redirect for other URLs
      return {};
   },
   // Filter for Twitter and Instagram URLs
   { urls: ["<all_urls>"] },
   ["blocking"]
);
