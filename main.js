const textInput = document.getElementById('input');
const speakButton = document.getElementById('speak');

if ('speechSynthesis' in window) {
    const synthetis = window.speechSynthesis;

    let voices = [];
    synthetis.onvoiceschanged = () => {
        voices = synthetis.getVoices();
    };
    speakButton.addEventListener('click', () => {
        const textToSpeak = textInput.value;
        const utterance = new SpeechSynthesisUtterance(textToSpeak);

        utterance.voice = voices[40];
        utterance.lang = "id-ID";

        utterance.pitch = 1;
        utterance.rate = 1;
        utterance.volume = 1;

        synthetis.speak(utterance); 
       });
}else{
    alert("web speech error,try input");
}
