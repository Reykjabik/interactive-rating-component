
const submit_btn = document.querySelector('.submit');
const rating_state = document.querySelector('.rating-state');
const thankyou_state = document.querySelector('.thankyou-state');
const ratingsArr = document.querySelectorAll('.rating-btn');
const usr_rating_span = document.querySelector('#usr-rating');
let usr_rating;

submit_btn.addEventListener('click', onSubmit);

function onSubmit(){
    rating_state.classList.toggle('hidden');
    thankyou_state.classList.toggle('hidden');
    usr_rating_span.innerHTML = usr_rating;
}

ratingsArr.forEach(
    rating_btn => rating_btn.addEventListener('click', e => {
        clearActives();
        e.target.classList.add('active');
        usr_rating = e.target.innerHTML;
    }));

function clearActives(){
    ratingsArr.forEach(rating_btn => rating_btn.classList.remove('active'));
}
