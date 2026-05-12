const DEFAULTS = { url: "https://mail.google.com", newTab: true };

const urlInput     = document.getElementById("urlInput");
const newTabToggle = document.getElementById("newTabToggle");
const toggleHint   = document.getElementById("toggleHint");
const saveBtn      = document.getElementById("saveBtn");
const resetBtn     = document.getElementById("resetBtn");
const toast        = document.getElementById("toast");

let toastTimer;

function showToast(msg, isError = false) {
  clearTimeout(toastTimer);
  toast.textContent = msg;
  toast.className = "toast show" + (isError ? " error" : "");
  toastTimer = setTimeout(() => { toast.className = "toast"; }, 2500);
}

function updateHint() {
  toggleHint.textContent = newTabToggle.checked
    ? "Currently: new tab"
    : "Currently: current tab";
}

newTabToggle.addEventListener("change", updateHint);

// Load saved prefs on open
chrome.storage.sync.get(DEFAULTS, (prefs) => {
  urlInput.value       = prefs.url;
  newTabToggle.checked = prefs.newTab;
  updateHint();
});

saveBtn.addEventListener("click", () => {
  const raw = urlInput.value.trim();

  if (!raw) {
    showToast("⚠ Please enter a URL.", true);
    urlInput.focus();
    return;
  }

  try { new URL(raw); } catch {
    showToast("⚠ That doesn't look like a valid URL.", true);
    urlInput.focus();
    return;
  }

  chrome.storage.sync.set({ url: raw, newTab: newTabToggle.checked }, () => {
    showToast("✓ Settings saved!");
  });
});

resetBtn.addEventListener("click", () => {
  chrome.storage.sync.set(DEFAULTS, () => {
    urlInput.value       = DEFAULTS.url;
    newTabToggle.checked = DEFAULTS.newTab;
    updateHint();
    showToast("✓ Reset to defaults.");
  });
});
