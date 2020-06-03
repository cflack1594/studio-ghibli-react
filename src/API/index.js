export const getStudioGhibliData = async (target) => {
  try {
    const resp = await window.fetch(
      `https://ghibliapi.herokuapp.com/${target}`
    );
    return resp.json();
  } catch (error) {
    throw new Error("Failed to fetch");
  }
};
