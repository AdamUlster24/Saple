let currentWordIndex = 0;
let guessedWordCount = 0;
let haveGuessed = false;
let now = new Date();
let firstDate = new Date(2022, 3, 13, 0, 0, 0, 0);
let desiredCurrentWordIndex = Math.floor(Number(now - firstDate) / 1000 / 60 / 60 / 24);
let list = [
  {
    name: "Ant",
    pack: "Standard",
    tier: 1,
    role: "Food",
    level1TriggerAbility: "Faint",
    baseAttack: 2,
    baseHealth: 1,
  },
  {
    name: "Beaver",
    pack: "Standard",
    tier: 1,
    role: "Food",
    level1TriggerAbility: "Sell",
    baseAttack: 3,
    baseHealth: 2
  },
  {
    name: "Cricket",
    pack: "Standard",
    tier: 1,
    role: "Summoner",
    level1TriggerAbility: "Faint",
    baseAttack: 1,
    baseHealth: 2
  },
  {
    name: "Duck",
    pack: "Standard",
    tier: 1,
    role: "Food",
    level1TriggerAbility: "Sell",
    baseAttack: 2,
    baseHealth: 3
  },
  {
    name: "Fish",
    pack: "Standard",
    tier: 1,
    role: "Special",
    level1TriggerAbility: "Level-up",
    baseAttack: 2,
    baseHealth: 2
  },
  {
    name: "Horse",
    pack: "Standard",
    tier: 1,
    role: "Tempo",
    level1TriggerAbility: "Friend summoned",
    baseAttack: 2,
    baseHealth: 1
  },
  {
    name: "Mosquito",
    pack: "Standard",
    tier: 1,
    role: "Disruptor/Sniper",
    level1TriggerAbility: "Start of battle",
    baseAttack: 2,
    baseHealth: 2
  },
  {
    name: "Otter",
    pack: "Standard",
    tier: 1,
    role: "Food",
    level1TriggerAbility: "Buy",
    baseAttack: 1,
    baseHealth: 2
  },
  {
    name: "Pig",
    pack: "Standard",
    tier: 1,
    role: "Economist",
    level1TriggerAbility: "Sell",
    baseAttack: 4,
    baseHealth: 1
  },
  {
    name: "Apple",
    pack: "Standard",
    tier: 1,
    role: "Food",
    level1TriggerAbility: "Buy",
    baseAttack: 1,
    baseHealth: 1
  },
  {
    name: "Honey",
    pack: "Standard",
    tier: 1,
    role: "Food",
    level1TriggerAbility: "Faint",
    baseAttack: 0,
    baseHealth: 0
  },
  {
    name: "Crab",
    pack: "Standard",
    tier: 2,
    role: "Tempo",
    level1TriggerAbility: "Start of battle",
    baseAttack: 3,
    baseHealth: 1
  },
  {
    name: "Dodo",
    pack: "Standard",
    tier: 2,
    role: "Scaler",
    level1TriggerAbility: "Start of battle",
    baseAttack: 2,
    baseHealth: 3
  },
  {
    name: "Elephant",
    pack: "Standard",
    tier: 2,
    role: "Scaler",
    level1TriggerAbility: "Before attack",
    baseAttack: 3,
    baseHealth: 5
  },
  {
    name: "Flamingo",
    pack: "Standard",
    tier: 2,
    role: "Food",
    level1TriggerAbility: "Faint",
    baseAttack: 4,
    baseHealth: 2
  },
  {
    name: "Hedgehog",
    pack: "Standard",
    tier: 2,
    role: "Special",
    level1TriggerAbility: "Faint",
    baseAttack: 3,
    baseHealth: 2
  },
  {
    name: "Peacock",
    pack: "Standard",
    tier: 2,
    role: "Scaler",
    level1TriggerAbility: "Hurt",
    baseAttack: 2,
    baseHealth: 5
  },
  {
    name: "Rat",
    pack: "Standard",
    tier: 2,
    role: "Summoner",
    level1TriggerAbility: "Faint",
    baseAttack: 4,
    baseHealth: 5
  },
  {
    name: "Shrimp",
    pack: "Standard",
    tier: 2,
    role: "Food",
    level1TriggerAbility: "Friend sold",
    baseAttack: 2,
    baseHealth: 3
  },
  {
    name: "Spider",
    pack: "Standard",
    tier: 2,
    role: "Summoner",
    level1TriggerAbility: "Faint",
    baseAttack: 2,
    baseHealth: 2
  },
  {
    name: "Swan",
    pack: "Standard",
    tier: 2,
    role: "Economist",
    level1TriggerAbility: "Start of turn",
    baseAttack: 1,
    baseHealth: 3
  },
  {
    name: "Cupcake",
    pack: "Standard",
    tier: 2,
    role: "Food",
    level1TriggerAbility: "Buy",
    baseAttack: 3,
    baseHealth: 3
  },
  {
    name: "Meat Bone",
    pack: "Standard",
    tier: 2,
    role: "Food",
    level1TriggerAbility: "Attack",
    baseAttack: 5,
    baseHealth: 0
  },
  {
    name: "Sleeping Pill",
    pack: "Standard",
    tier: 2,
    role: "Food",
    level1TriggerAbility: "Buy",
    baseAttack: 0,
    baseHealth: 0
  },
  {
    name: "Badger",
    pack: "Standard",
    tier: 3,
    role: "Disruptor/Sniper",
    level1TriggerAbility: "Faint",
    baseAttack: 4,
    baseHealth: 3
  },
  {
    name: "Blowfish",
    pack: "Standard",
    tier: 3,
    role: "Scaler",
    level1TriggerAbility: "Hurt",
    baseAttack: 3,
    baseHealth: 5
  },
  {
    name: "Camel",
    pack: "Standard",
    tier: 3,
    role: "Scaler",
    level1TriggerAbility: "Hurt",
    baseAttack: 2,
    baseHealth: 5
  },
  {
    name: "Dog",
    pack: "Standard",
    tier: 3,
    role: "Scaler",
    level1TriggerAbility: "Friend summoned",
    baseAttack: 2,
    baseHealth: 2
  },
  {
    name: "Giraffe",
    pack: "Standard",
    tier: 3,
    role: "Buffer",
    level1TriggerAbility: "End turn",
    baseAttack: 2,
    baseHealth: 5
  },
  {
    name: "Kangaroo",
    pack: "Standard",
    tier: 3,
    role: "Tempo",
    level1TriggerAbility: "Friend ahead attacks",
    baseAttack: 1,
    baseHealth: 2
  },
  {
    name: "Ox",
    pack: "Standard",
    tier: 3,
    role: "Tempo",
    level1TriggerAbility: "Friend ahead faints",
    baseAttack: 1,
    baseHealth: 3
  },
  {
    name: "Rabbit",
    pack: "Standard",
    tier: 3,
    role: "Food",
    level1TriggerAbility: "Pet eats shop food",
    baseAttack: 3,
    baseHealth: 2
  },
  {
    name: "Sheep",
    pack: "Standard",
    tier: 3,
    role: "Summoner",
    level1TriggerAbility: "Faint",
    baseAttack: 2,
    baseHealth: 2
  },
  {
    name: "Snail",
    pack: "Standard",
    tier: 3,
    role: "Food",
    level1TriggerAbility: "Buy",
    baseAttack: 2,
    baseHealth: 2
  },
  {
    name: "Turtle",
    pack: "Standard",
    tier: 3,
    role: "Tempo",
    level1TriggerAbility: "Faint",
    baseAttack: 1,
    baseHealth: 2
  },
  {
    name: "Garlic",
    pack: "Standard",
    tier: 3,
    role: "Food",
    level1TriggerAbility: "Hurt",
    baseAttack: 0,
    baseHealth: 2
  },
  {
    name: "Salad Bowl",
    pack: "Standard",
    tier: 3,
    role: "Food",
    level1TriggerAbility: "Buy",
    baseAttack: 1,
    baseHealth: 1
  },
  {
    name: "Bison",
    pack: "Standard",
    tier: 4,
    role: "Scaler",
    level1TriggerAbility: "End turn",
    baseAttack: 4,
    baseHealth: 4
  },
  {
    name: "Deer",
    pack: "Standard",
    tier: 4,
    role: "Summoner",
    level1TriggerAbility: "Faint",
    baseAttack: 1,
    baseHealth: 1
  },
  {
    name: "Dolphin",
    pack: "Standard",
    tier: 4,
    role: "Disruptor/Sniper",
    level1TriggerAbility: "Start of battle",
    baseAttack: 4,
    baseHealth: 6
  },
  {
    name: "Hippo",
    pack: "Standard",
    tier: 4,
    role: "Tempo",
    level1TriggerAbility: "Knock out",
    baseAttack: 4,
    baseHealth: 7
  },
  {
    name: "Parrot",
    pack: "Standard",
    tier: 4,
    role: "Special",
    level1TriggerAbility: "End turn",
    baseAttack: 4,
    baseHealth: 2
  },
  {
    name: "Penguin",
    pack: "Standard",
    tier: 4,
    role: "Buffer",
    level1TriggerAbility: "End turn",
    baseAttack: 1,
    baseHealth: 2
  },
  {
    name: "Rooster",
    pack: "Standard",
    tier: 4,
    role: "Summoner",
    level1TriggerAbility: "Faint",
    baseAttack: 5,
    baseHealth: 3
  },
  {
    name: "Skunk",
    pack: "Standard",
    tier: 4,
    role: "Disruptor/Sniper",
    level1TriggerAbility: "Start of battle",
    baseAttack: 3,
    baseHealth: 5
  },
  {
    name: "Squirrel",
    pack: "Standard",
    tier: 4,
    role: "Economist",
    level1TriggerAbility: "Start of turn",
    baseAttack: 2,
    baseHealth: 5
  },
  {
    name: "Whale",
    pack: "Standard",
    tier: 4,
    role: "Special",
    level1TriggerAbility: "Start of battle",
    baseAttack: 3,
    baseHealth: 8
  },
  {
    name: "Worm",
    pack: "Standard",
    tier: 4,
    role: "Scaler",
    level1TriggerAbility: "Eats shop food",
    baseAttack: 2,
    baseHealth: 2
  },
  {
    name: "Canned Food",
    pack: "Standard",
    tier: 4,
    role: "Food",
    level1TriggerAbility: "Buy",
    baseAttack: 2,
    baseHealth: 1
  },
  {
    name: "Pear",
    pack: "Standard",
    tier: 4,
    role: "Food",
    level1TriggerAbility: "Buy",
    baseAttack: 2,
    baseHealth: 2
  },
  {
    name: "Cow",
    pack: "Standard",
    tier: 5,
    role: "Food",
    level1TriggerAbility: "Buy",
    baseAttack: 4,
    baseHealth: 6
  },
  {
    name: "Crocodile",
    pack: "Standard",
    tier: 5,
    role: "Disruptor/Sniper",
    level1TriggerAbility: "Start of battle",
    baseAttack: 8,
    baseHealth: 4
  },
  {
    name: "Monkey",
    pack: "Standard",
    tier: 5,
    role: "Buffer",
    level1TriggerAbility: "End turn",
    baseAttack: 1,
    baseHealth: 2
  },
  {
    name: "Rhino",
    pack: "Standard",
    tier: 5,
    role: "Tempo",
    level1TriggerAbility: "Knock out",
    baseAttack: 5,
    baseHealth: 8
  },
  {
    name: "Scorpion",
    pack: "Standard",
    tier: 5,
    role: "Disruptor/Sniper",
    level1TriggerAbility: "Summoned",
    baseAttack: 1,
    baseHealth: 1
  },
  {
    name: "Seal",
    pack: "Standard",
    tier: 5,
    role: "Special",
    level1TriggerAbility: "Eats shop food",
    baseAttack: 3,
    baseHealth: 8
  },
  {
    name: "Shark",
    pack: "Standard",
    tier: 5,
    role: "Tempo",
    level1TriggerAbility: "Friend faints",
    baseAttack: 4,
    baseHealth: 4
  },
  {
    name: "Turkey",
    pack: "Standard",
    tier: 5,
    role: "Tempo",
    level1TriggerAbility: "Friend summoned",
    baseAttack: 3,
    baseHealth: 4
  },
  {
    name: "Chili",
    pack: "Standard",
    tier: 5,
    role: "Food",
    level1TriggerAbility: "Hurt",
    baseAttack: 5,
    baseHealth: 0
  },
  {
    name: "Chocolate",
    pack: "Standard",
    tier: 5,
    role: "Food",
    level1TriggerAbility: "Buy",
    baseAttack: 0,
    baseHealth: 0
  },
  {
    name: "Sushi",
    pack: "Standard",
    tier: 5,
    role: "Food",
    level1TriggerAbility: "Buy",
    baseAttack: 1,
    baseHealth: 1
  },
  {
    name: "Boar",
    pack: "Standard",
    tier: 6,
    role: "Scaler",
    level1TriggerAbility: "Before attack",
    baseAttack: 8,
    baseHealth: 6
  },
  {
    name: "Cat",
    pack: "Standard",
    tier: 6,
    role: "Special",
    level1TriggerAbility: "In deck",
    baseAttack: 4,
    baseHealth: 5
  },
  {
    name: "Dragon",
    pack: "Standard",
    tier: 6,
    role: "Buffer",
    level1TriggerAbility: "Buy tier 1 pet",
    baseAttack: 6,
    baseHealth: 8
  },
  {
    name: "Fly",
    pack: "Standard",
    tier: 6,
    role: "Summoner",
    level1TriggerAbility: "Friend faints",
    baseAttack: 5,
    baseHealth: 5
  },
  {
    name: "Gorilla",
    pack: "Standard",
    tier: 6,
    role: "Scaler",
    level1TriggerAbility: "Hurt",
    baseAttack: 6,
    baseHealth: 9
  },
  {
    name: "Leopard",
    pack: "Standard",
    tier: 6,
    role: "Disruptor/Sniper",
    level1TriggerAbility: "Start of battle",
    baseAttack: 10,
    baseHealth: 4
  },
  {
    name: "Mammoth",
    pack: "Standard",
    tier: 6,
    role: "Tempo",
    level1TriggerAbility: "Faint",
    baseAttack: 3,
    baseHealth: 10
  },
  {
    name: "Snake",
    pack: "Standard",
    tier: 6,
    role: "Tempo",
    level1TriggerAbility: "Friend ahead attacks",
    baseAttack: 6,
    baseHealth: 6
  },
  {
    name: "Tiger",
    pack: "Standard",
    tier: 6,
    role: "Special",
    level1TriggerAbility: "In deck",
    baseAttack: 4,
    baseHealth: 3
  },
  {
    name: "Melon",
    pack: "Standard",
    tier: 6,
    role: "Food",
    level1TriggerAbility: "Hurt",
    baseAttack: 0,
    baseHealth: 20
  },
  {
    name: "Mushroom",
    pack: "Standard",
    tier: 6,
    role: "Food",
    level1TriggerAbility: "Faint",
    baseAttack: 0,
    baseHealth: 0
  },
  {
    name: "Pizza",
    pack: "Standard",
    tier: 6,
    role: "Food",
    level1TriggerAbility: "Buy",
    baseAttack: 2,
    baseHealth: 2
  },
  {
    name: "Steak",
    pack: "Standard",
    tier: 6,
    role: "Food",
    level1TriggerAbility: "Attack",
    baseAttack: 20,
    baseHealth: 0
  },
  {
    name: "Beetle",
    pack: "Expansion #1",
    tier: 1,
    role: "Food",
    level1TriggerAbility: "Eats shop food",
    baseAttack: 2,
    baseHealth: 3
  },
  {
    name: "Bluebird",
    pack: "Expansion #1",
    tier: 1,
    role: "Buffer",
    level1TriggerAbility: "End turn",
    baseAttack: 2,
    baseHealth: 1
  },
  {
    name: "Ladybug",
    pack: "Expansion #1",
    tier: 1,
    role: "Tempo",
    level1TriggerAbility: "Buy shop food",
    baseAttack: 1,
    baseHealth: 3
  },
  {
    name: "Bat",
    pack: "Expansion #1",
    tier: 2,
    role: "Disruptor/Sniper",
    level1TriggerAbility: "Start of battle",
    baseAttack: 1,
    baseHealth: 2
  },
  {
    name: "Dromedary",
    pack: "Expansion #1",
    tier: 2,
    role: "Start of turn",
    level1TriggerAbility: "Buffer",
    baseAttack: 2,
    baseHealth: 4
  },
  {
    name: "Tabby Cat",
    pack: "Expansion #1",
    tier: 2,
    role: "Tempo",
    level1TriggerAbility: "Eats shop food",
    baseAttack: 5,
    baseHealth: 3
  },
  {
    name: "Caterpillar",
    pack: "Expansion #1",
    tier: 3,
    role: "Scaler",
    level1TriggerAbility: "Start of turn",
    baseAttack: 1,
    baseHealth: 3
  },
  {
    name: "Hatching Chick",
    pack: "Expansion #1",
    tier: 3,
    role: "Tempo",
    level1TriggerAbility: "End turn",
    baseAttack: 1,
    baseHealth: 1
  },
  {
    name: "Owl",
    pack: "Expansion #1",
    tier: 3,
    role: "Food",
    level1TriggerAbility: "Sell",
    baseAttack: 5,
    baseHealth: 3
  },
  {
    name: "Puppy",
    pack: "Expansion #1",
    tier: 3,
    role: "Scaler",
    level1TriggerAbility: "End turn",
    baseAttack: 1,
    baseHealth: 1
  },
  {
    name: "Tropical Fish",
    pack: "Expansion #1",
    tier: 3,
    role: "Buffer",
    level1TriggerAbility: "End turn",
    baseAttack: 2,
    baseHealth: 4
  },
  {
    name: "Buffalo",
    pack: "Expansion #1",
    tier: 4,
    role: "Scaler",
    level1TriggerAbility: "Friend sold",
    baseAttack: 4,
    baseHealth: 4
  },
  {
    name: "Llama",
    pack: "Expansion #1",
    tier: 4,
    role: "Scaler",
    level1TriggerAbility: "End turn",
    baseAttack: 3,
    baseHealth: 6
  },
  {
    name: "Lobster",
    pack: "Expansion #1",
    tier: 4,
    role: "Special",
    level1TriggerAbility: "Friend summoned outside battle",
    baseAttack: 4,
    baseHealth: 5
  },
  {
    name: "Microbe",
    pack: "Expansion #1",
    tier: 4,
    role: "Disruptor/Sniper",
    level1TriggerAbility: "Faint",
    baseAttack: 1,
    baseHealth: 1
  },
  {
    name: "Chicken",
    pack: "Expansion #1",
    tier: 5,
    role: "Buffer",
    level1TriggerAbility: "Buy tier 1 pet",
    baseAttack: 1,
    baseHealth: 2
  },
  {
    name: "Eagle",
    pack: "Expansion #1",
    tier: 5,
    role: "Summoner",
    level1TriggerAbility: "Faint",
    baseAttack: 6,
    baseHealth: 5
  },
  {
    name: "Goat",
    pack: "Expansion #1",
    tier: 5,
    role: "Economist",
    level1TriggerAbility: "Buy friend",
    baseAttack: 4,
    baseHealth: 6
  },
  {
    name: "Poodle",
    pack: "Expansion #1",
    tier: 5,
    role: "Buffer",
    level1TriggerAbility: "End turn",
    baseAttack: 2,
    baseHealth: 2
  },
  {
    name: "Octopus",
    pack: "Expansion #1",
    tier: 6,
    role: "Disruptor/Sniper",
    level1TriggerAbility: "Before attack",
    baseAttack: 8,
    baseHealth: 8
  },
  {
    name: "Sauropod",
    pack: "Expansion #1",
    tier: 6,
    role: "Economist",
    level1TriggerAbility: "Buy food",
    baseAttack: 4,
    baseHealth: 12
  },
  {
    name: "Tyrannosaurus",
    pack: "Expansion #1",
    tier: 6,
    role: "Buffer",
    level1TriggerAbility: "End turn",
    baseAttack: 9,
    baseHealth: 4
  },
  {
    name: "Baby Duck",
    pack: "Expansion #2",
    tier: 1,
    role: "Food",
    level1TriggerAbility: "Sell",
    baseAttack: 1,
    baseHealth: 2
  },
  {
    name: "Cockroach",
    pack: "Expansion #2",
    tier: 1,
    role: "Tempo",
    level1TriggerAbility: "Start of turn",
    baseAttack: 1,
    baseHealth: 4
  },
  {
    name: "Frog",
    pack: "Expansion #2",
    tier: 1,
    role: "Special",
    level1TriggerAbility: "Start of battle",
    baseAttack: 3,
    baseHealth: 1
  },
  {
    name: "Hummingbird",
    pack: "Expansion #2",
    tier: 1,
    role: "Tempo",
    level1TriggerAbility: "Start of battle",
    baseAttack: 2,
    baseHealth: 2
  },
  {
    name: "Iguana",
    pack: "Expansion #2",
    tier: 1,
    role: "Disruptor/Sniper",
    level1TriggerAbility: "Enemy summoned or pushed",
    baseAttack: 1,
    baseHealth: 3
  },
  {
    name: "Kiwi",
    pack: "Expansion #2",
    tier: 1,
    role: "Food",
    level1TriggerAbility: "Sell",
    baseAttack: 2,
    baseHealth: 2
  },
  {
    name: "Mouse",
    pack: "Expansion #2",
    tier: 1,
    role: "Food",
    level1TriggerAbility: "Sell",
    baseAttack: 3,
    baseHealth: 2
  },
  {
    name: "Pillbug",
    pack: "Expansion #2",
    tier: 1,
    role: "Special",
    level1TriggerAbility: "Upgrade shop tier",
    baseAttack: 2,
    baseHealth: 2
  },
  {
    name: "Seahorse",
    pack: "Expansion #2",
    tier: 1,
    role: "Disruptor/Sniper",
    level1TriggerAbility: "Start of battle",
    baseAttack: 2,
    baseHealth: 3
  },
  {
    name: "Chinchilla",
    pack: "Expansion #2",
    tier: 1,
    role: "Economist",
    level1TriggerAbility: "Sell",
    baseAttack: 2,
    baseHealth: 2
  },
  {
    name: "FrilledDragon",
    pack: "Expansion #2",
    tier: 1,
    role: "Tempo",
    level1TriggerAbility: "Start of battle",
    baseAttack: 1,
    baseHealth: 2
  },
  {
    name: "Marmoset",
    pack: "Expansion #2",
    tier: 1,
    role: "Special",
    level1TriggerAbility: "Sell",
    baseAttack: 2,
    baseHealth: 3
  },
  {
    name: "Moth",
    pack: "Expansion #2",
    tier: 1,
    role: "Tempo",
    level1TriggerAbility: "Start of battle",
    baseAttack: 2,
    baseHealth: 1
  },
  {
    name: "Toucan",
    pack: "Expansion #2",
    tier: 1,
    role: "Tempo",
    level1TriggerAbility: "Faint",
    baseAttack: 2,
    baseHealth: 2
  },
  {
    name: "Peach",
    pack: "Expansion #2",
    tier: 1,
    role: "Food",
    level1TriggerAbility: "Buy",
    baseAttack: 0,
    baseHealth: 2
  },
  {
    name: "Strawberry",
    pack: "Expansion #2",
    tier: 1,
    role: "Food",
    level1TriggerAbility: "Buy",
    baseAttack: 0,
    baseHealth: 0
  },
  {
    name: "Bacon",
    pack: "Expansion #2",
    tier: 1,
    role: "Food",
    level1TriggerAbility: "Buy",
    baseAttack: 2,
    baseHealth: 0
  },
  {
    name: "Cookie",
    pack: "Expansion #2",
    tier: 1,
    role: "Food",
    level1TriggerAbility: "Buy",
    baseAttack: 2,
    baseHealth: 2
  },
  {
    name: "Atlantic Puffin",
    pack: "Expansion #2",
    tier: 2,
    role: "Disruptor/Sniper",
    level1TriggerAbility: "Start of battle",
    baseAttack: 1,
    baseHealth: 3
  },
  {
    name: "Dove",
    pack: "Expansion #2",
    tier: 2,
    role: "Tempo",
    level1TriggerAbility: "Faint",
    baseAttack: 2,
    baseHealth: 4
  },
  {
    name: "Guinea Pig",
    pack: "Expansion #2",
    tier: 2,
    role: "Economist",
    level1TriggerAbility: "Buy",
    baseAttack: 1,
    baseHealth: 1
  },
  {
    name: "Jellyfish",
    pack: "Expansion #2",
    tier: 2,
    role: "Special",
    level1TriggerAbility: "Any level-up",
    baseAttack: 2,
    baseHealth: 3
  },
  {
    name: "Koala",
    pack: "Expansion #2",
    tier: 2,
    role: "Tempo",
    level1TriggerAbility: "Friend hurt",
    baseAttack: 1,
    baseHealth: 2
  },
  {
    name: "Panda",
    pack: "Expansion #2",
    tier: 2,
    role: "Scaler",
    level1TriggerAbility: "Start of battle",
    baseAttack: 2,
    baseHealth: 4
  },
  {
    name: "Pug",
    pack: "Expansion #2",
    tier: 2,
    role: "Buffer",
    level1TriggerAbility: "Eats shop food",
    baseAttack: 5,
    baseHealth: 2
  },
  {
    name: "Salamander",
    pack: "Expansion #2",
    tier: 2,
    role: "Special",
    level1TriggerAbility: "Buy friend",
    baseAttack: 2,
    baseHealth: 4
  },
  {
    name: "Stork",
    pack: "Expansion #2",
    tier: 2,
    role: "Summoner",
    level1TriggerAbility: "Faint",
    baseAttack: 2,
    baseHealth: 1
  },
  {
    name: "Yak",
    pack: "Expansion #2",
    tier: 2,
    role: "Buffer",
    level1TriggerAbility: "End turn",
    baseAttack: 3,
    baseHealth: 5
  },
  {
    name: "Frigatebird",
    pack: "Expansion #2",
    tier: 2,
    role: "Food",
    level1TriggerAbility: "Buy",
    baseAttack: 2,
    baseHealth: 4
  },
  {
    name: "Gold Fish",
    pack: "Expansion #2",
    tier: 2,
    role: "Economist",
    level1TriggerAbility: "Sell",
    baseAttack: 2,
    baseHealth: 3
  },
  {
    name: "Broccoli",
    pack: "Expansion #2",
    tier: 2,
    role: "Food",
    level1TriggerAbility: "Buy",
    baseAttack: -2,
    baseHealth: 4
  },
  {
    name: "Racoon",
    pack: "Expansion #2",
    tier: 2,
    role: "Tempo",
    level1TriggerAbility: "Before attack",
    baseAttack: 3,
    baseHealth: 2
  },
  {
    name: "Wombat",
    pack: "Expansion #2",
    tier: 2,
    role: "Tempo",
    level1TriggerAbility: "Start of battle",
    baseAttack: 3,
    baseHealth: 3
  },
  {
    name: "Fried Shrimp",
    pack: "Expansion #2",
    tier: 2,
    role: "Food",
    level1TriggerAbility: "Buy",
    baseAttack: 4,
    baseHealth: -2
  },
  {
    name: "Croissant",
    pack: "Expansion #2",
    tier: 2,
    role: "Food",
    level1TriggerAbility: "End of turn",
    baseAttack: 2,
    baseHealth: 2
  },
  {
    name: "Capybara",
    pack: "Expansion #2",
    tier: 3,
    role: "Buffer",
    level1TriggerAbility: "Roll",
    baseAttack: 2,
    baseHealth: 5
  },
  {
    name: "Cassowary",
    pack: "Expansion #2",
    tier: 3,
    role: "Scaler",
    level1TriggerAbility: "End turn",
    baseAttack: 2,
    baseHealth: 4
  },
  {
    name: "Clownfish",
    pack: "Expansion #2",
    tier: 3,
    role: "Special",
    level1TriggerAbility: "Any level-up",
    baseAttack: 2,
    baseHealth: 3
  },
  {
    name: "Donkey",
    pack: "Expansion #2",
    tier: 3,
    role: "Disruptor/Sniper",
    level1TriggerAbility: "Knock out",
    baseAttack: 3,
    baseHealth: 5
  },
  {
    name: "Leech",
    pack: "Expansion #2",
    tier: 3,
    role: "Scaler",
    level1TriggerAbility: "End turn",
    baseAttack: 4,
    baseHealth: 2
  },
  {
    name: "Okapi",
    pack: "Expansion #2",
    tier: 3,
    role: "Tempo",
    level1TriggerAbility: "Roll",
    baseAttack: 2,
    baseHealth: 3
  },
  {
    name: "Starfish",
    pack: "Expansion #2",
    tier: 3,
    role: "Food",
    level1TriggerAbility: "Friend sold",
    baseAttack: 3,
    baseHealth: 2
  },
  {
    name: "Toad",
    pack: "Expansion #2",
    tier: 3,
    role: "Disruptor/Sniper",
    level1TriggerAbility: "Enemy hurt",
    baseAttack: 3,
    baseHealth: 3
  },
  {
    name: "Woodpecker",
    pack: "Expansion #2",
    tier: 3,
    role: "Tempo",
    level1TriggerAbility: "Start of battle",
    baseAttack: 4,
    baseHealth: 3
  },
  {
    name: "Aardvark",
    pack: "Expansion #2",
    tier: 3,
    role: "Tempo",
    level1TriggerAbility: "Enemy summoned",
    baseAttack: 3,
    baseHealth: 4
  },
  {
    name: "Bear",
    pack: "Expansion #2",
    tier: 3,
    role: "Tempo",
    level1TriggerAbility: "Faint",
    baseAttack: 3,
    baseHealth: 5
  },
  {
    name: "EmperorTamarin",
    pack: "Expansion #2",
    tier: 3,
    role: "Food",
    level1TriggerAbility: "Sell",
    baseAttack: 2,
    baseHealth: 4
  },
  {
    name: "Seagull",
    pack: "Expansion #2",
    tier: 3,
    role: "Tempo",
    level1TriggerAbility: "Friend summoned",
    baseAttack: 3,
    baseHealth: 2
  },
  {
    name: "Wasp",
    pack: "Expansion #2",
    tier: 3,
    role: "Special",
    level1TriggerAbility: "Upgrade shop tier",
    baseAttack: 2,
    baseHealth: 2
  },
  {
    name: "Cucumber",
    pack: "Expansion #2",
    tier: 3,
    role: "Food",
    level1TriggerAbility: "End turn",
    baseAttack: 0,
    baseHealth: 1
  },
  {
    name: "Lollipop",
    pack: "Expansion #2",
    tier: 3,
    role: "Food",
    level1TriggerAbility: "Buy",
    baseAttack: 0,
    baseHealth: 0
  },
  {
    name: "Pineapple",
    pack: "Expansion #2",
    tier: 3,
    role: "Food",
    level1TriggerAbility: "Buy",
    baseAttack: 2,
    baseHealth: 0
  },
  {
    name: "Anteater",
    pack: "Expansion #2",
    tier: 4,
    role: "Summoner",
    level1TriggerAbility: "Faint",
    baseAttack: 3,
    baseHealth: 2
  },
  {
    name: "Blobfish",
    pack: "Expansion #2",
    tier: 4,
    role: "Special",
    level1TriggerAbility: "Faint",
    baseAttack: 2,
    baseHealth: 6
  },
  {
    name: "Eel",
    pack: "Expansion #2",
    tier: 4,
    role: "Scaler",
    level1TriggerAbility: "Start of battle",
    baseAttack: 5,
    baseHealth: 2
  },
  {
    name: "Hamster",
    pack: "Expansion #2",
    tier: 4,
    role: "Economist",
    level1TriggerAbility: "Roll",
    baseAttack: 2,
    baseHealth: 4
  },
  {
    name: "Hawk",
    pack: "Expansion #2",
    tier: 4,
    role: "Disruptor/Sniper",
    level1TriggerAbility: "Start of battle",
    baseAttack: 4,
    baseHealth: 3
  },
  {
    name: "Orangutan",
    pack: "Expansion #2",
    tier: 4,
    role: "Buffer",
    level1TriggerAbility: "End turn",
    baseAttack: 3,
    baseHealth: 6
  },
  {
    name: "Pelican",
    pack: "Expansion #2",
    tier: 4,
    role: "Buffer",
    level1TriggerAbility: "End turn",
    baseAttack: 3,
    baseHealth: 4
  },
  {
    name: "Platypus",
    pack: "Expansion #2",
    tier: 4,
    role: "Summoner",
    level1TriggerAbility: "Sell",
    baseAttack: 5,
    baseHealth: 2
  },
  {
    name: "Praying Mantis",
    pack: "Expansion #2",
    tier: 4,
    role: "Tempo",
    level1TriggerAbility: "Start of turn",
    baseAttack: 7,
    baseHealth: 2
  },
  {
    name: "Armadillo",
    pack: "Expansion #2",
    tier: 4,
    role: "Tempo",
    level1TriggerAbility: "Faint",
    baseAttack: 2,
    baseHealth: 6
  },
  {
    name: "Crow",
    pack: "Expansion #2",
    tier: 4,
    role: "Special",
    level1TriggerAbility: "Sell",
    baseAttack: 3,
    baseHealth: 3
  },
  {
    name: "Dragonfly",
    pack: "Expansion #2",
    tier: 4,
    role: "Buffer",
    level1TriggerAbility: "End turn",
    baseAttack: 2,
    baseHealth: 4
  },
  {
    name: "Jerboa",
    pack: "Expansion #2",
    tier: 4,
    role: "Special",
    level1TriggerAbility: "Eats apple",
    baseAttack: 1,
    baseHealth: 3
  },
  {
    name: "Lynx",
    pack: "Expansion #2",
    tier: 4,
    role: "Disruptor/Sniper",
    level1TriggerAbility: "Start of turn",
    baseAttack: 5,
    baseHealth: 3
  },
  {
    name: "Mole",
    pack: "Expansion #2",
    tier: 4,
    role: "Food",
    level1TriggerAbility: "Buy",
    baseAttack: 2,
    baseHealth: 3
  },
  {
    name: "Porcupine",
    pack: "Expansion #2",
    tier: 4,
    role: "Disruptor/Sniper",
    level1TriggerAbility: "Hurt",
    baseAttack: 5,
    baseHealth: 4
  },
  {
    name: "Fortune Cookie",
    pack: "Expansion #2",
    tier: 4,
    role: "Food",
    level1TriggerAbility: "In battle",
    baseAttack: 0,
    baseHealth: 0
  },
  {
    name: "Grapes",
    pack: "Expansion #2",
    tier: 4,
    role: "Food",
    level1TriggerAbility: "Start of turn",
    baseAttack: 0,
    baseHealth: 0
  },
  {
    name: "Cheese",
    pack: "Expansion #2",
    tier: 4,
    role: "Food",
    level1TriggerAbility: "Buy",
    baseAttack: 0,
    baseHealth: 0
  },
  {
    name: "Fox",
    pack: "Expansion #2",
    tier: 5,
    role: "Buffer",
    level1TriggerAbility: "End turn",
    baseAttack: 5,
    baseHealth: 3
  },
  {
    name: "Lion",
    pack: "Expansion #2",
    tier: 5,
    role: "Scaler",
    level1TriggerAbility: "Start of turn",
    baseAttack: 6,
    baseHealth: 6
  },
  {
    name: "Polar Bear",
    pack: "Expansion #2",
    tier: 5,
    role: "Buffer",
    level1TriggerAbility: "Start of turn",
    baseAttack: 4,
    baseHealth: 8
  },
  {
    name: "Sabertooth Tiger",
    pack: "Expansion #2",
    tier: 5,
    role: "Summoner",
    level1TriggerAbility: "Knock out",
    baseAttack: 6,
    baseHealth: 6
  },
  {
    name: "Shoebill",
    pack: "Expansion #2",
    tier: 5,
    role: "Buffer",
    level1TriggerAbility: "End turn",
    baseAttack: 2,
    baseHealth: 4
  },
  {
    name: "Siberian Husky",
    pack: "Expansion #2",
    tier: 5,
    role: "Buffer",
    level1TriggerAbility: "End turn",
    baseAttack: 4,
    baseHealth: 3
  },
  {
    name: "Sword Fish",
    pack: "Expansion #2",
    tier: 5,
    role: "Disruptor/Sniper",
    level1TriggerAbility: "Start of battle",
    baseAttack: 5,
    baseHealth: 5
  },
  {
    name: "Triceratops",
    pack: "Expansion #2",
    tier: 5,
    role: "Tempo",
    level1TriggerAbility: "Hurt",
    baseAttack: 5,
    baseHealth: 6
  },
  {
    name: "Vulture",
    pack: "Expansion #2",
    tier: 5,
    role: "Disruptor/Sniper",
    level1TriggerAbility: "Friend faints",
    baseAttack: 4,
    baseHealth: 3
  },
  {
    name: "Zebra",
    pack: "Expansion #2",
    tier: 5,
    role: "Food",
    level1TriggerAbility: "Buy & Sell",
    baseAttack: 3,
    baseHealth: 5
  },
  {
    name: "Hyena",
    pack: "Expansion #2",
    tier: 5,
    role: "Tempo",
    level1TriggerAbility: "Start of battle",
    baseAttack: 5,
    baseHealth: 5
  },
  {
    name: "Lioness",
    pack: "Expansion #2",
    tier: 5,
    role: "Buffer",
    level1TriggerAbility: "End turn",
    baseAttack: 4,
    baseHealth: 5
  },
  {
    name: "Lionfish",
    pack: "Expansion #2",
    tier: 5,
    role: "Disruptor/Sniper",
    level1TriggerAbility: "Before friend attack",
    baseAttack: 4,
    baseHealth: 6
  },
  {
    name: "Moose",
    pack: "Expansion #2",
    tier: 5,
    role: "Buffer",
    level1TriggerAbility: "End turn",
    baseAttack: 5,
    baseHealth: 6
  },
  {
    name: "Pepper",
    pack: "Expansion #2",
    tier: 5,
    role: "Food",
    level1TriggerAbility: "Hurt",
    baseAttack: 0,
    baseHealth: 0
  },
  {
    name: "Stew",
    pack: "Expansion #2",
    tier: 5,
    role: "Food",
    level1TriggerAbility: "Buy",
    baseAttack: 0,
    baseHealth: 2
  },
  {
    name: "Taco",
    pack: "Expansion #2",
    tier: 5,
    role: "Food",
    level1TriggerAbility: "Buy",
    baseAttack: 2,
    baseHealth: 0
  },
  {
    name: "Lemon",
    pack: "Expansion #2",
    tier: 5,
    role: "Food",
    level1TriggerAbility: "Hurt",
    baseAttack: 2,
    baseHealth: 0
  },
  {
    name: "Hammershark",
    pack: "Expansion #2",
    tier: 6,
    role: "Economist",
    level1TriggerAbility: "Start of turn",
    baseAttack: 5,
    baseHealth: 5
  },
  {
    name: "Komodo",
    pack: "Expansion #2",
    tier: 6,
    role: "Buffer",
    level1TriggerAbility: "End turn",
    baseAttack: 6,
    baseHealth: 6
  },
  {
    name: "Orca",
    pack: "Expansion #2",
    tier: 6,
    role: "Summoner",
    level1TriggerAbility: "Faint",
    baseAttack: 4,
    baseHealth: 8
  },
  {
    name: "Ostrich",
    pack: "Expansion #2",
    tier: 6,
    role: "Scaler",
    level1TriggerAbility: "End turn",
    baseAttack: 2,
    baseHealth: 8
  },
  {
    name: "Piranha",
    pack: "Expansion #2",
    tier: 6,
    role: "Tempo",
    level1TriggerAbility: "Hurt & Faint",
    baseAttack: 10,
    baseHealth: 2
  },
  {
    name: "Spinosaurus",
    pack: "Expansion #2",
    tier: 6,
    role: "Tempo",
    level1TriggerAbility: "Friend faints",
    baseAttack: 4,
    baseHealth: 8
  },
  {
    name: "Stegosaurus",
    pack: "Expansion #2",
    tier: 6,
    role: "Buffer",
    level1TriggerAbility: "End turn",
    baseAttack: 3,
    baseHealth: 8
  },
  {
    name: "Velociraptor",
    pack: "Expansion #2",
    tier: 6,
    role: "Tempo",
    level1TriggerAbility: "Start of battle",
    baseAttack: 3,
    baseHealth: 2
  },
  {
    name: "Alpaca",
    pack: "Expansion #2",
    tier: 6,
    role: "Buffer",
    level1TriggerAbility: "Friend summoned",
    baseAttack: 4,
    baseHealth: 9
  },
  {
    name: "Tapir",
    pack: "Expansion #2",
    tier: 6,
    role: "Summoner",
    level1TriggerAbility: "Faint",
    baseAttack: 4,
    baseHealth: 3
  },
  {
    name: "Walrus",
    pack: "Expansion #2",
    tier: 6,
    role: "Tempo",
    level1TriggerAbility: "Faint",
    baseAttack: 7,
    baseHealth: 5
  },
  {
    name: "WhiteTiger",
    pack: "Expansion #2",
    tier: 6,
    role: "Tempo",
    level1TriggerAbility: "Start of battle",
    baseAttack: 4,
    baseHealth: 3
  },
  {
    name: "Carrot",
    pack: "Expansion #2",
    tier: 6,
    role: "Food",
    level1TriggerAbility: "End of turn",
    baseAttack: 1,
    baseHealth: 1
  },
  {
    name: "Hot Dog",
    pack: "Expansion #2",
    tier: 6,
    role: "Food",
    level1TriggerAbility: "Buy",
    baseAttack: 4,
    baseHealth: 0
  },
  {
    name: "Orange",
    pack: "Expansion #2",
    tier: 6,
    role: "Food",
    level1TriggerAbility: "Buy",
    baseAttack: 0,
    baseHealth: 4
  },
  {
    name: "Popcorns",
    pack: "Expansion #2",
    tier: 6,
    role: "Food",
    level1TriggerAbility: "Faint",
    baseAttack: 0,
    baseHealth: 0
  },
  {
    name: "Chicken Leg",
    pack: "Expansion #2",
    tier: 6,
    role: "Food",
    level1TriggerAbility: "Buy",
    baseAttack: 3,
    baseHealth: 3
  },
  {
    name: "Soft Ice",
    pack: "Expansion #2",
    tier: 6,
    role: "Food",
    level1TriggerAbility: "Buy",
    baseAttack: 1,
    baseHealth: 0
  }
];
let pets = list.map((element) => {
return element.name;
})

