import { CasinoModel } from './models/casino.model';
import { formSerialize } from '../../../shared/utils/utils';
import { CasinoService } from './services/casino.service';
import style from '../../styles/main.css';

const createCasinoBtnEl = document.getElementById('createCasino');
const confirmCreationBtnEl = document.getElementById('confirmCreation');
const createCasinoDialogEl = document.getElementById('createCasinoDialog');
const createCasinoFormEl = document.getElementById('createCasinoForm');

const casinoService = new CasinoService();
let showUserSUm;

createCasinoBtnEl.addEventListener('click', () => {
  createCasinoDialogEl.show();
});


confirmCreationBtnEl.addEventListener('click', () => {
  const formData = formSerialize(createCasinoFormEl);
  const casino = new CasinoModel(formData);
  console.log(formData)
  createCasinoDialogEl.close();
})


