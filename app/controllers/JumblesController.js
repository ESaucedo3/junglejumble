import { AppState } from "../AppState.js"
import { setHTML } from "../utils/Writer.js";

export class JumblesController {

  constructor() {
    console.log('jumbles constructor ready!')
    this.drawJumbleList()
  }

  drawJumbleList() {
    const allJumbles = AppState.jumbles;
    let jumbleList = '';
    allJumbles.forEach(jumble => jumbleList += jumble.jumbleListTemplate);
    setHTML('jumble-list', jumbleList);
  }

  setActiveJumble(jumbleId) {

  }
}