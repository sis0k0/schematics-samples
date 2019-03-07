import { Tree } from '@angular-devkit/schematics';

export function creationSchematic(options: any) {
  return (tree: Tree) => {
    tree.create('/path/to', 'Amsterdam');
    return tree;
  }
}
