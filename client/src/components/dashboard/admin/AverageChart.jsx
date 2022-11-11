import axios from "axios";
import { CChart } from "@coreui/react-chartjs";
import { useState, useEffect } from "react";

const AverageChart = () => {
  const [average, setAverage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAverage = async () => {
      try {
        setError(null);
        setAverage(null);
        setLoading(true);
        const response = await axios.get("/api/charts/average");
        console.log(response.data);
        setAverage(response.data.averageMarks);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchAverage();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>error</div>;
  if (!average) return null;
  return (
    <CChart
      className="chart"
      type="line"
      data={{
        labels: [
          "Week 1",
          "Week 2",
          "Week 3",
          "Week 4",
          "Week 5",
          "Week 6",
          "Week 7",
          "Week 8",
          "Week 9",
          "Week 10",
          "Week 11",
          "Week 12",
          "Week 13",
        ],
        datasets: [
          {
            label: "Average Marks",
            backgroundColor: "rgba(56, 247, 22, 1)",
            borderColor: "rgba(56, 247, 22, 1)",
            pointBackgroundColor: "rgba(245, 53, 5, 1)",
            pointBorderColor: "#000",
            data: average,
          },
        ],
      }}
    />
  );
};

export default AverageChart;
