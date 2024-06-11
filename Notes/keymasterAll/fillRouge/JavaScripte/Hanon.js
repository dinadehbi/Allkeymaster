let metronomeAudio = new Audio('/Notes/metronome.mp3');
metronomeAudio.loop = true; // Set the audio to loop indefinitely

let metronomeIcon = document.getElementById('Metronome');



metronomeIcon.addEventListener('click', function() {
    metronomeAudio.play();
});


const paragraph = document.querySelector('.para');
let letternotes = document.getElementById('letter');
letternotes.addEventListener('click', function(){
    paragraph.style.display="flex";
})




const fullscreen = document.getElementById('fullscrean');

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.error(`Error attempting to enable full-screen mode: ${err.message}`);
        });
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

fullscreen.addEventListener('click', toggleFullscreen);















    function animateDiv() {
        
        var parentDiv = document.getElementById("div4");
            
        var newDiv = document.createElement("div");
        newDiv.classList.add("childdiv4");

        parentDiv.appendChild(newDiv);

        newDiv.style.backgroundColor = "#5CA1E0";
        newDiv.style.height = "4vw";
        newDiv.style.width = "2vw";
        newDiv.style.borderRadius = "0.5vw";
        newDiv.style.position = "relative"; 

        var position = 0;
        var interval = setInterval(function() {
            if (position >= 27) { 
                clearInterval(interval);
            } else {
                position += 1; 
                newDiv.style.top = position + "vw";
            }
        },  50); 
    }

    animateDiv();






    function animateDiv2() {
        var div5 = document.getElementById("div5");
    
        var childdiv5 = document.createElement("div");
        childdiv5.classList.add("childdiv5");
    
        div5.appendChild(childdiv5);
    
        childdiv5.style.backgroundColor = "#5CA";
        childdiv5.style.height = "4vw";
        childdiv5.style.width = "2vw";
        childdiv5.style.borderRadius = "0.5vw";
        childdiv5.style.position = "relative"; 
        var position = 0;
        var interval = setInterval(function() {
            if (position >= 27) { 
                clearInterval(interval);
            } else {
                position += 1; 
                childdiv5.style.top = position + "vw";
            }
        }, 70); 
    }
    
    animateDiv2(); 

    

    function animateDiv3() {
        var div6 = document.getElementById("div6");
    
        var childdiv6 = document.createElement("div");
        childdiv6.classList.add("childdiv6");
    
        div6.appendChild(childdiv6);
    
        childdiv6.style.backgroundColor = "yellow";
        childdiv6.style.height = "4vw";
        childdiv6.style.width = "2vw";
        childdiv6.style.borderRadius = "0.5vw";
        childdiv6.style.position = "relative"; 
    
        var position = 0;
        var interval = setInterval(function() {
            if (position >= 27) { 
                clearInterval(interval);
            } else {
                position += 1; 
                childdiv6.style.top = position + "vw";
            }
        }, 90); 
    }
    
    animateDiv3(); 
    
    
    function animateDiv4() {
        var div7 = document.getElementById("div7");
    
        var childdiv7 = document.createElement("div");
        childdiv7.classList.add("childdiv7");
    
        div7.appendChild(childdiv7);
    
        childdiv7.style.backgroundColor = "purple";
        childdiv7.style.height = "4vw";
        childdiv7.style.width = "2vw";
        childdiv7.style.borderRadius = "0.5vw";
        childdiv7.style.position = "relative"; 
    
        var position = 0;
        var interval = setInterval(function() {
            if (position >= 27) { 
                clearInterval(interval);
            } else {
                position += 1; 
                childdiv7.style.top = position + "vw";
            }
        }, 110); 
    }
    
    animateDiv4(); 

       
    function animateDiv5() {
        var div8 = document.getElementById("div8");
    
        var childdiv8 = document.createElement("div");
        childdiv8.classList.add("childdiv8");
    
        div8.appendChild(childdiv8);
    
        childdiv8.style.backgroundColor = "blue";
        childdiv8.style.height = "4vw";
        childdiv8.style.width = "2vw";
        childdiv8.style.borderRadius = "0.5vw";
        childdiv8.style.position = "relative"; 
    
        var position = 0;
        var interval = setInterval(function() {
            if (position >= 27) { 
                clearInterval(interval);
            } else {
                position += 1; 
                childdiv8.style.top = position + "vw";
            }
        }, 130); 
    }
    
    animateDiv5(); 
    
    
    function animateDiv6() {
        var div8 = document.getElementById("div9");
    
        var childdiv9 = document.createElement("div");
        childdiv9.classList.add("childdiv9");
    
        div8.appendChild(childdiv9);
    
        childdiv9.style.backgroundColor = "orange";
        childdiv9.style.height = "4vw";
        childdiv9.style.width = "2vw";
        childdiv9.style.borderRadius = "0.5vw";
        childdiv9.style.position = "relative"; 
    
        var position = 0;
        var interval = setInterval(function() {
            if (position >= 27) { 
                clearInterval(interval);
            } else {
                position += 1; 
                childdiv9.style.top = position + "vw";
            }
        }, 150); 
    }
    
    animateDiv6(); 
    
    
    
     
    function animateDiv7() {
        var div9 = document.getElementById("div8");
    
        var childdiv10 = document.createElement("div");
        childdiv10.classList.add("childdiv10");
    
        div9.appendChild(childdiv10);
    
        childdiv10.style.backgroundColor = "aqua";
        childdiv10.style.height = "4vw";
        childdiv10.style.width = "2vw";
        childdiv10.style.borderRadius = "0.5vw";
        childdiv10.style.position = "relative"; 
    
        var position = 0;
        var interval = setInterval(function() {
            if (position >= 32) { 
                clearInterval(interval);
            } else {
                position += 1; 
                childdiv10.style.top = position + "vw";
            }
        }, 180); 
    }
    
    animateDiv7(); 
    
    