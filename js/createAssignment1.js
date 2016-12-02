jQuery(function($) {
    
    var assignmentName = $('<div class="form-group" id="addAssignmentName"> <label class="col-xs-4 col-xs-offset-1 col-sm-4 col-sm-offset-1 col-md-2 col-md-offset-3 col-lg-2 col-lg-offset-3 control-label" for="assignmentName">Assignment Name:</label> <div class="col-xs-6 col-sm-6 col-md-4 col-lg-4"> <input id="assignmentName" name="assignmentName" type="text" placeholder="Assignment Name" class="form-control input-md" required=""> </div> </div>');
    var assignmentDescription = $('<div class="form-group" id="addAssignmentDescription"> <label class="col-xs-4 col-xs-offset-1 col-sm-4 col-sm-offset-1 col-md-2 col-md-offset-3 col-lg-2 col-lg-offset-3 control-label" for="assignmentDescription">Description:</label> <div class="col-xs-6 col-sm-6 col-md-4 col-lg-4"> <input id="assignmentDescription" name="assignmentDescription" type="text" placeholder="Assignment Description" class="form-control input-md" required=""> </div> </div>');
    var assignmentButtons = $('<div class="form-group" id="cancelOrContinue"> <div class="col-xs-8 col-xs-offset-2 col-lg-4 col-lg-offset-4"> <label id="add" class="checkbox-inline" for="addQuestion"> <input class="btn btn-success" type="button" name="addquestion" id="addquestion" value="Add Question"> </label> <label id="add" class="checkbox-inline" for="submitAssignment"> <input class="btn btn-success" type="button" name="submitAssignment" id="submitAssigment" value="Submit"> </label> <label id="cancel" class="checkbox-inline" for="cancelAssignment"> <input class="btn btn-success" type="button" name="cancelassignment" id="cancelassignment" value="Cancel"> </label> </div> </div>');
    
    var newQuestionButton = $('<br> <div class="form-group"><label class="col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-4 col-md-4 col-md-offset-4 col-lg-2 col-lg-offset-5" for="createNewQuestion"> <input class="btn btn-success" type="button" name="createNewQuestion" id="createNewQuestion" value="New Question"> </label> </div>');
    var prereadingButton = $('<div class="form-group"><label class="col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-4 col-md-4 col-md-offset-4 col-lg-2 col-lg-offset-5" for="prereading"> <input class="btn btn-success" type="button" name="prereading" id="prereading" value="Pre-reading Question"> </label> </div>');
    var duringreadingButton = $('<div class="form-group"><label class="col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-4 col-md-4 col-md-offset-4 col-lg-2 col-lg-offset-5" for="duringreading"> <input class="btn btn-success" type="button" name="duringreading" id="duringreading" value="During Reading Question"> </label> </div>');;
    var postreadingButton = $('<div class="form-group"><label class="col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-4 col-md-4 col-md-offset-4 col-lg-2 col-lg-offset-5" for="postreading"> <input class="btn btn-success" type="button" name="postreading" id="postreading" value="Post-reading Question"> </label> </div>');
        
    $(assignmentName).appendTo('#assignmentForm');
    $(assignmentDescription).appendTo('#assignmentForm');
    $(assignmentButtons).appendTo('#assignmentForm');
    
    $('#addAssignmentName').hide();
    $('#addAssignmentDescription').hide();
    $('#cancelOrContinue').hide();
    
    var questionCount = 1;
    var answerCount = 1;
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

        $(newQuestionButton).appendTo("#assignmentForm");        
        $(prereadingButton).appendTo("#assignmentForm");
        $(duringreadingButton).appendTo("#assignmentForm");
        $(postreadingButton).appendTo("#assignmentForm");
    });
    
    
    $(document).on ('click', '#prereading', function() {
        
        var question = "prereadingQuestion" + questionCount;
        var newAnswer = "answer" + answerCount;
        
        var prereadingQuestion = $('<br><br> <div class="form-group"> <div class="col-xs-6 col-xs-offset-3" align="center"> <label for="prereadingQuestion">Pre-reading Question:</label> <select required class="form-control" id="prereadingquestion"> <option value=""></option> <option value="Based on the title, what do you think the story will be about?">Based on the title, what do you think the story will be about?</option> <option value="What do you already know about the topic?">What do you already know about the topic?</option> <option value="Based on the front cover, what do you think the story will be about?">Based on the front cover, what do you think the story will be about?</option> </select> <span>Select one of the pre-reading questions</span> </div> </div>');
        var answer = $('<div class="form-group" id="addAnswer"> <label class="col-xs-4 col-xs-offset-1 col-lg-2 col-lg-offset-3 control-label" for="Answer">Answer:</label> <div class="col-xs-6 col-md-4 col-lg-3"> <input id="answer" name="answer" type="text" placeholder="Answer" class="form-control input-md" required=""> </div> </div>');
        
        $(prereadingQuestion).appendTo("#assignmentForm");
        $('#prereadingquestion').attr('id', question);
        
        $(answer).appendTo("#assignmentForm");
        $('#answer').attr('id', newAnswer);
        
        questionCount++;
        answerCount++;
    });

    
    $(document).on ('click', '#duringreading', function() {
        
        var question = "duringreadingQuestion" + questionCount;
        var newAnswer = "answer" + answerCount;
        
        var duringreadingQuestion = $('<br><br> <div class="form-group"> <div class="col-xs-6 col-xs-offset-3" align="center"> <label for="whilereadingQuestion">During Reading Question:</label> <select required class="form-control" id="whilereadingquestion"> <option value=""></option> <option value="What do you think will happen next based on what just happened?">What do you think will happen next based on what just happened?</option> <option value="What has happened so far?">What has happened so far?</option> <option value="What is your reaction to what just happened? How do you feel about what just happened?">What is your reaction to what just happened? How do you feel about what just happened?</option><option value="If you were this character, would you react to this situation the same way?  Would you react differently?  Why or why not?">If you were this character, would you react to this situation the same way?  Would you react differently?  Why or why not?</option> </select> <span>Select one of the while-reading questions</span> </div> </div>');
        var answer = $('<div class="form-group" id="addAnswer"> <label class="col-xs-4 col-xs-offset-1 col-lg-2 col-lg-offset-3 control-label" for="Answer">Answer:</label> <div class="col-xs-6 col-md-4 col-lg-3"> <input id="answer" name="answer" type="text" placeholder="Answer" class="form-control input-md" required=""> </div> </div>');
        
        $(duringreadingQuestion).appendTo("#assignmentForm");
        $('#whilereadingquestion').attr('id', question);
        
        $(answer).appendTo("#assignmentForm");
        $('#answer').attr('id', newAnswer);
        
        questionCount++;
        answerCount++;
    });    
    

    $(document).on ('click', '#postreading', function() {
        
        var question = "postreadingQuestion" + questionCount;
        var newAnswer = "answer" + answerCount;
        
        var postreadingQuestion = $('<br><br> <div class="form-group"> <div class="col-xs-6 col-xs-offset-3" align="center"> <label for="postreadingQuestion">Post-reading Question:</label> <select required class="form-control" id="postreadingquestion"> <option value=""></option> <option value="How did the story end?">How did the story end?</option> <option value="Was this ending similar or different to the ending you expected?">Was this ending similar or different to the ending you expected?</option> <option value="Was there a moral or a lesson to this story?">Was there a moral or a lesson to this story?</option> <option value="Who was the main/most important character in the story?">Who was the main/most important character in the story?</option> <option value="What was the main character trying to do?">What was the main character trying to do?</option> <option value="What was the problem and solution?">What was the problem and solution?</option> <option value="What was the setting (where did the story take place)?">What was the setting (where did the story take place)?</option> <option value="What was your favorite part and why?">What was your favorite part and why?</option> <option value="What character traits did the characters have (kind, mean, creative, patient, messy)? How do you know?">What character traits did the characters have (kind, mean, creative, patient, messy)? How do you know?</option> <option value="Retell the most important events in your own words.">Retell the most important events in your own words.</option> <option value="What was the author purpose for writing the book?">What was the author purpose for writing the book?</option> <option value="What facts were in the book?">What facts were in the book?</option> <option value="What new facts did you learn?">What new facts did you learn?</option> <option value="What questions do you have after reading?">What questions do you have after reading?</option> <option value="What is your favorite fact and why?">What is your favorite fact and why?</option> <option value="Was the book fiction or non-fiction? How do you know?">Was the book fiction or non-fiction? How do you know?</option> <option value="Was there a problem in the book? What was it? How was it solved?">Was there a problem in the book? What was it? How was it solved?</option> <option value="Who was the main character? ">Who was the main character? </option> <option value="How would you describe the main character?">How would you describe the main character?</option> <option value=""></option> </select><span>Select one of the while-reading questions</span> </div> </div>');
        var answer = $('<div class="form-group" id="addAnswer"> <label class="col-xs-4 col-xs-offset-1 col-lg-2 col-lg-offset-3 control-label" for="Answer">Answer:</label> <div class="col-xs-6 col-md-4 col-lg-3"> <input id="answer" name="answer" type="text" placeholder="Answer" class="form-control input-md" required=""> </div> </div>');
        
        $(postreadingQuestion).appendTo("#assignmentForm");
        $('#postreadingquestion').attr('id', question);
        
        $(answer).appendTo("#assignmentForm");
        $('#answer').attr('id', newAnswer);
        
        questionCount++;
        answerCount++;
    });
    
    
    $(document).on ('click', '#createNewQuestion', function() {
        
        var question = "newQuestion" + questionCount;
        var newAnswer = "answer" + answerCount;
        
        var newQuestion = $('<br><br> <div class="form-group" id="addNewQuestion"> <label class="col-xs-4 col-xs-offset-1 col-lg-2 col-lg-offset-3 control-label" for="newQuestion">Create New Question:</label> <div class="col-xs-6 col-md-4 col-lg-3"> <input id="newquestion" name="newquestion" type="text" placeholder="Question" class="form-control input-md" required=""> </div> </div>');
        var answer = $('<div class="form-group" id="addAnswer"> <label class="col-xs-4 col-xs-offset-1 col-lg-2 col-lg-offset-3 control-label" for="Answer">Answer:</label> <div class="col-xs-6 col-md-4 col-lg-3"> <input id="answer" name="answer" type="text" placeholder="Answer" class="form-control input-md" required=""> </div> </div>');
        
        alert (question + "," + newAnswer);
        
        $(newQuestion).appendTo("#assignmentForm");
        $('#newquestion').attr('id', question);
        
        $(answer).appendTo("#assignmentForm");
        $('#answer').attr('id', newAnswer);
        
        questionCount++;
        answerCount++;
    });
    
});


