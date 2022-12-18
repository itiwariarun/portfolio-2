import ProjectsGrid from "../components/projects/ProjectsGrid";
import { ProjectsProvider } from "../context/ProjectsContext";
import { Helmet, HelmetData } from "react-helmet-async";

const Projects = () => {
  const helmetData = new HelmetData({});

  return (
    <>
      <Helmet helmetData={helmetData}>
        <title>FrontendDev | All projects</title>
      </Helmet>
      <ProjectsProvider>
        <div className="container mx-auto">
          <ProjectsGrid />
        </div>
      </ProjectsProvider>
    </>
  );
};

export default Projects;
