import UsersService from '../services/users';

class UsersController {
  /**
   * Dessa maneira da pra passar o usersService por parametro
   * se nao passar ele inicia um novo UsersService
   * Isso desacopla a implementação e facilita principalmente
   * a substituição nos testes
   */
  constructor(usersService = new UsersService()) {
    this.usersService = usersService;
  }
  /**
   * O controller não tem nenhuma logica
   * somente delega para o service
   */
  async getAll(_, res) {
    const users = await this.usersService.getAll();
    res.json(users);
  }
}

export default UsersController;
