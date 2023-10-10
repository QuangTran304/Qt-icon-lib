const template = (variables, { tpl }) => {
  return tpl`
${variables.comments}

${variables.imports};

${variables.interfaces};

const ${variables.componentName} = (${variables.props}) => (
  ${variables.jsx}
);

${variables.exports};
`;
};

// eslint-disable-next-line no-undef
module.exports = template;
