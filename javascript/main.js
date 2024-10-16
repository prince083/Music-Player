console.log("welcome")
//setting elements
let songIndex=0;
let audioElement=new Audio("songs/Tu_Dua_H_Dua.mp3");
let masterPlay = document.getElementById("play");
let progressBar= document.getElementById("range");
let songItems = Array.from(document.getElementsByClassName("song"));
let songs = [
    {songName:"Tu dua h dua", filePath:"songs/Tu_Dua_H_Dua.mp3",coverPath:"photos/1.jpg"},
    {songName:"Meri Mehbooba _ Shahrukh Khan", filePath:"songs/Zara Tasveer Se Tu Nikal ke Saamne Aa Meri Mehbooba _ Shahrukh Khan _ Mahima _ Kumar & Alka _ Pardes (320 kbps).mp3",coverPath:"photos/2.jpg"},
    {songName:"Hangover Salman Khan, Jacqueline Fernandez", filePath:"songs/Hangover Full Video Song _ Kick _ Salman Khan, Jacqueline Fernandez _ Meet Bros Anjjan (320 kbps).mp3",coverPath:"covers/Tu_Dua_H_Dua.mp3"},
    {songName:"Tera Fitoor Arijit singh", filePath:"songs/Tera Fitoor _ Arijit Singh _ Himesh Reshammiya _ Genius (2018) (320 kbps).mp3",coverPath:"covers/Tu_Dua_H_Dua.mp3"}
]

songItems.forEach((element, i) => {
    console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("sname")[0].innerText = songs[i].songName;
});

//Function for play/pause
masterPlay.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
    else if(audioElement.played || audioElement.currentTime>=0){
        audioElement.pause();
        masterPlay.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
    }
})


//listening events
audioElement.addEventListener("timeupdate",()=>{
    //update progressbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressBar.value = progress;

})

progressBar.addEventListener("change",()=>{
    audioElement.currentTime = (progressBar.value/100)*audioElement.duration;
})