let sapleAnswers = [
  "Piranha",
  "Tropical Fish",
  "Croissant",
  "Seahorse",
  "Horse",
  "Mole",
  "Lollipop",
  "Lobster",
  "Koala",
  "Cheese",
  "Seahorse",
  "Chili",
  "Wasp",
  "Whale",
  "Dolphin",
  "Koala",
  "Salamander",
  "Buffalo",
  "Triceratops",
  "Flamingo",
  "Stegosaurus",
  "Shark",
  "Sauropod",
  "Sabertooth Tiger",
  "Bluebird",
  "Poodle",
  "Bison",
  "Jerboa",
  "Canned Food",
  "Melon",
  "Vulture",
  "Seagull",
  "Apple",
  "Gold Fish",
  "Fried Shrimp",
  "Baby Duck",
  "Rooster",
  "Siberian Husky",
  "Platypus",
  "Jerboa",
  "Dolphin",
  "Whale",
  "Zebra",
  "Pineapple",
  "Carrot",
  "Pepper",
  "Lemon",
  "Cricket",
  "Dog",
  "Lioness",
  "Chinchilla",
  "Rabbit",
  "Gold Fish",
  "Strawberry",
  "Tropical Fish",
  "Puppy",
  "Tyrannosaurus",
  "Leopard",
  "Moth",
  "Pelican",
  "Hawk",
  "Eagle",
  "Beaver",
  "Snake",
  "Koala",
  "Stork",
  "Gorilla",
  "Fish",
  "Shrimp",
  "Okapi",
  "Peacock",
  "Yak",
  "Chili",
  "Crocodile",
  "Leech",
  "Kiwi",
  "Apple",
  "Worm",
  "Jellyfish",
  "Horse",
  "Turtle",
  "Melon",
  "Spinosaurus",
  "Toad",
  "Sabertooth Tiger",
  "Siberian Husky",
  "Platypus",
  "Frog",
  "Lion",
  "Fly",
  "Elephant",
  "Duck",
  "Hyena",
  "Triceratops",
  "Apple",
  "Microbe",
  "Bear",
  "Tyrannosaurus",
  "Carrot",
  "Bluebird",
  "Porcupine",
  "Bat",
  "Ant",
  "Hippo",
  "Yak",
  "Cookie",
  "Microbe",
  "Leopard",
  "Sauropod",
  "Deer",
  "Salad Bowl",
  "Horse",
  "Orca",
  "Orange",
  "Croissant",
  "Octopus",
  "Cupcake",
  "Hot Dog",
  "Goat",
  "Siberian Husky",
  "Hammershark",
  "Beaver",
  "Buffalo",
  "Sushi",
  "Fox",
  "Baby Duck",
  "Orangutan",
  "Hyena",
  "Wombat",
  "Eel",
  "Parrot",
  "Bacon",
  "Seal",
  "Seal",
  "Swan",
  "Boar",
  "Moth",
  "Squirrel",
  "Tapir",
  "Sushi",
  "Chocolate",
  "Soft Ice",
  "Seagull",
  "Camel",
  "Ladybug",
  "Tiger",
  "Turkey",
  "Siberian Husky",
  "Croissant",
  "Meat Bone",
  "Dolphin",
  "Leech",
  "Orangutan",
  "Octopus",
  "Stew",
  "Okapi",
  "Cow",
  "Jellyfish",
  "Wombat",
  "Pepper",
  "Cookie",
  "Blowfish",
  "Seagull",
  "Pelican",
  "Meat Bone",
  "Flamingo",
  "Pear",
  "Komodo",
  "Steak",
  "Fortune Cookie",
  "Tabby Cat",
  "Ant",
  "Praying Mantis",
  "Scorpion",
  "Turtle",
  "Scorpion",
  "Bacon",
  "Cucumber",
  "Piranha",
  "Guinea Pig",
  "Dromedary",
  "Lion",
  "Mammoth",
  "Crow",
  "Soft Ice",
  "Popcorns",
  "Honey",
  "Mole",
  "Pear",
  "Horse",
  "Spider",
  "Garlic",
  "Chinchilla",
  "Marmoset",
  "Porcupine",
  "Frog",
  "Fox",
  "Velociraptor",
  "Hummingbird",
  "Ladybug",
  "Pineapple",
  "Frog",
  "Fly",
  "Crow",
  "Rat",
  "Ant",
  "Shoebill",
  "Hammershark",
  "Fried Shrimp",
  "Bat",
  "Salamander",
  "Chicken",
  "Kangaroo",
  "Mushroom",
  "Giraffe",
  "Jellyfish",
  "Beaver",
  "Bison",
  "Strawberry",
  "Lionfish",
  "Snail",
  "Turkey",
  "Fly",
  "Moose",
  "Chicken",
  "Skunk",
  "Peacock",
  "Salamander",
  "Shark",
  "Dragon",
  "Camel",
  "Cucumber",
  "Salad Bowl",
  "Hawk",
  "Triceratops",
  "Carrot",
  "Peacock",
  "Lobster",
  "Walrus",
  "Blowfish",
  "Fried Shrimp",
  "Carrot",
  "Giraffe",
  "Tropical Fish",
  "Bison",
  "Mosquito",
  "Beetle",
  "Sword Fish",
  "Crocodile",
  "Octopus",
  "Pug",
  "Seahorse",
  "Pear",
  "Stew",
  "Caterpillar",
  "Caterpillar",
  "Sheep",
  "Crow",
  "Guinea Pig",
  "Dog",
  "Cricket",
  "Atlantic Puffin",
  "Eel",
  "Monkey",
  "Beaver",
  "Parrot",
  "Hatching Chick",
  "Seahorse",
  "Otter",
  "Mushroom",
  "Siberian Husky",
  "Bacon",
  "Salad Bowl",
  "Seagull",
  "Rat",
  "Dromedary",
  "Orange",
  "Blowfish",
  "Pig",
  "Orca",
  "Crab",
  "Aardvark",
  "Tyrannosaurus",
  "Hyena",
  "Pizza",
  "Seal",
  "Shoebill",
  "Seahorse",
  "Alpaca",
  "Vulture",
  "Chili",
  "Sheep",
  "Marmoset",
  "Bacon",
  "Lioness",
  "Peacock",
  "Porcupine",
  "Mammoth",
  "Turkey",
  "Tabby Cat"
];

