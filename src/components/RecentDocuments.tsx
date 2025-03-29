import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecentDocuments } from "../redux/documentSlice";
import { RootState, AppDispatch } from "../redux/store";
import Card from "../Shared/Card";

const RecentDocuments = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.documents
  );

  useEffect(() => {
    dispatch(getRecentDocuments());
  }, [dispatch]);

  if (loading) return <div className="bg-white p-4 shadow-md">Loading...</div>;
  if (error)
    return <div className="bg-white p-4 shadow-md text-red-500">{error}</div>;

  return (
    <Card title="Recent Documents">
      <ul>
        {data.map((doc, index) => (
          <li key={index}>
            {doc.name} ({doc.version})
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default RecentDocuments;
