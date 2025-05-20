/* eslint-disable react/no-unescaped-entities */
import { DownloadCard } from "./DownloadCard";
import { DOWNLOAD_DATA } from "./downloadData";
import "./Download.css";

export const Download = () => {
	return (
		<section className="download">
			<div className="download__text">
				<h2>Download the extension</h2>
				<p>
					We've got more browsers in the pipeline. Let us know if it's a
					favourite you'd like us to prioritize.
				</p>
			</div>
			<div className="download__cards">
				{DOWNLOAD_DATA.map((browser) => {
					return (
						<DownloadCard
							key={browser.id}
							id={browser.id}
							imgSrc={browser.imgSrc}
							title={browser.title}
							requirements={browser.version}
						/>
					);
				})}
			</div>
		</section>
	);
};
