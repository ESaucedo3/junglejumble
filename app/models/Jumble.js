import { generateId } from "../utils/GenerateId.js"

export class Jumble {
  constructor(data) {
    this.id = generateId()
    this.name = data.name
    this.body = data.body
    // to best keep track of the fastest times you might want these properties too! They would start null cause no one has completed these yet.
    this.fastestTime = null
    this.startTime = null
    this.endTime = null
  }

  get jumbleListTemplate() {
    return `<div class="d-flex align-items-center">
              <button onclick="app.JumblesController.setActiveJumble('${this.id}')">Start</button>
              <p class="m-0">${this.name} Jumble | 34.3s | 55.3wpm</p>
            </div>`
  }

  get activeJumbleTemplate() {
    return ` <p>${this.name} Jumble Fastest Time 30s</p>
            <p>${this.body}</p>`
  }
}