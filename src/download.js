function changeThumbnail(){
    const url = document.getElementById("url").value;
    if(url.indexOf("https://www.youtube.com/watch?v=") != -1){
        let vidId = url.split("v=")[1].substring(0,11);
        let thumbnailurl = `https://img.youtube.com/vi/${vidId}/maxresdefault.jpg`;
        let span = document.getElementById("span");
        span.innerHTML ="<img src="+thumbnailurl+">";
    }
    else if(url.indexOf("https://youtu.be/") != -1){
        let vidId = url.split("be/")[1].substring(0,11);
        let thumbnailurl = `https://img.youtube.com/vi/${vidId}/maxresdefault.jpg`;
        let span = document.getElementById("span");
        span.innerHTML ="<img src="+thumbnailurl+">";    
    }
}

function download(){
    const fs = require('fs')
    const ytdl = require('ytdl-core')
    const url = document.getElementById("url").value;
    const form = document.getElementById("form")
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        ytdl(url).pipe(fs.createWriteStream('video.mp4'))
    });
}
