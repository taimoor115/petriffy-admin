import { DropdownButton, Heading } from "../../common";
import { useAuth } from "../../context/auth";
import { useLogout } from "../../hooks";

const Home = () => {
  const { user } = useAuth();
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
    <section>
      <div className="flex items-center justify-between">
        <Heading heading={user.name} className="text-base md:text-lg" />
        <DropdownButton title="Admin" options={options} />
      </div>
    </section>
  );
};

export default Home;
