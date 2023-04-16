var now = new Date();
now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
var nt = now.toISOString().slice(0, 16);
console.log(nt);
document.getElementById("time").setAttribute("value", nt);
document.getElementById("start-date").setAttribute("value", nt.slice(0, 10));
document.getElementById("end-date").setAttribute("value", nt.slice(0, 10));

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

    var r1320 = 0;
    var r1322 = 1;
    var r1324 = 0;
    var r1326 = 1;
    var r1328 = 0;
    var r2320 = 0;
    var r2322 = 0;
    var r2324 = 1;
    var r2326 = 1;
    var r2328 = 1;

    if(r1320){
      var img = document.getElementById("1320");
      img.src = "/FloorPlans/1320r.png";
    }
    if(r1322){
      var img = document.getElementById("1322");
      img.src = "/FloorPlans/1322r.png";
    }
    if(r1324){
      var img = document.getElementById("1324");
      img.src = "/FloorPlans/1324r.png";
    }
    if(r1326){
      var img = document.getElementById("1326");
      img.src = "/FloorPlans/1326r.png";
    }
    if(r1328){
      var img = document.getElementById("1328");
      img.src = "/FloorPlans/1328r.png";
    }
    if(r2320){
      var img = document.getElementById("2320");
      img.src = "/FloorPlans/2320r.png";
    }
    if(r2322){
      var img = document.getElementById("2322");
      img.src = "/FloorPlans/2322r.png";
    }
    if(r2324){
      var img = document.getElementById("2324");
      img.src = "/FloorPlans/2324r.png";
    }
    if(r2326){
      var img = document.getElementById("2326");
      img.src = "/FloorPlans/2326r.png";
    }
    if(r2328){
      var img = document.getElementById("2328");
      img.src = "/FloorPlans/2328r.png";
    }