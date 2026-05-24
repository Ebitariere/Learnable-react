import React from "react";
import { JobCard } from "./JobCard";
import {type Job } from "./type";

interface JobListProps{
    jobs: Job[];
}

export const JobList: React.FC<JobListProps> = ({ jobs}) => {
    if (jobs.length === 0){
        return <p style={styles.noJobs}>No jobs available at the moment.</p>;
    }

    return(
        <div>
            {jobs.map((job) => (<JobCard key={job.id} job={job}/>))}
        </div>
    );

};

const styles = {
  listContainer: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "10px"
  },
  noJobs: {
    textAlign: "center" as const,
    color: "#888",
    fontSize: "1.2rem",
    marginTop: "2rem"
  }
};