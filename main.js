prediction1 = ""
prediction2 = ""

Webcam.set({
    width:350,
    height:300,
    imageFormat : 'png',
    pngQuality:90
  });

camera = document.getElementById("camera");

Webcam.attach('#camera');

      
function takeSnapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

  console.log('ml5 version:', ml5.version);
  
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/J2Ip11PDF/model.json',modelLoaded);

  function modelLoaded() {
    console.log('Model Loaded!');
  }

function speak(){
  var synth = window.speechSynthesis;
  speakData1 = "A primeira previsão é " + prediction1;
  speakData2 = "E a segunda previsão é " + prediction2;
  var utterThis = new SpeechSynthesisUtterance(speakData1 + speakData2);
  synth.speak(utterThis);
}


  function check()
  {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
  }


function gotResult(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    document.getElementById("resultEmotionName").innerHTML = results[0].label;
    document.getElementById("resultEmotionName2").innerHTML = results[1].label;
    prediction1 = results[0].label;
    prediction2 = results[1].label;
    speak();
    if(results[0].label == "soco")
    {
	    document.getElementById("updateEmoji").innerHTML = "👊";
    }
    if(results[0].label == "perfeito")
    {
	    document.getElementById("updateEmoji").innerHTML = "🤌";
    }
    if(results[0].label == "uma bolinha")
    {
	    document.getElementById("updateEmoji").innerHTML = "🤏";
    }
    if(results[0].label == "ok")
    {
	    document.getElementById("updateEmoji").innerHTML = "👍";
    }
    if(results[0].label == "te amo")
    {
	    document.getElementById("updateEmoji").innerHTML = "🫰";
    }
    if(results[0].label == "amigo")
    {
	    document.getElementById("updateEmoji").innerHTML = "🤝";
    }

    if(results[1].label == "ok")
    {
	    document.getElementById("updateEmoji2").innerHTML = "👍";
    }
    if(results[1].label == "te amo")
    {
	    document.getElementById("updateEmoji2").innerHTML = "🫰";
    }
    if(results[1].label == "amigos")
    {
	    document.getElementById("updateEmoji2").innerHTML = "🤝";
    }
    if(results[1].label == "soco")
    {
	    document.getElementById("updateEmoji2").innerHTML = "👊";
    }
    if(results[1].label == "perfeito")
    {
	    document.getElementById("updateEmoji2").innerHTML = "🤌";
    }
    if(results[1].label == "uma bolinha")
    {
	    document.getElementById("updateEmoji2").innerHTML = "🤏";
    }
  }
}