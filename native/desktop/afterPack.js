// macOS: қолтаңбасыз қосымшаға "ad-hoc" қолтаңба қояды (Apple Silicon-да іске қосылуы үшін)
const { execSync } = require("child_process");
const path = require("path");
exports.default = async function (ctx) {
  if (ctx.electronPlatformName !== "darwin") return;
  const app = path.join(ctx.appOutDir, ctx.packager.appInfo.productFilename + ".app");
  execSync(`codesign --force --deep --sign - "${app}"`, { stdio: "inherit" });
};
