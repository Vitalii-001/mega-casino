import { getRandomId } from '../../../../shared/utils/utils';

export class UserModel {
  constructor(data) {
    this.id = getRandomId();
    Object.assign(this, data);
  }

  createCasino() {

  }

  createGameMachine() {

  }

  removeGameMachine(id) {

  }

  getCash() {

  }

}
