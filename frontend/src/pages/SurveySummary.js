import React, { useEffect, useState } from "react";
import SurveyCard from "../components/SurveyCard";
import ResponseChart from "../components/ResponseChart";
import api from "../services/api";

const SurveySummary = () => {
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        // for now using surveyId = 123, replace with dynamic id (router param)
        const res = await api.get("/responses/123/summary");
        setSummary(res.data);
      } catch (error) {
        console.error("Error fetching response summary:", error);
      }
    };
    fetchSummary();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Survey Response Summary</h1>

      {summary ? (
        <>
          <SurveyCard
            title={summary.surveyTitle}
            totalResponses={summary.totalResponses}
          />
          <ResponseChart data={summary.chartData} />
        </>
      ) : (
        <p>Loading summary...</p>
      )}
    </div>
  );
};

export default SurveySummary;
