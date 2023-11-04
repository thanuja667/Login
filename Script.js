
  const user = [
    { username: 'user1', password: 'pass1' },
    { username: 'user2', password: 'pass2' },
  ];

document.getElementById('login-form').addEventListener('submit',function(e){
e.preventDefault();


  const username = document.getElementById('login-user').value;
    const password = document.getElementById('login-password').value;

const users =user.find(u => u.username === username &&  u.password === password);
if(users)
{
document.getElementById('login-status').textContent='Login Successful!'
}
else
{
document.getElementById('login-status').textContent='Invalid credentials *!!!'
}



});
document.getElementById('reg-form').addEventListener('submit',function(e){e.preventDefault();
const regUsername = document.getElementById('reg-user').value;
 const regPassword = document.getElementById('reg-password').value;
  if (regUsername === '' || regPassword === ''){
  document.getElementById('reg-status').textContent='Please fill in both fields!'}
else
{



user.push({username: regUsername,password:regPassword})
document.getElementById('reg-status').textContent='Regstration successful'

}


)};

