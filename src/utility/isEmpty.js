export const isEmpty = (args) => {
  return (
    typeof args === undefined ||
    args.length === 0 ||
    Object.keys(args).length === 0
  );
};
