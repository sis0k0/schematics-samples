import { schematic, chain, Tree } from '@angular-devkit/schematics';

export function actualComposition() {
  return chain([
    schematic('logging', { name: 'Amsterdam' }),
    (tree: Tree) => {
      tree.create('heya.txt', 'Amsterdam');
    },
  ]);
}

export function simpleComposition() {
  return schematic('logging', { name: 'Amsterdam' });
}



