import { Tree, url, template,
  apply, mergeWith } from '@angular-devkit/schematics';

export function templatingSchematic(options: any) {
  return (tree: Tree) => {
    const urlSource = url('./_files');

    const templatingOptions = { filename: '123', city: 'Tel Aviv' };
    const templateRule = template(templatingOptions);
    const templateSource = apply(urlSource, [templateRule]);

    const mergedTree = mergeWith(templateSource);
    return mergedTree;
  }
}

