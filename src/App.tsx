import React, {useCallback, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import {AppShell, useMantineTheme} from '@mantine/core';

import Categories from "./components/Categories/Categories";
import Manager from "./components/Manager/Manager";
import NavbarC from "./components/NavbarC/NavbarC";
import HeaderC from "./components/HeaderC/HeaderC";

export default function App() {
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);

    const burgerHandler = useCallback(() => {
        setOpened(opened => !opened)
    }, [])

    return (
        <AppShell
            navbarOffsetBreakpoint="sm"
            navbar={<NavbarC hidden={!opened}/>}
            // header={<HeaderC opened={opened}
            //                  onClick={burgerHandler}
            //                  color={theme.colors.gray[6]}
            // />}
            padding={0}
        >
            <Routes>
                <Route path='/categories' element={<Categories/>}/>
                <Route path='/' element={<Manager/>}/>
                <Route path='*' element={<div>404 NOT FOUND</div>}/>
            </Routes>
        </AppShell>
    );
}