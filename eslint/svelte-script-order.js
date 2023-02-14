// @ts-check
/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
    create(context) {
        return {
            // Program(node) {
            //     // console.log('node', node);
            //     console.log('context', context);
            // },
            // '*': function () {console.log('context', context);},
            // Identifier: function (node) {
            //     console.log('node', node);
            //     if (node.name.length === 1)
            //         context.report({
            //             node,
            //             message: 'Avoid single-letter identifiers',
            //         });
            // },
        };
    },
};