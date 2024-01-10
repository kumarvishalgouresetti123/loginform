<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel = 'stylesheet' href = "style.css">
    <link rel="icon" type="image/x-icon" href="https://a-z-animals.com/media/2021/05/iStock-1420676204-1024x680.jpg">
    <title>Login form</title>
</head>
<body>
    <header>
        <div class = "logom"><img class ="logo" src="https://static.vecteezy.com/system/resources/previews/001/189/524/original/save-earth-png.png" alt="logo" width = "100px" height = "80px"></div>
        
    </header>
    <section class="main1">
        <img class="img1" src = "https://th.bing.com/th/id/OIP.BP3alrnCtGMLjEvyV7HBFAHaE7?rs=1&pid=ImgDetMain" alt ="img"  width = '500px' height = "500px" >
        <div class="center1">
            <h4 class = "h4">Our Precious Resource</h4>
            <h1 class = "h1">Water Management and Pollution <br>Control</h1>
            <p class = "p">Water is essential <abbr>to all life on Earth. Yet, pollution and mis-management have led to water sca</abbr>rcity<br>
                           and  environment<abbr>al damageWater is our planet's most precious resource,vital for all life. Howev</abbr>er,mi-<br>
                           smanagement  an<abbr>d pollution threaten its availability.Join us in exploring the critical issues of wa</abbr>ter<br>
                           scarcity, pollution,<abbr> and sustainable management. Discover how these challenges impact our da</abbr>ily lives<br>
                            and the environment,<abbr>and find ways to contribute to a healthier, more sustainable world.</abbr> </p>
            
                            <div class="btn1">
                                <button class="btn11" type = "button" onclick="signin()">Login</button>
                                <button class="btn12" type="button" onclick="signup()">Signup</button>
                            </div>
        </div>
        <!---------------------- login button ----------------------->
        
        <section class="form">
            <button class="into1" onclick="signup1()">&#10006</button>
            <h3 class="h3">sign up</h3>

            <h1 class ="formh1">New user</h1>

            
                <form onsubmit="return passwordinstruction()" action="submit.php" method="post">

                <lable for = "firstname"></lable>
                <input class="formn1" type="text" id="firstname" name="firstname" value="" placeholder="Enter Phone Number or Email id" title="Enter your name" required><br>

                <lable for="password"></lable>
                <input class="formn2" type="password" id="password" name="password"  placeholder="Enter Password" title="Enter your name" required><br>

                <span id="message" style="width:350px ;margin-top:-20px; color:red; background-color:transparent; text-align:start; margin-left:60px;" ></span>

                <button class="formn3" type="submit" value="sign in">Sign up</button>
            </form>
        </section>


        <section class="form1">
            <button class="into1"  onclick="signin1()">&#10006</button>
            <h3 class="h3">sign in</h3>
            <h1 class ="formh1">Existing user</h1>
            <form action ="/action_page.php">
                <lable for = "firstname"></lable>
                <input class="formn1" type="text" id="firstname" name="firstname" value="" placeholder="Enter Phone Number or Email id" title="enter your account name" required><br>
                <lable for="password"></lable>
                <input class="formn2" type="text" id="password1" name="password" value="" placeholder="Enter Password"  title="please enter your password" required><br>
                <button class = "forgetp" onclick="forgetp()">forget password</button><br>
                <button class="formn33" type="">Sign in</button>
            </form>
        </section>
       
        <!---------------------------------forget password------------------------------------------>
        <section class="forgetpasswordf">
            <button class="into2" onclick="forgetpr()">&#10006</button>
            <h1>Recover Password</h1>
            <form onsubmit="return errorfinding()" action="submit.php" method="post">
            <lable for="phonenumber"></lable>
            <input type="text" id="phonenumber" name="phonenumber" value="" placeholder="Enter account Phone number or Email" required><br>
            <span id = "message1" style="color:red; background-color:transparent; width:250px; margin-left:40px; margin-top:-20px; "></span>
            <lable for="enterotp"></lable>
            <input  style ="margin-left:50px;" type="text" id="EnterOTP" name="EnterOTP" value="" placeholder="Enter OTP" required>
            <button class="otp" type="submit" onclick="Enter()">Send OTP</button>
            </form>
        </section>        
        
    </section>
    <script  src="varma.js"></script>
