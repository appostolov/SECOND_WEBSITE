/**
 * @author Petar
 */
function validate_properties(a,b,c,d){
	var num=/^[0-9]+$/;
	var praz="";
	var a_check = true;
	var b_check = true;
	var c_check = true;
	var d_check = true;
	
	if(a.value.match(num)||a.value==praz){
		a_check = true;
	}else a_check = false;
	
	if(b.value.match(num)||b.value==praz){
		b_check = true;
	}else b_check = false;
	
	if(c.value.match(num)||c.value==praz){
		c_check = true;
	}else c_check = false;
	
	if(d.value.match(num)||d.value==praz){
		d_check = true;
	}else d_check = false;
	
	if(a_check == true && b_check == true && c_check == true && d_check == true){
		if(parseInt(a.value)>parseInt(b.value)||parseInt(c.value)>parseInt(d.value)){
		alert("Value 'To' has to be more than 'From'");
		}
	}else alert("Only numbers");
				
}


