/**
 * 秒数转小时
 */
const format = (value) => {
    var secondTime = parseInt(value);// 秒
    var minuteTime = 0;// 分
    var hourTime = 0;// 小时
    if (secondTime > 60) { // 如果秒数大于60，将秒数转换成整数
        // 获取分钟，除以60取整数，得到整数分钟
        minuteTime = parseInt(secondTime / 60);
        // 获取秒数，秒数取佘，得到整数秒数
        secondTime = parseInt(secondTime % 60);
        // 如果分钟大于60，将分钟转换成小时
        if (minuteTime > 60) {
            // 获取小时，获取分钟除以60，得到整数小时
            hourTime = parseInt(minuteTime / 60);
            // 获取小时后取佘的分，获取分钟除以60取佘的分
            minuteTime = parseInt(minuteTime % 60);
        }
    }
    var result;
    if (parseInt(secondTime) >= 10) {
        result = '' + parseInt(secondTime) + '秒';
    } else {
        result = '0' + parseInt(secondTime) + '秒';
    }

    if (minuteTime > 0) {
        if (parseInt(minuteTime) >= 10) {
            result = '' + parseInt(minuteTime) + '分' + result;
        } else {
            result = '0' + parseInt(minuteTime) + '分' + result;
        }
    }
    if (hourTime > 0) {
        if (parseInt(hourTime) >= 10) {
            result = '' + parseInt(hourTime) + '小时' + result;
        } else {
            result = '0' + parseInt(hourTime) + '小时' + result;
        }
    }
    return result;
};

export default {
    format
};