document.addEventListener('DOMContentLoaded', function() {
    const sosButton = document.getElementById('sosButton');
    const emergencyModal = document.getElementById('emergencyModal');
    const modalTimer = document.getElementById('modalTimer');
    const cancelSosBtn = document.getElementById('cancelSosBtn');

    let pressTimer;
    let countdown;
    let isSosActive = false;

    // SOS Button - Press and hold functionality
    sosButton.addEventListener('mousedown', startSosTimer);
    sosButton.addEventListener('touchstart', startSosTimer);
    sosButton.addEventListener('mouseup', cancelSosTimer);
    sosButton.addEventListener('mouseleave', cancelSosTimer);
    sosButton.addEventListener('touchend', cancelSosTimer);
    sosButton.addEventListener('touchcancel', cancelSosTimer);

    function startSosTimer() {
        if (pressTimer || isSosActive) return;

        // Add visual feedback
        sosButton.classList.add('pressing');
        
        pressTimer = setTimeout(() => {
            activateEmergency();
            pressTimer = null;
        }, 3000); // 3 seconds hold
    }

    function cancelSosTimer() {
        if (pressTimer) {
            clearTimeout(pressTimer);
            pressTimer = null;
            sosButton.classList.remove('pressing');
        }
    }

    function activateEmergency() {
        isSosActive = true;
        sosButton.classList.remove('pressing');
        emergencyModal.style.display = 'flex';
        
        let seconds = 5;
        modalTimer.textContent = seconds;
        
        // Play alarm sound (in a real app)
        // const alarmSound = new Audio('alarm.mp3');
        // alarmSound.loop = true;
        // alarmSound.play();
        
        countdown = setInterval(() => {
            seconds--;
            modalTimer.textContent = seconds;
            
            if (seconds <= 0) {
                clearInterval(countdown);
                sendEmergencyAlert();
            }
        }, 1000);
    }

    function cancelEmergency() {
        isSosActive = false;
        clearInterval(countdown);
        emergencyModal.style.display = 'none';
        
        // Stop alarm sound (in a real app)
        // alarmSound.pause();
    }

    function sendEmergencyAlert() {
        emergencyModal.style.display = 'none';
        
        // In a real app, this would send actual alerts to emergency contacts
        console.log('Emergency alert sent to authorities and contacts');
        
        // Show confirmation
        alert('EMERGENCY ALERT SENT!\n\nHelp is on the way. Stay calm and stay safe.');
        
        // Reset after alert
        setTimeout(() => {
            isSosActive = false;
        }, 1000);
    }

    cancelSosBtn.addEventListener('click', cancelEmergency);

    // Add click sound effect (optional)
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // In a real app: new Audio('click.mp3').play();
        });
    });
});