import { SpriteLand } from "../sprite/sprite-land";
import { SpriteAsk } from "../sprite/sprite-ask";
import { SpriteFlower } from "../sprite/sprite-flower";
import { SpriteGrowMushroom } from "../sprite/sprite-grow-mushroom";
import { SpriteBadMushroom } from "../sprite/sprite-bad-mushroom";
import { SpriteStone } from "../sprite/sprite-stone";
import { SpriteWin } from "../sprite/sprite-win";
import { SpriteGold } from "../sprite/sprite-gold";
import { SpriteRock } from "../sprite/sprite-rock";

function toKebabCase(str) {
  return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

export class Map {
  constructor() {}

  serialization(scene, title) {
    const mapData = {
      title,
      data: [],
    };
    scene.dynamicSprites.forEach((sprite) => {
      mapData.data.push({
        type: toKebabCase(sprite.constructor.name),
        x: sprite.x,
        y: sprite.y,
      });
    });

    scene.staticSprites.forEach((sprite) => {
      mapData.data.push({
        type: toKebabCase(sprite.constructor.name),
        x: sprite.x,
        y: sprite.y,
      });
    });

    return mapData;
  }

  deserialization(mapData) {
    const { data } = mapData;

    // 静态精灵
    const statics = [];

    // 动态精灵
    const dynamics = [];
    data.forEach((v) => {
      switch (v.type) {
        case "sprite-land":
          statics.push(
            new SpriteLand({
              x: v.x,
              y: v.y,
            })
          );
          break;

        case "sprite-ask":
          statics.push(
            new SpriteAsk({
              x: v.x,
              y: v.y,
            })
          );
          break;

        case "sprite-stone":
          statics.push(
            new SpriteStone({
              x: v.x,
              y: v.y,
            })
          );
          break;
        case "sprite-rock":
          statics.push(
            new SpriteRock({
              x: v.x,
              y: v.y,
            })
          );
          break;
        case "sprite-win":
          statics.push(
            new SpriteWin({
              x: v.x,
              y: v.y,
            })
          );
          break;
        case "sprite-gold":
          statics.push(
            new SpriteGold({
              x: v.x,
              y: v.y,
            })
          );
          break;
        case "sprite-flower":
          dynamics.push(
            new SpriteFlower({
              x: v.x,
              y: v.y,
            })
          );
          break;

        case "sprite-grow-mushroom":
          dynamics.push(
            new SpriteGrowMushroom({
              x: v.x,
              y: v.y,
            })
          );
          break;
        case "sprite-bad-mushroom":
          dynamics.push(
            new SpriteBadMushroom({
              x: v.x,
              y: v.y,
            })
          );
          break;
      }
    });

    return {
      statics,
      dynamics,
    };
  }

  import() {}

  export() {}
}
