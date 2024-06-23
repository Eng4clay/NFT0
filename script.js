document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('surveyForm');
    const participantCountElement = document.getElementById('participantCount');

    let participantCount = 0;

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        participantCount++;
        participantCountElement.textContent = participantCount;

        form.reset();
    });
});
