let baseDate = new Date();
const archiveTemplate = {
    'archiveLi|3': [
        {
            'createTime': function() {
                // 每次递减1天
                baseDate.setDate(baseDate.getDate() - 365);
            
                // 如果日期为月份的第一天，则递减月份
                if (baseDate.getDate() === 28 || baseDate.getDate() === 29 || baseDate.getDate() === 30 || baseDate.getDate() === 31) {
                    if (new Date(baseDate.getFullYear(), baseDate.getMonth() + 1, 0).getDate() === baseDate.getDate()) {
                        baseDate.setMonth(baseDate.getMonth() - 3);
                    }
                }
            
                // 如果月份为1月并且日期也被递减，则递减年份
                if (baseDate.getMonth() === 0 && baseDate.getDate() === 31) {
                    baseDate.setFullYear(baseDate.getFullYear() - 1);
                }
            
                // 获取年、月、日
                let year = baseDate.getFullYear();
                let month = baseDate.getMonth() + 1; // 月份从0开始，需要加1
                let day = baseDate.getDate();
            
                // 格式化日期为'YYYY-MM-DD'格式
                let formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
                return formattedDate;
            },
            'li|5': [
                {
                    'id': '@id',
                    'text': '@ctitle(5,30)'
                }
            ]
        }
    ]
}
export {
    archiveTemplate
}