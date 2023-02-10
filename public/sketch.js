let canvas;

let dogoURL;

let catURL;

let bcURL;
let bcc;
let bcrate;

let ruURL;
let randname;
let randemail;

let usaURL;
let usayear;
let usapopu;


function setup() {
    frameRate(60);
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.style('z-index', '-1');
    canvas.style('position', 'fixed');
    canvas.style('top', '0');
    canvas.style('right', '0');
}

function draw() {
    background(0, 0);
    fill(0,191,255)
    text('CLICK IN THE SCREEN TO GET RANDOM INFORMATION', 70, 70)
    fill(0,0,0)
    

    if (dogoURL !== undefined) {
        textSize(20)
        text('1- A random dog picture:', 50, 150)
        image(dogoURL,70,170,180,180)
    }
   
    if (catURL !== undefined) {
        text('2- A random cat fact:', 300, 150)
        text(catURL,320,180)
    }

    if (bcURL !== undefined) {
        text('3- EUR Bitcon rate:', 50, 400)
        text(bcrate,75,430)
    }

    if (ruURL !== undefined) {
        text('4- A random User info:', 300, 400)
        text(randname,325,425)
        text(randemail,325,450)
    }

    if (usaURL !== undefined) {
        text('5- USA population:', 50, 500)
        text(`${usayear} was`,75,540)
        text(usapopu,165,540)
    }


}


function mouseClicked(){

    dataDog("https://dog.ceo/api/breeds/image/random");
    dataCat("https://catfact.ninja/fact");
    dataBit("https://api.coindesk.com/v1/bpi/currentprice.json");
    dataRanduser("https://randomuser.me/api/");
    dataUsa("https://datausa.io/api/data?drilldowns=Nation&measures=Population");
    
}


async function dataDog(URL) {
    const response = await fetch(URL);
    const data = await response.json();
    dogoURL = loadImage(data.message);
    console.log(dogoURL);
}

 
async function dataCat(URL) {
    const response = await fetch(URL);
    const data = await response.json();
    catURL = data.fact;
    console.log (catURL);
}
 
async function dataBit(URL) {
    const response = await fetch(URL);
    const data = await response.json();
    bcURL = data.bpi;
    bcc = data.bpi.EUR.code;
    bcrate = data.bpi.EUR.rate;
    console.log (bcURL);
}

async function dataRanduser(URL) {
    const response = await fetch(URL);
    const data = await response.json();
    ruURL = data.results[0];
    randname = data.results[0].name.first;
    randemail = data.results[0].email;
    console.log (ruURL);
}


async function dataUsa(URL) {
    const response = await fetch(URL);
    const data = await response.json();
    usaURL = data.data[0];
    usayear = data.data[0].Year;
    usapopu = data.data[0].Population;

    console.log (usaURL);
    console.log (usayear);
    console.log(usapopu);
    
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

