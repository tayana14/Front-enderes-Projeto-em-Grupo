//alerta cookies 

if (!localStorage.getItem("cookiesAccepted")) { 
    var cookieMessage = document.getElementById('cookie-notification');  
    var closeCookie = document.getElementById('cookie-notification-close');
    
    cookieMessage.style.display = 'block';  
    closeCookie.addEventListener("click", function(event) {  
      event.preventDefault();
      localStorage.setItem("cookiesAccepted", true);
      
      cookieMessage.style.display = 'none';
    });
  }

