console.log("Welcome to spotify");

//declaring variables
let songindex = 2;
let audioElement = new Audio('songs/2.mp3');
let masterPlay = document.getElementById('masterPlay')
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
//The Array.from() method converts the HTMLCollection of elements returned by the document.getElementsByClassName() method to an array.
let songItem = Array.from(document.getElementsByClassName('songItem')); 


//creating the object array of songs
let songs = [
    {
        songName: "Cieleo - Huma-Huma",
        songPath: "songs/2.mp3",
        songCover: "covers/2.jpg"
    },
    {
        songName: "Def KEV - Invincible  [NCS release]-320k",
        songPath: "songs/3.mp3",
        songCover: "covers/3.jpg"
    },
    {
        songName: "Different Heaven & EHIDE - My Heart",
        songPath: "songs/4.mp3",
        songCover: "covers/4.jpg"
    },
    {
        songName: "Janji-Heroes-jonning-NCS-Release",
        songPath: "songs/5.mp3",
        songCover: "covers/5.jpg"
    },
    {
        songName: "Rabba - Heropanti",
        songPath: "songs/6.mp3",
        songCover: "covers/6.jpg"
    },  
    {
        songName: "Sakhiyan - maninder butter",
        songPath: "songs/7.mp3",
        songCover: "covers/7.jpg"
    },
    {
        songName: "Tu jaane na - Ajab prem ki gazab kahani",
        songPath: "songs/8.mp3",
        songCover: "covers/8.jpg"
    },
]

songItem.forEach((element,i) => {
    element.getElementsByTagName("img")[0].src = songs[i].songCover;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

//initial play pause the song
masterPlay.addEventListener('click', ()=>
{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
        gif.style.opacity = 1;
    }else
    {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause')
        masterPlay.classList.add('fa-circle-play')
        gif.style.opacity = 0 ;
    }
})


//adding eventlisteners
// This event is fired every time the audio element's current time changes.
audioElement.addEventListener('timeupdate', ()=>{
    progress = ((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

//This event is fired whenever the value of the progress bar changes.
myProgressBar.addEventListener('change', ()=>
{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration)/100;
})

const makeAllPlay = () =>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
            element.classList.add('fa-circle-play');
            element.classList.remove('fa-circle-pause');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach(element => {
    element.addEventListener('click', (e)=>
    {
        makeAllPlay();
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        songindex = parseInt(e.target.id);
        audioElement.src = `songs/${songindex+1}.mp3`;
        audioElement.currentTime = 0;
        masterSongName.innerText = songs[songindex].songName;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
    })
})

document.getElementById('next').addEventListener('click', ()=>
{
    if(songindex >=9)
    {
        songindex  = 0;
    }else
    {
        songindex += 1;
    }
    audioElement.src = `songs/${songindex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterSongName.innerText = songs[songindex].songName;
    masterPlay.classList.remove('fa-circle-play')
    masterPlay.classList.add('fa-circle-pause')
})
document.getElementById('previous').addEventListener('click', ()=>
{
    if(songindex <=0)
    {
        songindex  = 0;
    }else
    {
        songindex -= 1;
    }
    audioElement.src = `songs/${songindex+1}.mp3`;
    audioElement.currentTime = 0;   
    audioElement.play();
    gif.style.opacity = 1;
    masterSongName.innerText = songs[songindex].songName;
    masterPlay.classList.remove('fa-circle-play')
    masterPlay.classList.add('fa-circle-pause')
})