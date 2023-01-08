export default class Team {
  constructor(...players) {
    this.players = players;
  }

  * [Symbol.iterator]() {
    yield* this.players;
  }
}
