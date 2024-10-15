document.addEventListener("DOMContentLoaded", function () {
    fetch("https://api.magnusnoerlev.com/wp-json/wp/v2/posts")
        .then(response => response.json())
        .then(posts => {
            const caseContainer = document.getElementById("caseContainer");

            posts.forEach(post => {
                const article = document.createElement("article");
                article.classList.add("caseStudy"); 

                let caseUrl;
                if (post.id === 108) {
                    caseUrl = 'casestudy.html';
                } else if (post.id === 112) {
                    caseUrl = 'casestudy2.html';
                } else if (post.id === 132){
                    caseUrl = 'casestudy3.html';
                }

                article.onclick = () => window.location.href = caseUrl;

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
        })
        .catch(error => console.log('Error fetching posts:', error));
});


const stepContents = {
    casestudy1: {
      1: {
        description: "Hadsund Karate Skole har en hjemmeside, der ikke fungerer optimalt, hvilket hindrer deres evne til at informere deres medlemmer og række ud til potentielle nye. Med vores ekspertise kan vi bekræfte, at der er flere ting, der skal gøres for at gøre sitet optimalt. Da siden generelt er rodet og uorganiseret, er det svært for brugerne at navigere og finde den ønskede information. Dette udgør et betydeligt problem for klubben, da de risikerer at miste medlemmer, både nuværende og nye.",
        image: "./assets/img/step1.png", 
      },
      2: {
        description: "Vi er begyndt med at segmentere de potentielle brugere af Hadsund Karate Skole. Vi har gjort dette ved at identificere nogle demografiske og geografiske brugergrupper, som vi mener kunne være potentielle brugere af Hadsund Karate Skole. For at starte har vi taget et udvalg af ligheder inden for det demografiske område og relateret det til personer involveret i karate eller som har en form for tilknytning til karate i Hadsund.",
        image: "./assets/img/step2.png",
      },
      3: {
        description: `Vi har udarbejdet en interviewguide, hvor vi har formuleret en hypotese om, at folks primære årsag til at dyrke karate er at være aktive, få afløb for noget damp og kunne forsvare sig selv gennem selvforsvar. Derfor har vi udarbejdet nogle spørgsmål, der vil give os indsigt i, om dette rent faktisk er tilfældet. Efter dette blev gjort, gik hver af os ud for at finde nogen med en eller anden forbindelse til kampsport, som vi derefter kunne interviewe.

Årsagen til, at vi gør dette, er for at samle viden om, hvad der motiverer folk til at begynde at dyrke kampsport, med det formål at strukturere informationsarkitekturen i Hadsund Karate Klub. Vores forskningsspørgsmål er derfor, hvad der motiverer folk til at begynde at dyrke kampsport, og hvilken information de har brug for, før de træffer beslutningen om at starte.
    
Efter hver af os har optaget vores interviews, har vi derefter individuelt transskriberet vores interviews. 
Vi har derefter udført en tematisk analyse af de transskriberede interviews, hvor vi har identificeret forskellige temaer, der gentager sig i et eller flere af vores interviews.`,
        image: "./assets/img/step3.png",
      },
      4: {
        description: `Efter vores interview og den tematiske analyse deraf er vi klar til at kortlægge indholdet på klubbens nuværende hjemmeside. Dette gør vi ved hjælp af en indholdsoversigt. Vi kortlægger alt indhold, der er på deres hjemmeside og deres sociale medieplatforme; Facebook og Instagram.

Vi sorterer og prioriterer indholdet baseret på, hvad brugerne vil finde relevant. For eksempel er karateetikette særligt vigtigt, mens navnene på dem i bestyrelsen er mindre afgørende, så de får forskellige prioriteter. Når noget gives en lavere prioritet, betyder det ikke, at det ikke vil blive inkluderet på en anden side; det skal bare ikke være øverst på en side eller først i navigeringen.`,
        image: "./assets/img/step4.png",
      },
      5: {
        description: `Når vi har en færdiggjort vores content inventory og alle vores egne idéer, sætter vi alt det indsamlede indhold på post-it sedler i et figjam. Dette indhold kategoriseres og visualiseres ved hjælp af Affinity Diagrammet for at give et overblik over naturlige forbindelser og grupperinger.

Efter opsætningen af vores affinity diagram analyserer vi vores data og identificerer styrker og svagheder. Baseret på dette træffer vi beslutninger og justeringer, der guider os mod vores forskellige kategorier og tilføjelser til sitet.

Da dette er en iterativ proces, implementerer vi konstant forskellige forbedringer. Disse forbedringer var afgørende for yderligere justeringer og for at sikre, at Affinity Diagrammet effektivt opfylder vores behov.`,
        image: "./assets/img/step5.png",
      },
      6: {
        description: `Under processen med at skabe vores content sitemap, tog vi beslutninger baseret på analyse og en forståelse af, hvordan vores brugere anvender hjemmesiden. Vi begyndte med at undersøge, hvordan deres nuværende site fungerede, og hvad der kunne forbedres. Vi kiggede også på, hvordan indholdet bedst kunne organiseres.

Vi har også justeret strukturen og kategorierne i sitemapet for at gøre det lettere for besøgende at finde det, de leder efter. Dette gør det nemt for brugeren at navigere og finde den ønskede information.

For at undgå forvirring for både søgemaskiner og brugere har vi valgt nogle relevante søgeord i vores navigation. Dette gør det lettere for søgemaskinen at videreformidle relevant information til potentielle besøgende, hvilket forbedrer sitets SEO.
`,
        image: "./assets/img/step6.png",
      },
      7: {
        description: `Vi overvejer, hvilket yderligere indhold der også kunne være relevant for dem at have på hjemmesiden. Vi starter med at brainstorme for at samle en bred vifte af idéer til andet indhold, der kunne være relevant. Det er en blanding af, hvad der er på andre hjemmesider, hvad der er i vores brief, som bør udvides, og hvad vi har hørt er vigtigt fra respondenterne i vores interviews.

Derudover sætter vi et scenarie op, hvor vi forestiller os selv som en person i målgruppen for at opdage eventuelle huller. Vi prøver at forestille os, hvad en middelaldrende mand ville søge efter på sitet, hvis han havde en søn, der var interesseret i at starte til karate.`,
        image: "./assets/img/step7.png",
      },
      8: {
        description: "Navigation og wayfinding refererer til at hjælpe brugerne med at bevæge sig rundt på en hjemmeside på en brugervenlig måde. Navigation involverer at designe den overordnede struktur af en hjemmeside, så brugerne nemt kan bevæge sig mellem forskellige sider og sektioner. Det omfatter alle former for navigation, såsom menuer, knapper osv., som fungerer som en vejledning for brugerne. Derfor har vi i dette projekt bestræbt os på at gøre det så nemt og ligetil som muligt for brugerne at navigere på sitet.",
        image: "./assets/img/step8.png",
      },
      9: {
        description: `Efter udviklingen af vores testscript valgte vi at gennemføre fire think-aloud tests, hvor vi interviewede fire forskellige personer, for at afgøre, om sitet lever op til testerens forventninger, og hvor tilfredsstillende og effektivt det er at navigere på siderne.

Vi guider vores testpersoner frem og tilbage på sitet og har visuelt gjort vores navigationsmetoder mere fremtrædende for at se, om de er mindeværdige for vores testpersoner, hvor tingene er placeret.

Vores testpersoner udtrykte, at siderne var for lange, da de ikke scrollede hele vejen ned. Det betyder, at der var sektioner, de ikke kunne finde, da de gav op, før de nåede dem. Derfor har vi valgt at oprette en ny side, hvor noget af indholdet, der passer sammen, vil blive flyttet til.`,
        image: "./assets/img/step9.png",
      },
      10: {
        description: "Under udviklingen af hjemmesiden nåede vi frem til et produkt, der levede op til de opstillede krav. Hadsund Karate Skoles hjemmeside blev undersøgt gennem en kvalitativ analyse af deres målgruppe og deres behov for at producere et gennemtænkt slutprodukt. Hjemmesiden er imødekommende, let at navigere i og indeholder de grundlæggende oplysninger, som brugerne havde brug for at vide. Med udførelsen af produktet har vi produceret en funktionel og responsiv hjemmeside, der stemmer overens med brugernes krav til informations- og visuelle behov samt vores krav til visuel hierarki og informationsarkitektur.",
        image: "./assets/img/step10.png",
      },
    },
    casestudy2: {
      1: {
        description: "Problemstillingen for casestudy 2 er...",
        image: "./assets/img/problemstilling2.jpg",
      },
      2: {
        description: "Segmentering i casestudy 2 handler om...",
        image: "./assets/img/segmentering2.jpg",
      },
      3: {
        description: "Interviews for casestudy 2 inkluderer...",
        image: "./assets/img/interviews2.jpg",
      },
      4: {
        description: "Content Inventory for casestudy 2 er...",
        image: "./assets/img/content_inventory2.jpg",
      },
      5: {
        description: "Affinity Diagrammet i casestudy 2 hjælper med...",
        image: "./assets/img/affinity_diagram2.jpg",
      },
      6: {
        description: "Content Sitemap for casestudy 2 viser...",
        image: "./assets/img/content_sitemap2.jpg",
      },
      7: {
        description: "Indholdet i casestudy 2 blev udviklet til...",
        image: "./assets/img/indhold2.jpg",
      },
      8: {
        description: "Navigation og wayfinding i casestudy 2 er...",
        image: "./assets/img/navigation2.jpg",
      },
      9: {
        description: "Brugertest i casestudy 2 inkluderer...",
        image: "./assets/img/brugertest2.jpg",
      },
      10: {
        description: "Konklusionen for casestudy 2 er...",
        image: "./assets/img/konklusion2.jpg",
      },
    },
  };
  
  let currentPage = window.location.pathname.includes("casestudy2") ? "casestudy2" : "casestudy1";
  
  function updateStepText(step) {
    const stepDescription = document.getElementById("stepDescription");
    const stepImage = document.getElementById("stepImage");
  
    if (stepContents[currentPage][step]) {
      stepDescription.innerText = stepContents[currentPage][step].description;
      stepImage.src = stepContents[currentPage][step].image;
    } else {
      stepDescription.innerText = "Ingen information tilgængelig.";
      stepImage.src = "";
    }
  }

document.addEventListener('DOMContentLoaded', function() {
    updateStepText(1);
  });




// // Reference til tekst- og billedfeltet
// const stepText = document.getElementById('stepText');
// const stepImage = document.getElementById('stepImage');

// // Data for hvert step (tekst og billede)
// const stepContents = {
//   1: { text: "Hadsund Karate Skole har en hjemmeside, der ikke fungerer optimalt, hvilket hindrer deres evne til at informere deres medlemmer og række ud til potentielle nye. Med vores ekspertise kan vi bekræfte, at der er flere ting, der skal gøres for at gøre sitet optimalt. Da siden generelt er rodet og uorganiseret, er det svært for brugerne at navigere og finde den ønskede information. Dette udgør et betydeligt problem for klubben, da de risikerer at miste medlemmer, både nuværende og nye.", image: "../assets/img/step1.png" },

//   2: { text: "Vi er begyndt med at segmentere de potentielle brugere af Hadsund Karate Skole. Vi har gjort dette ved at identificere nogle demografiske og geografiske brugergrupper, som vi mener kunne være potentielle brugere af Hadsund Karate Skole. For at starte har vi taget et udvalg af ligheder inden for det demografiske område og relateret det til personer involveret i karate eller som har en form for tilknytning til karate i Hadsund.", image: "../assets/img/step2.png" },
  
//   3: { 
//     text: `Vi har udarbejdet en interviewguide, hvor vi har formuleret en hypotese om, at folks primære årsag til at dyrke karate er at være aktive, få afløb for noget damp og kunne forsvare sig selv gennem selvforsvar. Derfor har vi udarbejdet nogle spørgsmål, der vil give os indsigt i, om dette rent faktisk er tilfældet. Efter dette blev gjort, gik hver af os ud for at finde nogen med en eller anden forbindelse til kampsport, som vi derefter kunne interviewe.

// Årsagen til, at vi gør dette, er for at samle viden om, hvad der motiverer folk til at begynde at dyrke kampsport, med det formål at strukturere informationsarkitekturen i Hadsund Karate Klub. Vores forskningsspørgsmål er derfor, hvad der motiverer folk til at begynde at dyrke kampsport, og hvilken information de har brug for, før de træffer beslutningen om at starte.
    
// Efter hver af os har optaget vores interviews, har vi derefter individuelt transskriberet vores interviews. 
// Vi har derefter udført en tematisk analyse af de transskriberede interviews, hvor vi har identificeret forskellige temaer, der gentager sig i et eller flere af vores interviews.`, 
//     image: "../assets/img/step3.png" 
//   },

//   4: { text: `Efter vores interview og den tematiske analyse deraf er vi klar til at kortlægge indholdet på klubbens nuværende hjemmeside. Dette gør vi ved hjælp af en indholdsoversigt. Vi kortlægger alt indhold, der er på deres hjemmeside og deres sociale medieplatforme; Facebook og Instagram.

// Vi sorterer og prioriterer indholdet baseret på, hvad brugerne vil finde relevant. For eksempel er karateetikette særligt vigtigt, mens navnene på dem i bestyrelsen er mindre afgørende, så de får forskellige prioriteter. Når noget gives en lavere prioritet, betyder det ikke, at det ikke vil blive inkluderet på en anden side; det skal bare ikke være øverst på en side eller først i navigeringen.`, image: "../assets/img/step4.png" },

//   5: { text: `Når vi har en færdiggjort vores content inventory og alle vores egne idéer, sætter vi alt det indsamlede indhold på post-it sedler i et figjam. Dette indhold kategoriseres og visualiseres ved hjælp af Affinity Diagrammet for at give et overblik over naturlige forbindelser og grupperinger.

// Efter opsætningen af vores affinity diagram analyserer vi vores data og identificerer styrker og svagheder. Baseret på dette træffer vi beslutninger og justeringer, der guider os mod vores forskellige kategorier og tilføjelser til sitet.

// Da dette er en iterativ proces, implementerer vi konstant forskellige forbedringer. Disse forbedringer var afgørende for yderligere justeringer og for at sikre, at Affinity Diagrammet effektivt opfylder vores behov.`, image: "../assets/img/step5.png" },

//   6: { text: `Under processen med at skabe vores content sitemap, tog vi beslutninger baseret på analyse og en forståelse af, hvordan vores brugere anvender hjemmesiden. Vi begyndte med at undersøge, hvordan deres nuværende site fungerede, og hvad der kunne forbedres. Vi kiggede også på, hvordan indholdet bedst kunne organiseres.

// Vi har også justeret strukturen og kategorierne i sitemapet for at gøre det lettere for besøgende at finde det, de leder efter. Dette gør det nemt for brugeren at navigere og finde den ønskede information.

// For at undgå forvirring for både søgemaskiner og brugere har vi valgt nogle relevante søgeord i vores navigation. Dette gør det lettere for søgemaskinen at videreformidle relevant information til potentielle besøgende, hvilket forbedrer sitets SEO.
// `, image: "../assets/img/step6.png" },

//   7: { text: `Vi overvejer, hvilket yderligere indhold der også kunne være relevant for dem at have på hjemmesiden. Vi starter med at brainstorme for at samle en bred vifte af idéer til andet indhold, der kunne være relevant. Det er en blanding af, hvad der er på andre hjemmesider, hvad der er i vores brief, som bør udvides, og hvad vi har hørt er vigtigt fra respondenterne i vores interviews.

// Derudover sætter vi et scenarie op, hvor vi forestiller os selv som en person i målgruppen for at opdage eventuelle huller. Vi prøver at forestille os, hvad en middelaldrende mand ville søge efter på sitet, hvis han havde en søn, der var interesseret i at starte til karate.`, image: "../assets/img/step7.png" },

//   8: { text: `Navigation og wayfinding refererer til at hjælpe brugerne med at bevæge sig rundt på en hjemmeside på en brugervenlig måde. Navigation involverer at designe den overordnede struktur af en hjemmeside, så brugerne nemt kan bevæge sig mellem forskellige sider og sektioner. Det omfatter alle former for navigation, såsom menuer, knapper osv., som fungerer som en vejledning for brugerne. Derfor har vi i dette projekt bestræbt os på at gøre det så nemt og ligetil som muligt for brugerne at navigere på sitet.`, image: "../assets/img/step8.png" },

//   9: { text: `Efter udviklingen af vores testscript valgte vi at gennemføre fire think-aloud tests, hvor vi interviewede fire forskellige personer, for at afgøre, om sitet lever op til testerens forventninger, og hvor tilfredsstillende og effektivt det er at navigere på siderne.

// Vi guider vores testpersoner frem og tilbage på sitet og har visuelt gjort vores navigationsmetoder mere fremtrædende for at se, om de er mindeværdige for vores testpersoner, hvor tingene er placeret.

// Vores testpersoner udtrykte, at siderne var for lange, da de ikke scrollede hele vejen ned. Det betyder, at der var sektioner, de ikke kunne finde, da de gav op, før de nåede dem. Derfor har vi valgt at oprette en ny side, hvor noget af indholdet, der passer sammen, vil blive flyttet til.`, image: "../assets/img/step9.png" },

//   10: { text: `Under udviklingen af hjemmesiden nåede vi frem til et produkt, der levede op til de opstillede krav. Hadsund Karate Skoles hjemmeside blev undersøgt gennem en kvalitativ analyse af deres målgruppe og deres behov for at producere et gennemtænkt slutprodukt. Hjemmesiden er imødekommende, let at navigere i og indeholder de grundlæggende oplysninger, som brugerne havde brug for at vide. Med udførelsen af produktet har vi produceret en funktionel og responsiv hjemmeside, der stemmer overens med brugernes krav til informations- og visuelle behov samt vores krav til visuel hierarki og informationsarkitektur.`, image: "../assets/img/step10.png" }
// };

// // Funktion til at opdatere tekst og billede baseret på knappen, der trykkes på
// function updateStepContent(step) {
//   const content = stepContents[step];
//   if (content) {
//     stepText.querySelector('p').textContent = content.text; // Opdater tekst
//     stepImage.src = content.image; // Opdater billede
//     stepImage.alt = content.text; // Opdater alt-tekst
//   }
// }

// // Lyt efter klik på knapperne og opdater indholdet
// document.querySelectorAll('.stepsButtons button').forEach((button, index) => {
//   button.addEventListener('click', () => {
//     updateStepContent(index + 1); // index + 1 matcher step-nummeret
//   });
// });

// // Start på step 1 ved load
// updateStepContent(1);
  
  