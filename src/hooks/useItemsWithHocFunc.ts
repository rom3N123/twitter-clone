type ClickFunc = (...params: any[]) => any;
type ListItem = {
    onClick: ClickFunc;
};

const useItemsWithHocFunc = <T extends ListItem>(
    items: T[],
    funcHoc: (func: ClickFunc) => (e: React.MouseEvent) => any
): T[] => {
    return items.map((item) => ({ ...item, onClick: funcHoc(item.onClick) }));
};

export default useItemsWithHocFunc;
