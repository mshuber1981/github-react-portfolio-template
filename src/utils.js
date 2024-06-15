// Update tab title
export const updateTitle = (title) => (document.title = title);

// Contact Form
export const postData = async (url, data) => {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return response;
};
