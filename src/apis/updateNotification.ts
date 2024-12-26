import axios from "axios";
import toast from "react-hot-toast";
import { ErrorMessage } from "../utils/error";

export async function UpdateNotifications(payload: any) {
  let responseFromServer = false;
  try {
    await axios
      .patch("expense-notification", payload)
      .then((response) => {
        toast.success(response.data.message);
        responseFromServer = response.data.status;
      })
      .catch((err) => {
        ErrorMessage(err);
        responseFromServer = err.response.data.status;
      });
  } catch (e: any) {
    toast.error(e);
    responseFromServer = false;
  }
  return responseFromServer;
}