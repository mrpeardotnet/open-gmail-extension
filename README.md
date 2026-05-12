# Open Gmail — Chrome Extension

A minimal Chrome extension that opens Gmail (or any URL) with one click. No tracking, no bloat.

[![Chrome Web Store](https://img.shields.io/badge/Chrome%20Web%20Store-Available-brightgreen?logo=google-chrome)](https://chrome.google.com/webstore)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Privacy](https://img.shields.io/badge/Privacy-Zero%20data%20collected-green)](https://mrpeardotnet.github.io/open-gmail-extension/privacy.html)

---

## Features

- **One click** → opens Gmail (or any URL you configure)
- **New tab or current tab** — your choice
- **Custom URL** — point it at anything: inbox, calendar, Notion, whatever
- **Zero permissions** beyond `storage` (to save your two preferences)
- **No analytics, no tracking, no external requests**

## Install

### From the Chrome Web Store
> [https://chromewebstore.google.com/detail/open-gmail/ijbfhdmgigmkjdlcdjhbodkdfdnmkfmf](https://chromewebstore.google.com/detail/open-gmail/ijbfhdmgigmkjdlcdjhbodkdfdnmkfmf)

### Manual (Developer Mode)
1. Download or clone this repo
2. Go to `chrome://extensions`
3. Enable **Developer mode** (top-right)
4. Click **Load unpacked** → select this folder

## Options

Right-click the toolbar icon → **Options** to configure:

| Setting | Default |
|---|---|
| URL to open | `https://mail.google.com` |
| Open in new tab | On |

## Privacy

This extension stores two preferences locally on your device. Nothing is collected or transmitted. Full policy: [mrpeardotnet.github.io/open-gmail-extension/privacy.html](https://mrpeardotnet.github.io/open-gmail-extension/privacy.html)

## Project structure

```
open-gmail-extension/
├── manifest.json      # MV3 manifest, single "storage" permission
├── background.js      # Service worker — opens URL on icon click
├── options.html       # Settings page UI
├── options.js         # Settings page logic
├── icons/
│   ├── icon16.png
│   ├── icon32.png
│   ├── icon48.png
│   └── icon128.png
└── privacy.html       # Privacy policy (hosted via GitHub Pages)
```

## License

MIT — do whatever you want with it. See [LICENSE](LICENSE).

---

Made by [mrpear.net](https://www.mrpear.net)
