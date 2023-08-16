export interface StringCommandBufferInterface {
  delay: number;
  append: (key: string) => void;
  clear: (args: never) => void;
  get: (args: never) => string;
  isEmpty: (args: never) => boolean;
}
