import regionNames from '../data/RegionNames';
import { getForestName, getPlainsName, getMarshName, getMountainsName, getDesertName, getSwampName, getJungleName, getTundraName } from '../data/AreaNames';
import { settlementSubtypes, keepSubtypes, churchSubtypes, townPrefixes, townSuffixes } from '../data/Settlements';
import { getSiteNameByType } from '../data/Sites';

const generateRegion = () => {
    console.log('YOLO');
    const region = {};

    region.name = regionNames[Math.floor(Math.random() * regionNames.length)];
    // region.extraTags = generateExtraTags(region);

    // Areas
    const numAreas = Math.floor(Math.random() * 5) + 3;
    region.areas = [];
    for (let i = 0; i < numAreas; i++) {
        region.areas.push(generateArea());
    }

    // Settlements
    region.areas.forEach(area => {
        const numSettlements = Math.floor(Math.random() * 3) + 1;
        for (let i = 0; i < numSettlements; i++) {
            area.settlements.push(generateSettlement());
        }
    });

    console.log(region);
    return region;
}

const generateArea = () => {
    const terrains = ['Forest', 'Plains', 'Marsh', 'Mountains', 'Desert', 'Swamp', 'Jungle', 'Tundra'];
    const terrain = terrains[Math.floor(Math.random() * terrains.length)];
    const name = getNameByTerrain(terrain);
    return {
        name: name,
        terrain: terrain,
        dangerLevel: generateDangerLevelTag(),
        settlements: []
    };
}

const generateSettlement = () => {
    const size = Math.floor(Math.random() * settlementSubtypes.length);
    const type = settlementSubtypes[size];

    const sites = [];
    if(size > 0) {
        for (let i = 0; i < size; i++) {
            sites.push(generateSite(sites, size));
        }
    }

    let tagPool = ['Black Market', 'Prison', 'Harbour', 'Famous Tavern', 'Library', 'Market']  
    const tagPoolCity = ['Slums', 'Waterfall', 'Gigantic Statue', 'Enormous Bridge', 'Arena', 'Park']  
    if(size > 1) tagPool = tagPool.concat(tagPoolCity);

    const economicFocus = ['Industrial', 'Agricultural', 'Mining', 'Trade Hub', 'Fishing']
    const cultureFocus = ['Military', 'Religious', 'Academic', 'Criminal', 'Magical']


    const tags = [];
    for (let i = 0; i < size+1; i++) {
        const tag = tagPool[Math.floor(Math.random() * tagPool.length)];
        tags.push(tag);
        tagPool.splice(tagPool.indexOf(tag), 1);
    }   

    const prefix = townPrefixes[Math.floor(Math.random() * townPrefixes.length)];
    const suffix = townSuffixes[Math.floor(Math.random() * townSuffixes.length)];
    const name = prefix + suffix;

    return {
        name,
        type,
        sites,
        tags,
        cultureFocus: cultureFocus[Math.floor(Math.random() * cultureFocus.length)],
        economicFocus: economicFocus[Math.floor(Math.random() * economicFocus.length)]
    };
}

const generateSite = (sites, size) => {

    let types = ['Fortification', 'Place of Worship', 'Cementery'];
    const typesCity = ['Outpost', 'Ruins', 'Underworld']
    if(size > 1) types = types.concat(typesCity);

    sites.forEach(site => {
        types.splice(types.indexOf(site.type), 1);
    });

    const type = types[Math.floor(Math.random() * types.length)];



    return {
        name: getSiteNameByType(type),
        type
    };
}

const generateDiscovery = () => {
}

const generateDanger = () => {
}

const generateWeatherTag = () => {
}

const generateDangerLevelTag = () => {
    const roll = Math.floor(Math.random() * 100) + 1;
    if (roll <= 10)         return 'Perilous';
    else if (roll <= 30)    return 'Unsave';
    else if (roll <= 100)   return 'Safe';
}

const generateTerrainTag= () => {
}

const generateResourceTag = () => {
}

const generateExtraTags = (region = null) => {
    const tags = [];
    return tags;
}

const getNameByTerrain = (terrain) => {
    switch (terrain) {
        case 'Forest': return getForestName(); break;
        case 'Plains': return getPlainsName(); break;
        case 'Marsh': return getMarshName(); break;
        case 'Mountains': return getMountainsName(); break;
        case 'Desert': return getDesertName(); break;
        case 'Swamp': return getSwampName(); break;
        case 'Jungle': return getJungleName(); break;
        case 'Tundra': return getTundraName(); break;
        default: return 'Area';
    }
}

export default generateSettlement;