const url = "/api/";

export const getTemplates = async () => {
  const resp = await fetch(url, {
    headers: { "Access-Control-Allow-Origin": "*" },
  });
  return resp.json();
};
