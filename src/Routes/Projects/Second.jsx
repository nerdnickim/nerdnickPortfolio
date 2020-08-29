import React from "react";
import Project from "../../Components/Project";
import { photos, textS, explan, address, pageAddress } from "../../Contains";

const Second = ({ target, statusFn }) => (
	<Project
		data={photos.instaWeb}
		textS={textS.instaWeb}
		explan={explan.instaWeb}
		address={address.instaWeb}
		pageAddress={pageAddress.instaWeb}
		serverGit={address.prismaServer}
		targetS={target}
		statusFn={statusFn}
	/>
);

export default Second;
