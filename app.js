
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbarId");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


// phone number form
function sendNum(){
  
    let phoneNumber = document.getElementById('phone').value;
    let clientName = document.getElementById('name').value;
    
    let body = "Full Name : "+ clientName +" <br> Phone Number: "+ phoneNumber;  
    Email.send({
    SecureToken : "c2f962d2-a64a-4525-83de-56b8cbf20c6e",
    To : 'propgrowofficial@gmail.com',
    From :'amitmaggu591@gmail.com',
    Subject : "Paras Arcade 114",
    Body : body
    }).then(
    message => window.location.href='./thankyou.html');
    }



    // Download Brouchure Function
    function contactUs(){
  
        let fName = document.getElementById('fName').value;
        let lName = document.getElementById('lName').value;
        let contactNum = document.getElementById('contactNum').value;
        let email = document.getElementById('email').value;
        
        let body = "Full Name:" + fName +" last Name:"+lName + "<br> Phone Number " + contactNum + " <br> Email "+email;  
        Email.send({
        SecureToken : "c2f962d2-a64a-4525-83de-56b8cbf20c6e",
        To : 'propgrowofficial@gmail.com',
        From :'amitmaggu591@gmail.com',
        Subject : "Paras SCO",
        Body : body
        }).then(
            message => window.location.href='./thankyou.html');
        }
    
// Alert Message function()
function message(){
    const name = document.getElementById('name')
    const phone = document.getElementById('phone')
    const success = document.getElementById('successMsg');
    const danger = document.getElementById('alertId');

    if(name.value ==='' || phone.value ===''){
        danger.style.display='block';
    }
    else {
        setTimeout(() => {
            name.value = '';
            phone.value = '';
        }, 2000);
        success.style.display='block';
        console.log(name.value);
        console.log(phone.value);
        // window.location.href='./thankyou.html';
    }
    
    setTimeout(() => {
        danger.style.display='none';
        success.style.display='none';
    }, 4000);
    
}