const music =document.querySelector("audio");
        const img = document.querySelector("img");
        const play =document.getElementById("play");
        const artist =document.getElementById("artist");
        const title =document.getElementById("title");
        const prev =document.getElementById("prev");
        const next =document.getElementById("next");

        const songs= [{
            name:"akku3",
            title:"AKKU",
            artist:"Pheli mohhbat",
            img:"akku4",
        },
        {
            name:"akku2",
            title:"AKKU",
            artist:"Mann Mera",
            img:"akku2",
        },
        {
            name:"akku4",
            title:"AKKU",
            artist:"Janam Janam",
            img:"akku3",
        },
    
        {
            name:"akku1",
            title:"AKKU",
            artist:"Waqt Ki Baatein",
            img:"akku1",
        }
    ]
        // for pause functionality
        let isPlaying=false;
        // for play functionality
        const playMusic = () =>{
            isPlaying = true;
            music.play();
            
            play.classList.replace("fa-play" , "fa-stop");
            
            img.classList.add("anime");
        };
        // for pause functionality
        const pauseMusic = () =>{
            isPlaying = false;
            music.pause();
            

            play.classList.replace("fa-stop","fa-play");
            img.classList.remove("anime");
        };
        play.addEventListener('click', () => {
            isPlaying ? pauseMusic() : playMusic ();
           

        });
        // changing the music data
        const loadSong = (songs) => {
            title.textContent=songs.title;
            artist.textContent=songs.artist;
            music.src = songs.name +".mp3";
            img.src =songs.img + ".jpeg";
        }
        songIndex =0;
        // loadSong(SONGS[2]);
        const  nextSong=() => {
            songIndex=(songIndex +1 ) % songs.length;
            
            loadSong(songs[songIndex]);
            
        };
        const  prevSong=() => {
            songIndex=(songIndex -1 ) % songs.length;
            
            loadSong(songs[songIndex]);
            
        };

        loadSong(songs[3]);

        next.addEventListener('click',nextSong);
        prev.addEventListener('click',prevSong);
        next.addEventListener('click',nextSong);
