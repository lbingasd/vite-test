"use strict";
const electron = require("electron");
const node_path = require("node:path");
process.env.DIST_ELECTRON = __dirname;
process.env.DIST = node_path.join(process.env.DIST_ELECTRON, "../dist");
process.env.VITE_PUBLIC = process.env.VITE_DEV_SERVER_URL ? node_path.join(process.env.DIST_ELECTRON, "../public") : process.env.DIST;
const indexHtml = node_path.join(process.env.DIST, "index.html");
electron.app.whenReady().then(() => {
  const win = new electron.BrowserWindow({
    title: "Main window"
  });
  if (process.env.VITE_DEV_SERVER_URL) {
    win.loadURL(process.env.VITE_DEV_SERVER_URL);
  } else {
    win.loadFile(indexHtml);
  }
});
