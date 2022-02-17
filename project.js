// When the user clicks on the radio input the Hydro Bro figure responds with either:
//No -- "TURBO HYDRATE (this means chug!!!)"
//or
//Yes -- "Have a small drink anyway!"
//the text in his bubble dialogue changes to reflect this choice.

$(function () {
    $('form').on('submit', function (event) {
        event.preventDefault();

        const userInput = $('input:checked').val();

        const broTalk = $('#hydroBroTalk');

        if (userInput === 'no') {
            broTalk.text('Nope! You need to Turbo Hydrate!!! (this means chug water)');
        } else {
            broTalk.text('Have a smol drink anyway.');
        }
    });
});
