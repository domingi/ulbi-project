const classNames = (
  mainCls: string,
  mods: Record<string, boolean | string> = {},
  otherCls: Array<string | undefined> = []
): string => {
  const initial: Array<string | undefined> = [];
  const parsedMods = Object.keys(mods).reduce((acc, key) => {
    if (mods[key]) acc.push(key);
    return acc;
  }, initial);
  return [mainCls, ...parsedMods, ...otherCls, ].join(' ');
};

export default classNames;