function validate(){
    let name=document.getElementById('name').value
    let age=document.getElementById('age').value
 let number=document.getElementById('number').value
      let email=document.getElementById('email').value

    if(name==""){
        alert("please enter your name")
        document.getElementById('name').focus()
        return false
    }
    
    else if(age==""){
        alert("please enter your age")
        document.getElementById('age').focus()
        return false
    }

    else if(isNaN(age)){
        alert("please enter age in digits")
         document.getElementById('age').focus()
        return false
    }

    
    else if(number==""){
        alert("please enter your number")
        document.getElementById('number').focus()
        return false
    }

    else if(isNaN(number)){
        alert("please enter age in digits")
         document.getElementById('number').focus()
        return false
    }


    else if(email==""){
        alert("please enter your email")
        document.getElementById('email').focus()
        return false
    }
    
}