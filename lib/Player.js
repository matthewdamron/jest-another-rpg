function Player(name = '') {
    this.name = name;

    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 10 + 95);
    this.agility = Math.floor(Math.random() * 10 + 95);
}

module.exports = Player;