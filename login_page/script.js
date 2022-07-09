function logSub(){
  var readname = document.getElementById('name').value
  var readpassword = document.getElementById('password').value
  if (readname.length >=1){
    if (readpassword.length >=5){
      console.log(readname,readpassword);
      document.getElementById('suc').innerHTML='<h3> sucessfull log in ! </h3>'
    }else{alert('enter the password length more the 5')
    }
  }else{alert('enter the name')}
}

function submetdata(){
  var readname = document.getElementById('name').value
  var readpassword = document.getElementById('password').value
  var readpassword2 = document.getElementById('password2').value
  var age = document.getElementById('age').value
  var gemder = document.getElementById('gender').value

  if (readname.length >=1 && age.length >=1 && gemder.length>=1){
    if (readpassword.length >=5){
      console.log(readname,readpassword);
      document.getElementById('suc').innerHTML='<h3>sucessfull created a/c </h3>'
    }else{alert('enter the password length more the 5')}
    if (readpassword != readpassword2){alert('you password is not match')}

  }else{alert('fill in the blank!!')}
}