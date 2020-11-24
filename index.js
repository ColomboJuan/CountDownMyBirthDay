(function () {
    var birthDay = 298
    var days = document.querySelector("#days")
    var hours = document.querySelector("#hours")
    var minutes = document.querySelector("#minutes")
    var seconds = document.querySelector("#seconds")
    var happyBirthDay = document.querySelector("#happyBirthDay")
    happyBirthDay.classList.add("invisible")
    var countDownDays;
    var countHours;
    var countMinutes;
    var countSeconds;
    var now;


    function getDaysToMyBirthday(birthDay, currentDay) {
        var daysToMyBirthday = birthDay - currentDay
        if (daysToMyBirthday >= -1) {
            return daysToMyBirthday
        } else {
            return daysToMyBirthday + 364
        }
    }
    x = setInterval(function () {
        now = new Date();
        var start = new Date(now.getFullYear(), 0, 0);
        var diff = now - start;
        var oneDay = 1000 * 60 * 60 * 24;
        var currentDay = Math.floor(diff / oneDay);
        countDownDays = getDaysToMyBirthday(birthDay, currentDay);
        countHours = 23 - now.getHours();
        countMinutes = 59 - now.getMinutes();
        countSeconds = 59 - now.getSeconds();

        days.innerHTML = countDownDays;
        hours.innerHTML = countHours;
        minutes.innerHTML = countMinutes;
        seconds.innerHTML = countSeconds;


        if (countDownDays == 0) {
            happyBirthDay.classList.add("visible")
            clearInterval(x);
        }

    }, 0)
}())