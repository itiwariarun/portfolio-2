import { FiPhone, FiMapPin, FiMail } from "react-icons/fi";
import { TfiWorld } from "react-icons/tfi";


const contacts = [
  {
    id: 1,
    name: "Your Address, Your City, Your Country",
    icon: <FiMapPin />,
href:"#!",
  },
  {
    id: 2,
    name: "email@domain.com",
    icon: <FiMail />,
href:"#!",
  },
  {
    id: 3,
    name: "555 8888 888",
    icon: <FiPhone />,
href:"#!",
  },
 {
    id: 4,
    name: "Original Portfolio",
    icon: <TfiWorld />,
href:"https://frontend-dev-arun.vercel.app/",
  },
];

const ContactDetails = () => {
  return (
    <div className="w-full md:w-3/4 mx-auto justify-center flex">
      <div className="text-left w-full px-6">
        <h2 className="font-general-medium text-left text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8">
          Contact details
        </h2>
        <ul className="font-general-regular">
          {contacts.map((contact) => (
            <li className="flex " key={contact.id}>
              <i className="text-2xl text-gray-500 dark:text-gray-400 mr-4">
                {contact.icon}
              </i>
              <a href={contact.href} className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">
                {contact.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactDetails;
