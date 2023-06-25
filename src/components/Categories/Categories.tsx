import React, {memo} from 'react';
import Category from "./Category";
import {useAppSelector} from "../../hooks";
import {Box, theme} from "@chakra-ui/react";

const Categories = () => {
    const categories = useAppSelector((state) => state.categories.categoriesList)
    const category = categories[0]
    const colors = theme.colors

    return (
        <div>
            {Object.keys(colors.gray).map((color) => (
                <Box key={color} bg={colors.gray[color]}>{colors.gray[color]}</Box>
            ))}
            {Object.keys(colors.red).map((color) => (
                <Box key={color} bg={colors.red[color]}>{colors.red[color]}</Box>
            ))}
            {Object.keys(colors.orange).map((color) => (
                <Box key={color} bg={colors.orange[color]}>{colors.orange[color]}</Box>
            ))}
            {Object.keys(colors.yellow).map((color) => (
                <Box key={color} bg={colors.yellow[color]}>{colors.yellow[color]}</Box>
            ))}
            {Object.keys(colors.green).map((color) => (
                <Box key={color} bg={colors.green[color]}>{colors.green[color]}</Box>
            ))}
            {Object.keys(colors.teal).map((color) => (
                <Box key={color} bg={colors.teal[color]}>{colors.teal[color]}</Box>
            ))}
            {Object.keys(colors.blue).map((color) => (
                <Box key={color} bg={colors.blue[color]}>{colors.blue[color]}</Box>
            ))}
            {Object.keys(colors.cyan).map((color) => (
                <Box key={color} bg={colors.cyan[color]}>{colors.cyan[color]}</Box>
            ))}
            {Object.keys(colors.purple).map((color) => (
                <Box key={color} bg={colors.purple[color]}>{colors.purple[color]}</Box>
            ))}
            {Object.keys(colors.pink).map((color) => (
                <Box key={color} bg={colors.pink[color]}>{colors.pink[color]}</Box>
            ))}
            {Object.keys(colors.telegram).map((color) => (
                <Box key={color} bg={colors.telegram[color]}>{colors.telegram[color]}</Box>
            ))}
        </div>
    );
};

export default memo(Categories);