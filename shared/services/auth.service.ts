export class AuthService {
  public static _instance: AuthService;

  constructor() {
    if (AuthService._instance) {
      return AuthService._instance;
    }

    AuthService._instance = this;
  }

  loggin(user) {

  }
}
