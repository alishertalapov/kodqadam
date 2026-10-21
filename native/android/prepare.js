// Capacitor баптауын app-config.json-нан жасайды
const fs = require("fs");
const cfg = JSON.parse(fs.readFileSync("../app-config.json", "utf8"));
if (/USERNAME/.test(cfg.siteUrl)) { console.error("native/app-config.json ішіндегі siteUrl-ді өз сайтыңыздың мекенжайына ауыстырыңыз!"); process.exit(1); }
const host = new URL(cfg.siteUrl).host;
fs.writeFileSync("capacitor.config.json", JSON.stringify({
  appId: cfg.appId,
  appName: cfg.appName,
  webDir: "www",
  server: { url: cfg.siteUrl, androidScheme: "https", allowNavigation: [host, "*.firebaseapp.com", "*.googleapis.com", "www.google.com", "www.gstatic.com", "cdn.jsdelivr.net", "fonts.googleapis.com", "fonts.gstatic.com"] },
  android: { backgroundColor: "#FFFFFF" }
}, null, 2));
fs.mkdirSync("www", { recursive: true });
fs.writeFileSync("www/index.html", `<!doctype html><meta charset="utf-8"><meta http-equiv="refresh" content="0;url=${cfg.siteUrl}"><p>КодҚадам жүктелуде…</p>`);
console.log("OK:", cfg.appName, cfg.siteUrl);
