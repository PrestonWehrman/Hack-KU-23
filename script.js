var now = new Date();
now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
var nt = now.toISOString().slice(0, 16);
console.log(nt);
document.getElementById("time").setAttribute("value", nt);

document
    .getElementById('floor')
    .addEventListener('change', function () {
        'use strict';
        var vis = document.querySelector('.vis'),
            target = document.getElementById(this.value);
        if (vis !== null) {
            vis.className = 'inv';
        }
        if (target !== null) {
            target.className = 'vis';
        }
    });

    // Get the modal
    var modal = document.getElementById("myModal");
    // Get the button that opens the modal
    var btn = document.getElementsByClassName("room");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    // When the user clicks on the button, open the modal
    var modal_p_title = document.getElementById("room-num");
    for (i = 0; i < btn.length; i++) {
      (function (index) {
        btn[index].onclick = function () {
          modal.style.display = "block";
          modal_p_title.textContent = btn[index].getAttribute('data-room');
        };
      })(i)
    }
    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

    // Display red image when room is booked
var x = 2324; // Replace with your own variable value

if (x == 2320) {
    var img = document.getElementById("2320");
    img.src = "/Floor Plan 2 Images/2320 closed.png";
    //img.style.filter = "hue-rotate(180deg)"; // Change hue rotation angle as needed
} else if (x == 2322) {
    var img = document.getElementById("2322");
    img.src = "/Floor Plan 2 Images/2322 closed.png";
    //img.style.filter = "hue-rotate(180deg)"; // Change hue rotation angle as needed 
} else if (x == 2324) {
    var img = document.getElementById("2324");
    img.src = "/Floor Plan 2 Images/2324 closed.png";
    //img.style.filter = "hue-rotate(180deg)"; // Change hue rotation angle as needed
} else if (x == 2326) {
    var img = document.getElementById("2326");
    img.src = "/Floor Plan 2 Images/2326 closed.png";
    //img.style.filter = "hue-rotate(180deg)"; // Change hue rotation angle as needed
} else if (x == 2328) {
    var img = document.getElementById("2328");
    img.src = "/Floor Plan 2 Images/2328 closed.png";
    //img.style.filter = "hue-rotate(180deg)"; // Change hue rotation angle as needed
} else {
    document.write('Invalid value for x.');
}