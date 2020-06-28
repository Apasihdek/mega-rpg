const DEFAULT_LENGTH = 20;
const raceData = {
    "🐎": {
        icon : "🐎",
        weight: 20,
        dotsLength: DEFAULT_LENGTH,
        jump: () => Math.floor(Math.random() * 2.95) + 1,
    },
    "🚴": {
        icon : "🚴",
        weight: 18,
        dotsLength: DEFAULT_LENGTH,
        jump: ()=> Math.floor(Math.random() * 3.05) + 1,
    },
    "🚣": {
        icon : "🚣",
        weight: 17,
        dotsLength: DEFAULT_LENGTH,
        jump: ()=> Math.floor(Math.random() * 2.65) + 2,
    },
    "🦇": {
        icon : "🦇",
        weight: 15,
        dotsLength: DEFAULT_LENGTH,
        jump: ()=> Math.floor(Math.random() * 2.05) + 3,
    },
    "🐪": {
        icon : "🐪",
        weight: 10,
        dotsLength: DEFAULT_LENGTH,
        jump: ()=> Math.floor(Math.random() * 3.34) + 1,
    },
    "👩‍🦼": {
        icon : "👩‍🦼",
        weight: 8,
        dotsLength: DEFAULT_LENGTH,
        jump: ()=> Math.floor(Math.random() * 3.65) + 2,
    },
    "🐢": {
        icon : "🐢",
        weight: 5,
        dotsLength: DEFAULT_LENGTH,
        jump: ()=> Math.floor(Math.random() * 12) - 3,
    },
    "🦆": {
        icon : "🦆",
        weight: 1,
        dotsLength: DEFAULT_LENGTH,
        jump: ()=> Math.floor(Math.random() * 14) - 5,
    },
};

module.exports = { raceData };