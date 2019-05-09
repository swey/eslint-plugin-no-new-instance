/**
 * @fileoverview Rule to disallow new instances of configured classes.
 * @author Sebastian Weyrauch
 */
'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow new instances of configured classes',
			category: 'Possible Errors',
			recommended: false
		},
		fixable: null,  // or 'code' or 'whitespace'
		schema: [{
			type: 'array',
			minItems: 1,
			items: {
				type: 'string'
			}
		}],
		messages: {
			avoidNewInstance: 'Do not create new instances of class \'{{ name }}\''
		}
	},

	create(context) {
		const regExp = new RegExp(`^(${context.options[0].join('|')})$`);

		return {
			NewExpression(node) {
				if (regExp.test(node.callee.name)) {
					context.report({
						node,
						messageId: 'avoidNewInstance',
						data: {
							name: node.callee.name
						}
					});
				}
			}
		};
	}
};
