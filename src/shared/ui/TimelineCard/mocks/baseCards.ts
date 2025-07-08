import {TimelineMetaLabel, TimeLineCard} from "../module/types/timeLineCardTypes";

export const baseExperienceCard: TimeLineCard = {
    id: '1',
    title: 'Junior Web Developer',
    type: 'Full Time',
    meta: [
        {
            icon: 'office_build',
            text: 'Dr. Rajkumar’s Learning App',
            label: TimelineMetaLabel.COMPANY
        },
        {
            icon: 'location_marker',
            text: 'Bengaluru',
            label: TimelineMetaLabel.LOCATION
        },
        {
            icon: 'calendar',
            text: 'Sep 2021 - Dec 2021',
            label: TimelineMetaLabel.DATE,
            date: {from: '2021-09', to: '2021-12'}
        }
    ]
}

export const baseEducationCard: TimeLineCard = {
    id: '1',
    title: 'Bachelor in Electronics & Communication',
    type: 'Full Time',
    meta: [
        {
            icon: 'office_build',
            text: 'Bangalore Instutute of Technology',
            label: TimelineMetaLabel.COMPANY
        },
        {
            icon: 'calendar',
            text: 'Aug 2015 - Dec 2020',
            label: TimelineMetaLabel.DATE,
            date: {from: '2021-08', to: '2021-12'}
        }
    ]
}