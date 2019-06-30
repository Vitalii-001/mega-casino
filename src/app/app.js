import { formSerialize } from '../../shared/utils/utils';

const loginAppDialogEl = document.getElementById('loginAppDialog');
import {loginBtnEl, loginFormEl, adminUIEl} from '../../shared/ui-elements/admin-ui.elements';
import {playerUIEl} from '../../shared/ui-elements/player-ui.elements';
import { UserModel } from './user/models/user.model';


const login = () => {
  const showUIAccordingRole = (isAdmin) => {
    isAdmin ? adminUIEl.style.display = 'block' : playerUIEl.style.display = 'block';
    loginAppDialogEl.close();
  };

  loginBtnEl.addEventListener('click', () => {
    const getUserFormData = formSerialize(loginFormEl);
    getUserFormData.startCash = 1000000;
    const loggedUser = new UserModel(getUserFormData);
    console.log(loggedUser)
    showUIAccordingRole(getUserFormData.isAdmin);
  });
};

const initApp = () => {
  loginAppDialogEl.show();
  login();
};

initApp();


