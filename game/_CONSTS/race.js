const DEFAULT_LENGTH = 20;
const raceData = {
    "🐎": {
        icon : "🐎",
        weight: 20,
        dotsLength: DEFAULT_LENGTH,
        jump: () => Math.floor(Math.random() * 3.75) + 1,
    },
    "🚴": {
        icon : "🚴",
        weight: 18,
        dotsLength: DEFAULT_LENGTH,
        jump: ()=> Math.floor(Math.random() * 3.85) + 1,
    },
    "🚣": {
        icon : "🚣",
        weight: 17,
        dotsLength: DEFAULT_LENGTH,
        jump: ()=> Math.floor(Math.random() * 2.40) + 2,
    },
    "🦇": {
        icon : "🦇",
        weight: 15,
        dotsLength: DEFAULT_LENGTH,
        jump: ()=> Math.floor(Math.random() * 1.8) + 3,
    },
    "🐪": {
        icon : "🐪",
        weight: 10,
        dotsLength: DEFAULT_LENGTH,
        jump: ()=> Math.floor(Math.random() * 10) - 5,
    },
    "👩‍🦼": {
        icon : "👩‍🦼",
        weight: 8,
        dotsLength: DEFAULT_LENGTH,
        jump: ()=> Math.floor(Math.random() * 2.55) + 3,
    },
    "🐢": {
        icon : "🐢",
        weight: 5,
        dotsLength: DEFAULT_LENGTH,
        jump: ()=> Math.floor(Math.random() * 15) - 3,
    },
    "🦆": {
        icon : "🦆",
        weight: 1,
        dotsLength: DEFAULT_LENGTH,
        jump: ()=> Math.floor(Math.random() * 20) - 5,
    },
};

module.exports = { raceData };