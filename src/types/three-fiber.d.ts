/* eslint-disable @typescript-eslint/no-namespace */
import type { Object3DNode, MaterialNode } from "@react-three/fiber";

declare module "@react-three/fiber" {
  interface ThreeElements {
    meshStandardMaterial: any;
    pointsMaterial: any;
    bufferAttribute: any;
  }
}

declare module "@react-three/drei" {
  export const MeshDistortMaterial: any;
  export const Float: any;
}