let pet = sapleAnswers[currentWordIndex]

  initLocalStorage();
  checkIfPlayedYesterday();
  initHowToPlayModal();
  initStatsModal();
  loadHowToPlay();
  loadLocalStorage();

  function initLocalStorage() {
    const storedCurrentWordIndex =
      window.localStorage.getItem("currentWordIndex");
    if (!storedCurrentWordIndex) {
      window.localStorage.setItem("currentWordIndex", desiredCurrentWordIndex);
    } else {
      currentWordIndex = Number(storedCurrentWordIndex);
      pet = sapleAnswers[currentWordIndex];
    }

    const storedHaveGuessed =
      window.localStorage.getItem("haveGuessed");
    if (!storedHaveGuessed) {
      window.localStorage.setItem("haveGuessed", haveGuessed);
    } else {
      haveGuessed = storedHaveGuessed;
    }
  }

  function loadLocalStorage() {
    currentWordIndex =
      Number(window.localStorage.getItem("currentWordIndex")) ||
      currentWordIndex;
    guessedWordCount =
      Number(window.localStorage.getItem("guessedWordCount")) ||
      guessedWordCount;
    pet = sapleAnswers[currentWordIndex];

    haveGuessed =
    window.localStorage.getItem("haveGuessed") ||
    haveGuessed;

    const storedBoardContainer = window.localStorage.getItem("table");
    if (storedBoardContainer) {
      document.getElementById("table").innerHTML =
        storedBoardContainer;
    }
  }

  function checkIfPlayedYesterday() {
    if (desiredCurrentWordIndex > currentWordIndex) {
      currentWordIndex = desiredCurrentWordIndex;
      window.localStorage.setItem("currentWordIndex", currentWordIndex);
      pet = sapleAnswers[currentWordIndex]
    }
  }

  function loadHowToPlay() {
    const totalGames =
      Number(window.localStorage.getItem("totalGames"));
    guessedWordCount =
      Number(window.localStorage.getItem("guessedWordCount"));
    if (!totalGames && !guessedWordCount) {
      const howToPlayModal = document.getElementById("how-to-play-modal");

      // Get the <span> element that closes the modal
      const span = document.getElementById("close-how-to-play");

      // Open the modal
      howToPlayModal.style.display = "block";

      // When the user clicks on <span> (x), close the modal
      span.addEventListener("click", function () {
        howToPlayModal.style.display = "none";
      });

      // When the user clicks anywhere outside of the modal, close it
      window.addEventListener("click", function (event) {
        if (event.target == howToPlayModal) {
        howToPlayModal.style.display = "none";
        }
      });
   }
}
  
  petName = list.find(({name}) => name === pet).name;
  petPack = list.find(({name}) => name === pet).pack;
  petTier = list.find(({name}) => name === pet).tier;
  petRole = list.find(({name}) => name === pet).role;
  petLevel1TriggerAbility = list.find(({name}) => name === pet).level1TriggerAbility;
  petBaseAttack = list.find(({name}) => name === pet).baseAttack;
  petBaseHealth = list.find(({name}) => name === pet).baseHealth;
  
  if (desiredCurrentWordIndex === currentWordIndex && haveGuessed == "false") {
    //This is the case whenever the word has not been guessed

    //Should run at when the indexes are the same and there is no guess
    clearBoard();
    resetGameState();
  }

  if (desiredCurrentWordIndex != currentWordIndex ) {
    document.getElementById("input").style.visibility="hidden";
    document.getElementsByClassName("list")[0].style.visibility="hidden"
    const finalResultEl = document.getElementById("final-score");
    const currentStreak = window.localStorage.getItem("currentStreak") || 0;
    if (currentStreak == 0) {
      finalResultEl.textContent = "Saple " + (currentWordIndex + 1) + " - Unsuccessful Today!";
    }
    else {
      finalResultEl.textContent = "Saple " + (currentWordIndex + 1) + " - You Win!";
    }
  }

  function resetGameState() {
    window.localStorage.removeItem("guessedWordCount");
    window.localStorage.removeItem("table");
    window.localStorage.removeItem("haveGuessed");
  }

  function preserveGameState() {
    const boardContainer = document.getElementById("table");
    window.localStorage.setItem("table", boardContainer.innerHTML);
  }

  function updateTotalGames() {
    const totalGames = window.localStorage.getItem("totalGames") || 0;
    window.localStorage.setItem("totalGames", Number(totalGames) + 1);
  }

  function showWinningResult() {
    const finalResultEl = document.getElementById("final-score");
    finalResultEl.textContent = "Saple " + (currentWordIndex + 1) + " - You Win!";

    const totalWins = window.localStorage.getItem("totalWins") || 0;
    window.localStorage.setItem("totalWins", Number(totalWins) + 1);

    const currentStreak = window.localStorage.getItem("currentStreak") || 0;
    window.localStorage.setItem("currentStreak", Number(currentStreak) + 1);
  }

  function showLosingResult() {
    const finalResultEl = document.getElementById("final-score");
    finalResultEl.textContent = "Saple " + (currentWordIndex + 1) + " - Unsuccessful Today!";;

    window.localStorage.setItem("currentStreak", 0);
  }

