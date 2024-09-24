export const getPlainsName = () => {
    return firstPart[Math.floor(Math.random() * firstPart.length)] + ' ' + secondPart[Math.floor(Math.random() * secondPart.length)];
}

const firstPart = ['Green', 'Dark', 'Bright', 'Misty', 'Golden ', 'Silver', 'Black', 'White', 'Wet', 'Dry'];
const secondPart = ['Plains', 'Fields', 'Meadow', 'Savanna', 'Steppe'];

export const getMarshName = () => {
    return firstPartMarsh[Math.floor(Math.random() * firstPartMarsh.length)] + ' ' + secondPartMarsh[Math.floor(Math.random() * secondPartMarsh.length)];
}

const firstPartMarsh = ['Green', 'Dark', 'Bright', 'Misty', 'Golden ', 'Silver', 'Black', 'White', 'Wet', 'Dry', 'Gloomy', 'Haunted'];
const secondPartMarsh = ['Marsh', 'Swamp', 'Bog', 'Fen', 'Wetland'];

export const getMountainsName = () => {
    return firstPartMountains[Math.floor(Math.random() * firstPartMountains.length)] + ' ' + secondPartMountains[Math.floor(Math.random() * secondPartMountains.length)];
}

const firstPartMountains = ['Green', 'Dark', 'Bright', 'Misty', 'Golden ', 'Silver', 'Black', 'White', 'Wet', 'Dry', 'Gloomy', 'Haunted', 'Rocky', 'Snowy', 'Icy', 'Fiery'];
const secondPartMountains = ['Mountains', 'Peaks', 'Hills', 'Range', 'Crest'];

export const getDesertName = () => {
    return firstPartDesert[Math.floor(Math.random() * firstPartDesert.length)] + ' ' + secondPartDesert[Math.floor(Math.random() * secondPartDesert.length)];
}

const firstPartDesert = ['Green', 'Dark', 'Bright', 'Misty', 'Golden ', 'Silver', 'Black', 'White', 'Wet', 'Dry', 'Gloomy', 'Haunted', 'Rocky', 'Sandy', 'Dusty', 'Burning'];
const secondPartDesert = ['Desert', 'Waste', 'Dunes', 'Badlands', 'Sands'];

export const getSwampName = () => {
    return firstPartSwamp[Math.floor(Math.random() * firstPartSwamp.length)] + ' ' + secondPartSwamp[Math.floor(Math.random() * secondPartSwamp.length)];
}

const firstPartSwamp = ['Green', 'Dark', 'Bright', 'Misty', 'Golden ', 'Silver', 'Black', 'White', 'Wet', 'Dry', 'Gloomy', 'Haunted', 'Boggy', 'Murky', 'Foul', 'Fetid'];
const secondPartSwamp = ['Swamp', 'Marsh', 'Bog', 'Fen', 'Wetland'];

export const getJungleName = () => {
    return firstPartJungle[Math.floor(Math.random() * firstPartJungle.length)] + ' ' + secondPartJungle[Math.floor(Math.random() * secondPartJungle.length)];
}

const firstPartJungle = ['Green', 'Dark', 'Bright', 'Misty', 'Golden ', 'Silver', 'Black', 'White', 'Wet', 'Dry', 'Gloomy', 'Haunted', 'Tropical', 'Rainforest', 'Lush', 'Overgrown'];
const secondPartJungle = ['Jungle', 'Rainforest', 'Wilds', 'Thicket', 'Grove'];

export const getTundraName = () => {
    return firstPartTundra[Math.floor(Math.random() * firstPartTundra.length)] + ' ' + secondPartTundra[Math.floor(Math.random() * secondPartTundra.length)];
}

const firstPartTundra = ['Green', 'Dark', 'Bright', 'Misty', 'Golden ', 'Silver', 'Black', 'White', 'Wet', 'Dry', 'Gloomy', 'Haunted', 'Frozen', 'Snowy', 'Icebound', 'Frosty'];
const secondPartTundra = ['Tundra', 'Wastes', 'Barrens', 'Glacier', 'Icefield'];

export const getForestName = () => {
    return forestNameFirstPart[Math.floor(Math.random() * forestNameFirstPart.length)] + forestNameSecondPart[Math.floor(Math.random() * forestNameSecondPart.length)]
}

const forestNameFirstPart = ['Green', 'Dark', 'Bright', 'Misty', 'Golden', 'Silver', 'Red', 'Blue', 'Black', 'White']
const forestNameSecondPart = ['wood', 'forest', 'grove', 'woods', 'thicket']