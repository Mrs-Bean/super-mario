import { buildingLandResources } from "../utils/loadResources";
import { SIZE } from "../constants";
import { Sprite } from "../sprite";

export class BuildingLand extends Sprite {
  constructor({ x, y }) {
    super({
      x,
      y,
      width: SIZE,
      height: SIZE,
    });
  }

  draw(context, camera) {
    context.drawImage(
      buildingLandResources[0],
      this.x - camera.x,
      this.y,
      this.width,
      this.height
    );
  }
}
