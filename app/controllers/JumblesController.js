import {AppState} from '../AppState.js';
import {jumblesService} from '../services/JumblesService.js';
import {setHTML} from '../utils/Writer.js';

export class JumblesController {
  constructor() {
    this.drawJumbleList();
    AppState.on('activeJumble', this.drawActiveJumble);
  }

  drawJumbleList() {
    const allJumbles = AppState.jumbles;
    let jumbleList = '';
    allJumbles.forEach((jumble) => (jumbleList += jumble.jumbleListTemplate));
    setHTML('jumble-list', jumbleList);
  }

  drawActiveJumble() {
    const actualJumble = AppState.activeJumble;
    setHTML('active-jumble', actualJumble.activeJumbleTemplate);
  }

  setActiveJumble(jumbleId) {
    jumblesService.setActiveJumble(jumbleId);
  }
}
