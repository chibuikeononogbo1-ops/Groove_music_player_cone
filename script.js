/// functional: search music by artist

/// select elements 

const searchInput = document.querySelector('#search')
const albumGrid = document.querySelector('.music-albums')

searchInput.addEventListenter('input', function(event){

    console.log(searchInput.value.length);

    //if the number of char search is upto and above 
    if (searchInput.value.length >= 3) {
        //console.log(searchInput.value);

        albumGrid.innerHTML = ` <div class="albums">
                    <div class="album-image"></div>
                    <p>@wizzy.com</p>
                    <span>Wizkid</span>
                    </div>`
    }
    
})