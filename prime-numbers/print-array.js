export default class PrintArray {
    static printWithColumns(data, maxColumns = 0, separator = '|') {
        const itemsPerColumns = PrintArray.getItemsPerColumn(data, maxColumns);
        for (let i = 0; i < itemsPerColumns; i++) {
            const columnArray = [];
            for(let column = 0; column < maxColumns; column++) {
                const item = data[i + (column * itemsPerColumns)];
                if(item) {
                    columnArray.push(item);
                }
            }
            console.log(columnArray.join(separator));
        }
    }

    static getItemsPerColumn(data, maxColumns) {
        return Math.ceil(data.length / maxColumns);
    }
}
