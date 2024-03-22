export interface GameClasses {
  name: 'Wizard' | 'Warrior' | 'Rogue' | 'Paladin' | 'Death knight';
  description: string;
  image: string;
  abilities: Abilities[];
}
export interface Abilities {
  name: string;
  description: string;
  type: 'instant' | 'passive' | 'trigger';
  image: string;
}
export const classes: GameClasses[] = [
  {
    name: 'Wizard',
    description:
      'Wise magicians subjugate reality itself by directing the flows of primary energies, or not. At least that`s what they say. Smart-ass guys.',
    image: '/textures/ui/classIcons/wizard.png',
    abilities: [
      {
        name: 'Fireball',
        description: 'You cast a fireball and shoot it at your nemeses',
        type: 'instant',
        image: '/textures/ui/classIcons/abilitiesIcons/fireball.png',
      },
      {
        name: 'Creating a potions',
        description:
          'You create a small potion out of thin air, I wonder if it’s possible to make food this way?',
        type: 'instant',
        image: '/textures/ui/classIcons/abilitiesIcons/potionCreation.png',
      },
      {
        name: 'Mana shield',
        description:
          'You create a shield of mana, granting 15 armor on 3 hits. Physical damage, epta ',
        type: 'instant',
        image: '/textures/ui/classIcons/abilitiesIcons/manaShield.png',
      },
      {
        name: 'Secret knowledge',
        description: 'Your knowledge of magic gives you an additional 5 intelligence',
        type: 'passive',
        image: '/textures/ui/classIcons/abilitiesIcons/knowledge.png',
      },
    ],
  },
  {
    name: 'Warrior',
    description: 'Retard with a sword',
    image: '/textures/ui/classIcons/warrior.png',
    abilities: [
      {
        name: 'Training',
        description: 'You train and get a permanent 1 strength, lightweight baby',
        type: 'instant',
        image: '/textures/ui/classIcons/abilitiesIcons/training.png',
      },
      {
        name: 'Snack',
        description:
          'Having a snack restores 15 HP. The dungeon is dungeons, and the food is on a schedule.',
        type: 'instant',
        image: '/textures/ui/classIcons/abilitiesIcons/camp.png',
      },
      {
        name: 'Execution',
        description:
          'If the enemy has less than or 50% health, you instantly kill him (Dont work on bosses)',
        type: 'instant',
        image: '/textures/ui/classIcons/abilitiesIcons/execution.png',
      },
      {
        name: 'Force',
        description:
          'The natural strength of a warrior gives an additional 5 strength, May the Force be with you',
        type: 'passive',
        image: '/textures/ui/classIcons/abilitiesIcons/force.png',
      },
    ],
  },
  {
    name: 'Rogue',
    description: 'Retard with a dagger',
    image: '/textures/ui/classIcons/rogue.png',
    abilities: [
      {
        name: 'Lockpicking',
        description: "You can open the lock without a key, it's not a crime, is it?",
        type: 'trigger',
        image: '/textures/ui/classIcons/abilitiesIcons/lockpicking.png',
      },
      {
        name: 'Invisible',
        description: 'You go into invisibility, granting 50 agility on 1 hits. Who is there?',
        type: 'instant',
        image: '/textures/ui/classIcons/abilitiesIcons/invisible.png',
      },
      {
        name: 'Pathfinder',
        description: 'Your sense allows you to move to any room on the map',
        type: 'trigger',
        image: '/textures/ui/classIcons/abilitiesIcons/pathfinder.png',
      },
      {
        name: 'Weak spots',
        description: 'You know your enemy`s weak spots, crit chance increased by 10%',
        type: 'passive',
        image: '/textures/ui/classIcons/abilitiesIcons/crithit.png',
      },
    ],
  },
  {
    name: 'Paladin',
    description: 'Retard with a god`s bless',
    image: '/textures/ui/classIcons/paladin.png',
    abilities: [
      {
        name: 'God`s blessing',
        description: 'Calling the heavens restores 15 HP. Subscriber is now available',
        type: 'instant',
        image: '/textures/ui/classIcons/abilitiesIcons/bless.png',
      },
      {
        name: 'Judgment',
        description:
          'Righteous anger make you deal a guaranteed critical hit, I hate these, what’s their name... who won’t let me live... um... forgot',
        type: 'instant',
        image: '/textures/ui/classIcons/abilitiesIcons/judgment.png',
      },
      {
        name: 'Holy armor',
        description: 'Shining armor imbued with sacred light gives 5 armor. Fashionable bastard',
        type: 'passive',
        image: '/textures/ui/classIcons/abilitiesIcons/holyArmor.png',
      },
      {
        name: "Heaven's Wrath",
        description:
          'Your faith and power gives you a 1.5X crit multiplier. Fanaticism and militancy have not yet led to good',
        type: 'passive',
        image: '/textures/ui/classIcons/abilitiesIcons/wrath.png',
      },
    ],
  },
  {
    name: 'Death knight',
    description: 'Undead retard',
    image: '/textures/ui/classIcons/deathKnight.png',
    abilities: [
      {
        name: 'Death coil',
        description: 'You release a tortured soul at an enemy (fart joke)',
        type: 'instant',
        image: '/textures/ui/classIcons/abilitiesIcons/deathCoil.png',
      },
      {
        name: 'Leech strike',
        description: 'You deal a strike the damage of which is returned to you in HP',
        type: 'instant',
        image: '/textures/ui/classIcons/abilitiesIcons/vampStrike.png',
      },
      {
        name: 'Dead metabolism',
        description:
          'Potions and food that take away HP now restore it. High-functioning alcoholism',
        type: 'passive',
        image: '/textures/ui/classIcons/abilitiesIcons/deadMetabolism.png',
      },
      {
        name: 'Phylactery',
        description: 'Phylactery allows you to come back when you die, but only once',
        type: 'passive',
        image: '/textures/ui/classIcons/abilitiesIcons/phylactery.png',
      },
    ],
  },
];
