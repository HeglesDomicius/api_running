import UsersService from '../services/users';

class UsersController {
  constructor(usersService = new UsersService()) {
    this.usersService = usersService;
  }

  async getAll(_, res) {
    const users = await this.usersService.getAll();
    res.json(users);
  }
}
export default UsersController;
