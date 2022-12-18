import { useContext } from "react";
import SingleProjectContext from "../../context/SingleProjectContext";

const ProjectInfo = () => {
  const { singleProjectData } = useContext(SingleProjectContext);

  return (
    <div className="block sm:flex gap-0 sm:gap-10 mt-14">
      <div className="w-full sm:w-1/3 text-left">
        {/* Single project objectives */}
        <div className="mb-7">
          <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
            {singleProjectData.ProjectInfo.ObjectivesHeading}
          </p>
          <p className="font-general-regular text-primary-dark dark:text-ternary-light">
            {singleProjectData.ProjectInfo.ObjectivesDetails}
          </p>
        </div>

        {/* Single project technologies */}
        <div className="mb-7">
          <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
            {singleProjectData.ProjectInfo.Technologies[0].title}
          </p>
          <p className="font-general-regular text-primary-dark dark:text-ternary-light">
            {singleProjectData.ProjectInfo.Technologies[0].techs.join(", ")}
          </p>
        </div>
      </div>
      <div className="w-full sm:w-2/3 ">
        {/*  Single project right section */}
        <div className="text-left mt-10 sm:mt-0">
          <p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
            {singleProjectData.ProjectInfo.ProjectDetailsHeading}
          </p>
          {singleProjectData.ProjectInfo.ProjectDetails.map((details) => {
            return (
              <p
                key={details.id}
                className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
              >
                {details.details}
              </p>
            );
          })}
        </div>
        {/* Single project social sharing */}
        <div className="flex sm:justify-end justify-center">
          <span>
            <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
              {singleProjectData.ProjectInfo.SocialSharingHeading}
            </p>
            <div className="flex gap-3 mt-5">
              {singleProjectData.ProjectInfo.SocialSharing.map((social) => {
                return (
                  <a
                    key={social.id}
                    href={social.url}
                    target="__blank"
                    aria-label="Share Project"
                    className="bg-cyan-50 dark:bg-cyan-900 text-gray-400 hover:text-cyan-700 dark:hover:text-cyan-300 p-2 rounded-lg shadow-sm duration-500"
                  >
                    <span className="text-lg lg:text-2xl">{social.icon}</span>
                  </a>
                );
              })}
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
