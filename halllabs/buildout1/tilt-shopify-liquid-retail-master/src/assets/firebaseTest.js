(function() {
  
  const config = {
    			apiKey: "AIzaSyApVpxh7_jJcQQYROx_nQ2eRYFggNEjQQo",
    			authDomain: "msb-test-b6468.firebaseapp.com",
    			databaseURL: "https://msb-test-b6468.firebaseio.com",
    			projectId: "msb-test-b6468",
    			storageBucket: "msb-test-b6468.appspot.com",
    			messagingSenderId: "579481774753"
  			};
  firebase.initializeApp(config);
            
  const preObject = document.getElementById('object');
  const uLIst = document.getElementById('installerList');
            
            
  const dbRefObject = firebase.database().ref().child('msb');
  const dbRefList = dbRegObject.child('installers');
            
  dbRefList.on('child-added', snap => console.log(snap.val()));
  
  
}());