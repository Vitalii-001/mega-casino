const loginAppDialogEl = document.getElementById('loginAppDialog');
import {adminBtnEl, adminUI} from '../../shared/ui-elements/admin-ui.elements';
import {playerBtnEl, playerUI} from '../../shared/ui-elements/player-ui.elements';


const login = () => {
  const selectedRole = (role) => {
    switch (role) {
      case 'admin':
        adminUI.style.display = 'block';
        break;
      case 'player':
        playerUI.style.display = 'block';
        break;
    }
    loginAppDialogEl.close();
  };

  adminBtnEl.addEventListener('click', () => {
    selectedRole('admin');
  });

  playerBtnEl.addEventListener('click', () => {
    selectedRole('player');
  });
};

const initApp = () => {
  loginAppDialogEl.show();
  login();
};

initApp();


