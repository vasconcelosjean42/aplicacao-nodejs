import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: any;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): void {
    const user = this.usersRepository.findById(user_id);

    this.usersRepository.turnAdmin(user);
  }
}

export { TurnUserAdminUseCase };
