import React from 'react';
/*This is the JavaScript fo the Pursuit Article Feed page */

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCnmHqTk9X8HD_T852mvO29QN370QKmeA0",
    authDomain: "pursuit-19db7.firebaseapp.com",
    databaseURL: "https://pursuit-19db7.firebaseio.com",
    projectId: "pursuit-19db7",
    storageBucket: "pursuit-19db7.appspot.com",
    messagingSenderId: '61950672392'
  };
  firebase.initializeApp(config);

  db = firebase.database();

  var submission = $('#input').val();

  db.ref('/submissions').on('child_added', function(snapshot, prevChildKey){
    console.log('Added this Child right here--->')
    let div = $('<div>').attr('class', 'posting');
    div.append($('<h5>').text(snapshot.val().title));
    div.append($('<p>').text(snapshot.val().message));
    $('.feed').prepend(div);
  });

  site = 'https://www.googleapis.com/auth/calendar.readonly'

  $.ajax({
    url: site,
    method: 'GET',
  }).then(function(response){
    console.log(response);
  });
  
function Activity(){
    return(
        <div class="about">
            <h1 class="c">Activity Feed</h1>
            <div class="feed"></div>
        </div>
    );
}

export default Activity;