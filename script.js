$(document).ready(()=>{
	$('.pop').click(()=>{
		$('#box').addClass('show')
	});
    $(".toggle").click(function(){
        $("#box").toggleClass("show");
    });

	$('.material-symbols-outlined').click(()=>{
		$('#box').removeClass('show')		
	})


	
	$('#usernamevalidation').hide();
    $('#emailvalidation').hide();
	var error = true;
	var email_error = true;


	$('#username').keyup(function(){
		username_validation();
   });

   function username_validation(){
		var username_val = $('#username').val();

		if(username_val.length == ""){
			$('#usernamevalidation').show();
			$('#usernamevalidation').html('Username Cannot Be Empty');
			$('#usernamevalidation').css('color','red');
			error = false;
			return false;
		}else{
			$('#usernamevalidation').hide();
		}

		if(username_val.length < 3 || username_val.length > 10){
			$('#usernamevalidation').show();
			$('#usernamevalidation').html('Invalid Username');
			$('#usernamevalidation').css('color','red');
			error = false;
			return false;
		}else{
			$('#usernamevalidation').hide();
		}
	}



	$('#email').keyup(function(){
		email_validation();
	});

	function email_validation(){
		var emailregex = /^([\-\.0-9a-zA-Z]+)@([\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
		var email_val = $('#email').val();
		if(emailregex.test(email_val)){
			$('#emailvalidation').hide();
		}
		else{
			$('#emailvalidation').show();
			$('#emailvalidation').html('Invalid Email');
			$('#emailvalidation').css('color','red');
			email_error = false;
			return false;
		}
	}


	$('#submitvalidation').click(function(){
		username_validation();
		email_validation();
 
		if(error == true && email_password == true){
		 return true;
		}else{
		 return false;
		}
	 });

})
