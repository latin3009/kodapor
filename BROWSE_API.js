
// CREATE
// A new match


  // method: 'POST',

  // url: 'php/browse/all_users'
  // url: 'php/browse/persons'
  // url: 'php/browse/companys'

  // url: 'php/browse/assignments'
  // url: 'php/browse/jobrequests'


  // Example search: php/browse/persons
  requestData = {

    "tables": ["user_person", "user_company"],
    //"input": "streaming spotify",

    //
    "category": "Webbutveckling",
    "tags": [
      "JavaScript",
      "Angular.js",
      "Scrum",
      "FrontEnd",
      "Social Media"
    ],
    //"region": "Stockholm",

    //conditions
    "company_tax": 1,
    "experience": 5,  // Minimum experience. Less will show up in results but at lower priority.. 
    "active": 1,      // Search only active profiles. Default. If set to 0 will match all visible profiles.

    "amount": 2       // Number of result posts shown for each view. Set by the app. 
                      // Perhaps implement clickable tabs array [<< < 1 2 3 4 5 ... > >>]
  };

  // Example response:

  responseData = [
    {
      "username": "AndersAhlin",
      "firstname": "Anders",
      "lastname": "Ahlin",
      "category":"Webbutveckling",
      "image": "php/imageRepo/profiles/AndersAhlin.jpg",
      "snippet": "Lorem ipsum...",
      "link": "www.andersahlinit.com",
      "location": "Huddinge"
    },
    {
      "username": "SvenGurra",
      "firstname": "Sven-Göran",
      "lastname": "Lindquist",
      "category":"Webbutveckling",
      "image": "php/imageRepo/profiles/SvenGurra.jpg",
      "snippet": "Lorem ipsum...",
      "link": "www.piratsvenne.com",
      "location": "Märsta"
    },
      // ...
  ];

// No changes to database..
// UPDATE
// DELETE

