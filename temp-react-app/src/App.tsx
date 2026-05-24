import React, { useState } from "react";
import { JobList } from "./JobList";
import { mockJobs } from "./data";
import {type Job } from "./type";

export default function App(){
    const [currentJobs, setCurrentJobs] = useState<Job[]>(mockJobs);

    const toggleMockDataState = () => {
        if (currentJobs.length > 0) {
            setCurrentJobs([]);
        } else {
            setCurrentJobs(mockJobs);
        }
    };

    return(
        <div style={styles.container}>
            <header style={styles.header}>
                <h1></h1>
                <button onClick={toggleMockDataState} style={styles.testButton}>
                    {currentJobs.length > 0 ? "simulate empty state" : "load job listings"}
                </button>
            </header>

            <JobList jobs={currentJobs} />
        </div>
    );
}

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif"
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "2px solid #eaeaea",
    paddingBottom: "15px",
    marginBottom: "20px"
  },
  testButton: {
    backgroundColor: "#9d70c0",
    color: "#4c4a4a",
    border: "none",
    padding: "8px 12px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "0.9rem"
  }
};