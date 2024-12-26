import axios from "axios";
import toast from "react-hot-toast";
export async function GetTotalCash(userId: any) {
  try {
    const response = await toast.promise(axios.get(`expense-count/${userId}`), {
      loading: "Loading Data",
      success: (res) => res.data.message,
      error: (err) => err.response.data.message,
    });
    return response.data.data;
  } catch (err: any) {
      console.log(err);
      toast.error('something went wrong')
  }
}
