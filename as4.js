var $ = function(id){
    return document.getElementById(id);
}

var joinList = function () {
     //get the value of the fields
    var emailAddress1 = $("email_address1").value;
    var emailAddress2 = $("email_address2").value;
    var first_name = $("first_name").value;
    var last_name = $("last_name").value;
    var isValid = true;
    var msgemail; 
    var msgEmailError = "This entry must equal first entry.";
    var msgBlankError = "This value must not be blank."; 
        
    
    if (emailAddress1 != emailAddress2) {   
        isValid = false;
        $("email_address2_error").childNodes[0].nodeValue=msgEmailError;
        
    } 

    if (emailAddress2 != emailAddress1) {    
        isValid = false; 
        $("email_address1_error").childNodes[0].nodeValue=msgEmailError;
        
    } 

    
    if (emailAddress1 == ''){
        $("email_address1_error").childNodes[0].nodeValue=msgBlankError; 
    }
    
    
    if (emailAddress2 == ''){
        $("email_address2_error").childNodes[0].nodeValue=msgBlankError; 
    }
    
    
    if (first_name == ''){
        isValid = false;
        $("first_name_error").childNodes[0].nodeValue=msgBlankError; 
        
    }
    
    
    if (last_name == ''){
        isValid = false;
        $("last_name_error").childNodes[0].nodeValue=msgBlankError; 
        
    }

    


if (isValid) {
        $("email_form").submit(); 
    }
}

window.onload = function () {
    $("join_list").onclick = joinList;
    $("email_address1").focus();  
} 



