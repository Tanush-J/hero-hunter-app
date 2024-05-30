import { publicKey, privateKey } from './secrets.js'
const md5 = CryptoJS.MD5;

let data = []
// let data = [
//   {
//     "id": 1009362,
//     "name": "Iceman",
//     "description": "",
//     "modified": "2016-02-03T13:38:53-0500",
//     "thumbnail": {
//       "path": "http://i.annihil.us/u/prod/marvel/i/mg/1/d0/52696c836898c",
//       "extension": "jpg"
//     },
//     "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009362",
//     "comics": {
//       "available": 598,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009362/comics",
//       "items": [
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/43506",
//           "name": "A+X (2012) #7"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/107252",
//           "name": "Astonishing Iceman (2023) #1"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/107254",
//           "name": "Astonishing Iceman (2023) #2"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/107255",
//           "name": "Astonishing Iceman (2023) #3"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/107256",
//           "name": "Astonishing Iceman (2023) #4"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/107257",
//           "name": "Astonishing Iceman (2023) #5"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/17735",
//           "name": "Astonishing X-Men (1995) #1"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/17738",
//           "name": "Astonishing X-Men (1995) #4"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/40803",
//           "name": "Astonishing X-Men (2004) #51"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/42732",
//           "name": "Astonishing X-Men (2004) #51 (Djurdjevic Variant)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/40808",
//           "name": "Astonishing X-Men (2004) #56"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/45820",
//           "name": "Astonishing X-Men (2004) #59"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/45821",
//           "name": "Astonishing X-Men (2004) #60"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/45822",
//           "name": "Astonishing X-Men (2004) #61"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/45823",
//           "name": "Astonishing X-Men (2004) #62"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/45824",
//           "name": "Astonishing X-Men (2004) #63"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/45825",
//           "name": "Astonishing X-Men (2004) #64"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/45826",
//           "name": "Astonishing X-Men (2004) #65"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/45829",
//           "name": "Astonishing X-Men (2004) #68"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/71373",
//           "name": "Astonishing X-Men Annual (2018) #1"
//         }
//       ],
//       "returned": 20
//     },
//     "series": {
//       "available": 173,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009362/series",
//       "items": [
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/16450",
//           "name": "A+X (2012 - 2014)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/454",
//           "name": "Amazing Spider-Man (1999 - 2013)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/37020",
//           "name": "Astonishing Iceman (2023 - Present)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/744",
//           "name": "Astonishing X-Men (2004 - 2013)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/3619",
//           "name": "Astonishing X-Men (1995)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/26006",
//           "name": "Astonishing X-Men Annual (2018)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/354",
//           "name": "Avengers (1998 - 2004)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/1991",
//           "name": "Avengers (1963 - 1996)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/1737",
//           "name": "Avengers Assemble Vol. 3 (2006)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/2115",
//           "name": "Black Panther (1998 - 2003)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/4002",
//           "name": "Cable (2008 - 2010)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/1995",
//           "name": "Cable (1993 - 2002)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/2001",
//           "name": "Champions (1975 - 1978)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/1720",
//           "name": "CHAMPIONS CLASSIC VOL. 1 TPB (2006)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/1721",
//           "name": "CHAMPIONS CLASSIC VOL. 2 TPB (2007)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/1067",
//           "name": "Civil War (2006 - 2007)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/3874",
//           "name": "CLANDESTINE CLASSIC PREMIERE HC (2008)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/23023",
//           "name": "Deadpool & the Mercs for Money Vol. 2: IvX (2017)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/22429",
//           "name": "Deadpool and The Secret Defenders (2017)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/22401",
//           "name": "Deadpool Annual (2016)"
//         }
//       ],
//       "returned": 20
//     },
//     "stories": {
//       "available": 691,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009362/stories",
//       "items": [
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/614",
//           "name": "X-MEN (2004) #159",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/616",
//           "name": "X-MEN (2004) #157",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/618",
//           "name": "X-MEN (2004) #158",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/620",
//           "name": "X-MEN (2004) #160",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/626",
//           "name": "X-MEN (2004) #163",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/630",
//           "name": "X-MEN (2004) #166",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/634",
//           "name": "X-MEN (2004) #168",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/636",
//           "name": "X-MEN (2004) #169",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/638",
//           "name": "X-MEN (2004) #170",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/648",
//           "name": "1 of 2- Black Panther crossover",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/678",
//           "name": "X-MEN (2004) #190",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/680",
//           "name": "4 of 6 - Supernovas",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/1745",
//           "name": "UNCANNY X-MEN (1963) #433",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/1776",
//           "name": "UNCANNY X-MEN (1963) #434",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/1974",
//           "name": "WEAPON X (2002) #17",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/2160",
//           "name": "WEAPON X (2002) #15",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/2293",
//           "name": "UNCANNY X-MEN (1963) #432",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/2423",
//           "name": "ROGUE (2004) #12",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/3233",
//           "name": "X-MEN: THE END - MEN AND X-MEN (2006) #3",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/4058",
//           "name": "Cover #4058",
//           "type": "cover"
//         }
//       ],
//       "returned": 20
//     },
//     "events": {
//       "available": 22,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009362/events",
//       "items": [
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/events/116",
//           "name": "Acts of Vengeance!"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/events/227",
//           "name": "Age of Apocalypse"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/events/303",
//           "name": "Age of X"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/events/233",
//           "name": "Atlantis Attacks"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/events/310",
//           "name": "Avengers VS X-Men"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/events/318",
//           "name": "Dark Reign"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/events/240",
//           "name": "Days of Future Present"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/events/246",
//           "name": "Evolutionary War"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/events/248",
//           "name": "Fall of the Mutants"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/events/249",
//           "name": "Fatal Attractions"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/events/302",
//           "name": "Fear Itself"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/events/252",
//           "name": "Inferno"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/events/32",
//           "name": "Kings of Pain"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/events/299",
//           "name": "Messiah CompleX"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/events/263",
//           "name": "Mutant Massacre"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/events/154",
//           "name": "Onslaught"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/events/277",
//           "name": "World War Hulk"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/events/60",
//           "name": "World War Hulks"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/events/316",
//           "name": "X-Men: Battle of the Atom"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/events/308",
//           "name": "X-Men: Regenesis"
//         }
//       ],
//       "returned": 20
//     },
//     "urls": [
//       {
//         "type": "detail",
//         "url": "http://marvel.com/comics/characters/1009362/iceman?utm_campaign=apiRef&utm_source=a846af165a8271d4a7032ce2d31da5ef"
//       },
//       {
//         "type": "wiki",
//         "url": "http://marvel.com/universe/Iceman?utm_campaign=apiRef&utm_source=a846af165a8271d4a7032ce2d31da5ef"
//       },
//       {
//         "type": "comiclink",
//         "url": "http://marvel.com/comics/characters/1009362/iceman?utm_campaign=apiRef&utm_source=a846af165a8271d4a7032ce2d31da5ef"
//       }
//     ]
//   },
//   {
//     "id": 1010933,
//     "name": "Iceman (Ultimate)",
//     "description": "",
//     "modified": "2014-03-05T13:37:05-0500",
//     "thumbnail": {
//       "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/70/53176e6436aa6",
//       "extension": "jpg"
//     },
//     "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010933",
//     "comics": {
//       "available": 68,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010933/comics",
//       "items": [
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/30206",
//           "name": "Ultimate Comics Enemy (2010) #1"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/32674",
//           "name": "Ultimate Comics Enemy (2010) #1 (VILLAIN VARIANT)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/32676",
//           "name": "Ultimate Comics Enemy (2010) #1 (FOILOGRAM VARIANT)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/30207",
//           "name": "Ultimate Comics Enemy (2010) #2"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/30208",
//           "name": "Ultimate Comics Enemy (2010) #3"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/30209",
//           "name": "Ultimate Comics Enemy (2010) #4"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/30210",
//           "name": "Ultimate Comics Mystery (2010) #1"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/37458",
//           "name": "Ultimate Comics Spider-Man (2009) #158"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/40811",
//           "name": "Ultimate Comics X-Men (Hardcover)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/40466",
//           "name": "Ultimate Comics X-Men (2010) #12"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/40461",
//           "name": "Ultimate Comics X-Men (2010) #16"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/47007",
//           "name": "Ultimate Comics X-Men (2010) #18.1"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/22043",
//           "name": "Ultimate Fantastic Four/Ultimate X-Men Annual (2008) #1"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/3444",
//           "name": "Ultimate Fantastic Four/X-Men (2006) #1"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/17584",
//           "name": "Ultimate Spider-Man (2000) #118"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/18476",
//           "name": "Ultimate War (2003) #3"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/18477",
//           "name": "Ultimate War (2003) #4"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/15699",
//           "name": "Ultimate X-Men (2001) #1"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/15710",
//           "name": "Ultimate X-Men (2001) #2"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/15721",
//           "name": "Ultimate X-Men (2001) #3"
//         }
//       ],
//       "returned": 20
//     },
//     "series": {
//       "available": 20,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010933/series",
//       "items": [
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/9196",
//           "name": "Ultimate Comics Enemy (2010)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/9957",
//           "name": "Ultimate Comics Mystery (2010)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/8509",
//           "name": "Ultimate Comics Spider-Man (2009 - 2012)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/15087",
//           "name": "Ultimate Comics X-Men (2011 - Present)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/13108",
//           "name": "Ultimate Comics X-Men (2010 - 2013)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/5743",
//           "name": "Ultimate Fantastic Four/Ultimate X-Men Annual (2008)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/1030",
//           "name": "Ultimate Fantastic Four/X-Men (2006)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/466",
//           "name": "Ultimate Spider-Man (2000 - 2009)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/3659",
//           "name": "Ultimate War (2003)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/474",
//           "name": "Ultimate X-Men (2001 - 2009)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/25539",
//           "name": "Ultimate X-Men 1/2 (2002)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/1055",
//           "name": "Ultimate X-Men Annual (2005 - 2006)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/13887",
//           "name": "Ultimate X-Men MGC (2011)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/1662",
//           "name": "ULTIMATE X-MEN VOL. 14: PHOENIX TPB (2006)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/1168",
//           "name": "ULTIMATE X-MEN VOL. 3: WORLD TOUR TPB (2005)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/216",
//           "name": "ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB (1999)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/82",
//           "name": "Ultimate X-Men Vol. III: World Tour (2002)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/353",
//           "name": "Ultimate X-Men/Fantastic Four (2005)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/1794",
//           "name": "ULTIMATE X-MEN/FANTASTIC FOUR TPB (2006)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/5744",
//           "name": "Ultimate X-Men/Ultimate Fantastic Four Annual (2008)"
//         }
//       ],
//       "returned": 20
//     },
//     "stories": {
//       "available": 118,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010933/stories",
//       "items": [
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/488",
//           "name": "Ultimate X-Men/Fantastic Four (2005) #1",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/489",
//           "name": "Interior #489",
//           "type": "interiorStory"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/1454",
//           "name": "Ultimate X-Men (2001) #61",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/1455",
//           "name": "1 of 5 - Escape of Magneto",
//           "type": "interiorStory"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/1458",
//           "name": "Ultimate X-Men (2001) #63",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/1459",
//           "name": "3 of 5 - Magnetic North",
//           "type": "interiorStory"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/1460",
//           "name": "Ultimate X-Men (2001) #64",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/1461",
//           "name": "4 of 5 - Magnetic North",
//           "type": "interiorStory"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/1462",
//           "name": "Ultimate X-Men (2001) #65",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/1463",
//           "name": "5 of 5 - Magnetic North",
//           "type": "interiorStory"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/1464",
//           "name": "Ultimate X-Men (2001) #66",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/1465",
//           "name": "1 of 3 -",
//           "type": "interiorStory"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/1466",
//           "name": "Ultimate X-Men (2001) #67",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/1467",
//           "name": "2 of 3 -",
//           "type": "interiorStory"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/1468",
//           "name": "Ultimate X-Men (2001) #68",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/1469",
//           "name": "3 of 3 - Date Night",
//           "type": "interiorStory"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/1470",
//           "name": "Ultimate X-Men (2001) #69",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/1471",
//           "name": "1 of 3 -",
//           "type": "interiorStory"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/1472",
//           "name": "Ultimate X-Men (2001) #70",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/1473",
//           "name": "2 of 3 -",
//           "type": "interiorStory"
//         }
//       ],
//       "returned": 20
//     },
//     "events": {
//       "available": 0,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010933/events",
//       "items": [],
//       "returned": 0
//     },
//     "urls": [
//       {
//         "type": "detail",
//         "url": "http://marvel.com/characters/27/iceman?utm_campaign=apiRef&utm_source=a846af165a8271d4a7032ce2d31da5ef"
//       },
//       {
//         "type": "wiki",
//         "url": "http://marvel.com/universe/Iceman_%28Ultimate%29?utm_campaign=apiRef&utm_source=a846af165a8271d4a7032ce2d31da5ef"
//       },
//       {
//         "type": "comiclink",
//         "url": "http://marvel.com/comics/characters/1010933/iceman_ultimate?utm_campaign=apiRef&utm_source=a846af165a8271d4a7032ce2d31da5ef"
//       }
//     ]
//   },
//   {
//     "id": 1017475,
//     "name": "Iceman (X-Men: Battle of the Atom)",
//     "description": "",
//     "modified": "2014-01-16T13:12:41-0500",
//     "thumbnail": {
//       "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/70/52d72ac3c45f9",
//       "extension": "jpg"
//     },
//     "resourceURI": "http://gateway.marvel.com/v1/public/characters/1017475",
//     "comics": {
//       "available": 0,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017475/comics",
//       "items": [],
//       "returned": 0
//     },
//     "series": {
//       "available": 0,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017475/series",
//       "items": [],
//       "returned": 0
//     },
//     "stories": {
//       "available": 0,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017475/stories",
//       "items": [],
//       "returned": 0
//     },
//     "events": {
//       "available": 0,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017475/events",
//       "items": [],
//       "returned": 0
//     },
//     "urls": [
//       {
//         "type": "detail",
//         "url": "http://marvel.com/characters/27/iceman?utm_campaign=apiRef&utm_source=a846af165a8271d4a7032ce2d31da5ef"
//       },
//       {
//         "type": "comiclink",
//         "url": "http://marvel.com/comics/characters/1017475/iceman_x-men_battle_of_the_atom?utm_campaign=apiRef&utm_source=a846af165a8271d4a7032ce2d31da5ef"
//       }
//     ]
//   },
//   {
//     "id": 1011077,
//     "name": "Ikaris",
//     "description": "",
//     "modified": "1969-12-31T19:00:00-0500",
//     "thumbnail": {
//       "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/50/4c0030d8df78e",
//       "extension": "jpg"
//     },
//     "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011077",
//     "comics": {
//       "available": 15,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011077/comics",
//       "items": [
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/7117",
//           "name": "Avengers (1963) #248"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/7184",
//           "name": "Avengers (1963) #308"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/101091",
//           "name": "Eternals by Gaiman & Romita Jr. Infinity Comic (2022) #1"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/101092",
//           "name": "Eternals by Gaiman & Romita Jr. Infinity Comic (2022) #2"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/101093",
//           "name": "Eternals by Gaiman & Romita Jr. Infinity Comic (2022) #3"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/101094",
//           "name": "Eternals by Gaiman & Romita Jr. Infinity Comic (2022) #4"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/101095",
//           "name": "Eternals by Gaiman & Romita Jr. Infinity Comic (2022) #5"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/101096",
//           "name": "Eternals by Gaiman & Romita Jr. Infinity Comic (2022) #6"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/101097",
//           "name": "Eternals by Gaiman & Romita Jr. Infinity Comic (2022) #7"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/101098",
//           "name": "Eternals by Gaiman & Romita Jr. Infinity Comic (2022) #8"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/101099",
//           "name": "Eternals by Gaiman & Romita Jr. Infinity Comic (2022) #9"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/101100",
//           "name": "Eternals by Gaiman & Romita Jr. Infinity Comic (2022) #10"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/101101",
//           "name": "Eternals by Gaiman & Romita Jr. Infinity Comic (2022) #11"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/40645",
//           "name": "Hulk (2008) #49"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/20965",
//           "name": "Incredible Hercules (2008) #116"
//         }
//       ],
//       "returned": 15
//     },
//     "series": {
//       "available": 4,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011077/series",
//       "items": [
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/1991",
//           "name": "Avengers (1963 - 1996)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/34626",
//           "name": "Eternals by Gaiman & Romita Jr. Infinity Comic (2022)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/3374",
//           "name": "Hulk (2008 - 2012)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/3762",
//           "name": "Incredible Hercules (2008 - 2010)"
//         }
//       ],
//       "returned": 4
//     },
//     "stories": {
//       "available": 17,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011077/stories",
//       "items": [
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/14773",
//           "name": "Avengers (1963) #248",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/14908",
//           "name": "Avengers (1963) #308",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/45230",
//           "name": "Incredible Hercules (2008) #116",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/45231",
//           "name": "Interior #45231",
//           "type": "interiorStory"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/92112",
//           "name": "Hulk (2008) #49",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/92113",
//           "name": "Interior #92113",
//           "type": "interiorStory"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/223284",
//           "name": "cover from Eternals by Gaiman & Romita Jr. Infinity Comic (2022) #1",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/223286",
//           "name": "cover from Eternals by Gaiman & Romita Jr. Infinity Comic (2022) #2",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/223288",
//           "name": "cover from Eternals by Gaiman & Romita Jr. Infinity Comic (2022) #3",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/223290",
//           "name": "cover from Eternals by Gaiman & Romita Jr. Infinity Comic (2022) #4",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/223292",
//           "name": "cover from Eternals by Gaiman & Romita Jr. Infinity Comic (2022) #5",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/223294",
//           "name": "cover from Eternals by Gaiman & Romita Jr. Infinity Comic (2022) #6",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/223296",
//           "name": "cover from Eternals by Gaiman & Romita Jr. Infinity Comic (2022) #7",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/223298",
//           "name": "cover from Eternals by Gaiman & Romita Jr. Infinity Comic (2022) #8",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/223300",
//           "name": "cover from Eternals by Gaiman & Romita Jr. Infinity Comic (2022) #9",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/223302",
//           "name": "cover from Eternals by Gaiman & Romita Jr. Infinity Comic (2022) #10",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/223304",
//           "name": "cover from Eternals by Gaiman & Romita Jr. Infinity Comic (2022) #11",
//           "type": "cover"
//         }
//       ],
//       "returned": 17
//     },
//     "events": {
//       "available": 0,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011077/events",
//       "items": [],
//       "returned": 0
//     },
//     "urls": [
//       {
//         "type": "detail",
//         "url": "http://marvel.com/characters/1020/ikaris?utm_campaign=apiRef&utm_source=a846af165a8271d4a7032ce2d31da5ef"
//       },
//       {
//         "type": "wiki",
//         "url": "http://marvel.com/universe/Ikaris?utm_campaign=apiRef&utm_source=a846af165a8271d4a7032ce2d31da5ef"
//       },
//       {
//         "type": "comiclink",
//         "url": "http://marvel.com/comics/characters/1011077/ikaris?utm_campaign=apiRef&utm_source=a846af165a8271d4a7032ce2d31da5ef"
//       }
//     ]
//   },
//   {
//     "id": 1010758,
//     "name": "Illuminati",
//     "description": "",
//     "modified": "2013-10-17T15:01:33-0400",
//     "thumbnail": {
//       "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/70/526033bb40a5e",
//       "extension": "jpg"
//     },
//     "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010758",
//     "comics": {
//       "available": 19,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010758/comics",
//       "items": [
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/29211",
//           "name": "Avengers (2010) #8"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/63350",
//           "name": "Avengers by Jonathan Hickman Omnibus Vol. 1 (Hardcover)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/47120",
//           "name": "Infinity (2013) #1"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/47123",
//           "name": "Infinity (2013) #2"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/47124",
//           "name": "Infinity (2013) #3"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/47126",
//           "name": "Infinity (2013) #5"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/47127",
//           "name": "Infinity (2013) #6"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/46337",
//           "name": "New Avengers (2013) #1 (Campbell Variant)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/21283",
//           "name": "New Avengers: Illuminati (Trade Paperback)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/5723",
//           "name": "New Avengers: Illuminati (2006) #1"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/5864",
//           "name": "New Avengers: Illuminati (2006) #2"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/13481",
//           "name": "New Avengers: Illuminati (2006) #3"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/15968",
//           "name": "New Avengers: Illuminati (2006) #4"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/17254",
//           "name": "New Avengers: Illuminati (2006) #5"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/17673",
//           "name": "New Avengers: Illuminati Premiere (Hardcover)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/113207",
//           "name": "Thanos (2023) #1"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/113208",
//           "name": "Thanos (2023) #2"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/113209",
//           "name": "Thanos (2023) #3"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/66864",
//           "name": "True Believers: Infinity Incoming! (2018) #1"
//         }
//       ],
//       "returned": 19
//     },
//     "series": {
//       "available": 9,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010758/series",
//       "items": [
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/9085",
//           "name": "Avengers (2010 - 2012)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/23143",
//           "name": "Avengers by Jonathan Hickman Omnibus Vol. 1 (2017)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/17735",
//           "name": "Infinity (2013)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/16451",
//           "name": "New Avengers (2013 - 2015)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/1137",
//           "name": "New Avengers: Illuminati (2006 - 2008)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/4906",
//           "name": "New Avengers: Illuminati (2008)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/3438",
//           "name": "New Avengers: Illuminati Premiere (2008)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/38864",
//           "name": "Thanos (2023 - Present)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/24190",
//           "name": "True Believers: Infinity Incoming! (2018)"
//         }
//       ],
//       "returned": 9
//     },
//     "stories": {
//       "available": 18,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010758/stories",
//       "items": [
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/6238",
//           "name": "1 of 5 - 5XLS",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/7906",
//           "name": "2 of 5 - 5 XLS",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/8689",
//           "name": "3 of 5 - 5XLS - Secret Wars",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/32610",
//           "name": "Marvel Boy 4 of 5",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/36160",
//           "name": "Illuminati are discovered 5 of 5",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/63613",
//           "name": "Avengers (2010) #8",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/63614",
//           "name": "Avengers (2010) #8",
//           "type": "interiorStory"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/104234",
//           "name": "cover from New Avengers (2013) #1 (CAMPBELL VARIANT)",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/105833",
//           "name": "cover from Thanos/Inhumans Event (2013) #1",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/105839",
//           "name": "cover from Thanos/Inhumans Event (2013) #2",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/105841",
//           "name": "cover from Thanos/Inhumans Event (2013) #3",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/105845",
//           "name": "cover from Thanos/Inhumans Event (2013) #5",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/105847",
//           "name": "cover from Thanos/Inhumans Event (2013) #6",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/137549",
//           "name": "story from AVENGERS BY JONATHAN HICKMAN OMNIBUS VOL. 1 HC (2017) #1",
//           "type": "interiorStory"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/144883",
//           "name": "cover from True Believers: Infinity Incoming! (2018) #1",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/247627",
//           "name": "cover from Thanos (2023) #1",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/247629",
//           "name": "cover from Thanos (2023) #2",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/247631",
//           "name": "cover from Thanos (2023) #3",
//           "type": "cover"
//         }
//       ],
//       "returned": 18
//     },
//     "events": {
//       "available": 1,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010758/events",
//       "items": [
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/events/315",
//           "name": "Infinity"
//         }
//       ],
//       "returned": 1
//     },
//     "urls": [
//       {
//         "type": "detail",
//         "url": "http://marvel.com/characters/1022/illuminati?utm_campaign=apiRef&utm_source=a846af165a8271d4a7032ce2d31da5ef"
//       },
//       {
//         "type": "wiki",
//         "url": "http://marvel.com/universe/Illuminati?utm_campaign=apiRef&utm_source=a846af165a8271d4a7032ce2d31da5ef"
//       },
//       {
//         "type": "comiclink",
//         "url": "http://marvel.com/comics/characters/1010758/illuminati?utm_campaign=apiRef&utm_source=a846af165a8271d4a7032ce2d31da5ef"
//       }
//     ]
//   },
//   {
//     "id": 1009529,
//     "name": "Ilyana Rasputin",
//     "description": "",
//     "modified": "1969-12-31T19:00:00-0500",
//     "thumbnail": {
//       "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
//       "extension": "jpg"
//     },
//     "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009529",
//     "comics": {
//       "available": 1,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009529/comics",
//       "items": [
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/21216",
//           "name": "X-Men Origin: Colossus (2008) #1"
//         }
//       ],
//       "returned": 1
//     },
//     "series": {
//       "available": 1,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009529/series",
//       "items": [
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/4832",
//           "name": "X-Men Origin: Colossus (2008)"
//         }
//       ],
//       "returned": 1
//     },
//     "stories": {
//       "available": 2,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009529/stories",
//       "items": [
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/46865",
//           "name": "X-Men Origin: Colossus (2008) #1",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/46866",
//           "name": "Interior #46866",
//           "type": "interiorStory"
//         }
//       ],
//       "returned": 2
//     },
//     "events": {
//       "available": 0,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009529/events",
//       "items": [],
//       "returned": 0
//     },
//     "urls": [
//       {
//         "type": "detail",
//         "url": "http://marvel.com/characters/2744/ilyana_rasputin?utm_campaign=apiRef&utm_source=a846af165a8271d4a7032ce2d31da5ef"
//       },
//       {
//         "type": "comiclink",
//         "url": "http://marvel.com/comics/characters/1009529/ilyana_rasputin?utm_campaign=apiRef&utm_source=a846af165a8271d4a7032ce2d31da5ef"
//       }
//     ]
//   },
//   {
//     "id": 1012923,
//     "name": "Immortus",
//     "description": "",
//     "modified": "2021-08-13T00:16:13-0400",
//     "thumbnail": {
//       "path": "http://i.annihil.us/u/prod/marvel/i/mg/1/a0/4ce5aa10cfeb5",
//       "extension": "jpg"
//     },
//     "resourceURI": "http://gateway.marvel.com/v1/public/characters/1012923",
//     "comics": {
//       "available": 21,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1012923/comics",
//       "items": [
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/29195",
//           "name": "Avengers (2010) #1"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/33562",
//           "name": "Avengers (2010) #1 (ROMITA SR. VARIANT)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/33572",
//           "name": "Avengers (2010) #1 (I AM AN AVENGER BLANK COVER VARIANT)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/33335",
//           "name": "Avengers (2010) #1 (HEROIC AGE VARIANT)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/33336",
//           "name": "Avengers (2010) #1 (ROMITA JR. VARIANT)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/33483",
//           "name": "Avengers (2010) #1 (DJURDJEVIC VARIANT)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/34139",
//           "name": "Avengers (2010) #5"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/6953",
//           "name": "Avengers (1963) #10"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/7140",
//           "name": "Avengers (1963) #269"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/12412",
//           "name": "Avengers Forever (1998) #9"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/29601",
//           "name": "Fantastic Four (1998) #581"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/29602",
//           "name": "Fantastic Four (1998) #582"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/87",
//           "name": "MARVEL MASTERWORKS: THE AVENGERS VOL. 1 HC (Hardcover)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/11902",
//           "name": "Universe X (2000) #1"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/11907",
//           "name": "Universe X (2000) #3"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/11908",
//           "name": "Universe X (2000) #4"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/11910",
//           "name": "Universe X (2000) #6"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/11911",
//           "name": "Universe X (2000) #7"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/11903",
//           "name": "Universe X (2000) #10"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/11904",
//           "name": "Universe X (2000) #11"
//         }
//       ],
//       "returned": 20
//     },
//     "series": {
//       "available": 6,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1012923/series",
//       "items": [
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/9085",
//           "name": "Avengers (2010 - 2012)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/1991",
//           "name": "Avengers (1963 - 1996)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/2111",
//           "name": "Avengers Forever (1998 - 1999)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/421",
//           "name": "Fantastic Four (1998 - 2012)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/1390",
//           "name": "MARVEL MASTERWORKS: THE AVENGERS VOL. 1 HC (2004)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/2085",
//           "name": "Universe X (2000 - 2001)"
//         }
//       ],
//       "returned": 6
//     },
//     "stories": {
//       "available": 27,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1012923/stories",
//       "items": [
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/14441",
//           "name": "Avengers (1963) #10 ",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/14819",
//           "name": "Avengers (1963) #269",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/25633",
//           "name": "",
//           "type": ""
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/25634",
//           "name": "Universe X (2000) #10",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/25635",
//           "name": "Interior #25635",
//           "type": "interiorStory"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/25636",
//           "name": "",
//           "type": ""
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/25637",
//           "name": "Universe X (2000) #12",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/25638",
//           "name": "Interior #25638",
//           "type": "interiorStory"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/25641",
//           "name": "Universe X (2000) #3",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/25642",
//           "name": "Interior #25642",
//           "type": "interiorStory"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/25643",
//           "name": "Universe X (2000) #4",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/25644",
//           "name": "Interior #25644",
//           "type": "interiorStory"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/25647",
//           "name": "Universe X (2000) #6",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/25648",
//           "name": "Interior #25648",
//           "type": "interiorStory"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/25649",
//           "name": "Universe X (2000) #7",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/25650",
//           "name": "Interior #25650",
//           "type": "interiorStory"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/26232",
//           "name": "Cover #26232",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/63581",
//           "name": "Avengers (2010) #1",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/63582",
//           "name": "Avengers (2010) #1",
//           "type": "interiorStory"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/64350",
//           "name": "Fantastic Four (1998) #581",
//           "type": "cover"
//         }
//       ],
//       "returned": 20
//     },
//     "events": {
//       "available": 1,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1012923/events",
//       "items": [
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/events/287",
//           "name": "Heroic Age"
//         }
//       ],
//       "returned": 1
//     },
//     "urls": [
//       {
//         "type": "detail",
//         "url": "http://marvel.com/comics/characters/1012923/immortus?utm_campaign=apiRef&utm_source=a846af165a8271d4a7032ce2d31da5ef"
//       },
//       {
//         "type": "wiki",
//         "url": "http://marvel.com/universe/Immortus?utm_campaign=apiRef&utm_source=a846af165a8271d4a7032ce2d31da5ef"
//       },
//       {
//         "type": "comiclink",
//         "url": "http://marvel.com/comics/characters/1012923/immortus?utm_campaign=apiRef&utm_source=a846af165a8271d4a7032ce2d31da5ef"
//       }
//     ]
//   },
//   {
//     "id": 1011273,
//     "name": "Imp",
//     "description": "",
//     "modified": "1969-12-31T19:00:00-0500",
//     "thumbnail": {
//       "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/30/4c002eee45d85",
//       "extension": "jpg"
//     },
//     "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011273",
//     "comics": {
//       "available": 0,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011273/comics",
//       "items": [],
//       "returned": 0
//     },
//     "series": {
//       "available": 0,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011273/series",
//       "items": [],
//       "returned": 0
//     },
//     "stories": {
//       "available": 0,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011273/stories",
//       "items": [],
//       "returned": 0
//     },
//     "events": {
//       "available": 0,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011273/events",
//       "items": [],
//       "returned": 0
//     },
//     "urls": [
//       {
//         "type": "detail",
//         "url": "http://marvel.com/characters/1025/imp?utm_campaign=apiRef&utm_source=a846af165a8271d4a7032ce2d31da5ef"
//       },
//       {
//         "type": "wiki",
//         "url": "http://marvel.com/universe/Imp?utm_campaign=apiRef&utm_source=a846af165a8271d4a7032ce2d31da5ef"
//       },
//       {
//         "type": "comiclink",
//         "url": "http://marvel.com/comics/characters/1011273/imp?utm_campaign=apiRef&utm_source=a846af165a8271d4a7032ce2d31da5ef"
//       }
//     ]
//   },
//   {
//     "id": 1011089,
//     "name": "Imperfects",
//     "description": "",
//     "modified": "1969-12-31T19:00:00-0500",
//     "thumbnail": {
//       "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
//       "extension": "jpg"
//     },
//     "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011089",
//     "comics": {
//       "available": 0,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011089/comics",
//       "items": [],
//       "returned": 0
//     },
//     "series": {
//       "available": 0,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011089/series",
//       "items": [],
//       "returned": 0
//     },
//     "stories": {
//       "available": 0,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011089/stories",
//       "items": [],
//       "returned": 0
//     },
//     "events": {
//       "available": 0,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011089/events",
//       "items": [],
//       "returned": 0
//     },
//     "urls": [
//       {
//         "type": "detail",
//         "url": "http://marvel.com/characters/1027/imperfects?utm_campaign=apiRef&utm_source=a846af165a8271d4a7032ce2d31da5ef"
//       },
//       {
//         "type": "wiki",
//         "url": "http://marvel.com/universe/Imperfects?utm_campaign=apiRef&utm_source=a846af165a8271d4a7032ce2d31da5ef"
//       },
//       {
//         "type": "comiclink",
//         "url": "http://marvel.com/comics/characters/1011089/imperfects?utm_campaign=apiRef&utm_source=a846af165a8271d4a7032ce2d31da5ef"
//       }
//     ]
//   },
//   {
//     "id": 1009363,
//     "name": "Imperial Guard",
//     "description": "",
//     "modified": "2016-07-08T14:38:03-0400",
//     "thumbnail": {
//       "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/30/539a0286b06bf",
//       "extension": "jpg"
//     },
//     "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009363",
//     "comics": {
//       "available": 19,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009363/comics",
//       "items": [
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/15573",
//           "name": "Fantastic Four (1998) #51"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/15574",
//           "name": "Fantastic Four (1998) #52"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/15575",
//           "name": "Fantastic Four (1998) #53"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/15916",
//           "name": "Fantastic Four/Inhumans (Trade Paperback)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/47127",
//           "name": "Infinity (2013) #6"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/55802",
//           "name": "Mighty Thor (2015) #15"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/69098",
//           "name": "Mr. and Mrs. X (2018) #3"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/18920",
//           "name": "Quasar (1989) #32"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/18921",
//           "name": "Quasar (1989) #33"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/28697",
//           "name": "Realm of Kings: Imperial Guard (2009) #1"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/28698",
//           "name": "Realm of Kings: Imperial Guard (2009) #2"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/28699",
//           "name": "Realm of Kings: Imperial Guard (2009) #3"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/28700",
//           "name": "Realm of Kings: Imperial Guard (2009) #4"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/28717",
//           "name": "Realm of Kings: Imperial Guard (2009) #5"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/61699",
//           "name": "Thanos (2016) #3"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/13911",
//           "name": "Uncanny X-Men (1963) #370"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/18315",
//           "name": "What If? (1989) #15"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/79947",
//           "name": "X-Men (2019) #9"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/14384",
//           "name": "X-Men (1991) #90"
//         }
//       ],
//       "returned": 19
//     },
//     "series": {
//       "available": 12,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009363/series",
//       "items": [
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/421",
//           "name": "Fantastic Four (1998 - 2012)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/2445",
//           "name": "Fantastic Four/Inhumans (2007)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/17735",
//           "name": "Infinity (2013)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/20527",
//           "name": "Mighty Thor (2015 - 2018)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/25200",
//           "name": "Mr. and Mrs. X (2018 - 2019)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/3695",
//           "name": "Quasar (1989 - 1994)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/9052",
//           "name": "Realm of Kings: Imperial Guard (2009 - 2010)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/22653",
//           "name": "Thanos (2016 - 2018)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/2258",
//           "name": "Uncanny X-Men (1963 - 2011)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/3648",
//           "name": "What If? (1989 - 1998)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/27567",
//           "name": "X-Men (2019 - 2021)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/2265",
//           "name": "X-Men (1991 - 2001)"
//         }
//       ],
//       "returned": 12
//     },
//     "stories": {
//       "available": 21,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009363/stories",
//       "items": [
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/28284",
//           "name": "History Repeats",
//           "type": "interiorStory"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/29327",
//           "name": "Eve of Destruction",
//           "type": "interiorStory"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/31836",
//           "name": "Fantastic Four (1998) #51",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/31837",
//           "name": "Eye of the Beholder",
//           "type": "interiorStory"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/31840",
//           "name": "Fantastic Four (1998) #52",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/31841",
//           "name": "Shadows of Doom",
//           "type": "interiorStory"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/31846",
//           "name": "interior to FF (1998) #53",
//           "type": "interiorStory"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/38980",
//           "name": "What If the Trial of Galactus had Ended  in Reed Richard's Execution",
//           "type": "interiorStory"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/40459",
//           "name": "Cover #40459",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/40461",
//           "name": "Cover #40461",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/62589",
//           "name": "Cover #62589",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/62591",
//           "name": "Cover #62591",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/62593",
//           "name": "Cover #62593",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/62595",
//           "name": "Cover #62595",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/62629",
//           "name": "Cover #62629",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/67451",
//           "name": "Fantastic Four (1998) #53",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/105847",
//           "name": "cover from Thanos/Inhumans Event (2013) #6",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/122647",
//           "name": "cover from Mighty Thor (2015) #15",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/133814",
//           "name": "cover from Thanos (2016) #3",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/151909",
//           "name": "cover from Mr. and Mrs. X (2018) #3",
//           "type": "cover"
//         }
//       ],
//       "returned": 20
//     },
//     "events": {
//       "available": 2,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009363/events",
//       "items": [
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/events/315",
//           "name": "Infinity"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/events/295",
//           "name": "Realm of Kings"
//         }
//       ],
//       "returned": 2
//     },
//     "urls": [
//       {
//         "type": "detail",
//         "url": "http://marvel.com/comics/characters/1009363/imperial_guard?utm_campaign=apiRef&utm_source=a846af165a8271d4a7032ce2d31da5ef"
//       },
//       {
//         "type": "wiki",
//         "url": "http://marvel.com/universe/Imperial_Guard?utm_campaign=apiRef&utm_source=a846af165a8271d4a7032ce2d31da5ef"
//       },
//       {
//         "type": "comiclink",
//         "url": "http://marvel.com/comics/characters/1009363/imperial_guard?utm_campaign=apiRef&utm_source=a846af165a8271d4a7032ce2d31da5ef"
//       }
//     ]
//   },
//   {
//     "id": 1009364,
//     "name": "Impossible Man",
//     "description": "",
//     "modified": "1969-12-31T19:00:00-0500",
//     "thumbnail": {
//       "path": "http://i.annihil.us/u/prod/marvel/i/mg/8/90/4c003eb8e1d23",
//       "extension": "jpg"
//     },
//     "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009364",
//     "comics": {
//       "available": 25,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009364/comics",
//       "items": [
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/39443",
//           "name": "ESSENTIAL X-MEN VOL. 4 TPB (Trade Paperback)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/12978",
//           "name": "Fantastic Four (1961) #175"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/12979",
//           "name": "Fantastic Four (1961) #176"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/12980",
//           "name": "Fantastic Four (1961) #177"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/12981",
//           "name": "Fantastic Four (1961) #178"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/12982",
//           "name": "Fantastic Four (1961) #179"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/12984",
//           "name": "Fantastic Four (1961) #180"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/8707",
//           "name": "Fantastic Four Annual (1963) #3"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/15906",
//           "name": "Fantastic Four Omnibus Vol. 2 (Hardcover)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/2089",
//           "name": "FANTASTIC FOUR VISIONARIES: GEORGE PEREZ VOL. 1 TPB (Trade Paperback)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/30425",
//           "name": "Hulk (2008) #30"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/37581",
//           "name": "Impossible Man (Trade Paperback)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/71125",
//           "name": "Impossible Man Summer Spectacular (1990) #2"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/16877",
//           "name": "Incredible Hulk Annual (1976) #20"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/10176",
//           "name": "Marvel Comics Presents (1988) #91"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/19560",
//           "name": "Marvel Two-in-One (1974) #86"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/10337",
//           "name": "New Mutants Annual (1984) #3"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/34009",
//           "name": "RED HULK: SCORCHED EARTH TPB (Trade Paperback)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/15168",
//           "name": "Silver Surfer (1987) #33"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/6088",
//           "name": "Spider-Man: Saga of the Sandman (Trade Paperback)"
//         }
//       ],
//       "returned": 20
//     },
//     "series": {
//       "available": 20,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009364/series",
//       "items": [
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/14398",
//           "name": "ESSENTIAL X-MEN VOL. 4 TPB (2011 - Present)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/2121",
//           "name": "Fantastic Four (1961 - 1998)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/2012",
//           "name": "Fantastic Four Annual (1963 - 1994)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/2435",
//           "name": "Fantastic Four Omnibus Vol. 2 (2007)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/1458",
//           "name": "FANTASTIC FOUR VISIONARIES: GEORGE PEREZ VOL. 1 TPB (2005)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/3374",
//           "name": "Hulk (2008 - 2012)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/13508",
//           "name": "Impossible Man (2010)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/25963",
//           "name": "Impossible Man Summer Spectacular (1990)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/2983",
//           "name": "Incredible Hulk Annual (1976 - 1994)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/2039",
//           "name": "Marvel Comics Presents (1988 - 1995)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/3715",
//           "name": "Marvel Two-in-One (1974 - 1983)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/2053",
//           "name": "New Mutants Annual (1984 - 1991)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/11151",
//           "name": "RED HULK: SCORCHED EARTH TPB (2011)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/2288",
//           "name": "Silver Surfer (1987 - 1998)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/1920",
//           "name": "Spider-Man: Saga of the Sandman (2007)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/26467",
//           "name": "WHA...HUH? 1 (2005)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/3648",
//           "name": "What If? (1989 - 1998)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/24198",
//           "name": "X-Force/Cable Annual (1995)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/2100",
//           "name": "X-Men Annual (1970 - 1994)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/343",
//           "name": "X-MEN: OLD SOLDIERS TPB (2004)"
//         }
//       ],
//       "returned": 20
//     },
//     "stories": {
//       "available": 31,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009364/stories",
//       "items": [
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/12575",
//           "name": "Fantastic Four (1961) #175",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/12576",
//           "name": "When Giants Walk the Sky!",
//           "type": "interiorStory"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/12577",
//           "name": "Fantastic Four (1961) #176",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/12578",
//           "name": "Improbable As It May Seem--The Impossible Man Is Back In Town!",
//           "type": "interiorStory"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/12580",
//           "name": "Fantastic Four (1961) #177",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/12581",
//           "name": "Look Out for the Frightful Four",
//           "type": "interiorStory"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/12582",
//           "name": "Fantastic Four (1961) #178",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/12583",
//           "name": "Call My Killer--the Brute!",
//           "type": "interiorStory"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/12584",
//           "name": "Fantastic Four (1961) #179",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/12585",
//           "name": "A Robinson Crusoe in the Negative Zone!",
//           "type": "interiorStory"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/12591",
//           "name": "Fantastic Four (1961) #180",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/12592",
//           "name": "Bedlam at the Baxter Building!",
//           "type": "interiorStory"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/15346",
//           "name": "Fantastic Four Annual (1963) #3",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/15347",
//           "name": "Bedlam at the Baxter Builing",
//           "type": ""
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/19880",
//           "name": "Cover #19880",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/19881",
//           "name": "Scavenger Hunt",
//           "type": "interiorStory"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/21616",
//           "name": "Cover #21616",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/21617",
//           "name": "Anything You Can Do--!",
//           "type": "interiorStory"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/23656",
//           "name": "Truth or Daredevil",
//           "type": "interiorStory"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/26283",
//           "name": "Interior #26283",
//           "type": "interiorStory"
//         }
//       ],
//       "returned": 20
//     },
//     "events": {
//       "available": 1,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009364/events",
//       "items": [
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/events/116",
//           "name": "Acts of Vengeance!"
//         }
//       ],
//       "returned": 1
//     },
//     "urls": [
//       {
//         "type": "detail",
//         "url": "http://marvel.com/characters/1029/impossible_man?utm_campaign=apiRef&utm_source=a846af165a8271d4a7032ce2d31da5ef"
//       },
//       {
//         "type": "wiki",
//         "url": "http://marvel.com/universe/Impossible_Man?utm_campaign=apiRef&utm_source=a846af165a8271d4a7032ce2d31da5ef"
//       },
//       {
//         "type": "comiclink",
//         "url": "http://marvel.com/comics/characters/1009364/impossible_man?utm_campaign=apiRef&utm_source=a846af165a8271d4a7032ce2d31da5ef"
//       }
//     ]
//   },
//   {
//     "id": 1011063,
//     "name": "In-Betweener",
//     "description": "",
//     "modified": "2011-05-23T16:36:40-0400",
//     "thumbnail": {
//       "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/60/4c0030f999ecb",
//       "extension": "jpg"
//     },
//     "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011063",
//     "comics": {
//       "available": 5,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011063/comics",
//       "items": [
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/17546",
//           "name": "Avengers (1998) #60"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/1098",
//           "name": "Avengers Vol. 1: World Trust (Trade Paperback)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/103961",
//           "name": "G.O.D.S. (2023) #4"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/62512",
//           "name": "Ultimates 2 (2016) #3"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/38981",
//           "name": "Vengeance (2011) #3"
//         }
//       ],
//       "returned": 5
//     },
//     "series": {
//       "available": 5,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011063/series",
//       "items": [
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/354",
//           "name": "Avengers (1998 - 2004)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/158",
//           "name": "Avengers Vol. 1: World Trust (2003)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/35717",
//           "name": "G.O.D.S. (2023 - Present)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/22929",
//           "name": "Ultimates 2 (2016 - 2017)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/14720",
//           "name": "Vengeance (2011)"
//         }
//       ],
//       "returned": 5
//     },
//     "stories": {
//       "available": 4,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011063/stories",
//       "items": [
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/37461",
//           "name": "Chaos & Order",
//           "type": "interiorStory"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/94746",
//           "name": "Vengeance (2011) #3",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/135863",
//           "name": "Cover to Ultimates 2 (2016) #3",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/229025",
//           "name": "cover from Gods (2023) #4",
//           "type": "cover"
//         }
//       ],
//       "returned": 4
//     },
//     "events": {
//       "available": 0,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011063/events",
//       "items": [],
//       "returned": 0
//     },
//     "urls": [
//       {
//         "type": "detail",
//         "url": "http://marvel.com/characters/1031/in-betweener?utm_campaign=apiRef&utm_source=a846af165a8271d4a7032ce2d31da5ef"
//       },
//       {
//         "type": "wiki",
//         "url": "http://marvel.com/universe/In-Betweener?utm_campaign=apiRef&utm_source=a846af165a8271d4a7032ce2d31da5ef"
//       },
//       {
//         "type": "comiclink",
//         "url": "http://marvel.com/comics/characters/1011063/in-betweener?utm_campaign=apiRef&utm_source=a846af165a8271d4a7032ce2d31da5ef"
//       }
//     ]
//   },
//   {
//     "id": 1011064,
//     "name": "Inertia",
//     "description": "",
//     "modified": "1969-12-31T19:00:00-0500",
//     "thumbnail": {
//       "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/60/4c0030f6eab3d",
//       "extension": "jpg"
//     },
//     "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011064",
//     "comics": {
//       "available": 3,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011064/comics",
//       "items": [
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/3908",
//           "name": "Squadron Supreme (2006) #1"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/5425",
//           "name": "Squadron Supreme Vol. 1: The Pre-War Years Premiere (Hardcover)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/5289",
//           "name": "Ultimate Power (2006) #1"
//         }
//       ],
//       "returned": 3
//     },
//     "series": {
//       "available": 3,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011064/series",
//       "items": [
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/944",
//           "name": "Squadron Supreme (2006)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/1791",
//           "name": "Squadron Supreme Vol. 1: The Pre-War Years Premiere (2006)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/1124",
//           "name": "Ultimate Power (2006 - 2008)"
//         }
//       ],
//       "returned": 3
//     },
//     "stories": {
//       "available": 3,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011064/stories",
//       "items": [
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/5249",
//           "name": "1 of 6 - The Pre-War Years",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/6184",
//           "name": "ULTIMATE POWER (2006) #1",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/6190",
//           "name": "Cover #6190",
//           "type": "cover"
//         }
//       ],
//       "returned": 3
//     },
//     "events": {
//       "available": 0,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011064/events",
//       "items": [],
//       "returned": 0
//     },
//     "urls": [
//       {
//         "type": "detail",
//         "url": "http://marvel.com/characters/1034/inertia?utm_campaign=apiRef&utm_source=a846af165a8271d4a7032ce2d31da5ef"
//       },
//       {
//         "type": "wiki",
//         "url": "http://marvel.com/universe/Inertia_%28Earth-712%29?utm_campaign=apiRef&utm_source=a846af165a8271d4a7032ce2d31da5ef"
//       },
//       {
//         "type": "comiclink",
//         "url": "http://marvel.com/comics/characters/1011064/inertia?utm_campaign=apiRef&utm_source=a846af165a8271d4a7032ce2d31da5ef"
//       }
//     ]
//   },
//   {
//     "id": 1011146,
//     "name": "Infant Terrible",
//     "description": "",
//     "modified": "1969-12-31T19:00:00-0500",
//     "thumbnail": {
//       "path": "http://i.annihil.us/u/prod/marvel/i/mg/2/f0/4c002f7854e02",
//       "extension": "jpg"
//     },
//     "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011146",
//     "comics": {
//       "available": 0,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011146/comics",
//       "items": [],
//       "returned": 0
//     },
//     "series": {
//       "available": 0,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011146/series",
//       "items": [],
//       "returned": 0
//     },
//     "stories": {
//       "available": 0,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011146/stories",
//       "items": [],
//       "returned": 0
//     },
//     "events": {
//       "available": 0,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011146/events",
//       "items": [],
//       "returned": 0
//     },
//     "urls": [
//       {
//         "type": "detail",
//         "url": "http://marvel.com/characters/2878/infant_terrible?utm_campaign=apiRef&utm_source=a846af165a8271d4a7032ce2d31da5ef"
//       },
//       {
//         "type": "wiki",
//         "url": "http://marvel.com/universe/Infant_Terrible?utm_campaign=apiRef&utm_source=a846af165a8271d4a7032ce2d31da5ef"
//       },
//       {
//         "type": "comiclink",
//         "url": "http://marvel.com/comics/characters/1011146/infant_terrible?utm_campaign=apiRef&utm_source=a846af165a8271d4a7032ce2d31da5ef"
//       }
//     ]
//   },
//   {
//     "id": 1009365,
//     "name": "Inhumans",
//     "description": "",
//     "modified": "2016-07-08T15:02:03-0400",
//     "thumbnail": {
//       "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/a0/526033a73dca3",
//       "extension": "jpg"
//     },
//     "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009365",
//     "comics": {
//       "available": 256,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009365/comics",
//       "items": [
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/56415",
//           "name": "All-New Inhumans (2015) #8"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/56416",
//           "name": "All-New Inhumans (2015) #9"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/56417",
//           "name": "All-New Inhumans (2015) #10"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/56418",
//           "name": "All-New Inhumans (2015) #11"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/60518",
//           "name": "All-New X-Men (2015) #17"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/60519",
//           "name": "All-New X-Men (2015) #18"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/62095",
//           "name": "ALL-NEW X-MEN: INEVITABLE VOL. 4 - IVX TPB (Trade Paperback)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/23245",
//           "name": "Amazing Adventures (1970) #1"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/23256",
//           "name": "Amazing Adventures (1970) #2"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/23267",
//           "name": "Amazing Adventures (1970) #3"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/23278",
//           "name": "Amazing Adventures (1970) #4"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/23279",
//           "name": "Amazing Adventures (1970) #5"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/23280",
//           "name": "Amazing Adventures (1970) #6"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/23281",
//           "name": "Amazing Adventures (1970) #7"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/23282",
//           "name": "Amazing Adventures (1970) #8"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/23283",
//           "name": "Amazing Adventures (1970) #9"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/23246",
//           "name": "Amazing Adventures (1970) #10"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/65436",
//           "name": "Black Bolt (2017) #9"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/66268",
//           "name": "Black Bolt (2017) #10"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/65327",
//           "name": "Black Bolt Vol. 1: Hard Time (Trade Paperback)"
//         }
//       ],
//       "returned": 20
//     },
//     "series": {
//       "available": 117,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009365/series",
//       "items": [
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/20681",
//           "name": "All-New Inhumans (2015 - 2016)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/20622",
//           "name": "All-New X-Men (2015 - 2017)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/22729",
//           "name": "ALL-NEW X-MEN: INEVITABLE VOL. 4 - IVX TPB (2017)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/6666",
//           "name": "Amazing Adventures (1970 - 1976)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/3621",
//           "name": "Avengers (1996 - 1997)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/23121",
//           "name": "Black Bolt (2017 - 2018)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/23778",
//           "name": "Black Bolt Vol. 1: Hard Time (2017)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/24326",
//           "name": "Black Bolt Vol. 2: Home Free (2018)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/784",
//           "name": "Black Panther (2005 - 2008)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/2226",
//           "name": "Black Panther: Civil War (2007)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/19345",
//           "name": "Captain America Special (2015)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/20065",
//           "name": "Captain America: White (2015)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/2000",
//           "name": "Captain Marvel (1968 - 1979)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/22982",
//           "name": "Civil War II (2017)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/21417",
//           "name": "Civil War II (2016)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/21674",
//           "name": "CIVIL WAR II FALLOUT TPB (2017)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/21419",
//           "name": "CIVIL WAR II TPB (2017)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/2002",
//           "name": "Daredevil (1964 - 1998)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/20780",
//           "name": "Daredevil (2015 - 2018)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/24669",
//           "name": "Dazzler: X-Song (2018)"
//         }
//       ],
//       "returned": 20
//     },
//     "stories": {
//       "available": 282,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009365/stories",
//       "items": [
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/1699",
//           "name": "Cover #1699",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/1700",
//           "name": "Interior #1700",
//           "type": "interiorStory"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/1701",
//           "name": "Cover #1701",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/1702",
//           "name": "Interior #1702",
//           "type": "interiorStory"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/1704",
//           "name": "Interior #1704",
//           "type": "interiorStory"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/1783",
//           "name": "Interior #1783",
//           "type": "interiorStory"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/2056",
//           "name": "Interior #2056",
//           "type": "interiorStory"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/2163",
//           "name": "Interior #2163",
//           "type": "interiorStory"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/2164",
//           "name": "Cover #2164",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/2165",
//           "name": "Interior #2165",
//           "type": "interiorStory"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/3852",
//           "name": "Cover #3852",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/4181",
//           "name": "Cover #4181",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/5331",
//           "name": "Ultimate Fantastic Four Annual (2005) #1",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/5332",
//           "name": "1 of 1 - Inhumans",
//           "type": "interiorStory"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/5421",
//           "name": "FANTASTIC FOUR: THE END (2006) #4",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/6232",
//           "name": "1 of 6 - Silent War",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/7896",
//           "name": "2 of 6 - Silent War",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/8349",
//           "name": "3 of 6 - Silent War",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/8351",
//           "name": "4 of 6 - Silent War",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/12743",
//           "name": "FANTASTIC FOUR (1961) #240",
//           "type": "cover"
//         }
//       ],
//       "returned": 20
//     },
//     "events": {
//       "available": 11,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009365/events",
//       "items": [
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/events/238",
//           "name": "Civil War"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/events/315",
//           "name": "Infinity"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/events/317",
//           "name": "Inhumanity"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/events/334",
//           "name": "Inhumans Vs. X-Men"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/events/311",
//           "name": "Marvel NOW!"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/events/337",
//           "name": "Monsters Unleashed"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/events/295",
//           "name": "Realm of Kings"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/events/336",
//           "name": "Secret Empire"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/events/269",
//           "name": "Secret Invasion"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/events/323",
//           "name": "Secret Wars (2015)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/events/294",
//           "name": "The Thanos Imperative"
//         }
//       ],
//       "returned": 11
//     },
//     "urls": [
//       {
//         "type": "detail",
//         "url": "http://marvel.com/comics/characters/1009365/inhumans?utm_campaign=apiRef&utm_source=a846af165a8271d4a7032ce2d31da5ef"
//       },
//       {
//         "type": "wiki",
//         "url": "http://marvel.com/universe/Inhumans?utm_campaign=apiRef&utm_source=a846af165a8271d4a7032ce2d31da5ef"
//       },
//       {
//         "type": "comiclink",
//         "url": "http://marvel.com/comics/characters/1009365/inhumans?utm_campaign=apiRef&utm_source=a846af165a8271d4a7032ce2d31da5ef"
//       }
//     ]
//   },
//   {
//     "id": 1011293,
//     "name": "Ink",
//     "description": "",
//     "modified": "1969-12-31T19:00:00-0500",
//     "thumbnail": {
//       "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
//       "extension": "jpg"
//     },
//     "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011293",
//     "comics": {
//       "available": 2,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011293/comics",
//       "items": [
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/37491",
//           "name": "X-Men: Earth's Mutant Heroes (2010) #1"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/66563",
//           "name": "X-Men: Gold (2017) #24"
//         }
//       ],
//       "returned": 2
//     },
//     "series": {
//       "available": 2,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011293/series",
//       "items": [
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/13492",
//           "name": "X-Men: Earth's Mutant Heroes (2010)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/23016",
//           "name": "X-Men: Gold (2017 - 2018)"
//         }
//       ],
//       "returned": 2
//     },
//     "stories": {
//       "available": 2,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011293/stories",
//       "items": [
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/82977",
//           "name": "X-Men: Earth's Mutant Heroes #1",
//           "type": "interiorStory"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/144280",
//           "name": "cover from X-Men: Gold (2017) #24",
//           "type": "cover"
//         }
//       ],
//       "returned": 2
//     },
//     "events": {
//       "available": 0,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011293/events",
//       "items": [],
//       "returned": 0
//     },
//     "urls": [
//       {
//         "type": "detail",
//         "url": "http://marvel.com/characters/1041/ink?utm_campaign=apiRef&utm_source=a846af165a8271d4a7032ce2d31da5ef"
//       },
//       {
//         "type": "wiki",
//         "url": "http://marvel.com/universe/Ink?utm_campaign=apiRef&utm_source=a846af165a8271d4a7032ce2d31da5ef"
//       },
//       {
//         "type": "comiclink",
//         "url": "http://marvel.com/comics/characters/1011293/ink?utm_campaign=apiRef&utm_source=a846af165a8271d4a7032ce2d31da5ef"
//       }
//     ]
//   },
//   {
//     "id": 1011024,
//     "name": "Invaders",
//     "description": "",
//     "modified": "2014-06-13T14:01:12-0400",
//     "thumbnail": {
//       "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/60/539b3c2fca079",
//       "extension": "jpg"
//     },
//     "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011024",
//     "comics": {
//       "available": 94,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011024/comics",
//       "items": [
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/24371",
//           "name": "All Winners Comics 70th Anniversary Special (2009) #1"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/4955",
//           "name": "Avengers (1998) #83"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/4956",
//           "name": "Avengers (1998) #84"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/1357",
//           "name": "Avengers Vol. 5: Once an Invader (Trade Paperback)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/21247",
//           "name": "Avengers/Invaders (2008) #1"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/21394",
//           "name": "Avengers/Invaders (2008) #2"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/21565",
//           "name": "Avengers/Invaders (2008) #3"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/21761",
//           "name": "Avengers/Invaders (2008) #4"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/22330",
//           "name": "Avengers/Invaders (2008) #5"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/22524",
//           "name": "Avengers/Invaders (2008) #6"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/22935",
//           "name": "Avengers/Invaders (2008) #7"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/23132",
//           "name": "Avengers/Invaders (2008) #8"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/24549",
//           "name": "Avengers/Invaders (2008) #9"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/23975",
//           "name": "Avengers/Invaders (2008) #10"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/24174",
//           "name": "Avengers/Invaders (2008) #11"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/24539",
//           "name": "Avengers/Invaders (2008) #12"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/62119",
//           "name": "CAPTAIN AMERICA AND THE AVENGERS: THE COMPLETE COLLECTION TPB (Trade Paperback)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/21047",
//           "name": "Giant-Size Avengers/Invaders (Trade Paperback)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/74763",
//           "name": "Invaders (2019) #1"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/51125",
//           "name": "Invaders (1993) #1"
//         }
//       ],
//       "returned": 20
//     },
//     "series": {
//       "available": 23,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011024/series",
//       "items": [
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/7534",
//           "name": "All Winners Comics 70th Anniversary Special (2009)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/354",
//           "name": "Avengers (1998 - 2004)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/1262",
//           "name": "Avengers Vol. 5: Once an Invader (2004)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/4864",
//           "name": "Avengers/Invaders (2008 - 2009)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/22747",
//           "name": "CAPTAIN AMERICA AND THE AVENGERS: THE COMPLETE COLLECTION TPB (2017)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/4461",
//           "name": "Giant-Size Avengers/Invaders (2008)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/26899",
//           "name": "Invaders (2019 - Present)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/3726",
//           "name": "Invaders (1975 - 1979)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/19217",
//           "name": "Invaders (1993)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/2028",
//           "name": "Invaders Annual (1977)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/2567",
//           "name": "INVADERS CLASSIC VOL. 1 TPB (2007)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/5255",
//           "name": "INVADERS CLASSIC VOL. 2 TPB (2008)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/11825",
//           "name": "Invaders Now! (2010 - 2011)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/26943",
//           "name": "Invaders Vol. 1: War Ghosts (2019)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/26944",
//           "name": "Invaders Vol. 2: Dead In The Water (2019)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/2045",
//           "name": "Marvel Premiere (1972 - 1981)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/15454",
//           "name": "Marvel Zombies Destroy! (2011 - 2012)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/23530",
//           "name": "Namor the Sub-Mariner (1990 - 1995)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/1241",
//           "name": "NEW INVADERS: TO END ALL WARS TPB (2005)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/23001",
//           "name": "Saga of the Sub-Mariner (1988 - 1989)"
//         }
//       ],
//       "returned": 20
//     },
//     "stories": {
//       "available": 156,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011024/stories",
//       "items": [
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/3112",
//           "name": "Interior #3112",
//           "type": "interiorStory"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/3114",
//           "name": "Interior #3114",
//           "type": "interiorStory"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/3116",
//           "name": "“TO END ALL WARS” PART 2 (OF 3) A secret society of madmen and monsters, a battleship with world-threatening weaponry, the retur",
//           "type": "interiorStory"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/19938",
//           "name": "Hey, Ma!  They're Blitzin' the Bronx!",
//           "type": "interiorStory"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/20468",
//           "name": "Cover #20468",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/20472",
//           "name": "Another Agonizingly Personal Recollection",
//           "type": "text feature"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/20591",
//           "name": "Cover #20591",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/20592",
//           "name": "\"Okay, Axis -- Here We Come!\"",
//           "type": "interiorStory"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/20597",
//           "name": "Okay, Axis, Here We Come -- Again!",
//           "type": "text article"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/20842",
//           "name": "Interior #20842",
//           "type": "interiorStory"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/20843",
//           "name": "What if the Invaders Had Stayed Together After World War Two?",
//           "type": "interiorStory"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/20845",
//           "name": "Why Not?",
//           "type": "text article"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/42607",
//           "name": "Cover #42607",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/42608",
//           "name": "Five Against the Flying Death",
//           "type": "interiorStory"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/42609",
//           "name": "Cover #42609",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/42610",
//           "name": "Blitzkrieg at Bermuda",
//           "type": "interiorStory"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/42611",
//           "name": "Cover #42611",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/42612",
//           "name": "Attack of the Teutonic Knight",
//           "type": "interiorStory"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/42613",
//           "name": "Cover #42613",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/42614",
//           "name": "Calling the Kid Commandos",
//           "type": "interiorStory"
//         }
//       ],
//       "returned": 20
//     },
//     "events": {
//       "available": 0,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011024/events",
//       "items": [],
//       "returned": 0
//     },
//     "urls": [
//       {
//         "type": "detail",
//         "url": "http://marvel.com/characters/1045/invaders?utm_campaign=apiRef&utm_source=a846af165a8271d4a7032ce2d31da5ef"
//       },
//       {
//         "type": "wiki",
//         "url": "http://marvel.com/universe/Invaders?utm_campaign=apiRef&utm_source=a846af165a8271d4a7032ce2d31da5ef"
//       },
//       {
//         "type": "comiclink",
//         "url": "http://marvel.com/comics/characters/1011024/invaders?utm_campaign=apiRef&utm_source=a846af165a8271d4a7032ce2d31da5ef"
//       }
//     ]
//   },
//   {
//     "id": 1009366,
//     "name": "Invisible Woman",
//     "description": "",
//     "modified": "2013-10-24T13:48:00-0400",
//     "thumbnail": {
//       "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/a0/52695b9cd40b6",
//       "extension": "jpg"
//     },
//     "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009366",
//     "comics": {
//       "available": 740,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009366/comics",
//       "items": [
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/356",
//           "name": "4 (2004) #1"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/388",
//           "name": "4 (2004) #2"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/404",
//           "name": "4 (2004) #3"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/471",
//           "name": "4 (2004) #4"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/498",
//           "name": "4 (2004) #5"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/682",
//           "name": "4 (2004) #6"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/1812",
//           "name": "4 (2004) #7"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/571",
//           "name": "4 (2004) #8"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/556",
//           "name": "4 (2004) #9"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/811",
//           "name": "4 (2004) #10"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/892",
//           "name": "4 (2004) #11"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/52",
//           "name": "4 (2004) #12"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/2120",
//           "name": "4 (2004) #19"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/2230",
//           "name": "4 (2004) #20"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/1328",
//           "name": "4 Vol. 1: Wolf at the Door (Trade Paperback)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/1550",
//           "name": "4 Vol. 2: The Stuff of Nightmares (Trade Paperback)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/22856",
//           "name": "Adam: Legend of the Blue Marvel (2008) #2"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/38524",
//           "name": "Age of X: Universe (2011) #1"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/38523",
//           "name": "Age of X: Universe (2011) #2"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/12637",
//           "name": "Alpha Flight (1983) #1"
//         }
//       ],
//       "returned": 20
//     },
//     "series": {
//       "available": 182,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009366/series",
//       "items": [
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/725",
//           "name": "4 (2004 - 2006)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/1251",
//           "name": "4 Vol. 1: Wolf at the Door (2004)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/1253",
//           "name": "4 Vol. 2: The Stuff of Nightmares (2005)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/6079",
//           "name": "Adam: Legend of the Blue Marvel (2008)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/13896",
//           "name": "Age of X: Universe (2011)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/2116",
//           "name": "Alpha Flight (1983 - 1994)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/454",
//           "name": "Amazing Spider-Man (1999 - 2013)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/10030",
//           "name": "Atlantis Attacks (2011)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/10031",
//           "name": "Atlantis Attacks (DM Only) (2011)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/1991",
//           "name": "Avengers (1963 - 1996)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/354",
//           "name": "Avengers (1998 - 2004)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/1340",
//           "name": "Avengers Assemble (2004)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/1496",
//           "name": "Avengers Assemble Vol. 2 (2005)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/1816",
//           "name": "Avengers Assemble Vol. 4 (2007)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/1503",
//           "name": "Best of the Fantastic Four Vol. 1 (2005)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/2115",
//           "name": "Black Panther (1998 - 2003)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/784",
//           "name": "Black Panther (2005 - 2008)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/2226",
//           "name": "Black Panther: Civil War (2007)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/1995",
//           "name": "Cable (1993 - 2002)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/693",
//           "name": "Cable & Deadpool (2004 - 2008)"
//         }
//       ],
//       "returned": 20
//     },
//     "stories": {
//       "available": 968,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009366/stories",
//       "items": [
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/798",
//           "name": "Fantastic Four (1998) #507",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/799",
//           "name": "Interior #799",
//           "type": "interiorStory"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/800",
//           "name": "Fantastic Four (1998) #508",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/801",
//           "name": "Interior #801",
//           "type": "interiorStory"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/802",
//           "name": "Fantastic Four (1998) #509",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/803",
//           "name": "Interior #803",
//           "type": "interiorStory"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/898",
//           "name": "Fantastic Four (1998) #520",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/899",
//           "name": "1 of 5 - Galactus",
//           "type": "interiorStory"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/912",
//           "name": "Fantastic Four (1998) #512",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/913",
//           "name": "Interior #913",
//           "type": "interiorStory"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/914",
//           "name": "Fantastic Four (1998) #516",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/915",
//           "name": "Interior #915",
//           "type": "interiorStory"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/916",
//           "name": "Fantastic Four (1998) #513",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/917",
//           "name": "Interior #917",
//           "type": "interiorStory"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/918",
//           "name": "Fantastic Four (1998) #514",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/919",
//           "name": "Interior #919",
//           "type": "interiorStory"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/920",
//           "name": "Fantastic Four (1998) #517",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/921",
//           "name": "Interior #921",
//           "type": "interiorStory"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/922",
//           "name": "Fantastic Four (1998) #518",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/923",
//           "name": "AVENGERS DISASSEMBLED TIE-IN! \"FOURTITUDE\" PART 2 (OF 3) With public opinion of the FF at an all-time low and with all of Manhat",
//           "type": "interiorStory"
//         }
//       ],
//       "returned": 20
//     },
//     "events": {
//       "available": 20,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009366/events",
//       "items": [
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/events/116",
//           "name": "Acts of Vengeance!"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/events/303",
//           "name": "Age of X"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/events/233",
//           "name": "Atlantis Attacks"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/events/234",
//           "name": "Avengers Disassembled"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/events/296",
//           "name": "Chaos War"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/events/238",
//           "name": "Civil War"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/events/318",
//           "name": "Dark Reign"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/events/240",
//           "name": "Days of Future Present"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/events/287",
//           "name": "Heroic Age"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/events/252",
//           "name": "Inferno"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/events/29",
//           "name": "Infinity War"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/events/255",
//           "name": "Initiative"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/events/37",
//           "name": "Maximum Security"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/events/154",
//           "name": "Onslaught"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/events/270",
//           "name": "Secret Wars"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/events/271",
//           "name": "Secret Wars II"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/events/309",
//           "name": "Shattered Heroes"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/events/273",
//           "name": "Siege"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/events/305",
//           "name": "Spider-Island"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/events/277",
//           "name": "World War Hulk"
//         }
//       ],
//       "returned": 20
//     },
//     "urls": [
//       {
//         "type": "detail",
//         "url": "http://marvel.com/characters/1047/invisible_woman?utm_campaign=apiRef&utm_source=a846af165a8271d4a7032ce2d31da5ef"
//       },
//       {
//         "type": "wiki",
//         "url": "http://marvel.com/universe/Invisible_Woman?utm_campaign=apiRef&utm_source=a846af165a8271d4a7032ce2d31da5ef"
//       },
//       {
//         "type": "comiclink",
//         "url": "http://marvel.com/comics/characters/1009366/invisible_woman?utm_campaign=apiRef&utm_source=a846af165a8271d4a7032ce2d31da5ef"
//       }
//     ]
//   },
//   {
//     "id": 1017301,
//     "name": "Invisible Woman (Marvel: Avengers Alliance)",
//     "description": "",
//     "modified": "2013-09-18T10:16:47-0400",
//     "thumbnail": {
//       "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/80/5239b5c4cb782",
//       "extension": "jpg"
//     },
//     "resourceURI": "http://gateway.marvel.com/v1/public/characters/1017301",
//     "comics": {
//       "available": 0,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017301/comics",
//       "items": [],
//       "returned": 0
//     },
//     "series": {
//       "available": 0,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017301/series",
//       "items": [],
//       "returned": 0
//     },
//     "stories": {
//       "available": 0,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017301/stories",
//       "items": [],
//       "returned": 0
//     },
//     "events": {
//       "available": 0,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017301/events",
//       "items": [],
//       "returned": 0
//     },
//     "urls": [
//       {
//         "type": "detail",
//         "url": "http://marvel.com/characters/1047/invisible_woman?utm_campaign=apiRef&utm_source=a846af165a8271d4a7032ce2d31da5ef"
//       },
//       {
//         "type": "comiclink",
//         "url": "http://marvel.com/comics/characters/1017301/invisible_woman_marvel_avengers_alliance?utm_campaign=apiRef&utm_source=a846af165a8271d4a7032ce2d31da5ef"
//       }
//     ]
//   },
//   {
//     "id": 1010934,
//     "name": "Invisible Woman (Ultimate)",
//     "description": "",
//     "modified": "2010-12-08T15:02:10-0500",
//     "thumbnail": {
//       "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/b0/4c00342d26fc5",
//       "extension": "jpg"
//     },
//     "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010934",
//     "comics": {
//       "available": 52,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010934/comics",
//       "items": [
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/30215",
//           "name": "Ultimate Comics Doom (2010) #2"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/30216",
//           "name": "Ultimate Comics Doom (2010) #3"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/30206",
//           "name": "Ultimate Comics Enemy (2010) #1"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/32674",
//           "name": "Ultimate Comics Enemy (2010) #1 (VILLAIN VARIANT)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/32676",
//           "name": "Ultimate Comics Enemy (2010) #1 (FOILOGRAM VARIANT)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/30207",
//           "name": "Ultimate Comics Enemy (2010) #2"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/30208",
//           "name": "Ultimate Comics Enemy (2010) #3"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/30209",
//           "name": "Ultimate Comics Enemy (2010) #4"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/3343",
//           "name": "Ultimate Extinction (2006) #1"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/3880",
//           "name": "Ultimate Extinction (2006) #3"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/4016",
//           "name": "Ultimate Extinction (2006) #4"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/4133",
//           "name": "Ultimate Extinction (2006) #5"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/1972",
//           "name": "Ultimate Fantastic Four (2003) #19"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/2077",
//           "name": "Ultimate Fantastic Four (2003) #20"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/2183",
//           "name": "Ultimate Fantastic Four (2003) #21"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/2383",
//           "name": "Ultimate Fantastic Four (2003) #21 (variant cover)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/2303",
//           "name": "Ultimate Fantastic Four (2003) #22"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/2412",
//           "name": "Ultimate Fantastic Four (2003) #23"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/2413",
//           "name": "Ultimate Fantastic Four (2003) #24"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/comics/3036",
//           "name": "Ultimate Fantastic Four (2003) #25"
//         }
//       ],
//       "returned": 20
//     },
//     "series": {
//       "available": 19,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010934/series",
//       "items": [
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/9958",
//           "name": "Ultimate Comics Doom (2010 - 2011)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/9196",
//           "name": "Ultimate Comics Enemy (2010)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/759",
//           "name": "Ultimate Extinction (2006)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/702",
//           "name": "Ultimate Fantastic Four (2003 - 2009)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/1056",
//           "name": "Ultimate Fantastic Four Annual (2005 - 2006)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/1415",
//           "name": "Ultimate Fantastic Four Vol. 4: Inhuman (2005)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/1520",
//           "name": "ULTIMATE FANTASTIC FOUR VOL. 5: CROSSOVER TPB (2006)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/1892",
//           "name": "ULTIMATE FANTASTIC FOUR VOL. 7: GOD WAR TPB (2007)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/2433",
//           "name": "Ultimate Fantastic Four Vol. 8: Devils (2007)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/5743",
//           "name": "Ultimate Fantastic Four/Ultimate X-Men Annual (2008)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/1030",
//           "name": "Ultimate Fantastic Four/X-Men (2006)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/2223",
//           "name": "Ultimate Galactus Trilogy (2007)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/2311",
//           "name": "Ultimate Marvel Team-Up (2001 - 2002)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/1823",
//           "name": "Ultimate Marvel Team-Up Ultimate Collection (2006)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/1124",
//           "name": "Ultimate Power (2006 - 2008)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/353",
//           "name": "Ultimate X-Men/Fantastic Four (2005)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/1794",
//           "name": "ULTIMATE X-MEN/FANTASTIC FOUR TPB (2006)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/5744",
//           "name": "Ultimate X-Men/Ultimate Fantastic Four Annual (2008)"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/series/8543",
//           "name": "Ultimatum: Fantastic Four Requiem One-Shot (2009)"
//         }
//       ],
//       "returned": 19
//     },
//     "stories": {
//       "available": 70,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010934/stories",
//       "items": [
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/488",
//           "name": "Ultimate X-Men/Fantastic Four (2005) #1",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/489",
//           "name": "Interior #489",
//           "type": "interiorStory"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/2665",
//           "name": "ULTIMATE FANTASTIC FOUR (2003) #19",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/2667",
//           "name": "ULTIMATE FANTASTIC FOUR (2003) #20",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/2669",
//           "name": "ULTIMATE FANTASTIC FOUR (2003) #21",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/2671",
//           "name": "ULTIMATE FANTASTIC FOUR (2003) #22",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/2673",
//           "name": "1 of 3 - X-Over",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/2675",
//           "name": "ULTIMATE FANTASTIC FOUR (2003) #23",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/2677",
//           "name": "ULTIMATE FANTASTIC FOUR (2003) #24",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/2679",
//           "name": "ULTIMATE FANTASTIC FOUR (2003) #25",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/2689",
//           "name": "ULTIMATE FANTASTIC FOUR (2003) #30",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/2691",
//           "name": "2 of 3 - Frightful",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/2693",
//           "name": "3 of 3 - Frightful",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/2695",
//           "name": "1 of 6 - God War",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/2705",
//           "name": "6 of 6 - God War",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/3546",
//           "name": "Ultimate Extinction (2006) #1",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/3547",
//           "name": "1 of 5 - 5XLS",
//           "type": "interiorStory"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/3550",
//           "name": "Ultimate Extinction (2006) #3",
//           "type": "cover"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/3551",
//           "name": "3 of 5 - 5XLS",
//           "type": "interiorStory"
//         },
//         {
//           "resourceURI": "http://gateway.marvel.com/v1/public/stories/3552",
//           "name": "Ultimate Extinction (2006) #4",
//           "type": "cover"
//         }
//       ],
//       "returned": 20
//     },
//     "events": {
//       "available": 0,
//       "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010934/events",
//       "items": [],
//       "returned": 0
//     },
//     "urls": [
//       {
//         "type": "detail",
//         "url": "http://marvel.com/characters/1047/invisible_woman?utm_campaign=apiRef&utm_source=a846af165a8271d4a7032ce2d31da5ef"
//       },
//       {
//         "type": "wiki",
//         "url": "http://marvel.com/universe/Invisible_Woman_%28Ultimate%29?utm_campaign=apiRef&utm_source=a846af165a8271d4a7032ce2d31da5ef"
//       },
//       {
//         "type": "comiclink",
//         "url": "http://marvel.com/comics/characters/1010934/invisible_woman_ultimate?utm_campaign=apiRef&utm_source=a846af165a8271d4a7032ce2d31da5ef"
//       }
//     ]
//   }
// ]
let debounceTimeout;

