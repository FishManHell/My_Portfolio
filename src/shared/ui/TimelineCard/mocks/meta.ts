import OfficeBuildingIcon from "shared/assets/icons/OfficeBuilding.svg";
import LocationMarkIcon from "shared/assets/icons/LocationMark.svg";
import CalendarIcon from "shared/assets/icons/Calendar.svg";
import {TimelineCardMeta, TimelineMetaLabel} from "shared/ui/TimelineCard/module/types/timeLineCardTypes";

export const metaIconCollection = {
    "office_build": OfficeBuildingIcon,
    "calendar": CalendarIcon,
    "location_marker": LocationMarkIcon
} as const;

export const metaCard: TimelineCardMeta = {
    icon: "calendar",
    text: "Dnipro",
    label: TimelineMetaLabel.DATE,
    date: { from: "2023-09", to: "present day" },
};