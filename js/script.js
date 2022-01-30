
let name = document.querySelector('.name');
let password = document.querySelector('.password');
let login = document.querySelector('.login');





const fun = async ()=>{

    if(name.value ==''){
        name.style.border = '2px solid red'
        
        // console.log(123);
    }
       else{
        
        name.style.border = '2px solid green'
       
    }
      
        
if (password.value == '') {
    password.style.border = '2px solid red'
}else{
    password.style.border = '2px solid green'
}
 

if (name.value == 'sartaj') {
    // console.log('sartaj');
}
else{
    alert('username is wrong!')
    name.style.border = '2px solid red '
}

if(password.value == 123 && name.value == 'sartaj'){
    window.open('game.html')
    // console.log('succes');
    
    const Save = (key,value)=>{
        return localStorage.setItem(key,value)
      }
      
    const Get = (key) =>{
        return  localStorage.getItem(key)
      }
    
    
      Save('name',name.value)
      Save('password',password.value)
      let username  =  Get('name');
      let exp  =  Get('password');
      console.log('username is ' + username);
      console.log('password is ' + exp);
    
    
}else{
    alert('password is wrong!')
    password.style.border = '2px solid red '
    
    
}






}

