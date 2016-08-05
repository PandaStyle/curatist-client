export const setFeed = makeAction('SET_FEED')

function makeAction (type) {
    return ({ dispatch }, ...args) => dispatch(type, ...args)
}