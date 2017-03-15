var StateMachine = require('state-machine.min');
var gameFsm = StateMachine.create({
  initial: 'init',
  events: [
    { name: 'deal',  from: 'init',  to: 'deal' },
    { name: 'make', from: 'yellow', to: 'red'    },
    { name: 'exchange',  from: 'red',    to: 'yellow' },
    { name: 'end', from: 'yellow', to: 'green'  }
]});