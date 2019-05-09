/**
 * @fileoverview Disallow instantiating of given classes
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
			description: 'Disallow instantiating of given classes',
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
			avoidInstantiating: 'Avoid instantiating class \'{{ name }}\''
		}
	},

	create(context) {
		const regExp = new RegExp(`^(${context.options[0].join('|')})$`);

		return {
			NewExpression(node) {
				if (regExp.test(node.callee.name)) {
					context.report({
						node,
						messageId: 'avoidInstantiating',
						data: {
							name: node.callee.name
						}
					});
				}
			}
		};
	}
};
