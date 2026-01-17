const planetsData = [
  {
    id: 'hoth',
    name: 'HOTH',
    description: "A remote, icy world of endless snow and sub-zero temperatures. It served as the location for the Rebel Alliance's Echo Base during the Galactic Civil War.",
    distance: '50,250 LY',
    orbit: '549 Days',
    color: '#00d4ff', // Electric Cyan for the rim glow
    textureUrl: 'https://threejs.org/examples/textures/planets/moon_1024.jpg', // Base texture for crater/ice details
  },
  {
    id: 'tatooine',
    name: 'TATOOINE',
    description: "A harsh desert world orbiting twin suns in the Outer Rim. It is a landscape of dunes and canyons, home to Anakin and Luke Skywalker.",
    distance: '43,000 LY',
    orbit: '304 Days',
    color: '#ff9d00',
    textureUrl: 'https://unpkg.com/three-globe/example/img/earth-topology.png',
  },
  {
    id: 'dagobah',
    name: 'DAGOBAH',
    description: "A world of murky swamps and sprawling forests. Grand Master Yoda hid here in exile after the fall of the Jedi Order.",
    distance: '50,250 LY',
    orbit: '341 Days',
    color: '#44ff00',
    textureUrl: 'https://unpkg.com/three-globe/example/img/earth-topology.png', 
  },
  {
    id: 'coruscant',
    name: 'CORUSCANT',
    description: "The political heart of the galaxy. Its entire surface is a single city covered in towering skyscrapers and endless traffic.",
    distance: 'Core World',
    orbit: '368 Days',
    color: '#ffcc00',
    textureUrl: 'https://unpkg.com/three-globe/example/img/earth-night.jpg', 
  },
];

export default planetsData;