import { schematic, chain, Tree } from '@angular-devkit/schematics';

export function actualComposition() {
  return chain([
    schematic('logging', { name: 'Tel Aviv' }),
    (tree: Tree) => {
      tree.create('heya.txt', 'Tel Aviv');
    },
  ]);
}

export function simpleComposition() {
  return schematic('logging', { name: 'Tel Aviv' });
}



