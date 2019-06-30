export class CasinoModel {
  constructor(data) {
    this.id = `_${Math.floor(Math.random() * (1000000 - 10000) + 10000)}`;
    Object.assign(this, data);
  }
}
