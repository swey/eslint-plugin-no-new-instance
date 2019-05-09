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
		docs: {
			description: 'Disallow instantiating of given classes',
			category: 'Possible Errors',
			recommended: false
		},
		fixable: null,  // or 'code' or 'whitespace'
		schema: {
			type: 'array',
			minItems: 0,
			items: {
				type: 'string'
			}
		},
		messages: {
			avoidInstantiating: 'Avoid instantiating class {{ name }} ("new {{ name }}()")'
		}
	},

	create(context) {
		const regExp = new RegExp(`^(${context.options.join('|')})$`);

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
