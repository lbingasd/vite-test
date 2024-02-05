import { app, BrowserWindow } from "electron";
import { join } from "node:path";

process.env.DIST_ELECTRON = __dirname;//join(__dirname, "..");
process.env.DIST = join(process.env.DIST_ELECTRON, "../dist");
process.env.VITE_PUBLIC = process.env.VITE_DEV_SERVER_URL
  ? join(process.env.DIST_ELECTRON, "../public")
  : process.env.DIST;

const indexHtml = join(process.env.DIST, "index.html");

app.whenReady().then(() => {
  const win = new BrowserWindow({
    title: "Main window",
  });
  //当使用vite启动项目的时候会存在VITE_DEV_SERVER_URL这个环境变量
  if (process.env.VITE_DEV_SERVER_URL) {
    win.loadURL(process.env.VITE_DEV_SERVER_URL);
  } else {
    //或者加载打包好的html
    win.loadFile(indexHtml);
  }
});

