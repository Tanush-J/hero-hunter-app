const heroName = document.getElementById('heroName');
const heroDescription = document.getElementById('heroDescription')
const heroImg = document.getElementById('heroImg');
const seriesContainer = document.getElementById('seriesContainer')
const storiesContainer = document.getElementById('storiesContainer')
const eventsContainer = document.getElementById('eventsContainer')

//functions
const pageLoadHandler = () => {
    const heroData = JSON.parse(sessionStorage.getItem('clickedHeroData'))
    heroImg.src = `${heroData.thumbnail.path}.${heroData.thumbnail.extension}`;
    heroName.innerHTML = heroData.name;
    heroDescriptionLoader(heroData.description);
    accordianEventLoader(heroData.series.items, 'seriesContainer')
    accordianEventLoader(heroData.stories.items, 'storiesContainer')
    accordianEventLoader(heroData.events.items, 'eventsContainer')
    accordianEventLoader(heroData.comics.items, 'comicsContainer')
}

const heroDescriptionLoader = (description) => {
    if(description && description!==''){
        heroDescription.textContent = description;
    } else {
        heroDescription.textContent = 'No description found!'
    }
}

const accordianEventLoader = (eventArr, id) => {
    const parentCont = document.getElementById(id)
    if(eventArr.length>0){
        eventArr.forEach(event => {
            const itemEle = document.createElement('div')
            itemEle.classList.add('item');
            itemEle.textContent = `${event.name}${event.type? ` - ${event.type}`: ''}`;
            parentCont.appendChild(itemEle)
        });
    } else {
        const itemEle = document.createElement('div')
        itemEle.classList.add('item');
        itemEle.textContent = 'No data avaliable!'
        parentCont.appendChild(itemEle)
    }
}

//event listener
document.addEventListener('DOMContentLoaded', pageLoadHandler)