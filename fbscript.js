$(document).ready(function(){
    $('#signup-form').validate({
        rules:{
            fname:{
                required:true,
                minlength:4
                
            },
            sname:{
                required:true,
                
            },
            gmail:{
                required:true,
                email:true
            },
            password:{
                required:true,
                minlength:6
            },
            
            Day:{
                required:true
            },
            junu:{
                required:true
            },
            month:{
                required:true
            },
            year:{
                required:true
            }
        },
        messages:{
           
            password:{
                required:"enter password",
                minlength:"enter 6 characters"
            },
            fname:{
                required:"enter first name",
                minlength:"minimum enter 4characters"
            },
            junu:{
                required:"select gender...    "
            }
        }
    })
})