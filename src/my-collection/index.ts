import { Rule, Tree } from '@angular-devkit/schematics';

export function myCollection(): Rule {
  return (tree: Tree) => {
    const buffer = tree.read('./package.json');
    const content = buffer! .toString();
    const json = JSON.parse(content);

    json.dependencies['my-new-library'] = '0.15.0';

    tree.overwrite('./package.json', JSON.stringify(json, null, 2));
    return tree;
  };
}

