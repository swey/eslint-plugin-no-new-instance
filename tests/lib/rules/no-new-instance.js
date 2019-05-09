/**
 * @fileoverview Tests for no-new-instance rule.
 * @author Sebastian Weyrauch
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require('../../../lib/rules/no-new-instance');
const RuleTester = require('eslint').RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run('no-new-instance', rule, {
	valid: [{
		options: [['Event']],
		code: 'new CustomEvent(\'loaded\')'
	}],
	invalid: [
		{
			options: [['Event']],
			code: 'new Event(\'resize\')',
			errors: [
				{
					messageId: 'avoidNewInstance'
				}
			]
		},
		{
			options: [['Test', 'Event', 'MouseEvent']],
			code: 'new Event(\'resize\')',
			errors: [
				{
					messageId: 'avoidNewInstance'
				}
			]
		}
	]
});
