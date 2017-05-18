export const objectWithRecordsToArray = records => (
  Object.keys(records).map(id => ({ ...records[id], id }))
);
