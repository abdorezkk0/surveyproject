import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ResponseChart = ({ surveyData, responseData }) => {
  const chartContainer = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartContainer.current && responseData) {
      // Destroy previous chart if it exists
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const questionStats = prepareChartData();
      
      // Create new chart
      chartInstance.current = new Chart(chartContainer.current, {
        type: 'bar',
        data: {
          labels: questionStats.labels,
          datasets: questionStats.datasets
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Survey Response Summary'
            }
          }
        }
      });
    }

    // Cleanup function
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [responseData, surveyData]);

  const prepareChartData = () => {
    // This is a simplified example - would need to be adjusted based on your actual data structure
    
    if (!surveyData || !responseData || responseData.length === 0) {
      return { labels: [], datasets: [] };
    }

    // For multiple choice questions
    const multipleChoiceQuestions = surveyData.questions.filter(
      q => q.questionType === 'multiple-choice' || q.questionType === 'checkbox'
    );

    if (multipleChoiceQuestions.length === 0) {
      return { 
        labels: ['No multiple choice questions to display'],
        datasets: [{
          label: 'No data',
          data: [0],
          backgroundColor: 'rgba(0, 0, 0, 0.1)'
        }]
      };
    }

    // Take the first multiple choice question for this example
    const question = multipleChoiceQuestions[0];
    
    // Count responses for each option
    const optionCounts = {};
    question.options.forEach(option => {
      optionCounts[option] = 0;
    });

    responseData.forEach(response => {
      const answer = response.answers.find(a => a.questionId === question._id);
      if (answer) {
        if (Array.isArray(answer.answer)) {
          // For checkbox questions
          answer.answer.forEach(option => {
            if (optionCounts[option] !== undefined) {
              optionCounts[option]++;
            }
          });
        } else {
          // For single select questions
          if (optionCounts[answer.answer] !== undefined) {
            optionCounts[answer.answer]++;
          }
        }
      }
    });

    return {
      labels: Object.keys(optionCounts),
      datasets: [{
        label: question.questionText,
        data: Object.values(optionCounts),
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }]
    };
  };

  return (
    <div className="response-chart">
      <h3>Response Analytics</h3>
      {(!surveyData || !responseData || responseData.length === 0) ? (
        <p>No response data available to display.</p>
      ) : (
        <div className="chart-container">
          <canvas ref={chartContainer}></canvas>
        </div>
      )}
    </div>
  );
};

export default ResponseChart;
