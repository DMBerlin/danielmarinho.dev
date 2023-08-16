import { StringCommandBufferInterface } from "~/types/stringCommandBuffer";

export class StringCommandBuffer implements StringCommandBufferInterface {
  private timer: NodeJS.Timeout;
  private value = "";
  delay: number;
  constructor(delay = 600) {
    this.delay = delay;
  }

  append(str: string): void {
    clearTimeout(this.timer);
    this.value += str;

    this.timer = setTimeout(() => {
      this.value = "";
    }, this.delay);
  }

  clear(): void {
    clearTimeout(this.timer);
    this.value = "";
  }

  get(): string {
    return this.value.slice(-2);
  }

  isEmpty(): boolean {
    return this.value === "";
  }
}
