import { DropdownButton, Heading, Modal, Spinner } from "../../common";
import { Logout, StatisticsCard } from "../../components";
import SpiralPostsChart from "../../components/graph/radial";
import { useModal } from "../../context/modal";
import { useGetStatistics } from "../../hooks";

const Home = () => {
  const { openModal } = useModal();
  const { data = {}, isLoading: isStatisticsFetching = false } =
    useGetStatistics();

  const { data: statisitics } = data || {};

  const loadingStates = [
    {
      isLoading: isStatisticsFetching,
      message: "Fetching statistics...",
    },
  ];
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

  const cardsData = [
    {
      title: "Total Users",
      count: statisitics?.totalUsers || "0",
    },
    {
      title: "Total Doctors",
      count: statisitics?.totalDoctors || "0",
    },
    {
      title: "Total communities",
      count: statisitics?.totalCommunities || "0",
    },
    {
      title: "Total blogs",
      count: statisitics?.totalBlogs || "0",
    },
    {
      title: "Total Free posts",
      count: statisitics?.totalFreePosts || "0",
    },
    {
      title: "Total Silver posts",
      count: statisitics?.totalSilverPosts || "0",
    },
    {
      title: "Total Diamond posts",
      count: statisitics?.totalDiamondPosts || "0",
    },
    {
      title: "Total Posts",
      count: statisitics?.totalPosts || "0",
    },
  ];
  return (
    <section className="container">
      <Spinner loadingStates={loadingStates} />
      <div className="flex justify-between items-center">
        <Heading heading="Statistics" />
        <DropdownButton title="Admin" options={options} />
      </div>

      <section className="grid grid-cols-1 gap-5 my-4 md:grid-cols-3">
        {cardsData.map((item, index) => (
          <StatisticsCard key={index} title={item.title} stats={item.count} />
        ))}
      </section>


      <SpiralPostsChart />

      <Modal />
    </section>
  );
};

export default Home;
