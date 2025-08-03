
let sos = document.querySelector(".sos-btn");
let loc = document.querySelector(".loc-btn");
sos.addEventListener("click", function(event) {
    event.preventDefault();
    alert("SOS message sent!");
});
loc.addEventListener("click", function(event) {
    event.preventDefault();
    alert("location details sent to your trusted person!");
});
