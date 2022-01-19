import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) { }

  handle(request, response: Response): Response {
    try {
      const { user_id } = request.headers;

      const users = this.listAllUsersUseCase.execute({ user_id });

      return response.status(201).json({ users });
    } catch (e) {
      if (e.message === "User not found") {
        return response.status(400).json({ error: e.message })
      } else if (e.message === "The user is not an Admin") {
        return response.status(404).json({ error: e.message })
      }

    }
  }
}

export { ListAllUsersController };
