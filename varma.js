var bar = document.querySelector(".navbar")
        function myFunction(){
            bar.classList.toggle('open')
        }
        function intoFunction(){
            bar.classList.remove('open')
        }

        //----------------------sign up-----------------------------

        var sign1 = document.querySelector(".form")
        function signup(){
            sign1.classList.toggle('sign')
            sign1.style.margintop = "10px";
           
        }
        function signup1(){
            sign1.classList.remove('sign');
           
        }

       function passwordinstruction(){
         var password = document.getElementById("password").value;
         var error = " "

         if(!/[A-Z]/.test(password)){
            error = error + "The Password must contain atleast one uppercase<br>";
         }
         if(!/[a-z]/.test(password)){
            error = error + "The password must contain alteast one lowercase<br>";
         }
         if(!/\d/.test(password)){
            error = error + "The Password must contain atleast one digit<br>";
         }
         if(!/[#@$%^&*()=!]/.test(password)){
            error = error + "The password must atlest one special character<br>"
         }
         if(password.length>8){
            error = error + "The password must contain 8 charcter<br>"
         }
         var message = document.getElementById("message")
         if(error !== " "){
            message.innerHTML = error;
            return false;
         }else{
            message.innerHTML = " ";
            return true;
         }
       }
        //-----------------------sign in------------------------------

        var sign2 = document.querySelector(".form1")
        function signin(){
            sign2.classList.toggle('sign1')
        }
        function signin1(){
            sign2.classList.remove('sign1')
           
        }
        //---------------------forget password -------------------------

        var forgetpassword=document.querySelector(".forgetpasswordf")
        function forgetp(){
            forgetpassword.classList.toggle("forgetpss")
            sign2.style.display="none";
            sign2.style.transition = "all 0.2s";
        }
        function forgetpr(){
            forgetpassword.classList.remove("forgetpss")
        }
        //----------------------------------------enter our 10 digits number---------------------------------
        
        function Enter(){
            var verifynumber = document.querySelector("#phonenumber").value;
            var message1 = document.querySelector("#message1");
            var changename = document. querySelector("#EnterOTP")
            var verifyotp = document.querySelector(".otp")
             
            if(!/\d/.test(verifynumber)){
                message1.textContent = " Enter your 10 digits Phone number";
                return false;
            }
            else if(verifynumber.length<10){
               message1.textContent=" Phone Number is less then 10 digits  ";
               return flase;
            }
            else if(verifynumber.length>10){
                message1.textContent =  "Phone Number is greater then 10 digits";
                return false;
            } else{
                message1.textContent = " ";
                if (changename.style.display == "none") {
                    changename.style.display = "block";
                    verifyotp.textContent = "Enter OTP";
            }else if(changename.length === 5){
                alert("login sucessfullay")
            }else {
                    changename.style.display = "none";
                    verifyotp.textContent = "Sent OTP";

           }
            
           return true;
          
            }
    }      