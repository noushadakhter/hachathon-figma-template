import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Team = () => {
  const teamMembers = [
    {
      name: "Username",
      profession: "Profession",
      image: "/images/team-member1.PNG", // Replace with the actual image path
    },
    {
      name: "Username",
      profession: "Profession",
      image: "/images/team-member2.PNG", // Replace with the actual image path
    },
    {
      name: "Username",
      profession: "Profession",
      image: "/images/team-member3.PNG", // Replace with the actual image path
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-8 lg:px-16 bg-white text-center">
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Meet Our Team</h2>
        <p className="text-gray-600 mt-4">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image
              src={member.image}
              alt={member.name}
              width={200}
              height={200}
              className="rounded-lg"
            />
            <h3 className="mt-6 text-lg font-semibold text-gray-800">
              {member.name}
            </h3>
            <p className="text-gray-500">{member.profession}</p>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="text-gray-500 hover:text-blue-500"
                aria-label="Facebook"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-pink-500"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-blue-400"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;