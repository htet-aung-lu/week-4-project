const searchInput = document.querySelector("#search-input");
const allProductName = document.querySelectorAll(".name");
searchInput.addEventListener("keyup",(event) => {
    const searchQuery = event.target.value.toLowerCase();
    for(let i= 0;i<allProductName.length;i++){
        const currentProduct = allProductName[i].textContent.toLowerCase();
        if(currentProduct.includes(searchQuery)){
            allProductName[i].style.display = 'block'
        }else{
            allProductName[i].style.display = 'none'
        }
    }
})