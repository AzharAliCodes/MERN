// const ACCESS_TOKEN = "rb5Wcel1i9ev7KQpqFucLTec1_wNTdWbeBOx0GeGgkc";
// let page = 1


// let inp = document.getElementById('in');

// // document.getElementById('btn').addEventListener('click',() => {
// //     let val = inp.value;
// //     console.log(val)
// // })

// // index.js
// document.addEventListener('DOMContentLoaded', () => {
//     let inp = document.getElementById('in');

//     document.getElementById('btn').addEventListener('click', () => {
//         let val = inp.value;
//         apik(val)
//         inp.value = ''
        
//     });
// });

// async function apik(val) {
//     let resp = await fetch(`https://api.unsplash.com/search/photos?query=${val}&client_id=${ACCESS_TOKEN}&page=${page}`) 
//     let jss = await resp.json()
//     if(jss.results.length < 1){
//        document.getElementsByClassName('card-container')[0].innerHTML = `<h2>Not Found</h2>`
//     }else{
//         findimg(jss);
//     }
// }
//  function findimg(jss){
//     jss.results.map((data) => {
//         let div = document.createElement('div');
//         // div.setAttribute('class','card-header')
//         div.innerHTML = `<div class="card-header">
//         <img src="${data.user.profile_image.large}" alt="Profile" class="profile-pic">
//         <span class="name">${data.user.name}</span>
//       </div>
//       <img src="${data.urls.regular}" alt="Buzz" class="buzz-img">
//       <p class="description">${data.alt_description}</p>
//     </div>`
//     document.getElementsByClassName('card-container')[0].appendChild(div)
//      document.getElementById('loadMoreBtn').style.display = 'block';

//     })
//  }

//  document.getElementById('loadMoreBtn').addEventListener('click',() => {
//         page = 2 
//         apik(val)
//  })


const ACCESS_TOKEN = "rb5Wcel1i9ev7KQpqFucLTec1_wNTdWbeBOx0GeGgkc";
let page = 1;
let currentSearchQuery = '';

const inp = document.getElementById('in'); 
const searchButton = document.getElementById('btn'); 
const loadMoreButton = document.getElementById('loadMoreBtn'); 
const cardContainer = document.getElementsByClassName('card-container')[0]; 


document.addEventListener('DOMContentLoaded', () => {
    searchButton.addEventListener('click', () => {
        currentSearchQuery = inp.value; 
        page = 1;
        cardContainer.innerHTML = ''; 
        apik(currentSearchQuery); 
        inp.value = ''; 
        loadMoreButton.style.display = 'none'; 
    });
});

async function apik(query) { 
    if (!query) return; 
    try {
        let resp = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${ACCESS_TOKEN}&page=${page}`);
        if (!resp.ok) { 
            throw new Error(`HTTP error! status: ${resp.status}`);
        }
        let jss = await resp.json();

        if (jss.results.length < 1 && page === 1) { 
            cardContainer.innerHTML = `<h2>No results found for "${query}"</h2>`;
            loadMoreButton.style.display = 'none'; 
        } else if (jss.results.length < 1 && page > 1) {
            loadMoreButton.style.display = 'none'; 
        } else {
            findimg(jss);
            
            if (jss.total_pages > page) {
                loadMoreButton.style.display = 'block';
            } else {
                loadMoreButton.style.display = 'none'; 
            }
        }
    } catch (error) {
        console.error("Error fetching images:", error);
        cardContainer.innerHTML = `<h2>Error fetching images. Please try again.</h2>`;
        loadMoreButton.style.display = 'none';
    }
}

function findimg(jss) {
    jss.results.forEach((data) => { 
        let div = document.createElement('div');
        div.classList.add('image-card'); 
        div.innerHTML = `
            <div class="card-header">
                <img src="${data.user.profile_image.large}" alt="Profile" class="profile-pic">
                <span class="name">${data.user.name}</span>
            </div>
            <img src="${data.urls.regular}" alt="${data.alt_description || 'Image'}" class="buzz-img">
            <p class="description">${data.alt_description || 'No description available.'}</p>
        `;
        cardContainer.appendChild(div);
    });
   
}


loadMoreButton.addEventListener('click', () => {
    page++; 
    apik(currentSearchQuery); 
});

console.log("HEllo"); 