import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID a01b7ecd88b23af9f6dcfea24437c34fdcf254260a8e172677a3bcd037dc422b"
  }
});
