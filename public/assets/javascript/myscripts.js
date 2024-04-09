// CODE FOR MODALS
// const myModal = document.getElementById('myModal')
// const myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', () => {
//   myInput.focus()
// })

// TEST
console.log('Hello, Sachin!');

// Headless CMS
// const xhr = new XMLHttpRequest();
// xhr.open('GET', "../data/content.json")
// xhr.send();

// xhr.addEventListener('load', function(){
//   try {
//     console.log(this.responseText)
//   } catch (error) {
//     console.log('Error occured:', error);
//   }
// })


// ASYNC
// async function demoFunction () {
//   try {
//     const navHolder = document.getElementById('menu');

//     const temp = await fetch("../data/content.json")
//     const data = await temp.json();

//     data.mainNav.forEach(menuItem => {
//       let listItem = document.createElement('li');
//       listItem.innerHTML = `<a href="${menuItem.url}"> ${menuItem.text} </a>`
//       navHolder.appendChild(listItem);
//     })
//   } catch (error) {
//     console.log('error: ', error);
//   }
// }

// demoFunction();



// =======================================================
// ASYNC METHOD - BURGER MENU
async function demoFunction () {
  try {
    const navHolder = document.getElementById('menu');
    const temp = await fetch("../data/content.json")
    const data = await temp.json();

    data.mainNav.forEach(menuItem => {
      let listItem = document.createElement('li');
      // Use Font Awesome icons directly in the list item creation
      listItem.innerHTML = `<i class="fa-solid ${menuItem.icon}" style="color: #60626e;"> </i><a href="${menuItem.url}"> ${menuItem.text} </a>`;
      navHolder.appendChild(listItem);
    })
  } catch (error) {
    console.log('error: ', error);
  }
}

demoFunction();

// =======================================================
// FETCH METHOD - USER'S NAME
document.addEventListener("DOMContentLoaded", function() {
  // Fetch JSON data
  fetch('../data/content.json')
      .then(response => response.json())
      .then(data => {
          // Get the name value from JSON
          const name = data.name;

          // Select the <p> element then insert the "name" value beside it
          const userName = document.querySelector('div .nav-links li p');
          if (userName) {
            userName.textContent = name;
          }
      })
      .catch(error => console.error('error', error));
});

// =======================================================
// FETCH METHOD / FOREACH- UPPER CARDS
document.addEventListener("DOMContentLoaded", function() {
  // Fetch JSON data
  fetch('../data/content.json')
      .then(response => response.json())
      .then(data => {
          // Define an array of card titles
          const cardTitles = ['Unresolved', 'Overdue', 'Open', 'Hold'];
          
          // Iterate over the card titles
          cardTitles.forEach((title, index) => {
              // Get the corresponding value from JSON data
              const value = data[title.toLowerCase()]; // JSON keys are lowercase
              
              // Select the corresponding card text element and set its text content
              const cardTextElement = document.getElementById(`card-text${index + 1}`);
              if (cardTextElement) {
                  cardTextElement.textContent = value;
              }
          });
      })
      .catch(error => console.error('error', error));
});

// =======================================================

document.addEventListener("DOMContentLoaded", function() {
  // Fetch JSON data
  fetch('../data/content.json')
      .then(response => response.json())
      .then(data => {
          // Define an array of card titles
          const trendVal = ['resolved', 'received', 'avgFirstResp', 'avgResp', 'resWithSLA'];
          
          // Iterate over the card titles
          trendVal.forEach((title, index) => {
              // Get the corresponding value from JSON data
              const value = data[title]; 
              
              // Select the corresponding card text element and set its text content
              const trendValElement = document.getElementById(`trend-val-${index + 1}`);
              if (trendValElement) {
                trendValElement.textContent = value;
              }
          });
      })
      .catch(error => console.error('error', error));
});
// =======================================================
// FETCH METHOD / FOREACH- LOWER LEFT CARDS
document.addEventListener("DOMContentLoaded", function() {
  // Fetch JSON data
  fetch('../data/content.json')
      .then(response => response.json())
      .then(data => {
          // Define an array of card titles
          const unresTix = ['waitingOnFeatReq', 'awaitingCustRep', 'awaitingDevFix', 'pending'];
          
          // Iterate over the card titles
          unresTix.forEach((title, index) => {
              // Get the corresponding value from JSON data
              const value = data[title]; 
              
              // Select the corresponding card text element and set its text content
              const unresTixElement = document.getElementById(`unres-tix-${index + 1}`);
              if (unresTixElement) {
                unresTixElement.textContent = value;
              }
          });
      })
      .catch(error => console.error('error', error));
});