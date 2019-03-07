import { Tree, SchematicContext } from '@angular-devkit/schematics';

export function sayHi(options: { name: string }) {
  return (tree: Tree, context: SchematicContext) => {
    context.logger.info(`Heeey ${options.name}!`);
    return tree;
  };
}
