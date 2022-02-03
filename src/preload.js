const { contextBridge} = require("electron");
const path = require('path');
const download = async () => {
    let ytdl = require("ytdl-core");
    let url = document.getElementById("url").value
    let fs = require("fs");
    let title = (await ytdl.getBasicInfo(url)).player_response.videoDetails.title
    ytdl(url).pipe(fs.createWriteStream(`${title.replace(/[^a-zA-Z0-9]/g,'_')}.mp4`));

}

contextBridge.exposeInMainWorld("download",download)