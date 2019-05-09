/**
 * @fileoverview Disallow instantiating of given classes
 * @author Sebastian Weyrauch
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require('../../../lib/rules/no-instantiating');
const RuleTester = require('eslint').RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run('no-instantiating', rule, {
	valid: [{
		options: ['Event'],
		code: 'new CustomEvent(\'loaded\')'
	}],
	invalid: [
		{
			options: ['Event'],
			code: 'new Event(\'resize\')',
			errors: [
				{
					messageId: 'avoidInstantiating'
				}
			]
		},
		{
			options: ['Test', 'Event', 'MouseEvent'],
			code: 'new Event(\'resize\')',
			errors: [
				{
					messageId: 'avoidInstantiating'
				}
			]
		}
	]
});
