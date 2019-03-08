import {
  Tree,
  SchematicsException,
  SchematicContext
} from '@angular-devkit/schematics';

export function addDependency(options: { name: string, version: string }) {
  return (tree: Tree, context: SchematicContext) => {
    const packageJsonPath = './package.json';
    const buffer = tree.read(packageJsonPath);

    if (!buffer) {
      throw new SchematicsException(`Cannot find ${packageJsonPath}`);
    }

    const contentAsString = buffer.toString();
    let contentAsJson;

    try {
      contentAsJson = JSON.parse(contentAsString);
    } catch (e) {
      context.logger.error(`Couldn't parse the content of ${packageJsonPath}`);
      throw e;
    }

    if (!contentAsJson.dependencies) {
      contentAsJson.dependencies = {};
    }

    const { name, version } = options;
    contentAsJson.dependencies[name] = version;

    const newContent = JSON.stringify(contentAsJson, null, 2);
    tree.overwrite(packageJsonPath, newContent);

    return tree;
  };
}
