import { spriteRockResources } from "../utils/loadResources";
import { SIZE } from "../constants";
import { StaticSprite } from "./static-sprite";

export class SpriteRock extends StaticSprite {
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
      spriteRockResources[0],
      this.x - camera.x,
      this.y,
      this.width,
      this.height
    );
  }
}