</body>
</html>

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
header{
    display:flex;
    justify-content:space-between;
    background-color:#f0f0f0;
    box-shadow:0 0 4px 0 rgba(0, 0, 0 ,0.2);
    align-items:center;
}
.logom{
    display:flex;
    align-items:center;
}
.logon{
    font-size:30px;
    margin-right:-10px;
    top :30px;
}

.menu{
    font-size:25px;
    display:none;
    cursor:pointer;
    margin-right:20px;
}
.into{
    font-size:25px;
    cursor:pointer;
    display:none;
}
.navbar{
    display:flex;
    margin-right:20px;
    align-items:center;
    cursor:pointer;
}
.navbar ul li a::after{
    content:"";
    width:0;
    margin:0;
    height:2px;
    background-color:black;
    transition:0.5s;
    display:block;
}
.navbar1 ul li a:hover::after{
    width:100%;
}
.navbar{
  display:none;
}
.navbar1 ul { 
    display:flex;
    list-style-type:none;
}
nav ul li{
    margin-right:28px;
    text-transform:uppercase;
}
.menubar{
    display:none;
}
.navbar1 ul li:hover .menubar{
    display:block;
    position:absolute;
    background-color:black;
    color:white;
    margin-top:2px;
}
.navbar1 ul li:hover .menubar ul{
    display:block;
    padding:15px 20px;
}
.navbar1 ul li:hover .menubar ul li{
    line-height:30px;
    border-bottom:2px solid white;
}
.btn{
    width:51px;
    height:24px;
    border-radius:60px;
    border:0;
    outline:0;
    background-color:rgba(0,0,0,00.2);
}
span{
    width:19px;
    height:19px;
    background-color:white;
    display:block;
    margin-left:3px;
    border-radius:50%;
    cursor:pointer;
}
@media screen and (max-width:768px){
    .menu{
        display:block;
        border:1px solid black;
        border-radius:4px;
        padding:0 5px;
    }
    .btn{
        position:absolute;
        bottom:10px;
        right:20px;
    }
    .btn11:hover{
       background-color:black;
       color:white;
    }
    .into{
        display:block;
        position:absolute;
        left:20px;
        top:30px;
    }
    .navbar{
        position:absolute;
        right:-100%;
        width:50%;
        height:100%;
        top:0;
        align-items:center;
        flex-direction:column;
        justify-content:center;
        background-color:grey;
        transition:right 0.5s;
        cursor:pointer;
    }
    .navbar.open{
        right:0;
    }
    .navbar ul{
        flex-direction:column;
        line-height:20px;
        align-items:center;
    }
    .navbar ul li{
        margin-top:70px;
    }
    .navbar ul li a::after{
        content :attr(data-name);
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%) scale(0);
        z-index : -1;
        letter-spacing:20px;
        font-size:50px ;
        transition:4s ease letter-spacing;
        display:none;
    }
    .navbar ul li:hover a::after{
        transform:translate(-50%,-50%) scale(1);
        letter-spacing:initial;
    }
    .navbar1 ul li:hover .menubar{
        display:block;
        position:absolute;
        background-color:black;
        color:white;
        margin-top:-2px;
    }
    .navbar1 ul li:hover .menubar ul li{
        line-height:15px;
        border-bottom:2px solid white;
        margin-top:13px;
    }
    .img1{
        border-radius:0;
    }
    .center1{
        content: " ";
        position:absolute;
        top:65%;
        left:50%;
        transform:translate(-50%,-50%);
        width:100%
    }
    abbr{
        color:white;
    }
}
.main1{
    display:flex;
    justify-content:space-around;
    margin-top:80px;
    align-items:center;
}
.img1{
 border-radius:12% 88% 39% 61% / 78% 77% 23% 22%   ;
}
.center1{
   line-height:20px;
}
.h4{
    line-height:50px;
    font-size:25px;
}
.h1{
    line-height:50px;
    font-size:40px;
}
.p{
    margin-top:20px;
    line-height:25px;
}
.btn1{
    display:flex;
}
.btn11{
    padding:8px 20px;
    margin-right:10px;
    border-radius:5px;
    background-color:transparent;
    font-size:16px;
    cursor:pointer;
    transition:0.6s;
}
.btn11:hover{
    background-color:black;
    color:white;
}
.btn12{
    padding:8px 20px;
    border-radius:5px;
    background-color:black;
    color:white;
    font-size:16px;
    border:0;
    cursor:pointer;
    transition:0.5s;
}
.btn12:hover{
    background-color:white;
    color:black;
    border:2px solid black;
}