const ts = new Date().getTime()

const resultDiv = document.getElementById('resultContainer');
const searchInp = document.getElementById('searchInp');

//functions
const renderHeroList = (heroArray) => {
  resultDiv.innerHTML = '';
  if(heroArray.length === 0){
    const noHeroHeading = document.createElement('h2');
    noHeroHeading.textContent = 'No such hero found, please try something else'
    resultDiv.appendChild(noHeroHeading);
  } else {

    heroArray.forEach(item => {
      const heroCard = document.createElement('div');
      heroCard.classList.add('card');
      const imgWrapper = document.createElement('a');
      imgWrapper.classList.add('imgWrapper')
      imgWrapper.href = './heroInfo.html'
      imgWrapper.addEventListener('click', () => {
        sessionStorage.setItem('heroPrevPageState', JSON.stringify(data));
        sessionStorage.setItem('clickedHeroData', JSON.stringify(item));
      })
      const heroImg = document.createElement('img');
      heroImg.src = `${item.thumbnail.path}.${item.thumbnail.extension}`;
      const heroName = document.createElement('p');
      heroName.classList.add('heroName')
      heroName.textContent = item.name.length>20? item.name.slice(0, 20)+'...': item.name;
      const favBtn = document.createElement('button');
      favBtn.classList.add('favBtn')
      favBtn.textContent = 'Add to favourite'
      favBtn.addEventListener('click', () => addToFavourite(item));
  
      imgWrapper.appendChild(heroImg)
      heroCard.appendChild(imgWrapper);
      heroCard.appendChild(heroName);
      heroCard.appendChild(favBtn);
      resultDiv.appendChild(heroCard);
    })
  }
}

