import { useReducer, useCallback } from "react";

// Helper function
import runFnsInSequence from "../../util/runFnsInSequence";

/**
 * @function internalReducer
 * @param {object} state
 * @param {object} action
 * @return {object} returns new object representing state
 */
const internalReducer = (state, action) => {
  switch (action.type) {
    case useButton.types.TOGGLE_CLICKED:
      return {
        ...state,
        clicked: !state.clicked,
      };
    default:
      throw Error(`action type ${action.type} is not handled`);
  }
};

/**
 * Custom hook that manages if an element has been clicked or not, and utilizes prop getters that is exposed to the user
 * @function useButton
 * @param {Boolean} initialClicked - boolean that indicates if an element is clicked or not
 * @param {Function} userReducer - user specified reducer
 * @returns {Object}
 */
const useButton = (
  initialClicked = false,
  userReducer = (s, a) => a.internalChanges
) => {
  const INITIAL_STATE = { clicked: initialClicked };

  /**
   * Function that takes in the current state of the reducer and holds that new state object in a variable, which then is forwarded to the user's own reducer "userReducer"
   * @function resolveChangesReducer
   * @param {object} currentInternalState - current state
   * @param {object} action - action object
   * @return {object} - new object tht represents the state and any proposed changes
   */
  const resolveChangesReducer = (currentInternalState, action) => {
    const internalChanges = internalReducer(currentInternalState, action);

    const userChanges = userReducer(currentInternalState, {
      ...action,
      internalChanges,
    });

    return userChanges;
  };

  const [{ clicked }, setClicked] = useReducer(
    resolveChangesReducer,
    INITIAL_STATE
  );

  const toggleClicked = useCallback(
    () =>
      setClicked({
        type: useButton.types.TOGGLE_CLICKED,
      }),
    [setClicked]
  );

  const getTogglerProps = useCallback(
    ({ onClick, ...otherProps }) => ({
      onClick: runFnsInSequence(toggleClicked, onClick),
      "aria-pressed": clicked,
      role: "button",
      ...otherProps,
    }),
    [clicked, toggleClicked]
  );

  return { clicked, getTogglerProps };
};

useButton.types = {
  TOGGLE_CLICKED: "TOGGLE_CLICKED",
};

export default useButton;
