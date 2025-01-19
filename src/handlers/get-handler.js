import axios from "axios";

export default async function getHandler(URL) {
  const response = {
    success: false,
    data: null,
    message: "",
    status: 500,
  };
  try {
    const res = await axios.get(URL);
    response.success = res.status === 200 ? true : false;
    response.statusText = res.statusText;
    response.data = res.data;
    response.message = res.message || "";
    response.status = res.status;
  } catch (err) {
    response.success = false;
    response.data = null;
    response.message = err.message;
    response.status = 204;
  }
  return response;
}
