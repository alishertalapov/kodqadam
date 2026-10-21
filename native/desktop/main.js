// КодҚадам — Windows / macOS қосымшасы (Electron). Сайтты өз терезесінде ашады.
const { app, BrowserWindow, shell, Menu } = require("electron");
const path = require("path");
const cfg = require("./app-config.json");
const origin = new URL(cfg.siteUrl).origin;

// Firebase кіру беттері мен Google қызметтері қосымша ішінде ашылуы керек
const INSIDE = [origin, "https://www.google.com", "https://www.gstatic.com", "https://accounts.google.com"];
const inside = url => INSIDE.some(o => url.startsWith(o)) || /^https:\/\/[^/]+\.firebaseapp\.com\//.test(url);

function createWindow() {
  const win = new BrowserWindow({
    width: 1280, height: 860, minWidth: 380, minHeight: 560,
    title: cfg.appName, backgroundColor: "#FFFFFF",
    icon: path.join(__dirname, "icon.png"),
    autoHideMenuBar: true,
    webPreferences: { contextIsolation: true, sandbox: true, spellcheck: false }
  });
  win.loadURL(cfg.siteUrl);
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (inside(url)) return { action: "allow" };
    shell.openExternal(url); return { action: "deny" };
  });
  win.webContents.on("will-navigate", (e, url) => {
    if (!inside(url)) { e.preventDefault(); shell.openExternal(url); }
  });
  win.webContents.on("did-fail-load", (_e, code, _d, _u, isMain) => {
    if (isMain && code !== -3) win.loadFile(path.join(__dirname, "offline.html"), { query: { u: cfg.siteUrl } });
  });
}

const menu = [
  ...(process.platform === "darwin" ? [{ role: "appMenu" }] : []),
  { label: "Өңдеу", submenu: [{ role: "undo", label: "Болдырмау" }, { role: "redo", label: "Қайтару" }, { type: "separator" }, { role: "cut", label: "Қию" }, { role: "copy", label: "Көшіру" }, { role: "paste", label: "Қою" }, { role: "selectAll", label: "Барлығын белгілеу" }] },
  { label: "Көрініс", submenu: [{ role: "reload", label: "Жаңарту" }, { type: "separator" }, { role: "resetZoom", label: "Қалыпты өлшем" }, { role: "zoomIn", label: "Үлкейту" }, { role: "zoomOut", label: "Кішірейту" }, { type: "separator" }, { role: "togglefullscreen", label: "Толық экран" }] }
];

app.whenReady().then(() => {
  Menu.setApplicationMenu(Menu.buildFromTemplate(menu));
  createWindow();
  app.on("activate", () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
});
app.on("window-all-closed", () => { if (process.platform !== "darwin") app.quit(); });
