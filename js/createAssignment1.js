jQuery(function($) {
    
    var assignmentName = $('<div class="form-group" id="addAssignmentName"> <label class="col-xs-4 col-xs-offset-1 col-sm-4 col-sm-offset-1 col-md-2 col-md-offset-3 col-lg-2 col-lg-offset-3 control-label" for="assignmentName">Assignment Name:</label> <div class="col-xs-6 col-sm-6 col-md-4 col-lg-4"> <input id="assignmentName" name="assignmentName" type="text" placeholder="Assignment Name" class="form-control input-md" required=""> </div> </div>');
    var assignmentDescription = $('<div class="form-group" id="addAssignmentDescription"> <label class="col-xs-4 col-xs-offset-1 col-sm-4 col-sm-offset-1 col-md-2 col-md-offset-3 col-lg-2 col-lg-offset-3 control-label" for="assignmentDescription">Description:</label> <div class="col-xs-6 col-sm-6 col-md-4 col-lg-4"> <input id="assignmentDescription" name="assignmentDescription" type="text" placeholder="Assignment Description" class="form-control input-md" required=""> </div> </div>');
    var assignmentButtons = $('<div class="form-group" id="cancelOrContinue"> <div class="col-xs-8 col-xs-offset-2 col-lg-4 col-lg-offset-4"> <label id="add" class="checkbox-inline" for="addQuestion"> <input class="btn btn-success" type="button" name="addquestion" id="addquestion" value="Add Question"> </label> <label id="cancel" class="checkbox-inline" for="cancelAssignment"> <input class="btn btn-success" type="button" name="cancelassignment" id="cancelassignment" value="Cancel"> </label> </div> </div>');
    var questionOptions = $('<br> <div class="col-xs-10 col-xs-offset-1 col-sm-4 col-sm-offset-4 col-md-4 col-md-offset-4 col-lg-2 col-lg-offset-5 btn-group-vertical" id="questionOptions"> <button type="button" class="btn btn-success" id="new">Create New Question</button> <button type="button" class="btn btn-success" id="pre">Pre-reading Question</button> <button type="button" class="btn btn-success" id="during">During reading Question</button> <button type="button" class="btn btn-success" id="post">Post-reading Question</button> </div> <br> <br>');
    
    $(assignmentName).appendTo('#assignmentForm');
    $(assignmentDescription).appendTo('#assignmentForm');
    $(assignmentButtons).appendTo('#assignmentForm');
    
    $('#addAssignmentName').hide();
    $('#addAssignmentDescription').hide();
    $('#cancelOrContinue').hide();
    
    var showAssignment = 0;
    
    $(document).on('click', '#assignment', function() {
              
        if (showAssignment == 0) {
        
            $('#addAssignmentName').show();
            $('#addAssignmentDescription').show();
            $('#cancelOrContinue').show();
        
            showAssignment = 1;
        }     
    });
    
    
    $(document).on('click', 'input#cancelassignment', function() {
    
        if (showAssignment == 1) {
            
            $('#addAssignmentName').hide();
            $('#addAssignmentDescription').hide();
            $('#cancelOrContinue').hide();
        
            showAssignment = 0;
        }
    });
    
    
    $(document).on ('click', '#addquestion', function() {
        
        $(questionOptions).appendTo("#assignmentForm");
        $("#cancelOrContinue").hide();
    });
    
});
