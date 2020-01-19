import { useState } from "react";

export const useImageUpload = files => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  let data = new FormData();
  data.append("data", files[0]);

  fetch("https://api.graph.cool/file/v1/ck58mgjbq1yao0166giunsxhu", {
    method: "POST",
    body: data
  })
    .then(response => {
      setData(response.json());
    })
    .then(file => {
      setError(true);
    })
    .finally(() => {
      setLoading(false);
    });

  return {
    data,
    isLoading,
    error
  };
};
