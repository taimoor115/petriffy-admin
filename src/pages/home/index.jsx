import { DropdownButton, Heading } from "../../common";
import { StatisticsCard } from "../../components";
import { cardsData } from "../../constant/home";
import { useLogout } from "../../hooks";

const Home = () => {
  const { logout, isLoading } = useLogout();
  const handleLogout = async () => {
    await logout({});
  };
  const options = [
    {
      title: "Profile",
      to: "/profile",
    },
    {
      title: "Logout",
      disabled: isLoading,
      onClick: handleLogout,
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
    </section>
  );
};

export default Home;
