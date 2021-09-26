import { useState } from "react";
import styled from "styled-components";
import { flexColum } from "../../themes/flex";
import PostImage from "./PostImage";

export const Profiles = () => {
	const [file, setFile] = useState();
	const [description, setDescription] = useState("");
	const [images, setImages] = useState([]);

	const submit = async (event) => {
		event.preventDefault();
		const result = await PostImage({ image: file, description });

		setImages([result.image, ...images]);
	};

	const fileSelected = (event) => {
		const file = event.target.files[0];
		setFile(file);
	};

	return (
		<>
			<Container>
				<SubmitContainer onSubmit={submit}>
					<input onChange={fileSelected} type="file" accept="image/*"></input>
					<input
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						type="text"
					></input>
					<button type="submit">Submit</button>
				</SubmitContainer>

				{/* { images.map( image => (
        <div key={image}>
        <img src={image}></img>
        </div>
    ))} */}

				<img src="http://localhost:4000/images/38f550d87d82bbd67f3a236aabf31e9a"></img>
			</Container>
		</>
	);
};

const Container = styled.div`
	text-align: center;
`;

const SubmitContainer = styled.form`
	${flexColum}
	max-width: 400px;
	margin: auto;
`;

const Images = styled.div`
	position: relative;
	width: 200px;
	img {
		width: 100vw;
	}
	button {
		position: absolute;
		right: 0;
		top: 0;
	}

	form > * {
		margin: 10px 0;
	}
`;
