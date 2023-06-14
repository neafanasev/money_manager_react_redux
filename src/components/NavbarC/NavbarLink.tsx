import {Anchor, createStyles, rem, Tooltip, UnstyledButton} from "@mantine/core";
import {MockData} from "./NavbarC";
import {memo} from "react";
import {Link} from "react-router-dom";

const useStyles = createStyles((theme) => ({
    link: {
        width: rem(50),
        height: rem(50),
        borderRadius: theme.radius.md,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.white,
        opacity: 0.85,

        '&:hover': {
            opacity: 1,
            backgroundColor: theme.fn.lighten(
                theme.fn.variant({variant: 'filled', color: theme.primaryColor}).background!,
                0.1
            ),
        },
    },

    active: {
        opacity: 1,
        '&, &:hover': {
            backgroundColor: theme.fn.lighten(
                theme.fn.variant({variant: 'filled', color: theme.primaryColor}).background!,
                0.15
            ),
        },
    },
}));

interface NavbarLinkProps extends MockData {
    active?: boolean;

    onClick?(): void;
}

const NavbarLink = ({Icon, label, active, onClick, link}: NavbarLinkProps) => {
    const {classes, cx} = useStyles();


    return (
        <Tooltip label={label} position="right" transitionProps={{duration: 0}}>
            <Anchor component={Link} to={link}>
                <UnstyledButton onClick={onClick} className={cx(classes.link, {[classes.active]: active})}>
                    <Icon size="1.2rem" stroke={1.5}/>
                </UnstyledButton>
            </Anchor>
        </Tooltip>
    );
}

export default memo(NavbarLink)