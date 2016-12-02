jQuery(function($) {

    $('#assignment').on('click', function() {
        
        var assignmentName = $('<div class="form-group" id="addAssignmentName"> <label class="col-xs-4 col-xs-offset-1 col-lg-2 col-lg-offset-3 control-label" for="assignmentName">Assignment Name:</label> <div class="col-xs-6 col-md-4 col-lg-3"> <input id="assignmentName" name="assignmentName" type="text" placeholder="Assignment Name" class="form-control input-md" required=""> </div> </div>');
        var assignmentDescription = $('<div class="form-group" id="addAssignmentDescription"> <label class="col-xs-4 col-xs-offset-1 col-lg-2 col-lg-offset-3 control-label" for="assignmentDescription">Description:</label> <div class="col-xs-6 col-md-4 col-lg-3"> <input id="assignmentDescription" name="assignmentDescription" type="text" placeholder="Assignment Description" class="form-control input-md" required=""> </div> </div>');
        var assignmentButtons = $('<div class="form-group" id="cancelOrContinue"> <div class="col-xs-8 col-xs-offset-2 col-lg-4 col-lg-offset-4"> <label id="add" class="checkbox-inline" for="addQuestion"> <input class="btn btn-success" type="button" name="addquestion" id="addquestion" value="Add Question"> </label> <label id="cancel" class="checkbox-inline" for="cancelAssignment"> <input class="btn btn-success" type="button" name="cancelassignment" id="cancelassignment" value="Cancel"> </label> </div> </div>');
            
        $(assignmentName).appendTo('#assignmentForm');
        $(assignmentDescription).appendTo('#assignmentForm');
        $(assignmentButtons).appendTo('#assignmentForm');
    });
});
