// JS der henter casestudies fra min WordPress api (api.magnusnoerlev.com)
document.addEventListener("DOMContentLoaded", function () {
    fetch("https://api.magnusnoerlev.com/wp-json/wp/v2/posts")
        .then(response => response.json())
        .then(posts => {
            const caseContainer = document.getElementById("caseContainer");

            posts.forEach(post => {
                const article = document.createElement("article");
                article.classList.add("caseStudy"); 
                article.onclick = () => window.location.href = 'casestudy.html'; // Opdater URL her, hvis nødvendigt

                const caseInfo = document.createElement("div");
                caseInfo.classList.add("caseInfo");

                const kunde = document.createElement("p");
                kunde.innerHTML = `<span>Kunde:</span> ${post.acf.kunde}`;
                caseInfo.appendChild(kunde);

                const varighed = document.createElement("p");
                varighed.innerHTML = `<span>Varighed:</span> ${post.acf.varighed}`;
                caseInfo.appendChild(varighed);

                const projektType = document.createElement("p");
                projektType.innerHTML = `<span>Projekt type:</span> ${post.acf.projekt_type}`;
                caseInfo.appendChild(projektType);

                const rolle = document.createElement("p");
                rolle.innerHTML = `<span>Min rolle i projektet:</span> ${post.acf.min_rolle}`;
                caseInfo.appendChild(rolle);

                const caseImg = document.createElement("div");
                caseImg.classList.add("caseImg");

                const img = document.createElement("img");
                img.src = post.acf.billede.url;
                img.alt = post.title.rendered;

                caseImg.appendChild(img);

                article.appendChild(caseInfo);
                article.appendChild(caseImg);

                caseContainer.appendChild(article);

                const hr = document.createElement("hr");
                caseContainer.appendChild(article);
                caseContainer.appendChild(hr);

            });
        })
        .catch(error => console.log('Error fetching posts:', error));
});
