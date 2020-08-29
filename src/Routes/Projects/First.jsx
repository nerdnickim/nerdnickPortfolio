import React from "react";
import Project from "../../Components/Project";
import { photos, textS, explan, pageAddress } from "../../Contains";

const First = ({ target, statusFn }) => {
	return (
		<Project
			data={photos.newWave}
			textS={textS.newWave}
			explan={explan.newWave}
			pageAddress={pageAddress.newWave}
			targetS={target}
			statusFn={statusFn}
		/>
	);
};

export default First;
