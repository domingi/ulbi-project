const classNames = (
    mainCls: string,
    mods: Record<string, boolean | string> = {},
    otherCls: string[] = []
): string => {
    const parsedMods = Object.keys(mods).reduce((acc, key) => {
        if (mods[key]) acc.push(key);
        return acc;
    }, []);
    return [mainCls, ...parsedMods, ...otherCls, ].join(' ');
};

export default classNames;