/*-------------------------- sign up button --------------------------------*/
.form{
    content:"";
    top:50%;
    left: 50%;
    position:absolute;
    transform:translate(-50%,-50%);
    
}
.form{
    display:none;
    text-align:center;
    width:400px;
    height:400px;
    background-color:#f0f0f0;
    box-shadow:0 4px 8px rgba(0,0,0,0.2);
    
    

}
.into1{
    position:absolute;
    right:10px;
    top:7px;
    border:0;
    font-size:20px;
    cursor:pointer;
    color:rgba(74, 68, 68, 0.689);
    transition:0.s;
}
.h3{
    padding-top:40px;
}
.formh1{
    font-size:33px;
    margin-top:10px;
}
.formn1{
 margin:30px 20px;
 width:280px;
 padding:7px;
 border-radius:4px;
 border:0;
}
.formn2{
 margin-bottom:20px;
 width:280px;
 padding:7px;
 border-radius:4px;
 border:0;
}
.formn3{
    font-size:15px;
    background-color:rgba(42, 34, 34, 0.952);
    color:white;
    padding:5px 10px;
    border-radius:3px;
    margin-top:57px;
    cursor:pointer;
}
.sign{
    display:block;
}

.form1{
    content:"";
    top:50%;
    left: 50%;
    position:absolute;
    transform:translate(-50%,-50%);
}
.form1{
    display:none;
    text-align:center;
   width:400px;
   height:400px;
   align-items:center;
    background-color:#f0f0f0;
    box-shadow:0 4px 8px rgba(0,0,0,0.2);
    
}
.sign1{
    display:block;
    transition:0.5s;
}
.forgetp{
    margin:15px 0;
    cursor:pointer;
    background-color:transparent;
    font-size:15px;
    border:0;
    font-weight:bold;
}
.formn33{
    font-size:15px;
    background-color:rgba(42, 34, 34, 0.952);
    color:white;
    padding:5px 10px;
    border-radius:3px;
    margin-top:20px;
    cursor:pointer;
}

/*-------------------------------forget password------------------------------------*/

.forgetpasswordf{
    content:'';
    top:50%;
    left:50%;
    position:absolute;
    transform:translate(-50%,-50%);
}
.forgetpasswordf{
    display:none;
    background-color:#f0f0f0;
    box-shadow:0 4px 8px rgba(0, 0, 0, 0.2);
    text-align:center;
    width:350px;
    height:350px;
    padding:70px 0;
    line-height:50px;
}
#phonenumber{

width:250px;
padding:7px;
border-radius:4px;
border:0;
}
#EnterOTP{
    width:250px;
padding:7px;
border-radius:4px;
border:0;
margin-left:26px;
display:none;
}
.otp{
font-size:15px;
background-color:rgba(42, 34, 34, 0.952);
color:white;
padding:5px 10px;
border-radius:3px;
cursor:pointer;
width:250px;
margin-top:50px;
}
.into2{
position:absolute;
right:10px;
top:7px;
border:0;
font-size:20px;
cursor:pointer;
color:rgba(74, 68, 68, 0.689);
transition:all 0.2s;
}
.forgetpss{
    display:block;
    transition:all 0.2s;
}
.enterotp{
    display:block;
}

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