function clearBoard() {
  document.getElementById("input").style.visibility="visible";
  document.getElementsByClassName("list")[0].style.visibility="visible"
  document.getElementById("table-body").remove();
  let tableBody = document.createElement("tbody");
  tableBody.setAttribute("id", "table-body");
  document.getElementById("table").append(tableBody);
}

  function updateWordIndex() {
    currentWordIndex += 1;
    window.localStorage.setItem("currentWordIndex", currentWordIndex);
  }

  function updateSapleStatus() {
    haveGuessed = true;
    window.localStorage.setItem("haveGuessed", haveGuessed);
  }
    
/*let petChange = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 18, 40, 0, 0) - now;
if (petChange < 0) {
 petChange += 86400000;
}
setTimeout(function() {
  sapleAnswers = pets[Math.floor(Math.random() * pets.length)];
}, petChange);*/

//Sort names in ascending order
let sortedPets = pets.sort();
//Reference
let input = document.getElementById("input");
//Execute function on keyup
input.addEventListener("keyup", function() {
  //Loop through the array above
  //Initially remove all elements (so if the user erases a letter or adds new letter, clean the previous outputs)
  removeElements();
  for (let i of sortedPets) {
    //Convert input to lowercase and compare with each string
    if (
      i.toLowerCase().includes(input.value.toLowerCase()) &&
      input.value != ""
    ) {
      //Create li element
      let listItem = document.createElement("li");
      //One common class name
      listItem.classList.add("list-items");
      listItem.style.cursor = "pointer";
      listItem.setAttribute("onclick", "displayNames('" + i + "')");
      //Display matched part
      let word = i.substring(0, input.value.length);
      word += i.substring(input.value.length);
      //Display the value in the array
      listItem.innerHTML = word;
      if (document.querySelectorAll(".list-items").length <= 2) {
        document.querySelector(".list").appendChild(listItem);
      }
    }
  }
});
function displayNames(value) {
  input.value = value;
  guess = input.value;
  removeElements();
  submitGuess(event);
}
function removeElements() {
  //clear all the item
  let items = document.querySelectorAll(".list-items");
  items.forEach((item) => {
    item.remove();
  });
}

