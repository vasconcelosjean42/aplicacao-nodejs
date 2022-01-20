import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) { }

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.query;

      this.turnUserAdminUseCase.execute({ user_id });

      return response.status(201).send();
    } catch (e) {
      response.status(400).json({ error: e.message })
    }
  }
}

export { TurnUserAdminController };
