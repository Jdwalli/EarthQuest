export type AppRoute = {
    title: string;
    link: string;
};

export const APP_ROUTES: Record<string, AppRoute> = {
    WORLD_PROGRESS: {
        title: "Progress",
        link: "/world-progress"
    },
    MY_VISITS: {
        title: "My Visits",
        link: "/my-visits"
    },
    DISCOVER: {
        title: "Discover",
        link: "/discover"
    },
    ABOUT: {
        title: "About",
        link: "/about"
    }
};
