import { app, BrowserWindow } from "electron";

app.whenReady().then(() => {
  const win = new BrowserWindow({
    title: "Main window",
  });
  //当使用vite启动项目的时候会存在VITE_DEV_SERVER_URL这个环境变量
  if (process.env.VITE_DEV_SERVER_URL) {
    win.loadURL(process.env.VITE_DEV_SERVER_URL);
  } else {
    //或者加载打包好的html
    win.loadFile("dist/index.html");
  }
});
