import { useContext } from "react";
import SingleProjectContext from "../../context/SingleProjectContext";

const ProjectGallery = () => {
  const { singleProjectData } = useContext(SingleProjectContext);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-10 mt-12">
      {singleProjectData.ProjectImages.map((project) => {
        return (
          <div className="mb-10 sm:mb-0" key={project.id}>
            <img
              src={project.img}
              className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
              alt={project.title}
              key={project.id}
            />
          </div>
        );
      })}
      {/* Single project client details */}
      <div className="mb-7">
        <p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
          {singleProjectData.ProjectInfo.ClientHeading}
        </p>
        <ul className="leading-loose">
          {singleProjectData.ProjectInfo.CompanyInfo.map((info) => {
            return (
              <li
                className="font-general-regular text-ternary-dark dark:text-ternary-light"
                key={info.id}
              >
                <span>{info.title}: </span>
                <a
                  href="https://frontend-dev-arun.vercel.app/"
                  className={
                    info.title === "Website" || info.title === "Phone"
                      ? "hover:underline hover:text-dcyan-500 dark:hover:text-dcyan-400 cursor-pointer duration-300"
                      : ""
                  }
                  aria-label="Project Website and Phone"
                >
                  {info.details}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProjectGallery;
