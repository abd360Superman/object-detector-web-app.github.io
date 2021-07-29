const snippets = {
    homeHTML: '<button class="btn btn-info home-btn" onclick="loadBedroom()">Bedroom</button><button class="btn btn-info home-btn" onclick="loadLiving()">Living Room</button><button class="btn btn-info home-btn" onclick="loadFruits()">Fruits</button><button class="btn btn-info home-btn" onclick="loadBottles()">Bottles</button><button class="btn btn-info home-btn" onclick="loadDesk()">Desk</button>',
    fruitsHTMLJS: '<h2 class="btn btn-info">Fruits</h2><br><br><h3 id="status" class="btn btn-danger"></h3><script>let status = ""; let img = ""; let objects = []; function preload() {img = loadImage("images/fruits.jpg");} function setup() {const canvas = createCanvas(640, 420); canvas.center(); let objectDetector = ml5.objectDetector("cocossd", modelLoaded); document.getElementById("status").innerHTML = "Status: Detecting Objects";} function modelLoaded() {console.log("Model Loaded!"); status = true; objectDetector.detect(img, gotResults); } function gotResults(error, results) {if(error) {console.error(error);} console.log(results); results = objects;} function draw() {image(img, 0, 0, 640, 420); if(status != "") {for (let c = 0; c < objects.length; c++) {document.getElementById("status").innerHTML = "Status: Object Detected"; fill("#FF0000"); let percent = floor(objects[c].confidence * 100); text(objects[c].label + " " + percent + "%", objects[c].x + 15, objects[c].y + 15); noFill(); stroke("#FF0000"); rect(objects[c].x, objects[c].y, objects[c].width, objects[c].height);}}}</script>',
    bedroomHTMLJS: '<h2 class="btn btn-info">Bedroom</h2><br><br><h3 id="status" class="btn btn-danger"></h3><script>let status = ""; let img = ""; let objects = []; function preload() {img = loadImage("images/bedroom.jpg");} function setup() {const canvas = createCanvas(640, 420); canvas.center(); let objectDetector = ml5.objectDetector("cocossd", modelLoaded); document.getElementById("status").innerHTML = "Status: Detecting Objects";} function modelLoaded() {console.log("Model Loaded!"); status = true; objectDetector.detect(img, gotResults); } function gotResults(error, results) {if(error) {console.error(error);} console.log(results); results = objects;} function draw() {image(img, 0, 0, 640, 420); if(status != "") {for (let c = 0; c < objects.length; c++) {document.getElementById("status").innerHTML = "Status: Object Detected"; fill("#FF0000"); let percent = floor(objects[c].confidence * 100); text(objects[c].label + " " + percent + "%", objects[c].x + 15, objects[c].y + 15); noFill(); stroke("#FF0000"); rect(objects[c].x, objects[c].y, objects[c].width, objects[c].height);}}}</script>',
    deskHTMLJS: '<h2 class="btn btn-info">Desk</h2><br><br><h3 id="status" class="btn btn-danger"></h3><script>let status = ""; let img = ""; let objects = []; function preload() {img = loadImage("images/work.jpg");} function setup() {const canvas = createCanvas(640, 420); canvas.center(); let objectDetector = ml5.objectDetector("cocossd", modelLoaded); document.getElementById("status").innerHTML = "Status: Detecting Objects";} function modelLoaded() {console.log("Model Loaded!"); status = true; objectDetector.detect(img, gotResults); } function gotResults(error, results) {if(error) {console.error(error);} console.log(results); results = objects;} function draw() {image(img, 0, 0, 640, 420); if(status != "") {for (let c = 0; c < objects.length; c++) {document.getElementById("status").innerHTML = "Status: Object Detected"; fill("#FF0000"); let percent = floor(objects[c].confidence * 100); text(objects[c].label + " " + percent + "%", objects[c].x + 15, objects[c].y + 15); noFill(); stroke("#FF0000"); rect(objects[c].x, objects[c].y, objects[c].width, objects[c].height);}}}</script>',
    bottleHTMLJS: '<h2 class="btn btn-info">Bottles</h2><br><br><h3 id="status" class="btn btn-danger"></h3><script>let status = ""; let img = ""; let objects = []; function preload() {img = loadImage("images/bottles.jpg");} function setup() {const canvas = createCanvas(640, 420); canvas.center(); let objectDetector = ml5.objectDetector("cocossd", modelLoaded); document.getElementById("status").innerHTML = "Status: Detecting Objects";} function modelLoaded() {console.log("Model Loaded!"); status = true; objectDetector.detect(img, gotResults); } function gotResults(error, results) {if(error) {console.error(error);} console.log(results); results = objects;} function draw() {image(img, 0, 0, 640, 420); if(status != "") {for (let c = 0; c < objects.length; c++) {document.getElementById("status").innerHTML = "Status: Object Detected"; fill("#FF0000"); let percent = floor(objects[c].confidence * 100); text(objects[c].label + " " + percent + "%", objects[c].x + 15, objects[c].y + 15); noFill(); stroke("#FF0000"); rect(objects[c].x, objects[c].y, objects[c].width, objects[c].height);}}}</script>',
    livingHTMLJS: '<h2 class="btn btn-info">Living room</h2><br><br><h3 id="status" class="btn btn-danger"></h3><script>let status = ""; let img = ""; let objects = []; function preload() {img = loadImage("images/livingroom.jpg");} function setup() {const canvas = createCanvas(640, 420); canvas.center(); let objectDetector = ml5.objectDetector("cocossd", modelLoaded); document.getElementById("status").innerHTML = "Status: Detecting Objects";} function modelLoaded() {console.log("Model Loaded!"); status = true; objectDetector.detect(img, gotResults); } function gotResults(error, results) {if(error) {console.error(error);} console.log(results); results = objects;} function draw() {image(img, 0, 0, 640, 420); if(status != "") {for (let c = 0; c < objects.length; c++) {document.getElementById("status").innerHTML = "Status: Object Detected"; fill("#FF0000"); let percent = floor(objects[c].confidence * 100); text(objects[c].label + " " + percent + "%", objects[c].x + 15, objects[c].y + 15); noFill(); stroke("#FF0000"); rect(objects[c].x, objects[c].y, objects[c].width, objects[c].height);}}}</script>'
}

function loadHome() {
    document.getElementById('dynamically-add').innerHTML = ''
    document.getElementById('dynamically-add').innerHTML = snippets.homeHTML
}

function loadBedroom() {
    document.getElementById('dynamically-add').innerHTML = ''
    document.getElementById('dynamically-add').innerHTML = snippets.bedroomHTMLJS
}

function loadLiving() {
    document.getElementById('dynamically-add').innerHTML = ''
    document.getElementById('dynamically-add').innerHTML = snippets.livingHTMLJS
}

function loadFruits() {
    document.getElementById('dynamically-add').innerHTML = ''
    document.getElementById('dynamically-add').innerHTML = snippets.fruitsHTMLJS
}

function loadBottles() {
    document.getElementById('dynamically-add').innerHTML = ''
    document.getElementById('dynamically-add').innerHTML = snippets.bottleHTMLJS
}

function loadDesk() {
    document.getElementById('dynamically-add').innerHTML = ''
    document.getElementById('dynamically-add').innerHTML = snippets.deskHTMLJS
}