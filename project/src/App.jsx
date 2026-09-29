import React from "react";
import Card from "./components/card";

const App = () => {
  const jobOpenings = [
    {
      brandLogo: "https://cdn2.hubspot.net/hubfs/53/image8-2.jpg",
      company: "Google",
      datePosted: "2 days ago",
      post: "Frontend Developer",
      tag1: "Full time",
      tag2: "Mid Level",
      pay: "$65/hour",
      location: "Lahore, Pakistan",
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTto8JPQM5UQC39sJmGrUgMG6BdC2JJS6wg1lNFTvIQ8w&s=10",
      company: "Meta",
      datePosted: "5 days ago",
      post: "React Engineer",
      tag1: "Full time",
      tag2: "Senior Level",
      pay: "$85/hour",
      location: "Lahore, Pakistan",
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCPjeZ-FjJ-FHOMlVO9c1ZtEPo8ypuNnRN1uCMugVyyA&s=10",
      company: "Amazon",
      datePosted: "1 week ago",
      post: "Software Development Engineer",
      tag1: "Full time",
      tag2: "Junior Level",
      pay: "$45/hour",
      location: "Lahore, Pakistan",
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjW2xDojnD1M3k4m2qVOKzlEzYCx7WJ4hIi0pvcN-68g&s=10",
      company: "Apple",
      datePosted: "3 days ago",
      post: "UI/UX Developer",
      tag1: "Full time",
      tag2: "Senior Level",
      pay: "$90/hour",
      location: "Lahore, Pakistan",
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVrjNLdc96EC-wh8zkwU27CUTvRisRZ2VK5WVPpCtbvA&s=10",
      company: "Netflix",
      datePosted: "4 weeks ago",
      post: "Full Stack Engineer",
      tag1: "Part time",
      tag2: "Senior Level",
      pay: "$110/hour",
      location: "Lahore, Pakistan",
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLg92NmVbeuVmbMSKcv6hA85gvDZtr2Zj1j01Pr-WCjw&s=10",
      company: "Microsoft",
      datePosted: "2 weeks ago",
      post: "Cloud Solution Architect",
      tag1: "Full time",
      tag2: "Mid Level",
      pay: "$70/hour",
      location: "Lahore, Pakistan",
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbZ-iMr1Rh88nreHgPIpCPPZq6PAqszvTAbrEx2QrQow&s=10",
      company: "NVIDIA",
      datePosted: "6 days ago",
      post: "AI / Machine Learning Engineer",
      tag1: "Full time",
      tag2: "Senior Level",
      pay: "$95/hour",
      location: "Lahore, Pakistan",
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT4Etwn9YseNZjBn99AHtkQXAkeDoT7UKtSsRUVz0ldA&s=10",
      company: "Spotify",
      datePosted: "3 weeks ago",
      post: "Web Interface Developer",
      tag1: "Part time",
      tag2: "Junior Level",
      pay: "$40/hour",
      location: "Lahore, Pakistan",
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8AMMiRC1ahl7D18f-BBVH_Y6jjYj5xgsbw0OlYSuEIw&s=10",
      company: "Uber",
      datePosted: "1 day ago",
      post: "Backend Engineer",
      tag1: "Full time",
      tag2: "Mid Level",
      pay: "$60/hour",
      location: "Lahore, Pakistan",
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0VUZ_IS4ORclF51iXFkNjNZDCM3bD_U-RSvC2vhVHug&s=10",
      company: "Adobe",
      datePosted: "4 days ago",
      post: "Frontend UI Specialist",
      tag1: "Full time",
      tag2: "Junior Level",
      pay: "$50/hour",
      location: "Lahore, Pakistan",
    },
  ];
  return (
    <div className="parent">

      {jobOpenings.map(function (e) {
        return (
          <Card
          CompanyName={e.company}
          logo={e.brandLogo}
          role={e.post}
          tag1={e.tag1}
          tag2={e.tag2}
          pay={e.pay}
          time={e.datePosted}
          location={e.location}
        />
        );
      })}
    </div>
  );
};

export default App;
