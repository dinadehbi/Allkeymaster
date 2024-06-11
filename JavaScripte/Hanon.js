let metronomeAudio = new Audio('/Notes/metronome.mp3');
metronomeAudio.loop = true;

let metronomeIcon = document.getElementById('Metronome');
metronomeIcon.addEventListener('click', function() {
    metronomeAudio.play();
});

const paragraph = document.querySelector('.para');
let letternotes = document.getElementById('letter');
letternotes.addEventListener('click', function(){
    paragraph.style.display="flex";
});

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
const audioSources = {
    Q: '../Notes/C3.mp3',
    2: '../Notes/CC3.mp3',
    W: '../Notes/D3.mp3',
    3: '../Notes/DD3.mp3',
    E: '../Notes/E3.mp3',
    R: '../Notes/F3.mp3',
    5: '../Notes/FF3.mp3',
    T: '../Notes/G3.mp3',
    6: '../Notes/GG3.mp3',
    Y: '../Notes/A3.mp3',
    7: '../Notes/AA3.mp3',
    U: '../Notes/BB3.mp3',
    I: '../Notes/C4.mp3',
    9: '../Notes/CC4.mp3',
    O: '../Notes/D4.mp3',
    0: '../Notes/DD4.mp3',
    P: '../Notes/E4.mp3',
    S: '../Notes/F4.mp3',
    D: '../Notes/FF4.mp3',
    G: '../Notes/G4.mp3',
    H: '../Notes/GG4.mp3',
    J: '../Notes/A4.mp3',
    L: '../Notes/AA4.mp3',
    ';': '../Notes/BB4.mp3',
    C3: '../Notes/C3.mp3',
    'C#3': '../Notes/CC3.mp3',
    D3: '../Notes/D3.mp3',
    'D#3': '../Notes/DD3.mp3',
    E3: '../Notes/E3.mp3',
    F3: '../Notes/F3.mp3',
    'F#3': '../Notes/FF3.mp3',
    G3: '../Notes/G3.mp3',
    'GG3': '../Notes/GG3.mp3',
    A3: '../Notes/A3.mp3',
    'A#3': '../Notes/AA3.mp3',
    'B3': '../Notes/B3.mp3',
    C4: '../Notes/C4.mp3',
    'C#4': '../Notes/CC4.mp3',
    D4: '../Notes/D4.mp3',
    'D#4': '../Notes/DD4.mp3',
    E4: '../Notes/E4.mp3',
    F4: '../Notes/F4.mp3',
    'F#4': '../Notes/FF4.mp3',
    G4: '../Notes/G4.mp3',
    'G#4': '../Notes/GG4.mp3',
    A4: '../Notes/A4.mp3',
    'A#4': '../Notes/AA4.mp3'
};

document.querySelectorAll('.set li').forEach(key => {
    key.addEventListener('click', () => {
        const note = key.getAttribute('data-note');
        const audioSrc = audioSources[note];

        if (audioSrc) {
            const audio = new Audio(audioSrc);
            audio.play();

            // Add active class for visual feedback
            key.classList.add('active');

            // Remove active class after audio ends
            audio.addEventListener('ended', () => {
                key.classList.remove('active');
            });
        }
    });
});

document.addEventListener('keydown', function(event) {
    const key = event.key.toUpperCase(); // Convert the pressed key to uppercase
    const audioSrc = audioSources[key];

    if (audioSrc) {
        const audio = new Audio(audioSrc);
        audio.play();
    }
});
v