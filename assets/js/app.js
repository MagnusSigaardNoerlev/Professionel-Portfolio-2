// JS til portfolio.html
document.addEventListener("DOMContentLoaded", function () {
  const caseContainer = document.getElementById("caseContainer");
  const loadingDiv = document.getElementById("loading");

  if (caseContainer && loadingDiv) {
    fetch("https://api.magnusnoerlev.com/wp-json/wp/v2/posts")
      .then((response) => response.json())
      .then((posts) => {
        posts.forEach((post) => {
          const article = document.createElement("article");
          article.classList.add("caseStudy");

          const caseUrl = `casestudy.html?id=${post.id}`;

          article.onclick = () => (window.location.href = caseUrl);

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
          caseContainer.appendChild(hr);
        });

        loadingDiv.style.display = "none";
      })
      .catch((error) => {
        console.log("Error fetching posts:", error);
        loadingDiv.textContent = "Fejl ved indlæsning af data. Prøv igen senere.";
      });
  }
});

// JS til casestudy.html
document.addEventListener("DOMContentLoaded", function () {
  const stepsContainer = document.querySelector(".stepsButtons");
  const stepText = document.getElementById("stepDescription");
  const stepImage = document.getElementById("stepImage");

  const breadcrumbsElement = document.querySelector(".breadcrumbs");
  const titleElement = document.querySelector(".casestudyIntro h1");
  const introTextElement = document.querySelector(".casestudyIntro p");
  const codeButton = document.querySelector(".demo a:nth-of-type(1)");
  const demoButton = document.querySelector(".demo a:nth-of-type(2)");
  const liveWebsiteButton = document.querySelector(".demo a:nth-of-type(3)");

  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get('id');

  if (postId) {
    fetch(`https://api.magnusnoerlev.com/wp-json/wp/v2/posts/${postId}`)
      .then(response => response.json())
      .then(post => {
        if (post.acf) {
          breadcrumbsElement.innerHTML = `
            <h6><a href="./portfolio.html">PORTFOLIO</a></h6>
            <h6>></h6>
            <h6>${post.acf.breadcrumbs}</h6>
          `;

          titleElement.textContent = post.acf.h1_title;
          introTextElement.innerHTML = post.acf.intro_text.replace(/\n/g, '<br>');

          codeButton.href = post.acf.code_button_url;
          demoButton.href = post.acf.demo_button_url;

          if (post.acf.live_website_url) {
            liveWebsiteButton.href = post.acf.live_website_url;
            liveWebsiteButton.style.display = 'inline-block';
          } else {
            liveWebsiteButton.style.display = 'none';
          }

          let stepIndex = 1;
          while (post.acf[`step_${stepIndex}_title`]) {
            const stepTitle = post.acf[`step_${stepIndex}_title`];
            const stepDescription = post.acf[`step_${stepIndex}_description`];
            const stepImageUrl = post.acf[`step_${stepIndex}_image`];

            const button = document.createElement("button");
            button.textContent = `${stepIndex}. ${stepTitle}`;
            button.onclick = () => {
              stepText.innerText = stepDescription;
              stepImage.src = stepImageUrl;
            };
            stepsContainer.appendChild(button);

            if (stepIndex === 1) {
              stepText.innerText = stepDescription;
              stepImage.src = stepImageUrl;
            }

            stepIndex++;
          }
        } else {
          console.error('ACF felter mangler');
        }
      })
      .catch(error => console.error('Error i at fange casestudy:', error));
  }
});

const sliderTrack = document.querySelector('.slider-track');
const kompetencerContainer = document.querySelector('.kompetencer'); // Container-elementet
if (sliderTrack && kompetencerContainer) {
  const items = Array.from(sliderTrack.children);
  const itemWidth = items[0].offsetWidth + parseInt(getComputedStyle(items[0]).marginRight);
  const containerWidth = kompetencerContainer.offsetWidth;

  let translateXValue = 0;
  const speed = 0.5;

  // Klon kun de nødvendige elementer for at skabe en loop-effekt
  const itemsToClone = Math.ceil(containerWidth / itemWidth) + 1;
  for (let i = 0; i < itemsToClone; i++) {
    const clone = items[i % items.length].cloneNode(true);
    sliderTrack.appendChild(clone);
  }

  // Kontinuerlig karrusel-animation
  function animate() {
    translateXValue -= speed;
    if (Math.abs(translateXValue) >= items.length * itemWidth) {
      translateXValue = 0;
    }
    sliderTrack.style.transform = `translateX(${translateXValue}px)`;
    requestAnimationFrame(animate);
  }

  // Start animationen
  animate();
}


