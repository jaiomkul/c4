async function apiCall(url) {
    try{
        let res = await fetch(url);
        let articles = await res.json();
        return articles;
        console.log("articles:", articles)
    } catch(error){
        console.log("error:", error)
    }

    //add api call logic here


}


function appendArticles(articles, main) {

    articles.forEach((element) => {
        let div = document.createElement("div")

        let img = document.createElement("img");
        img.src = element.urlToImage

        let h3 = document.createElement("h3");
        h3.innerHTML = element.title

        let p = document.createElement("p");
        p.innerHTML = element.content

        div.append(img,h3,p)

        div.onclick = function() {
            localStorage.setItem("search_term",JSON.stringify(element));
            window.location.href= "news.html";
        }

        main.append(div)
        
    });




    //add append logic here

}

export { apiCall, appendArticles }