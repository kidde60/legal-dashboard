import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import CaseSummary from "../components/CaseSummary";
import RecentDocuments from "../components/RecentDocuments";
import TimeTracking from "../components/TimeTracking";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100 ">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CaseSummary />
          <RecentDocuments />
          <TimeTracking />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
