const ui = document.getElementById('searchbar');

// <div class="not-found">User not found</div>

// const btn = document.getElementsByClassName('btn')

// btn.addEventListener('click', () => {
//     const inputValue = document.getElementById('searchInput').value;
// })

document.getElementById('btn').addEventListener('click', () =>{
    document.getElementsByClassName('profile-card')[0].innerHTML= '<div class="loader"></div>'
    let sb = ui.value;
    ui.value = ''
    finduser(sb)
    
})


async function finduser(sb) {
    let res = await fetch(`https://api.github.com/users/${sb}`)
    let js = await res.json();
    mbk(js)
}

function mbk({avatar_url,
    name,
    bio,
    followers,
    following,
    public_repos,
    html_url
}){ if (!bio){
    bio = ""
}
    if (!avatar_url){
        document.getElementsByClassName('profile-card')[0].innerHTML=`<div class="not-found">User not found</div>`
    }else{
        document.getElementsByClassName('profile-card')[0].innerHTML= `<div class="left">
      <img src="${avatar_url}" alt="Profile Picture">
      <h2>${name}</h2>
      <p>${bio}</p>
    </div>
    <div class="right">
      <div class="stats">
        <div>
          <h4>Followers</h4>
          <p>${followers}</p>
        </div>
        <div>
          <h4>Following</h4>
          <p>${following}</p>
        </div>
        <div>
          <h4>Repository</h4>
          <p>${public_repos}</p>
        </div>
      </div>
      <a href="${html_url}" target="_blank" class="btn">View Profile</a>
    </div>`
    }

}