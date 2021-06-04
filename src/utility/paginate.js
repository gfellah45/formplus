export const paginate = (data, count, page, search) => {
  if (page < 1) {
    return;
  } else {
    const output = data
      .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
      .slice(page === 1 ? 0 : count - 12, count);
    return output;
  }
};
