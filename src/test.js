const firestore = firebase.firestore();
const settings = {/*your settings...*/ timestampsInSnapshots: true};
firestore.settings(settings);

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

function addListing() {

  var titleText = document.getElementById('listingTitle').value;
  var phoneNumber = document.getElementById('listingPhoneNumber').value;

  // Add a new document in collection "cities"
  db.collection("Listings").doc().set({
      title: titleText,
      phone_number: phoneNumber
  })
  .then(function() {
      console.log("Listing successfully written!");
  })
  .catch(function(error) {
      console.error("Error adding listing: ", error);
  });

}
