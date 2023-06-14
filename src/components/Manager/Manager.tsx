import React, {memo, useState, useCallback} from 'react';
import {createStyles, MantineTheme, rem, SimpleGrid, Tabs} from '@mantine/core';

import Stats from "./Stats";
import {IconUserPlus} from "@tabler/icons-react";
import SelectTransactionType from "../SelectTransactionType";
import {TTransactionType} from "../../types/types";
import {setTransactionType} from "../../features/manager/managerSlice";
import {useAppDispatch, useAppSelector} from "../../hooks";

// interface ITabObj {
//     value: string,
//     text: string
// }
//
// const tabListData: ITabObj[] = [
//     {value: 'day', text: 'Day'},
//     {value: 'week', text: 'Week'},
//     {value: 'month', text: 'Month'},
//     {value: 'year', text: 'Year'}
// ];
//
// interface ITabPanelObj {
//     value: string,
//     component: FC
// }
//
// const tabPanelsData: ITabPanelObj[] = [
//     {value: 'day', component: Day},
//     {value: 'week', component: Week},
//     {value: 'month', component: Month},
//     {value: 'year', component: Year}
// ]



// const Manager1 = () => {
//     const {classes} = useStyles();
//
//     return (<>
//         {/*<Stats data={*/}
//         {/*    {title: 'Total', icon: 'user', value: '456', diff: 15}*/}
//         {/*}/>*/}
//         <Tabs defaultValue="expenses">
//             <Tabs.List grow className={classes.tabList}>
//                 {tabListData.map(tab =>
//                     <Tabs.Tab key={tab.value}
//                               value={tab.value}
//                               className={classes.tab}
//                     >{tab.text}</Tabs.Tab>
//                 )}
//             </Tabs.List>
//
//             {tabPanelsData.map(panel =>
//                 <Tabs.Panel key={panel.value} value={panel.value}>
//                     {panel.component}
//                 </Tabs.Panel>
//             )}
//         </Tabs>
//     </>);
// }

const Manager = () => {
    const dispatch = useAppDispatch();
    const activeTransactionType = useAppSelector((state) => state.manager.transactionType)

    const transactionTypeHandler = useCallback((event) => {
        const value: TTransactionType = event.target.innerHTML;

        if (value !== activeTransactionType) {
            dispatch(setTransactionType(value)) // webstorm bug
        }
    }, [activeTransactionType]);

    return (<>
        <SelectTransactionType onClick={transactionTypeHandler} active={activeTransactionType}/>
    </>)
}
export default memo(Manager);