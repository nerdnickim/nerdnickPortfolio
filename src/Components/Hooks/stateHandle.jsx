import { useState } from "react";

export default () => {
	const [status, setStatus] = useState({
		newwaveboys: false,
		instaWeb: false,
		instaApp: false,
		basicJs: false,
	});

	const changeStatus = (target) => {
		if (target) {
			setStatus({ [target]: !status[target] });
		}
	};

	return { status, changeStatus, setStatus };
};
