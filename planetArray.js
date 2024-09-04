const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter'];
const distances = [0.39, 0.72, 1, 1.52, 5.2];

planets.forEach((planet, index) => {
    console.log(`${planet} is ${distances[index]} AU from the Sun.`);
});
