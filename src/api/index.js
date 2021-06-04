const url =
  "https://front-end-task-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates";

export const getTemplates = async () => {
  const resp = await fetch(url, {
    headers: { "Access-Control-Allow-Origin": "*" },
  });
  return resp.json();
};
