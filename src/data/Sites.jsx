


const getFortificationName = () => {

    const name = ['Blackspire', 'Shadowkeep', 'Ironhold', 'Thornhill', 'Highcliff', 'Dragon\'s Peak', 'Stormhaven', 'Redstone', 'Eagle\'s Nest', 'Silent Keep', 'Mistveil', 'Bloodmoor', 'Wolfguard', 'Stoneheart', 'Raven\'s Roost', 'Shadowcroft', 'Frostwall', 'Sunspire', 'Ironhelm', 'Skyhold', 'Starhold', 'Moonhaven', 'Riverstone', 'Oakwood', 'Silverpeak', 'Blackthorn', 'Willowcroft', 'Ashridge', 'Thornwood', 'Firhaven', 'Elmstead', 'Falconcrest', 'Bearclaw', 'Grizzlypeak', 'Foxhollow', 'Hawkridge', 'Wyvern\'s Lair', 'Serpent\'s Coil', 'Dragon\'s Keep', 'Gryphon\'s Roost'];
    const type = ['Castle', 'Fort', 'Keep', 'Tower'];

    const num = Math.floor(Math.random() * 3) + 1;
    if (num === 1) {
        return name[Math.floor(Math.random() * name.length)];
    } else if (num === 2) {
        return type[Math.floor(Math.random() * type.length)] + ' ' + name[Math.floor(Math.random() * name.length)];
    } else {
        return name[Math.floor(Math.random() * name.length)] + ' ' + type[Math.floor(Math.random() * type.length)];
    }
}

const getPlaceOfWorshipName = () => {
    const placeOfWorshipNames = [
        "Sanctuary of Dawn",
        "Temple of the Moon",
        "Chapel of Hope",
        "Shrine of Serenity",
        "Abbey of Tranquility",
        "Cathedral of the Stars",
        "Monastery of Silence",
        "Church of the Sacred Heart",
        "Temple of the Rising Sun",
        "Shrine of the Ancient Ones",
        "Abbey of the Blessed",
        "Cathedral of the Divine",
        "Monastery of the Mountain",
        "Church of the Everlasting Light",
        "Temple of the Four Winds",
        "Shrine of the Hidden Waters",
        "Abbey of the Golden Age",
        "Cathedral of the Mystic Order",
        "Monastery of the Silent Path",
        "Church of the Eternal Flame",
        "Temple of the Earth Mother",
        "Shrine of the Forest Spirits",
        "Abbey of the Sacred Grove",
        "Cathedral of the Celestial Choir",
        "Monastery of the Starry Sky",
        "Church of the Divine Mercy",
        "Temple of the Sun God",
        "Shrine of the Ocean's Depths",
        "Abbey of the Whispering Pines",
        "Cathedral of the Holy Spirit",
        "Monastery of the Sacred Mountain",
        "Church of the Living Water",
        "Temple of the Ancient Gods",
        "Shrine of the Desert Wind",
        "Abbey of the Everlasting Peace",
        "Cathedral of the Radiant Light",
        "Monastery of the Silent Prayer",
        "Church of the Blessed Mother",
        "Temple of the Cosmic Order",
        "Shrine of the Hidden Valley",
        "Dawn Sanctuary",
        "Moon Temple",
        "Hope Chapel",
        "Serenity Shrine",
        "Tranquility Abbey",
        "Star Cathedral",
        "Silence Monastery",
        "Sacred Heart Church",
        "Rising Sun Temple",
        "Ancient Ones Shrine",
        "Blessed Abbey",
        "Divine Cathedral",
        "Mountain Monastery",
        "Everlasting Light Church",
        "Four Winds Temple",
        "Hidden Waters Shrine",
        "Golden Age Abbey",
        "Mystic Order Cathedral",
        "Silent Path Monastery",
        "Eternal Flame Church",
        "Earth Mother Temple",
        "Forest Spirits Shrine",
        "Sacred Grove Abbey",
        "Celestial Choir Cathedral",
        "Starry Sky Monastery",
        "Divine Mercy Church",
        "Sun God Temple",
        "Ocean Depths Shrine",
        "Whispering Pines Abbey",
        "Holy Spirit Cathedral",
        "Sacred Mountain Monastery",
        "Living Water Church",
        "Ancient Gods Temple",
        "Desert Wind Shrine",
        "Everlasting Peace Abbey",
        "Radiant Light Cathedral",
        "Silent Prayer Monastery",
        "Blessed Mother Church",
        "Cosmic Order Temple",
        "Hidden Valley Shrine"
      ];

      return placeOfWorshipNames[Math.floor(Math.random() * placeOfWorshipNames.length)];
}

