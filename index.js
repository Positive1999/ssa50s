function updateClock() {
    var clock = document.getElementById('clock');
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var day = currentTime.getDate();
    var month = currentTime.getMonth() + 1; // Tháng bắt đầu từ 0, nên cần cộng 1
    

    hours = formatTime(hours);
    minutes = formatTime(minutes);
    seconds = formatTime(seconds);

    var dateString = day + '/' + month;
    var timeString = hours + ':' + minutes + ':' + seconds;

    clock.innerHTML =  timeString + ' </br>' +dateString;

    setTimeout(updateClock, 1000); // Cập nhật đồng hồ sau mỗi giây
}

function formatTime(time) {
    if (time < 10) {
        time = '0' + time;
    }
    return time;
}

updateClock(); // Bắt đầu cập nhật đồng hồ