function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/JMMvOc9R0/model.json', modelReady)
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if (error){
        console.error(error);
    } else{
        console.log(results);
        random_number_r = Math.floor(Math.random() *255) + 1;
        random_number_g = Math.floor(Math.random() *255) + 1;
        random_number_b = Math.floor(Math.random() *255) + 1;

        document.getElementById("result-label").innerHTML = "Detected Voice is of - " + results[0].label;
        document.getElementById("result-confidence").innerHTML = "Accuracy - " + (results[0].confidence * 100).toFixed(2) + "%";
        document.getElementById("result-label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result-confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        
        img = document.getElementById("img");

        if(results[0].label == "Dog"){
            img = "https://i.pinimg.com/originals/32/a4/41/32a4412f3aa942ef8c2d6d143e3879d3.jpg"
        } else if(results[0].label == "Cat"){
            img = "https://media.istockphoto.com/vectors/cute-cat-cartoon-vector-id578080968?k=20&m=578080968&s=170667a&w=0&h=xZvHLavV97O3_KAPONcdL-JGgLqQgNivuTDm2hj2kTg="
        } else{
            img = "https://library.kissclipart.com/20190331/ewq/kissclipart-clip-art-hearing-loss-hearing-aid-5fee4542d7e8be22.png"
        }
    }
}