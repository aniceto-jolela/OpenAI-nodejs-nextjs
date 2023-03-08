import axios from "axios";

const Client = axios.create({
  headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_CHATGPT_KEY}` },
});

export default Client;
