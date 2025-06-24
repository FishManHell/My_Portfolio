import OfficeBuildingIcon from "shared/assets/icons/OfficeBuilding.svg";
import LocationMarkIcon from "shared/assets/icons/LocationMark.svg";
import CalendarIcon from "shared/assets/icons/Calendar.svg";
import {TimelineMetaLabel, TimeLineCard} from "../module/types/timeLineCardTypes";

export const baseExperienceCard: TimeLineCard = {
    id: '1',
    title: 'Junior Web Developer',
    type: 'Full Time',
    meta: [
        {
            icon: OfficeBuildingIcon,
            text: 'Dr. Rajkumar’s Learning App',
            label: TimelineMetaLabel.COMPANY
        },
        {
            icon: LocationMarkIcon,
            text: 'Bengaluru',
            label: TimelineMetaLabel.LOCATION
        },
        {
            icon: CalendarIcon,
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
            icon: OfficeBuildingIcon,
            text: 'Bangalore Instutute of Technology',
            label: TimelineMetaLabel.COMPANY
        },
        {
            icon: CalendarIcon,
            text: 'Aug 2015 - Dec 2020',
            label: TimelineMetaLabel.DATE,
            date: {from: '2021-08', to: '2021-12'}
        }
    ]
}