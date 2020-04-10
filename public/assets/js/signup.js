$(document).ready(function() {

  // add click listener for sign up
  $('#signUp').on("click", function(e){
    e.preventDefault();
    //Get the username input and assign to a variable
    var userName = $("#username-input").val(); //getter
    
    //Pass it to the api to create a new profile_indiv
      $.post("/api/signUp", {
      username: userName
    })
    //Redirect to /groups
      .then(function() {
        console.log('we made it')
        window.location.replace("/groups");
        // If there's an error, log the error
      })
      .catch(function(err) {
        console.log(err);
      });
  })







  // // Getting references to our form and inputs
  // const loginForm = $("#login");
  // const usernameInput = $("#username-input");

  // $(document).on("submit", "#submit-form-bn", getNext)

  // // When the form is submitted, we validate there's an email and password entered
  // // loginForm.on("submit", function(event, next) {
  // //   event.preventDefault();
  // //   const userData = {
  // //     username: usernameInput.val().trim(),
  // //   };

  // //   if (!userData.email) {
  // //     return;
  // //   }

  // //   // If we have an email and password we run the loginUser function and clear the form
  // //   loginUser(userData.username);
  // //   usernameInput.val("");
  // // });

  // // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  // function loginUser(username) {
  //   $.post("/api/login", {
  //     username: username
  //   })
  //     .then(function() {
  //       window.location.replace("/groups");
  //       // If there's an error, log the error
  //     })
  //     .catch(function(err) {
  //       console.log(err);
  //     });
  // }

  // function getNext(){
  //   console.log("next")
  // }
});
