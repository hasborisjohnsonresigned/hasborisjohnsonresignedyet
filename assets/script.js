$(document).ready(() => {
    calculateTime();
    getFact();
    getPhoto();
})

const calculateTime = () => {
    const primeMinisterSince = moment('Wed, 24 Jul 2019 16:00:00 +0000');
    setInterval(() => {
        const now = moment.utc();
        const t = moment.duration(now.diff(primeMinisterSince));

        const
            years = t.years(),
            months = t.months(),
            weeks = t.weeks(),
            days = t.days(),
            hours = t.hours(),
            minutes = t.minutes(),
            seconds = t.seconds()

        $('.clock-wrapper .years .digits').html(years);
        $('.clock-wrapper .months .digits').html(months);
        $('.clock-wrapper .weeks .digits').html(weeks);
        $('.clock-wrapper .days .digits').html(days);
        $('.clock-wrapper .hours .digits').html(hours);
        $('.clock-wrapper .minutes .digits').html(minutes);
        $('.clock-wrapper .seconds .digits').html(seconds);
    }, 1000)
}

const getFact = () => {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    $('.random-fact').html(randomFact);
}

const getPhoto = () => {
    const randomDigit = Math.floor(Math.random()*5);
    const src = `./assets/photos/${randomDigit}.jpg`;

    $('.random-image').append(`<img class="image" src="${src}"/>`);
}