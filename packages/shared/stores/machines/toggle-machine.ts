import { createMachine } from 'xstate'

export const toggleMachine = createMachine({
  id: 'toggle',
  initial: 'inactive',
  states: {
    inactive: {
      on: { TOGGLE: 'active' },
    },
    active: {
      on: { TOGGLE: 'inactive' },
    },
  },
  schema: {
    context: {} as { value: string },
    events: {} as { type: 'TOGGLE' },
  },
  predictableActionArguments: true,
})
