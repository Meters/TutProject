export const fetchQuestion = (question) => {
  // Return action
  return {
    // Unique identifier
    type: 'FETCH_QUESTION',
    // Payload
    question: question
  }
};

export const setQuestion = (question) => {
  // Return action
  return {
    // Unique identifier
    type: 'SET_QUESTION',
    // Payload
    question: question
  }
};

export const unsetQuestion = () => {
  // Return action
  return {
    // Unique identifier
    type: 'UNSET_QUESTION',
    // Payload
    question: null
  }
};