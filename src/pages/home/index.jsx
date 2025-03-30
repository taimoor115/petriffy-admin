import { DropdownButton, Heading, Modal } from "../../common";
import { Logout, StatisticsCard } from "../../components";
import { cardsData } from "../../constant/home";
import { useModal } from "../../context/modal";
import { useLogout } from "../../hooks";

const Home = () => {
  const { openModal } = useModal();

  const handleOpenLogoutModal = () => {
    openModal(<Logout />);
  };
  const options = [
    {
      title: "Profile",
      to: "/profile",
    },
    {
      title: "Logout",
      onClick: handleOpenLogoutModal,
    },
  ];
  return (
    <section className="container">
      <div className="flex items-center justify-between">
        <Heading heading="Statistics" />
        <DropdownButton title="Admin" options={options} />
      </div>

      <section className="grid grid-cols-1 gap-5 my-4 md:grid-cols-3">
        {cardsData.map((item, index) => (
          <StatisticsCard key={index} title={item.title} stats={item.count} />
        ))}
      </section>

      <Modal />
    </section>
  );
};

export default Home;
