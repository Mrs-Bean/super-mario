export class DynamicSprite {
  isActive = false;
  isDestroy = false;

  constructor(options) {
    const { x, y, vx = 0, vy = 0, width, height } = options;
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.width = width;
    this.height = height;
  }

  active() {
    this.isActive = true;
  }

  unActive() {
    this.isActive = false;
  }

  destroy() {
    this.unActive();
    this.isDestroy = true;
  }
}
