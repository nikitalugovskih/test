const event01 = document.getElementById("event01");
const event02 = document.getElementById("event02");
const event03 = document.getElementById("event03");
const event04 = document.getElementById("event04");
const event05 = document.getElementById("event05");
const event06 = document.getElementById("event06");
const event07 = document.getElementById("event07");
const event08 = document.getElementById("event08");
const shadow01 = document.getElementById("event-shadow01");
const mainEvent = document.getElementById("main-event");


event01.addEventListener("click", function() {
    document.getElementById('main-event').style.gridTemplateColumns = "1080px 85px 85px 85px 85px 85px 85px 85px";
});

event02.addEventListener("click", function() {
    document.getElementById("main-event").style.gridTemplateColumns = "85px 1080px 85px 85px 85px 85px 85px 85px";
});

event03.addEventListener("click", function() {
    document.getElementById("main-event").style.gridTemplateColumns = "85px 85px 1080px 85px 85px 85px 85px 85px";
});

event04.addEventListener("click", function() {
    document.getElementById("main-event").style.gridTemplateColumns = "85px 85px 85px 1080px 85px 85px 85px 85px";
});

event05.addEventListener("click", function() {
    document.getElementById("main-event").style.gridTemplateColumns = "85px 85px 85px 85px 1080px 85px 85px 85px";
});


event06.addEventListener("click", function() {
    document.getElementById("main-event").style.gridTemplateColumns = "85px 85px 85px 85px 85px 1080px 85px 85px";
});

event07.addEventListener("click", function() {
    document.getElementById("main-event").style.gridTemplateColumns = "85px 85px 85px 85px 85px 85px 1080px 85px";
});

event08.addEventListener("click", function() {
    document.getElementById("main-event").style.gridTemplateColumns = "85px 85px 85px 85px 85px 85px 85px 1080px";
});


document.addEventListener("click", function(e) {
    let openEvents = document.getElementById('main-event');
    if (e.target.id != 'footerId' && e.target.id != 'main-event') {
    } else if (e.target.id == 'footerId') {
        openEvents.style.display = (openEvents.style.display != 'grid') ? 'grid' : 'none';
    }
  });
