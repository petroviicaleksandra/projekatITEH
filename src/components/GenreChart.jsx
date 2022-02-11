import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import axios from "axios";

function GenreChart({ google }) {
  const [chart, setChart] = useState(null);
  const res = axios.get("http://127.0.0.1:8000/api/genres");

  useEffect(() => {
    if (google && !chart) {
      const data = new google.visualization.DataTable();
      data.addColumn("string", "Name");
      data.addColumn("number", "Genre id");
      data.addRows([
        ["Comedy", 1],
        ["Drama", 2],
        ["Action", 3],
        ["Horror", 4],
        ["Thriller", 5],
        ["Documentary", 6],
      ]);

      // Set chart options
      var options = {
        title: "Svi zanrovi",
        width: 400,
        height: 300,
      };

      // Instantiate and draw our chart, passing in some options.
      const newChart = new google.visualization.ColumnChart(
        document.getElementById("genreChart")
      );
      newChart.draw(data, options);

      setChart(newChart);
    }
  }, [google, chart]);

  return (
    <>
      {!google && <Spinner />}
      <div id="genreChart" className={!google ? "d-none" : ""} />
    </>
  );
}

export default GenreChart;
