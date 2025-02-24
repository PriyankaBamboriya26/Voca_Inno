//Element
const startbtn=document.querySelector("#start");
const endbtn=document.querySelector("#end");
const speekbtn=document.querySelector("#speak");
const submitbtn=document.querySelector("#submit");


//speech recognition
const SpeechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition=new SpeechRecognition();

//sr start
recognition.onstart= function(){
    console.log("Voca active");
};

// sr continuous
recognition.continuous=true;

//sr stop
recognition.onend= function(){
    console.log("Voca deactivated");
};

//sr result
recognition.onresult=function(event){
    let current = event.resultIndex;
    let transcript =event.results[current][0].transcript;
    transcript=transcript.toLowerCase();
    console.log(transcript);
    //readOut(transcript);
    
    if(transcript.includes("hello")){
        readOut("Hello sir");
    }
    
    if(transcript.includes("open youtube")){
        readOut("Opening youtube sir");
        console.log(transcript);
        window.open("https://www.youtube.com/");
    }

    if(transcript.includes("open google")){
        readOut("Opening google sir");
        console.log(transcript);
        window.open("https://www.google.com/");
    }

    if(transcript.includes("open mails")){
        readOut("Opening mails sir");
        console.log(transcript);
        window.open("https://mail.google.com/mail/u/0/#inbox");
    }

    //google search.
    if(transcript.includes("search for")){
        readOut("here's your result");
        let input=transcript.split("");
        input.splice(0,11);
        input.pop();
        input=input.join("").split(" ").join("+");
        window.open('https://www.google.com/search?q='+input,'_blank');
    }


    //youtube search
    if(transcript.includes("play")){
        readOut("here's your result");
        let inputs=transcript.split("");
        inputs.splice(0,4);
        inputs.pop();
        inputs=inputs.join("").split(" ").join("+");
        window.open('https://www.youtube.com/results?search_query='+inputs);
    }


    //scrolling
    if(transcript.includes("scroll up")){
        //readOut("Opening mails sir");
        //console.log(transcript);
        window.scrollBy(0,200);
    }

    if(transcript.includes("scroll down")){
        //readOut("Opening mails sir");
        //console.log(transcript);
        window.scrollBy(0,-200);
    }

    //clicking button by speech.
    /*var stopbtn=document.getElementById("end");
    if(transcript.includes("stop")){
        //readOut("Opening mails sir");
        //console.log(transcript);
        stopbtn.click();
    }*/
    

}

startbtn.addEventListener("click",()=>{
    recognition.start();
});

endbtn.addEventListener("click",()=>{
    recognition.stop();
});




//voca speaking

function readOut(message){
    const speech=new SpeechSynthesisUtterance();

    //diffrent voice
    const allvoice = speechSynthesis.getVoices();
    speech.voice= allvoice[6];
    speech.text = message;
    speech.volume = 1;
    window.speechSynthesis.speak(speech);
    console.log("Speeking out");
}
speekbtn.addEventListener("click" ,()=>{
    readOut("hello sir");
});
window.onload=function(){
    readOut("  ");
}
