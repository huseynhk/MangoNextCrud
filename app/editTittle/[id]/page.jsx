import { EditTittleForm } from "@/components/EditTittleForm";
import axios from "axios";

const getTittleById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:3000/api/topics/${id}`);
    if (response.status !== 200) {
      throw new Error("Failed to fetch topic");
    }
    return response.data;
  } catch (error) {
    console.log(error);

  }
};

export default async function EditTittle({ params }) {
  const { id } = params;
  const { topic } = await getTittleById(id);
  const { title, description } = topic;
  return <EditTittleForm id={id} title={title} description={description} />;
}
