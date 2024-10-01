import React from "react";

const RecentActivity = () => {
    return (
        <div className="recent-activity">
            <div className="activity-header">
                <h3>Recently Activity</h3>
            </div>
            <div className="activity-card">
                <p className="activity-time">10.40 AM, Fri 10 Sept 2021</p>
                <h3 className="activity-title">You Posted a New Job</h3>
                <p className="activity-description">
                    Kindly check the requirements and terms of work and make sure everything is right.
                </p>
                <div className="activity-footer">
                    <p>Today you make 12 Activity</p>
                    <button className="see-all-btn">See All Activity</button>
                </div>
            </div>
        </div>
    );
};

export default RecentActivity;
