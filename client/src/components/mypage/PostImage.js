import axios from "axios";

async function PostImage({ image, description }) {
	const formData = new FormData();
	formData.append("image", image);
	formData.append("description", description);

	const result = await axios.post("http://localhost:4000/images", formData, {
		headers: { "Content-Type": "multipart/form-data" },
	});
	console.log(result.data);
	return result.data;
}

export default PostImage;