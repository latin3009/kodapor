
// CREATE profile 

  // method: 'POST',

  // url: 'php/profile_person
  requestData = {

      "usename": "KalleAndersson",
      "active": "1",               // Boolean. Profile set to active  (will get matches and news and get default priority in searches)   
      "visible": "1",              // Profile should automatically be set to visible when activated.      
      "content": "lorem ipsum...", // Long text    
      "snippet": "lorem ipsum...", // Short text. Max length: 255 characters  
      "experience": "3",
  
      // Only for persons
      "cv": "" ,  // binary data            
      "image": "", // binary data
      
      "meta" : {
        "category_user_map": "Webbutveckling",
        "tag_user_map": ["JavaScript","Angular.js","Scrum","FrontEnd","Social Media"]
      }
  };

  // url: "/profile_company"
  requestData = {
 
      "username": "Microsoft-Agda",
      "active": "1",
      "visible": "1",
      "content": "lorem ipsum...",  // Long text    
      "snippet": "lorem ipsum...",  // Short text. Max length: 255 characters       
      "experience": "34",           // For companies this means "years in business"
      
      
      // Only for companies
      "size": "3000",     // Number of employees, nationwide or worldwide            
      "image_logo": "" ,  // binary data,
      "image_view": "" ,  // binary data,
      "image_contact": "", // binary data,

      "meta": {
        "category_user_map": "Systemutveckling",
        "tag_user_map": ["C++","C#","Windows8","MSSql","Silverlight",".NET","VB"]
      }
  };

// READ profile
  
  // method: 'GET',
  // url: "/profile_person/" + username
  // url: "/profile_company/" + username

  // No data attached. Example: 

  $http({
    url: 'php/profile_person/' + username,
    method: 'GET',
    headers : {
      'Content-Type' : 'application/json; charset=UTF-8'
    }
  }).success(function(data) {
    // Handle incoming data
  });

  // Response example:

  responseData = {

  };

// UPDATE profile

  // method: 'PATCH',
  // url:

  requestData = {
    "username": "KalleAndersson",
    "cv": "", // pdf attached by user
    "content": "Edited my profile text..",
    "image": "", // profile picture attached by user
    "visible": "1" // profile ready to show
  };

// DELETE profile

  // method: 'DELETE',
  // url: 'php/profile/'

