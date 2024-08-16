import { baseMarioResources } from "../utils/loadResources";

export class BaseMario {
  frame = 0;
  actionType = "static";

  constructor() {
    this.resources = {
      static: [baseMarioResources[0]],
      jumpLeft: [baseMarioResources[1]],
      jumpRight: [baseMarioResources[2]],
      left: [
        baseMarioResources[3],
        baseMarioResources[4],
        baseMarioResources[5],
      ],
      right: [
        baseMarioResources[6],
        baseMarioResources[7],
        baseMarioResources[8],
      ],
      die: [baseMarioResources[9]],
    };
  }

  getInfo(options) {
    const { actionType } = options;
    if (actionType !== this.actionType) {
      this.frame = 0;
    }
    this.actionType = actionType;

    const resource = this.resources[actionType][~~this.frame];
    this.frame =
      this.frame >= this.resources[actionType].length - 1
        ? 0
        : this.frame + 0.1;

    return {
      resource,
    };
  }
}
