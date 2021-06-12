Webcam.set({
    width: 300,
    height: 300,
    image_format: "png",
    png_quality: 90
});
Webcam.attach("camera")
function capture() {
    Webcam.snap(
        function (img) {
            document.getElementById("snapshot").innerHTML = `<img id="picture" src=${img}>`
        }
    )
}
console.log("ml5.version = " + ml5.version)
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/epbJj_Rqh/model.json", modelLoader)
function modelLoader(){
    console.log("Your model has loaded successfully.");
}

function identify() {
    snap = document.getElementById("picture");
    classifier.classify(snap, getResults);
}

function getResults(error, results) {
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("object").innerHTML = results[0].label;
        document.getElementById("accuracy").innerHTML = (results[0].confidence.toFixed(4)) * 100 + "%";
    }
}
