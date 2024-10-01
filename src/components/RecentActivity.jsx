import React from "react";

const RecentActivity = () => {
    return(
        <div className="recent-activity">
            <div className="activity-header">
                <h2>Recent Activity</h2>
            </div>
            <div className="activity-card">
                <div className="activity-data">
                    <h3>Meeting with the team</h3>
                    <p className="activity-subtext">10:00 AM</p>
                </div>
                <div className="activity-options">
                    📌
                    <button>•••</button>
                </div>
            </div>
        </div>
    )
}

export default RecentActivity;
