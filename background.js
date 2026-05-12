// Opens the configured URL when the extension icon is clicked.
// Only permission used: chrome.storage (to read your own saved prefs — nothing else).

const DEFAULTS = { url: "https://mail.google.com", newTab: true };

chrome.action.onClicked.addListener(() => {
  chrome.storage.sync.get(DEFAULTS, ({ url, newTab }) => {
    if (newTab) {
      chrome.tabs.create({ url });
    } else {
      chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
        if (tab) {
          chrome.tabs.update(tab.id, { url });
        } else {
          chrome.tabs.create({ url });
        }
      });
    }
  });
});
