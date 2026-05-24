import React, { useState} from "react";
import {type Job} from "./type";

interface JobCardProps {
    job: Job;
};

export const JobCard: React.FC<JobCardProps> = ({ job }) => {
    const [showDetails, setShowDetails] = useState<boolean>(false);

    return(
        <div style={styles.card}>
           <h3> {job.title} </h3>
           <p><strong>Company:</strong>{job.company} </p>
           <p><strong>Location:</strong>{job.location} </p>
           <p><strong>Salary:</strong>{job.salary} </p>

        {showDetails &&(
                <div style={styles.detailsContainer}>
            <p><strong>Job Description:</strong>{job.description} </p>
        </div>
            )}

            <button onClick={() => setShowDetails (!showDetails)} style={styles.btn}>
                {showDetails ? "Hide details" : "Show Details"}
            </button>
         </div>
)};

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    margin: "12px 0",
    backgroundColor: "#fff",
    boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
  },
  detailsContainer: {
    marginTop: "12px",
    paddingTop: "12px",
    borderTop: "1px dashed #ccc",
    color: "#171515"
  },
  btn: {
    backgroundColor: "#9d70c0",
    color: "#fff",
    border: "none",
    padding: "8px 16px",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "10px"
  }
};