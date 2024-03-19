let noise, filter, feedbackDelay;
let boomFlag = false; 

function preload() {
  boomboom = loadImage('assets/kira2.jpg');
}

function mousePressed() {
  playKaboom();
  boomFlag = true; 
}

function mouseReleased() {
  boomFlag = false; 
}

function setup() {
  createCanvas(400, 400);

  
  noise = new Tone.Noise({
    type: "pink" 
  });

  filter = new Tone.Filter({
    frequency: 2000, 
    type: "lowpass",
    rolloff: -12, 
    Q: 10 
  });

  feedbackDelay = new Tone.FeedbackDelay({
    delayTime: 0.1, 
    feedback: 0.5 
  });

  noise.connect(filter);
  filter.connect(feedbackDelay);
  feedbackDelay.toDestination();
}

function playKaboom() {
  noise.start();

  setTimeout(() => {
    noise.stop();
  }, 500); 
}

function draw() {
  if (boomFlag) {
    background(boomboom);
  } else {
    background(240);
    textSize(36); 
    text("Click For a Blast :)", 50, height / 2); 
  }
}