const getCementeryName = () => {
    const cementeryNames = ["Shadowed Rest", "Forgotten Depths", "Silent Acre", "Eternal Slumber", "Grimhollow", "Mournhollow", "Crypt of Echoes", "Tomb of the Forsaken", "Graveyard of the Damned", "Necropolis of Despair", "Charnel Fields", "Bone Orchard", "Corpsewood", "Deathmoor", "Mourning Vale", "Desolation Yard", "Oblivion Fields", "Shadowed Glen", "Forgotten Hollow", "Silent Glen", "Eternal Vale", "Grimwood", "Mournwood", "Crypt of Whispers", "Tomb of the Lost", "Graveyard of the Doomed", "Necropolis of Anguish", "Charnel Vale", "Bone Meadow", "Corpsewood Glen", "Deathmoor Hollow", "Mourning Glen", "Desolation Hollow", "Oblivion Glen", "Shadowed Meadow", "Forgotten Meadow", "Silent Meadow", "Eternal Meadow", "Grimfield", "Mournfield", "Crypt of Secrets", "Tomb of the Unknown", "Graveyard of the Hopeless", "Necropolis of Torment", "Charnel Field", "Bone Croft", "Corpsewood Field", "Deathmoor Field", "Mourning Field"];
    return cementeryNames[Math.floor(Math.random() * cementeryNames.length)];
}

const getOutpostName = () => {
    const outpostNamesPrefix = ["Black", "Shadow", "Iron", "Thorn", "High", "Dragon", "Storm", "Red", "Eagle", "Silent", "Mist", "Blood", "Wolf", "Stone", "Raven", "Shadow", "Frost", "Sun", "Iron", "Sky", "Star", "Moon", "River", "Oak", "Silver", "Black", "Willow", "Ash", "Thorn", "Fir", "Elm", "Falcon", "Bear", "Grizzly", "Fox", "Hawk", "Wyvern", "Serpent", "Dragon", "Gryphon"];
    const outpostNamesSuffix = ["spire", "keep", "hold", "hill", "cliff", "peak", "haven", "stone", "nest", "keep", "veil", "moor", "guard", "heart", "croft", "wall", "spire", "croft", "ridge", "croft", "haven", "ridge", "stone", "peak", "thorn", "wood", "ridge", "croft", "ridge", "haven", "crest", "claw", "peak", "hollow", "ridge", "lair", "coil", "keep", "roost"];
    return outpostNamesPrefix[Math.floor(Math.random() * outpostNamesPrefix.length)] + outpostNamesSuffix[Math.floor(Math.random() * outpostNamesSuffix.length)];
}

const getRuinsName = () => {
    const ruinPrefixes = ["Forgotten", "Silent", "Shadowed", "Broken", "Crumbling", "Desolate", "Withered", "Shattered", "Decaying", "Abandoned", "Overgrown", "Ruined", "Collapsed", "Sunken", "Desert", "Jungle", "Mountaintop", "Oceanic", "Underground", "Forgotten", "Lost", "Ancient", "Mysterious", "Hidden", "Vanished", "Echoing", "Crumbling", "Deserted", "Withering", "Shattered", "Decaying", "Abandoned", "Overgrown", "Ruined", "Collapsed", "Sunken", "Desert", "Jungle", "Mountaintop", "Oceanic", "Forgotten", "Lost", "Ancient", "Mysterious", "Hidden", "Vanished", "Echoing", "Crumbling", "Deserted"];
    const ruinSuffixes = ["City", "Citadel", "Spire", "Keep", "Throne", "Temple", "Grove", "Sanctuary", "Manor", "Abbey", "Cathedral", "Watchtower", "Coliseum", "City", "Mirage", "Overgrowth", "Remnants", "Ruins", "Caverns", "Library", "Laboratory", "Tomb", "Pyramid", "Fortress", "Village", "Caverns", "Stronghold", "Outpost", "Farmstead", "Lighthouse"];
    return ruinPrefixes[Math.floor(Math.random() * ruinPrefixes.length)] + ' ' + ruinSuffixes[Math.floor(Math.random() * ruinSuffixes.length)];
}

const getUnderworldName = () => {
    const underworldPrefixes = ["Shadow", "Dread", "Abyssal", "Infernal", "Chthonic", "Necro", "Grim", "Morbid", "Cursed", "Damned", "Forgotten", "Lost", "Hidden", "Deep", "Dark", "Black", "Gloomy", "Silent", "Echoing", "Desolate", "Barren", "Poisoned", "Rotting", "Corpse", "Bone", "Skull", "Demonic", "Devilish", "Infernal", "Hellish", "Diabolic", "Satanic", "Spectral", "Haunted", "Cursed", "Damned", "Doomed", "Forsaken", "Abandoned", "Deserted", "Ruined", "Collapsed", "Sunken"];
    const underworldSuffixes = ["Depths", "Abyss", "Pit", "Chasm", "Caverns", "Catacombs", "Tunnels", "Corridors", "Chambers", "Halls", "Realm", "Domain", "Kingdom", "Temple", "Cellar", "Vault", "Tomb", "Crypt", "Necropolis", "Underworld", "Netherworld"];
    return underworldPrefixes[Math.floor(Math.random() * underworldPrefixes.length)] + ' ' + underworldSuffixes[Math.floor(Math.random() * underworldSuffixes.length)];
}


export const getSiteNameByType = (type) => {
    switch (type) {
        case 'Fortification': return getFortificationName(); break;
        case 'Place of Worship': return getPlaceOfWorshipName(); break;
        case 'Cementery': return getCementeryName(); break;
        case 'Outpost': return getOutpostName(); break;
        case 'Ruins': return getRuinsName(); break;
        case 'Underworld': return getUnderworldName(); break;
        default: return 'Site';
    }
}