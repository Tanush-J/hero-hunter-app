const resultDiv = document.getElementById("resultContainer");

let data = [];

//functions
const pageLoadHandler = () => {
  data = JSON.parse(localStorage.getItem("favHeroStore"));
  renderHeroList(data);
};

const renderHeroList = (heroArray) => {
  resultDiv.innerHTML = "";
  if (heroArray.length === 0) {
    const noHeroHeading = document.createElement("h2");
    noHeroHeading.textContent = "No favourite heroes added!";
    resultDiv.appendChild(noHeroHeading);
  } else {
    heroArray.forEach((item) => {
      const heroCard = document.createElement("div");
      heroCard.classList.add('card')
      const imgWrapper = document.createElement("a");
      imgWrapper.classList.add('imgWrapper');
      imgWrapper.href = "./heroInfo.html";
      imgWrapper.addEventListener("click", () => {
        sessionStorage.setItem("clickedHeroData", JSON.stringify(item));
      });
      const heroImg = document.createElement("img");
      heroImg.src = `${item.thumbnail.path}.${item.thumbnail.extension}`;
      const heroName = document.createElement("p");
      heroName.classList.add('heroName')
      heroName.textContent = item.name.length>20? item.name.slice(0, 20)+'...': item.name;
      const favBtn = document.createElement("button");
      favBtn.classList.add('favBtn')
      favBtn.textContent = "Remove from favourite";
      favBtn.addEventListener("click", () => removeFavourite(item));

      imgWrapper.appendChild(heroImg);
      heroCard.appendChild(imgWrapper);
      heroCard.appendChild(heroName);
      heroCard.appendChild(favBtn);
      resultDiv.appendChild(heroCard);
    });
  }
};

const removeFavourite = (character) => {
    let favHeroStore = JSON.parse(localStorage.getItem('favHeroStore')) || []
    favHeroStore = favHeroStore.filter(hero => hero.id!==character.id);
    localStorage.setItem('favHeroStore', JSON.stringify(favHeroStore));
    renderHeroList(favHeroStore);
    alert('Hero removed from favourite!')
}

//event listener
document.addEventListener("DOMContentLoaded", pageLoadHandler);
