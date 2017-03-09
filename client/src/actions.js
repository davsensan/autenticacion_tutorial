import C from './constants'

export const action_switchLanguage = (language) =>
	({
	  type: C.SWITCH_LANGUAGE,
      language
  })
