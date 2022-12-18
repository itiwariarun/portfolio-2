import profileImage from "../../img/profile.jpeg";
import { useContext } from "react";
import AboutMeContext from "../../context/AboutMeContext";

const AboutMeBio = () => {
  const { aboutMe } = useContext(AboutMeContext);

  return (
    <div className="block sm:flex morph p-10 mx-auto sm:gap-10 mt-10 sm:mt-20">
      <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
        <img src={profileImage} className="rounded-lg w-96" alt="" />
      </div>

      <div className="font-general-regular w-full mx-auto text-left">
        {aboutMe.map((bio) => (
          <p
            className="mb-4 text-gray-100 dark:text-ternary-light text-lg"
            key={bio.id}
          >
            {bio.bio}
          </p>
        ))}
      </div>
    </div>
  );
};

export default AboutMeBio;
