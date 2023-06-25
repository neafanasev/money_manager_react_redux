import {IconCategory2, IconDeviceDesktopAnalytics, IconHome2} from "@tabler/icons-react";
import {theme} from "@chakra-ui/react";

export type TTransactionType = 'income' | 'expenses';

export interface IManagerState {
    transactionType: string,
    periodStart: Date,
    periodEnd: Date
}


export interface ICategory {
    name: string,
    backgroundColor: string,
    iconColor: string,
    iconName: string,
    type: TTransactionType
}

export interface ICategoriesState {
    categoriesList: ICategory[],
}

export interface ICategoryProps {
    category: ICategory,
    size: number
}

export interface INavbarData {
    Icon: React.FC<any>,
    label: string
    link: string
}


export type TDefaultColors = 'gray'|'red'|'orange'|'yellow'|'green'|'teal'|'blue'|'cyan'|'purple'|'pink'

export interface INavbarIconProps {
    Icon: React.FC<any>,
    size: number
}

export interface INavbarLinkProps extends INavbarIconProps {
    label: string,
    isActive: boolean
}