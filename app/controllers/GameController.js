import { gameService } from "../services/GameService.js"
import { getFormData } from "../utils/FormHandler.js"

export class GameController {
  constructor() {

  }



  checkJumble() {
    event.preventDefault()
    const JumbleForm = event.target
    const jumbleElem = JumbleForm.body.value
    gameService.checkJumble(jumbleElem)
  }
}