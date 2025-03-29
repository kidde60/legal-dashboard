import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCaseSummary } from "../redux/caseSlice";
import { RootState, AppDispatch } from "../redux/store";
import Card from "../Shared/Card";

const CaseSummary = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.cases
  );

  useEffect(() => {
    dispatch(getCaseSummary());
  }, [dispatch]);

  if (loading) return <div className="bg-white p-4 shadow-md">Loading...</div>;
  if (error)
    return <div className="bg-white p-4 shadow-md text-red-500">{error}</div>;

  return (
    <Card title="Case Summary">
      <p>Active Cases: {data?.active}</p>
      <p>Pending Cases: {data?.pending}</p>
      <p>Closed Cases: {data?.closed}</p>
    </Card>
  );
};

export default CaseSummary;
