export const getStudioGhibliData = async (target) => {
  const resp = await window.fetch(`https://ghibliapi.herokuapp.com/${target}`);
  return resp.json();
};
