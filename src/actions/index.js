import * as c from "./ActionTypes";

export const deleteItem = (id) => ({
  type: c.DELETE_ITEM,
  id,
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM,
});

export const updateTime = (id, formattedWaitTime) => ({
  type: c.UPDATE_TIME,
  id: id,
  formattedWaitTime: formattedWaitTime,
});
