const { contextBridge, app} = require("electron");
const download = async () => {
    let ytdl = require("ytdl-core");
    let url = document.getElementById("url").value
    let fs = require("fs");
    let title = (await ytdl.getBasicInfo(url)).player_response.videoDetails.title
    ytdl(url).pipe(fs.createWriteStream(title+'.mp4'));
    alert("Download Success")
}


contextBridge.exposeInMainWorld("download",download)
contextBridge.exposeInMainWorld("save",save)