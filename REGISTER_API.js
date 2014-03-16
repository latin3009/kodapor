

// CREATE user_person

  // method: 'POST',
  // url: 'php/user_person/' + username
  // url: 'php/user_company/' + username

  // Examples:

  requestData = {
    // Everything mandatory in this table.
    // How to do with location - region and address??
    "firstname": "Kalle",
    "lastname": "Andersson",
    "birthdate": "19860714-1234",     // Should we demand full or date only?
    "company_tax": "1",               // = true  "Godkänd för F-skatt"
    "company_name": "Kalles IT-Byrå",
    "phone": "070912223",
    "email": "kalle@gmail.com",
    "password": "QWdfpe34F2"
 
  };
   
  requestData = {
    // All mandatory
    // More needed? Company description, size etc is in profile..
    "name": "Microsoft",
    "contact_person": "Agda Eriksson",
    "phone": "0108888888",
    "email": "agda@microsoft.se",
    "password": "dDTYJ5p4qx"
  };


// READ user account data

  // method: 'GET'
  // url: 'php/user_person/' + username,
  // url: 'php/user_company/' + username, 

  // No attached data, just send the request. Example given in RegCtrl.js


// UPDATE user account and data  

  // If changing only part of user data, use PATCH:

  // method: 'PATCH',
  // url:

  // Attached data, examples:

  // Change password:
  requestData = {
    "username": "KalleAndersson",
    "password": "SgFTG463FH"
  };

  // Got married upwards, went to the name-change-bureau and afforded a server of his own:
  requestData = {
    "username": "KalleAndersson",
    "email": "carl@wallin-andersen.se",
    "firstname": "Carl",
    "lastname": "von Wallin-Andersén",
  };


// If changing all entries, use PUT:

  // method: 'PUT',
  // url: 'php/user_person'
  // url: 'php/user_company'

  // Attached data: see above, same entries as for POST
  // This is easiest to use when user changes some values, since JavaScript then doesn't need to
  // determine which entries has been changed, just send the complete form if previously loaded
  // with the users old data.





// DELETE user account data

  // method: 'DELETE',
  // url: 'php/user'
