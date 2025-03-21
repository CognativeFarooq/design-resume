"use client";

import CustomizationPanel from "../components/CustomizationPanel/CustomizationPanel";
import ResumePreview from "../components/ResumePreview/ResumePreview";
import DownloadResume from "../components/DownloadResume/DownloadResume";

export default function Page() {
  return (
    <>
      <div className="text-center px-5">
        <h1 className="text-3xl font-bold my-4">Resume Builder</h1>

        <div className="flex items-center justify-between">
          <CustomizationPanel />
          <div>
            <DownloadResume />
          </div>
        </div>
      </div>
    </>
  );
}
