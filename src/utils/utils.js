const COLORS = {
    green: {
        bg: "bg-[#ECF7D4]",
        badge: "bg-[#D6F497]",
    },
    orange: {
        bg: "bg-[#F9EFE1]",
        badge: "bg-[#F7E0B8]",
    },
    red: {
        bg: "bg-[#FBE5E7]",
        badge: "bg-[#FDC6C7]",
    },
    blue: {
        bg: "bg-[#D4F1F9]",
        badge: "bg-[#97E0F4]",
    }, 
    orange: {
        bg: "bg-[#FFEED4]",
        badge: "bg-[#FFD297]",
    },
    purple: {
        bg: "bg-[#F4D4F7]",
        badge: "bg-[#E097F4]",
    },
    yellow: {
        bg: "bg-[#FFFBD4]",
        badge: "bg-[#FFF497]",
    },
    gray: {
        bg: "bg-[#F4F4F4]",
        badge: "bg-[#D6D6D6]",
    },
};

export const getRandomColor = () => {
    const colorNames = Object.keys(COLORS); // Get array of the keys (color names)
    const randomIndex = Math.floor(Math.random() * colorNames.length); // Get a random index
    const randomColorName = colorNames[randomIndex]; // Get the color name at the random index
    return COLORS[randomColorName]; // Return the color object corresponding to the random color name
};