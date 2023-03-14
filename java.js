// fetch('https://api.github.com/users/ChrisvanHvA')
// 		.then(response => response.json()) //Converting the response to a JSON object
// 		.then( data => document.body.append())
// 		.catch( error => console.error(error));

       var username = document.getElementById('username');
       var bio = document.getElementById('bio');
       var followers = document.getElementById('followers');
       var following = document.getElementById('following');
       var pfpic = document.getElementById('pfpic');
       var date = document.getElementById('date');
       var email = document.getElementById('email');
       var work = document.getElementById('work');
       var github = document.getElementById('github');
function fetchInfo() {

    fetch('https://api.github.com/users/ChrisvanHvA')
      .then((response) => response.json())
      .then(function (data) {

        console.log(data);
  
       date.textContent = "on Github since " + data.created_at;
     email.textContent = "email: " + data.email;
work.textContent = "Employed at " + data.company;
github.textContent = "Github: " + data.login;
github.setAttribute('href', data.html_url);

       
        pfpic.src= data.avatar_url;
        username.textContent = data.name;
       bio.textContent = data.bio;
     followers.textContent = "followers:" + data.followers;
     following.textContent = "following:" + data.following;



      }).catch(function (err) {
        // voor foutjes
        console.warn('oepsie woepsie, er is iets stukkie wukkie.', err);
   
      })}

      fetchInfo();

