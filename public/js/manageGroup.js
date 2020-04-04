$(document).ready(function(){
    //Reference to the input field where the user adds a new group
    var $newGroup = $("input.newGroup");
    var $groupContainer = $(".group-container");
    
    //Adding event listeners for inserting, deleting and joining a Group
    $(document).on("submit", "#group-form", addGroup);
    $(document).on("click", "button.delete", deleteGroup);
    $(document).on("click", "button.join", joinGroup);
    
    
    
    //Initial groups array
    var groups = [];
    
    // //Getting groups from DB when page loads
    // getGroups();

    function initializeRows(){
        $groupContainer.empty();
        var groupsToAdd = [];
        for (var i = 0; i < groups.length; i++){
            groupsToAdd.push(createNewGroup(groups[i]));
        }
        $groupContainer.prepend(groupsToAdd);
    }
    
    //This function grabs the groups from the db and updates the view.
    
    function getGroups(){
        $.get("api/group"), function(data){
            groups = data;
            initializeRows();
        }
    }

    //AddGroup handles when the user clicks the "Add a group" button and creates a new group.
    function addGroup(){
        event.preventDefault();
        var group = {
            group_name: $newGroup.val().trim(),
            group_admin: $("#admin").val().trim()
        };
        
        $.post("api/group", group, getGroups);
        $newGroup.val("");
        
    }

    //This function deletes a group when user clicks a delete button.
    
    function deleteGroup(){
        event.stopPropagation();
        var id= $("this").data("id");
        $ajax({
            method: "DELETE",
            url: "api/group" + id
        }).then(getGroups)
        
    }
  
    function joinGroup(){
        event.preventDefault();
        $.get("api/group", function(data){
            if (data.length !== 0) {
            for (var i = 0; i < data.length; i++){
                $ajax({
                    method: "POST",
                    url: "api/group" + id
                }).then(getGroups)     
        }
    }
    })}
      
    

    function createNewGroup(group) {
        var $newGroup = $(
          [
            "<li class='list-group-item todo-item'>",
            "<span>",
            group.text,
            "</span>",
            "<input type='text' class='edit' style='display: none;'>",
            "<button class='delete btn btn-danger'>x</button>",
            "<button class='complete btn btn-primary'>✓</button>",
            "</li>"
          ].join("")
        );
    
        $newGroup.find("button.delete").data("id", group.id);
        // $newInputRow.find("button.join").css("display", "none");
        $newGroup.data("groups", group);
        if (group.complete) {
          $newGroup.find("span").css("text-decoration", "line-through");
        }
        return $newGroup;

    }

})
