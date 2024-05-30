import { publicKey, privateKey } from './secrets.js'
const md5 = CryptoJS.MD5;

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

// const fetchEventData = (URI, id) => {
//     const date = new Date().getTime();
//     const hash = md5(date + privateKey + publicKey).toString();
//     fetch(`${URI}?apikey=${publicKey}&hash=${hash}`)
//     .then((res) => {
//         if(!res.ok){
//             throw new Error('Could not fetch series data');
//         }
//         return res.json();
//     })
//     .then(res => {
//         const result = res.data.results[0];
//         const bodyEle = document.getElementById(id);
//         const eventImg = document.createElement('img');
//         eventImg.src = `${result.thumbnail.path}.${result.thumbnail.extension}`;
//         const para = document.createElement('p');
//         para.textContent = result.description;
//         bodyEle.appendChild(eventImg);
//         bodyEle.appendChild(para);
//     })
//     .catch(err => {
//         console.error('Series fetch Error: '+err);
//     })
    
// }

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
    // eventArr.forEach((item, index) => {
    //     const itemEle = document.createElement('div')
    //     itemEle.classList.add('accordion-item');
    //     const header = document.createElement('div');
    //     header.classList.add('accordion-header')
    //     const toggleBtn = document.createElement('button');
    //     toggleBtn.classList.add('accordion-button', 'collapsed')
    //     toggleBtn.type = 'button'
    //     toggleBtn.setAttribute('data-bs-toggle',"collapse")
    //     toggleBtn.setAttribute('data-bs-target',`#collapse${index}`);
    //     toggleBtn.setAttribute('aria-expanded',"true");
    //     toggleBtn.setAttribute('aria-controls',`collapse${index}`)
    //     toggleBtn.textContent = item.name;
    //     toggleBtn.addEventListener('click', () => fetchEventData(item.resourceURI, `${item.name}-${index}`))
    //     const bodyWrapper = document.createElement('div')
    //     bodyWrapper.id=`collapse${index}`
    //     bodyWrapper.classList.add("accordion-collapse", "collapse");
    //     bodyWrapper.setAttribute("data-bs-parent","#seriesContainer");
    //     const body = document.createElement('div');
    //     body.id = `${item.name}-${index}`;
    //     body.classList.add("accordion-body");
    //     bodyWrapper.appendChild(body);
    //     itemEle.appendChild(header);
    //     itemEle.appendChild(toggleBtn);
    //     itemEle.appendChild(bodyWrapper);
    //     parentCont.appendChild(itemEle);
    // });
}

//event listener
document.addEventListener('DOMContentLoaded', pageLoadHandler)