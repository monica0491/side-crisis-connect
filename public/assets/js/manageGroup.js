
$(document).ready(function(){
 
  var newGroup = $("#group-name").val().trim();
  allGroups = [];

  $.post("/api/groups", {
    group_name: newGroup,
    admin_id: 1
  })
  .then(function(){
    getGroups();
    console.log("hi")
  })

})

function getGroups(){
  $.get("/api/groups", function(data) {
    allGroups= data
  })
}





// $(document).ready(function(){
//   // Getting references to the group input and groups container, as well as the table body
//   var groupInput = $("#group-name");
//   var groupList = $("tbody");
//   var groupContainer = $(".groups-container");
  
//   // Adding event listeners to the form to create a new object, and the button to delete
//   // a group
//   $(document).on("submit", "#group-form", handleGroupFormSubmit);
//   $(document).on("click", ".delete-group", handleDeleteButtonPress);
  
//   // Getting the initial list of Authors
//   // getGroups();
  
//   // A function to handle what happens when the form is submitted to create a new Group
//   function handleGroupFormSubmit(event) {
//       event.preventDefault();
//       // get the name o the group from the client
//       // send that to the api
//       // basically do exactly what we just did for client
//       // Don't do anything if the name fields hasn't been filled out
//       if (!groupInput.val().trim().trim()) {
//           return;
//         }
//     }
//     // Calling the upsertGroup function and passing in the value of the name input
//     upsertGroup({
//         group_name: groupInput
//         .val()
//         .trim()
//     });
    
//     function upsertGroup(groupData) {
//         $.post("/groups", groupData)
//         .then(getGroups());
//     }


//   // Function for creating a new list row for groups
//   function createGroupRow(groupData) {
//     // console.log(groupData);
//     var newTr = $("<tr>");
//     newTr.data("group", groupData);
//     newTr.append("<td>" + groupData.name + "</td>");
//     newTr.append("<td><a href='/inventory_id=" + groupData.id + "'>Go to Inventory</a></td>");
//     newTr.append("<td><a style='cursor:pointer;color:red' class='delete-author'>Delete Group</a></td>");
//     return newTr;
//   }

//   // Function for retrieving groups and getting them ready to be rendered to the page
//   function getGroups() {
//     $.get("/groups", function(data) {
//       var rowsToAdd = [];
//       for (var i = 0; i < data.length; i++) {
//         rowsToAdd.push(createGroupRow(data[i]));
//       }
//       renderGroupList(rowsToAdd);
//       groupInput.val("");
//     });
//   }
    
  
//   // A function for rendering the list of groups to the page
//   function renderGroupList(rows) {
//       groupList.children().not(":last").remove();
//       groupContainer.children(".alert").remove();
//       if (rows.length) {
//           groupList.prepend(rows);
//         }
//         else {
//             renderEmpty();
//         }
//     }
    
//     // Function for handling what to render when there are no authors
//     function renderEmpty() {
//         var alertDiv = $("<div>");
//         alertDiv.addClass("alert alert-danger");
//         alertDiv.text("You must create be part of a Group.");
//         groupContainer.append(alertDiv);
//     }
    
//     // Function for handling what happens when the delete button is pressed
//     function handleDeleteButtonPress() {
//         var listItemData = $(this).parent("td").parent("tr").data("group");
//         var id = listItemData.id;
//         $.ajax({
//             method: "DELETE",
//             url: "/groups" + id
//         })
//         .then(getGroups());
//     }



    
// })

    





// $(document).ready(function(){
//     //Reference to the input field where the user adds a new group
//     const $newGroup = $("#groups-appear-here");
//     const $groupContainer = $("#group-container");
    
//     $(document).on("click", "#groups-appear-here", getGroups);

//     //Adding event listeners for inserting, deleting and joining a Group
//     // $(document).on("click", "#group-form", addGroup);
//     // $(document).on("click", "button.delete", deleteGroup);
//     // $(document).on("click", "button.join", joinGroup);
    
    
    
//     //Initial groups array
//     let groups = [];
    
//     // //Getting groups from DB when page loads
//     getGroups();

//     function initializeRows(){
//         $groupContainer.empty();
//         var groupsToAdd = [];
//         for (let i = 0; i < groups.length; i++){
//             groupsToAdd.push(createNewGroup(groups[i]));
//         }
//         $groupContainer.prepend(groupsToAdd);
//     }
    
//     //This function grabs the groups from the db and updates the view.
//     function getGroups(){
//         // console.log("Click me!")
//         $.get("/groups"), function(data){
//             var rowsToAdd = [];
//             for (var i = 0; i < data.length; i++) {
//             rowsToAdd.push(createGroupRow(data[i]));
//       }
//             renderGroupList(rowsToAdd);
//             nameInput.val("");
//             // initializeRows();
//         }
//     }

//     function createGroupRow(authorData) {
//         console.log(authorData);
//         var newTr = $("<tr>");
//         newTr.data("author", authorData);
//         newTr.append("<td>" + authorData.name + "</td>");
//         newTr.append("<td># of posts will display when we learn joins in the next activity!</td>");
//         newTr.append("<td><a href='/blog?author_id=" + authorData.id + "'>Go to Posts</a></td>");
//         newTr.append("<td><a href='/cms?author_id=" + authorData.id + "'>Create a Post</a></td>");
//         newTr.append("<td><a style='cursor:pointer;color:red' class='delete-author'>Delete Author</a></td>");
//         return newTr;
//       }

//     //AddGroup handles when the user clicks the "Add a group" button and creates a new group.
//     function addGroup(){
//         event.preventDefault();
//         const group = {
//             group_name: $newGroup,
//             group_admin: $("#admin").val().trim()
//         };
        
//         $.post("/group", group, getGroups);
//         $newGroup.val("");
        
//     }

//     //This function deletes a group when user clicks a delete button.
    
//     function deleteGroup(){
//         event.stopPropagation();
//         const id= $("this").data("id");
//         $ajax({
//             method: "DELETE",
//             url: "/group" + id
//         }).then(getGroups)
        
//     }
  
//     function joinGroup(){
//         event.preventDefault();
//         $.get("api/group", function(data){
//             if (data.length !== 0) {
//             for (let i = 0; i < data.length; i++){
//                 $ajax({
//                     method: "POST",
//                     url: "/group" + id
//                 }).then(getGroups)     
//         }
//     }
//     })}
      
    

//     function createNewGroup(group) {
//         const $newGroup = $(
//           [
//             "<li class='list-group-item todo-item'>",
//             "<span>",
//             group.text,
//             "</span>",
//             "<input type='text' class='edit' style='display: none;'>",
//             "<button class='delete btn btn-danger'>x</button>",
//             "<button class='complete btn btn-primary'>✓</button>",
//             "</li>"
//           ].join("")
//         );
    
//         $newGroup.find("button.delete").data("id", group.id);
//         // $newInputRow.find("button.join").css("display", "none");
//         $newGroup.data("groups", group);
//         if (group.complete) {
//           $newGroup.find("span").css("text-decoration", "line-through");
//         }
//         return $newGroup;

//     }

// })
