import getHandler from "../handlers/get-handler";

export async function getUserData() {
  try {
    const response = await getHandler(
      "https://d2k-static-assets.s3.ap-south-1.amazonaws.com/assignment-files/python-backend-assignment/users.json"
    );
    if (!response.success) {
      throw new Error("Failed to fetch user data");
    }
    return response.data;
  } catch (error) {
    console.log("Error occured while fetching the data");
    console.error(error.message);
  }
}
