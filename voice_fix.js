// Simple working voice recognition
console.log('🎤 Voice Recognition Script Loading...');

document.addEventListener('DOMContentLoaded', function() {
    const voiceBtn = document.getElementById('startSpeechRecognition');
    const transcriptionDiv = document.getElementById('transcription');
    
    if (!voiceBtn) {
        console.error('Voice button not found');
        return;
    }
    
    console.log('✅ Voice button found, adding click listener');
    
    voiceBtn.addEventListener('click', function() {
        console.log('🎤 VOICE BUTTON CLICKED!');
        startVoiceRecognition();
    });
    
    function startVoiceRecognition() {
        console.log('Starting voice recognition...');
        
        if (!window.webkitSpeechRecognition && !window.SpeechRecognition) {
            alert('❌ Voice not supported in this browser. Use Chrome/Edge.');
            return;
        }
        
        const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = 'en-US';
        
        voiceBtn.innerHTML = '🎤 LISTENING - SPEAK NOW!';
        voiceBtn.disabled = true;
        transcriptionDiv.innerHTML = '🎤 <strong>LISTENING...</strong> Speak your symptoms LOUDLY!';
        transcriptionDiv.style.color = '#28a745';
        
        let finalText = '';
        
        recognition.start();
        
        // Auto-stop after 15 seconds
        setTimeout(() => {
            recognition.stop();
            resetButton();
            if (!finalText.trim()) {
                transcriptionDiv.innerHTML = '⏱️ No speech detected. Try speaking louder!';
                transcriptionDiv.style.color = '#ffc107';
            }
        }, 15000);
        
        recognition.onresult = function(event) {
            let interim = '';
            
            for (let i = event.resultIndex; i < event.results.length; i++) {
                if (event.results[i].isFinal) {
                    finalText += event.results[i][0].transcript + ' ';
                    console.log('Final text:', event.results[i][0].transcript);
                } else {
                    interim += event.results[i][0].transcript;
                }
            }
            
            transcriptionDiv.innerHTML = `🎤 <strong>HEARING:</strong> ${finalText}<span style="color:#999">${interim}</span>`;
            
            // Auto-insert into input field
            if (finalText.trim()) {
                const symptomsInput = document.querySelector('input[name="symptoms"]');
                if (symptomsInput) {
                    let cleanText = finalText.trim().replace(/\band\b/g, ',').replace(/,\s*,/g, ',');
                    symptomsInput.value = cleanText;
                    console.log('Text inserted:', cleanText);
                }
            }
        };
        
        recognition.onerror = function(event) {
            console.error('Voice error:', event.error);
            transcriptionDiv.innerHTML = `❌ Voice error: ${event.error}. Try Quick Symptoms instead!`;
            transcriptionDiv.style.color = '#dc3545';
            resetButton();
        };
        
        recognition.onend = function() {
            console.log('Voice recognition ended');
            if (finalText.trim()) {
                transcriptionDiv.innerHTML = `✅ <strong>SUCCESS!</strong> Added: "${finalText.trim()}"`;
                transcriptionDiv.style.color = '#28a745';
            }
            resetButton();
        };
        
        function resetButton() {
            voiceBtn.innerHTML = '<i class="fas fa-microphone"></i> Voice Input';
            voiceBtn.disabled = false;
        }
    }
    
    console.log('✅ Voice recognition setup complete');
});