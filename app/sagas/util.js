export const objectWithRecordsToArray = records => (
  Object.keys(records).map(id => ({ ...records[id], id }))
);

export const isUnauthorizedError = error => error.response.status === 401;