const handleSearchInput = (event) => {
  const searchStr = event.target.value;

  if (debounceTimeout) {
    clearTimeout(debounceTimeout);
  }
  // Used so that multiple consecutive api calls are not made
  // api call will be made, 700ms after user has stoped typing.
  debounceTimeout = setTimeout(async () => {
    data = await fetchHeroes(searchStr);
    // const filteredArray = data.filter(item => item.name.toLowerCase().includes(searchStr.toLowerCase()));
    renderHeroList(data)
  }, 400);
}

const fetchHeroes = async (searchStr) => {
  try {
    const date = new Date().getTime();
    const hash = md5(date + privateKey + publicKey).toString();
    const api = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${searchStr}&apikey=${publicKey}&hash=${hash}`

    const res = await fetch(api);
    if(!res.ok)
      throw new Error('Could not fetch heroes');

    const resData = await res.json();
    return resData.data.results;
  } catch(error) {
    console.error('Hero fetch Error: '+error);
  }
}

const addToFavourite = (character) => {
  let favHeroStore = JSON.parse(localStorage.getItem('favHeroStore')) || []
  if (!favHeroStore.some(item => item.id === character.id)) {
    favHeroStore.push(character);
    localStorage.setItem('favHeroStore', JSON.stringify(favHeroStore));
    alert('Hero added to favourites!')
  }
}

//event listeners
searchInp.addEventListener('input', handleSearchInput)

document.addEventListener('DOMContentLoaded', () => {
  const savedState = JSON.parse(sessionStorage.getItem('heroPrevPageState'));
  if(!savedState){
    const startHeading = document.createElement('h2');
    startHeading.textContent = 'Enter hero name in search bar to find hero!'
    resultDiv.appendChild(startHeading);
  } else {
    data = [...savedState]
    renderHeroList(data);
    sessionStorage.removeItem('heroPrevPageState');
  }
})