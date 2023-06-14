import {IconBaguette, IconBus, IconHome2} from "@tabler/icons-react";

export default (iconName: string) => {
    switch (iconName) {
        case 'food': return IconBaguette;
        case 'transport': return IconBus;
        case 'home': return IconHome2;
        default: return IconBaguette
    }
}