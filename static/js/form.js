// const clicked = str => {
//     console.log(str)
//     return str;
// }
clickedElement = ""
products = document.querySelectorAll('.product')
document.querySelectorAll('.product').forEach(form=>{
    form.addEventListener('submit',e=>{
        e.preventDefault()
        var form = e.target
        var formData = new FormData(form);
        // console.log(formData.get("id"))
        var data = [];
        for ( var i = 0; i < form.elements.length; i++ ) {
            var name = form.elements[i].name;
            if (name === clickedElement || formData.get(name) != null ){
                data.push(name + "=" + encodeURIComponent(formData.get(name)));                
            } 
        }
        var queryString = data.join("&");
        // console.log(queryString)
        // console.log(e.target.action)
        const xhttp = new XMLHttpRequest
        xhttp.open("POST", e.target.action);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send(queryString); 
        
        /********************************************** */
        if ( (clickedElement === "love" && window.location.href.endsWith("/accounts/wishes") ) || (clickedElement === "addToCart" && window.location.href.endsWith("/accounts/cart") ) ) {
            e.target.remove(e.target)
        }

        if (clickedElement === "love"){
            el = document.querySelector(`#${e.target.getAttribute("id")} #${clickedElement}`)
            svg = document.querySelector(`#${e.target.getAttribute("id")} #${clickedElement} svg`)
            if (svg.classList.contains('bi-heart-fill')){
                newElement=`
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path>
                </svg>
            `
            }else if (svg.classList.contains('bi-heart')){
                newElement = `
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"></path>
                </svg>
            `
            }
            el.innerHTML = (newElement)
        }else if(clickedElement === "addToCart") {
            el = document.querySelector(`#${e.target.getAttribute("id")} #${clickedElement}`)
            svg = document.querySelector(`#${e.target.getAttribute("id")} #${clickedElement} svg`)
            if (svg.classList.contains('bi-cart-x-fill')){
                newElement=`
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
                    <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                </svg>
            `
            }else if (svg.classList.contains('bi-cart-plus')){
                newElement = `
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart-x-fill" viewBox="0 0 16 16">
                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7.354 5.646 8.5 6.793l1.146-1.147a.5.5 0 0 1 .708.708L9.207 7.5l1.147 1.146a.5.5 0 0 1-.708.708L8.5 8.207 7.354 9.354a.5.5 0 1 1-.708-.708L7.793 7.5 6.646 6.354a.5.5 0 1 1 .708-.708z"/>
                </svg>
            `
            }
            el.innerHTML = (newElement)
        }
    })
})
