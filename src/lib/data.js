export const students = [
  {
    "id": "clayza",
    "first": "Clayton",
    "last": "Wieberg",
    "following": ["poizenfreek"],
    "followers": [],
    "studies": ["phyiscs", "philosophy"],
    "paths": ["clayza20240825", "clayza1"],
    "projects": [
      {
        "id": "growing-neural-cellular-automata",
        "title": "Growing Neural Cellular Automata",
        "description": "Is it possible to organize local cells to form patterns?",
        "bgcolor": "black",
        "color": "white",
        "font": "consolas",
        "coverimg": "clayza_growing-local-ca_cover.png",
        "galleryimgs": ["clayza_1.png", "clayza_2.png"],
      },
      {
        "id": "conways-game-of-life",
        "title": "Conways Game of Life",
        "description": "Emergent patterns from simple rules",
        "bgcolor": "lightblue",
        "color": "orange",
        "font": "Cursive",
      },
    ],
  },
  {
    "id": "poizenfreek",
    "first": "Taylor",
    "last": "Allen",
    "following": [],
    "followers": ["clayza"],
    "studies": ["drawing", "drift cars"],
    "paths": [],
    "projects": [],
  }
]