const addInput = (name, message, type = 'HTMLDivElement', other) => {
  return {type, name, message, ...other};
};

module.exports = function (plop) {

  plop.setGenerator('component', {
    description: 'React Component using Typescript',
    prompts: [
      addInput('name', 'Component Name: ')
    ],
    actions: [{
      type: 'addMany',
      destination: 'src/components/{{name}}',
      templateFiles: 'plop_templates/component/*.hbs',
      base: 'plop_templates/component',
    },]
  });

  plop.setGenerator('layout', {
    description: 'React Layout using Typescript',
    prompts: [
      addInput('name', 'Component Name: ')
    ],
    actions: [{
      type: 'addMany',
      destination: 'src/layouts/{{name}}',
      templateFiles: 'plop_templates/layout/*.hbs',
      base: 'plop_templates/layout',
    },]
  });

  plop.setGenerator('page', {
    description: 'React Page using Typescript',
    prompts: [
      addInput('name', 'Page Name: ')
    ],
    actions: [{
      type: 'addMany',
      destination: 'src/pages/{{name}}',
      templateFiles: 'plop_templates/page/*.hbs',
      base: 'plop_templates/page',
    },]
  });

  plop.setGenerator('context', {
    description: 'React Context using Typescript',
    prompts: [
      addInput('name', 'Context Name: ')
    ],
    actions: [{
      type: 'addMany',
      destination: 'src/contexts/{{name}}',
      templateFiles: 'plop_templates/context/*.hbs',
      base: 'plop_templates/context',
    },]
  });

  plop.setGenerator('hook', {
    description: 'React Hook using Typescript',
    prompts: [
      addInput('name', 'Hook Name: ')
    ],
    actions: [{
      type: 'addMany',
      destination: 'src/hooks/{{name}}',
      templateFiles: 'plop_templates/hook/*.hbs',
      base: 'plop_templates/hook',
    },]
  });

  plop.setGenerator('service', {
    description: 'React Server using Typescript',
    prompts: [
      addInput('name', 'Service Name: ')
    ],
    actions: [{
      type: 'add',
      path: 'src/services/{{snakeCase name}}.tsx',
      templateFile: 'plop_templates/service.tsx.hbs',
    },]
  });

  plop.setGenerator('utils', {
    description: 'React Utils using Typescript',
    prompts: [
      addInput('name', 'Utils Name: ')
    ],
    actions: [{
      type: 'add',
      path: 'src/utils/{{snakeCase name}}.tsx',
      templateFile: 'plop_templates/utils.tsx.hbs',
    },]
  });

};
