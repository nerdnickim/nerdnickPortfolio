import React from "react";
import Project from "../../Components/Project";
import { photos, textS, explan, address } from "../../Contains";

const Fourth = ({ target, statusFn }) => {
	return (
		<Project
			data={photos.basicJs}
			textS={textS.basicJs}
			explan={explan.basicJs}
			address={address.basicJs}
			targetS={target}
			statusFn={statusFn}
		/>
	);
};

export default Fourth;