input.addEventListener('input', function () {
  guess = input.value;
})

function submitGuess(event) {
  event.preventDefault();
  guess = guess.charAt(0).toUpperCase() + guess.slice(1);
  if (pets.includes(guess)) {
    updateSapleStatus();
    input.value="";
    let tableRow = document.createElement("tr");
    document.querySelector("#table-body").appendChild(tableRow);
    nameCell = tableRow.insertCell(0);
    nameCell.innerHTML = guess;
    nameCell.style.padding = "32px 1px";
    if (guess === pet) {
      nameCell.style.backgroundColor = "rgb(14 159 110)";
    }
    packCell = tableRow.insertCell(1)
    let result = list.find(({name}) => name === guess);
    result = result.pack;
    packCell.innerHTML = result;
    packCell.style.padding = "32px 1px";
    if (packCell.innerHTML === petPack) {
      packCell.style.backgroundColor = "rgb(14 159 110)";
    }
    else {
      packCell.style.backgroundColor = "rgb(226 232 240)";
    }
    tierCell = tableRow.insertCell(2);
    result = list.find(({name}) => name === guess);
    result = result.tier;
    tierCell.innerHTML = result;
    tierCell.style.padding = "32px 1px";
    if (parseInt(tierCell.innerHTML) === petTier) {
      tierCell.style.backgroundColor = "rgb(14 159 110)";
    }
    else if (Math.abs(parseInt(tierCell.innerHTML) - petTier) <= 2) {
      tierCell.style.backgroundColor = "rgb(252, 202, 21)";
    }
    else {
      tierCell.style.backgroundColor = "rgb(226 232 240)";
    }
    roleCell = tableRow.insertCell(3);
    result = list.find(({name}) => name === guess);
    result = result.role;
    roleCell.innerHTML = result;
    roleCell.style.padding = "32px 1px";
    if (roleCell.innerHTML === petRole) {
      roleCell.style.backgroundColor = "rgb(14 159 110)";
    }
    else {
      roleCell.style.backgroundColor = "rgb(226 232 240)";
    }
    level1TriggerAbilityCell = tableRow.insertCell(4);
    result = list.find(({name}) => name === guess);
    result = result.level1TriggerAbility;
    level1TriggerAbilityCell.innerHTML = result;
    level1TriggerAbilityCell.style.padding = "32px 1px";
    if (level1TriggerAbilityCell.innerText === petLevel1TriggerAbility) {
      level1TriggerAbilityCell.style.backgroundColor = "rgb(14 159 110)";
    }
    else {
      level1TriggerAbilityCell.style.backgroundColor = "rgb(226 232 240)";
    }
    baseAttackCell = tableRow.insertCell(5);
    result = list.find(({name}) => name === guess);
    result = result.baseAttack;
    baseAttackCell.innerHTML = result;
    baseAttackCell.style.padding = "32px 1px";
    if (parseInt(baseAttackCell.innerHTML) === petBaseAttack) {
      baseAttackCell.style.backgroundColor = "rgb(14 159 110)";
    }
    else if (Math.abs(parseInt(baseAttackCell.innerHTML) - petBaseAttack) <= 2) {
      baseAttackCell.style.backgroundColor = "rgb(252, 202, 21)";
    }
    else {
      baseAttackCell.style.backgroundColor = "rgb(226 232 240)";
    }
    baseHealthCell = tableRow.insertCell(6);
    result = list.find(({name}) => name === guess);
    result = result.baseHealth;
    baseHealthCell.innerHTML = result;
    baseHealthCell.style.padding = "32px 1px";
    if (parseInt(baseHealthCell.innerHTML) === petBaseHealth) {
      baseHealthCell.style.backgroundColor = "rgb(14 159 110)";
    }
    else if (Math.abs(parseInt(baseHealthCell.innerHTML) - petBaseHealth) <= 2) {
      baseHealthCell.style.backgroundColor = "rgb(252, 202, 21)";
    }
    else {
      baseHealthCell.style.backgroundColor = "rgb(226 232 240)";
    }

    guessedWordCount += 1;
    window.localStorage.setItem("guessedWordCount", guessedWordCount);
    
    preserveGameState();
    
    if (guess === pet) {
      setTimeout(() => {
        alert("You correctly guessed the pet/food!");
        showWinningResult();
        updateWordIndex();
        updateTotalGames();
        haveGuessed = false;
        window.localStorage.setItem("haveGuessed", haveGuessed);
        document.getElementById("input").style.visibility="hidden";
        document.getElementsByClassName("list")[0].style.visibility="hidden"
        return;
      }, 1000);
    }

    if (guessedWordCount >= 6 && guess != pet) {
      setTimeout(() => {
        window.confirm("The correct pet/food was " + pet);

        showLosingResult();
        updateWordIndex();
        updateTotalGames();
        haveGuessed = false;
        window.localStorage.setItem("haveGuessed", haveGuessed);
        document.getElementById("input").style.visibility="hidden";
        document.getElementsByClassName("list")[0].style.visibility="hidden"
        return;
      }, 1000);
    }
  }
}

