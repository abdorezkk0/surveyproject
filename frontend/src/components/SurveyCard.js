import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const SurveyCard = ({ title, totalResponses }) => {
  return (
    <Card className="shadow-md rounded-xl mb-4">
      <CardContent className="p-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-gray-600">Total Responses: {totalResponses}</p>
      </CardContent>
    </Card>
  );
};

export default SurveyCard;
