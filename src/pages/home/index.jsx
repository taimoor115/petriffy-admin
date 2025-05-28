import { DropdownButton, Heading, Modal, Spinner } from "../../common";
import { Logout, StatisticsCard } from "../../components";
import UserBarChart from "../../components/graph/bar-chart";
import SpiralPostsChart from "../../components/graph/radial";
import { useModal } from "../../context/modal";
import { useGetStatistics } from "../../hooks";
import useGetPostsCount from "../../hooks/graphs/useGetPostsCount";
import useGetUsersCount from "../../hooks/graphs/useGetUsersCount";

const Home = () => {
  const { openModal } = useModal();
  const { data: usersData = {}, isLoading: isFetchingUsersCount } =
    useGetUsersCount();

  const { data: usersCount } = usersData || {};

  const { data = {}, isLoading: isStatisticsFetching = false } =
    useGetStatistics();

  const { data: postsData = {}, isLoading: isPostsCountFetching } =
    useGetPostsCount();

  const { data: apiData } = postsData || {};

  // Create a map for easy lookup of counts by category

  const { data: statisitics } = data || {};

  const loadingStates = [
    {
      isLoading: isStatisticsFetching,
      message: "Fetching statistics...",
    },
    {
      isLoading: isFetchingUsersCount,
      message: "Fetching users",
    },
    {
      isLoading: isPostsCountFetching,
      message: "Fetching posts count",
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

  if (isStatisticsFetching || isFetchingUsersCount || isPostsCountFetching)
    return <Spinner loadingStates={loadingStates} />;

 

  return (
    <section className="container">
      <div className="flex justify-between items-center">
        <Heading heading="Statistics" />
        <DropdownButton title="Admin" options={options} />
      </div>

      <section className="grid grid-cols-1 gap-5 my-4 md:grid-cols-3">
        {cardsData.map((item, index) => (
          <StatisticsCard key={index} title={item.title} stats={item.count} />
        ))}
      </section>

      <div className="grid grid-cols-1 gap-x-5 place-items-center md:grid-cols-1">
        <SpiralPostsChart apiData={apiData} />
        <UserBarChart data={usersCount} />
      </div>
      <Modal />
    </section>
  );
};

export default Home;
