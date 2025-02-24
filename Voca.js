//Element
const startbtn=document.querySelector("#start");
const endbtn=document.querySelector("#end");
const speekbtn=document.querySelector("#speak");

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
    //console.log(transcript);
    //readOut(transcript);
    
    if(transcript.includes("hello")){
        readOut("Hello sir");
    }
    
    if(transcript.includes("open youtube")){
        readOut("Opening youtube sir");
        console.log(transcript);
        window.open("https://www.youtube.com/");
    }
    

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
