let music=document.querySelector('audio');
let Back=document.getElementById('back');
let playsongs=document.getElementById('play');
let forwards=document.getElementById('for');
let names=document.querySelector('.aut');
let sp=document.querySelector('.sep');
let im=document.querySelector('img');



let isplay=false;
const songs=[{
   
      songName:"Chull",
      singer:"Badshaha",
      scr:"Chull",
      img:"chull.jpg"
   },
      {
         songName:"Bol Na",
      singer:"Arman Malik",
      scr:"bol",
      img:"bolna.jpg"
      
      }
      ,
      {
         songName:"Attention",
         singer:"Charli Puth",
         scr:"att",
         img:"at.jpg"
      }
      ,
      {
         songName:"Havanna",
         singer:"Jusin Biber",
         scr:"hava",
         img:"havna.jpg"
      }
];


function playSong(){
   isplay=true;
   playsongs.classList.replace('fa-play','fa-pause')
   music.play();
}

function pauseSong(){
   isplay=false;
   playsongs.classList.replace('fa-pause','fa-play')

   music.pause();
}

playsongs.addEventListener('click',()=> (isplay ? pauseSong() : playSong() ));
console.log(playSong);
function load(songs){
   names.textContent=songs.songName;
   sp.textContent=songs.singer;
   music.src=`${songs.scr}.mp3`;
   im.src=`${songs.img}`;


}
let songIndex=0;
load(songs[songIndex]);
function forward(){
   songIndex++;
   load(songs[songIndex]);
   playSong();
}

function prev(){
   songIndex--;
   load(songs[songIndex]);
   playSong();
}



forwards.addEventListener('click',forward);
Back.addEventListener('click', prev);