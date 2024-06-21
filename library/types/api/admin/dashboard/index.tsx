export type TDashboardTiles = {
    activeJobs: number;
    pendingJobs: number;
    activeEmployers: number;
    pendingEmployers: number;
    activeCandidate: number;
    incompleteProfile: number;
    activeAds: number;
    inActiveAds: number;
    pendingAds: number;
    pendingSupportTickets: number;
    solvedTickets: number;
    admin: number;
};

// interface DataResponse {
//     data: number[];
//     labels: string[];
// }
type ChartData = {
    data: number[];
    labels: string[];
};

export interface TDashboardChart {
    candidate: ChartData;
    employer: ChartData;
}
