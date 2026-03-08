// Fix three.js types for @react-three/fiber
declare module "three" {
  export class Mesh {
    rotation: { x: number; y: number; z: number };
  }
  export class Points {
    rotation: { x: number; y: number; z: number };
  }
  export class Object3D {}
  export class Material {}
  export class MeshStandardMaterial extends Material {}
  export class PointsMaterial extends Material {}
  export class BufferGeometry {}
  export class BufferAttribute {}
  export class Vector3 {
    constructor(x?: number, y?: number, z?: number);
  }
  export class Color {
    constructor(color?: string | number);
  }
  export class Euler {
    constructor(x?: number, y?: number, z?: number);
  }
  export const MathUtils: any;
}
