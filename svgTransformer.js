const path = require('path');

module.exports = {
    process(src, filePath) {
      // Write your transformation logic here
      // For example, you can replace the SVG content with a React component
      // that renders an empty <svg> element with a data-filename attribute
      const name = `svg-${path.basename(filePath, ".svg")}`
        .split(/\W+/)
        .map((x) => `${x.charAt(0).toUpperCase()}${x.slice(1)}`)
        .join("");
      return {
        code: `
          const React = require('react');
          function ${name}(props) {
            return React.createElement(
              'svg',
              Object.assign({}, props, {'data-filename': ${name}.name})
            )
          }
          module.exports = ${name}
        `,
      };
    },
  };
  