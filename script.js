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
    for (i = 0; i < btn.length; i++) {
      (function (index) {
        btn[index].onclick = function () {
          modal.style.display = "block";
          modal_p_title.textContent = btn[index].getAttribute('data-match');
          modal_table.rows[0].cells[0].innerHTML = btn[index].getAttribute('data-p1');
          modal_table.rows[0].cells[1].innerHTML = btn[index].getAttribute('data-p1wins');
          modal_table.rows[0].cells[4].innerHTML = btn[index].getAttribute('data-p2');
          modal_table.rows[0].cells[3].innerHTML = btn[index].getAttribute('data-p2wins');
          modal_video.src = btn[index].getAttribute('data-video');
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