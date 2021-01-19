const { expect } = require('@jest/globals');
const Player = require('../lib/Player');

test('creates a player object', () => {
    const player = new Player('Matt');

    expect(player.name).toBe('Matt');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
})