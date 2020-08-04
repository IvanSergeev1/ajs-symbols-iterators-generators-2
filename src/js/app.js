export default class Team {
  constructor() {
    this.members = [{
      name: 'Player 1',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    },
    {
      name: 'Player 2',
      type: 'Swordsman',
      health: 100,
      level: 2,
      attack: 40,
      defence: 10,
    },
    {
      name: 'Player 3',
      type: 'Magician',
      health: 90,
      level: 1,
      attack: 10,
      defence: 40,
    },
    {
      name: 'Player 4',
      type: 'Undead',
      health: 50,
      level: 3,
      attack: 100,
      defence: 80,
    },
    {
      name: 'Player 5',
      type: 'Zombie',
      health: 20,
      level: 1,
      attack: 10,
      defence: 10,
    },
    {
      name: 'Player 6',
      type: 'Daemon',
      health: 80,
      level: 2,
      attack: 80,
      defence: 20,
    }];
  }

  * [Symbol.iterator]() {
    let current = 0;
    const last = this.members.length;
    const persons = this.members;
    // eslint-disable-next-line no-plusplus
    for (let i = current; i < last; i++) {
      yield persons[current];
      current += 1;
    }
  }
}