function initHowToPlayModal() {
  const howToPlayModal = document.getElementById("how-to-play-modal");

  // Get the button that opens the modal
  const btn = document.getElementById("how-to-play-button");

  // Get the <span> element that closes the modal
  const span = document.getElementById("close-how-to-play");

  // When the user clicks on the button, open the modal
  btn.addEventListener("click", function () {
    howToPlayModal.style.display = "block";
  });

  // When the user clicks on <span> (x), close the modal
  span.addEventListener("click", function () {
    howToPlayModal.style.display = "none";
  });

  // When the user clicks anywhere outside of the modal, close it
  window.addEventListener("click", function (event) {
    if (event.target == howToPlayModal) {
      howToPlayModal.style.display = "none";
    }
  });
}

  function updateStatsModal() {
    const currentStreak = window.localStorage.getItem("currentStreak");
    const totalWins = window.localStorage.getItem("totalWins");
    const totalGames = window.localStorage.getItem("totalGames");

    document.getElementById("total-played").textContent = totalGames;
    document.getElementById("total-wins").textContent = totalWins;
    document.getElementById("current-streak").textContent = currentStreak;

    const winPct = Math.round((totalWins / totalGames) * 100) || 0;
    document.getElementById("win-pct").textContent = winPct;
  }

  function initStatsModal() {
    const statsModal = document.getElementById("stats-modal");

    // Get the button that opens the modal
    const btn = document.getElementById("stats-button");

    // Get the <span> element that closes the modal
    const span = document.getElementById("close-stats");

    // When the user clicks on the button, open the modal
    btn.addEventListener("click", function () {
      updateStatsModal();
      statsModal.style.display = "block";
    });

    // When the user clicks on <span> (x), close the modal
    span.addEventListener("click", function () {
      statsModal.style.display = "none";
    });

    // When the user clicks anywhere outside of the modal, close it
    window.addEventListener("click", function (event) {
      if (event.target == statsModal) {
        statsModal.style.display = "none";
      }
    });
  }