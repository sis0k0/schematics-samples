import { Tree } from '@angular-devkit/schematics';

export function renamingSchematic(options: any) {
  return (tree: Tree) => {
    tree.rename('/path/to', '/path/NEW-FILENAME');
    return tree;
  }
}
