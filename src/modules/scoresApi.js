const id = 'AhzZMOOsEOifpbcVcfGU';
const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores`;

export const fetchScore = async () => {
  const response = await fetch(
    url,
  );
  const { result } = await response.json();
  return result;
};

export const addScores = async (data) => {
  const response = await fetch(
    url,
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset= UTF-8',
      },
      body: JSON.stringify(data),
    },
  );

  const { result } = await response.json();
  return result;
};
