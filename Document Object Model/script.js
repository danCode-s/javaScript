function subscribe(){
    const subscribeButton = document.querySelector('.js-sub');

    if (subscribeButton.innerText === 'Subscribe'){
        subscribeButton.innerHTML = 'Subscribed';
        subscribeButton.classList.add('is-subscribed');

    } else {
        subscribeButton.innerHTML = 'Subscribe';
        subscribeButton.classList.remove('is-subscribed');
    }
}

function calculateTotal(){
    let orderCost = Number(document.querySelector('.cost-input').value);
    orderCost *= 100;

    if (orderCost <= 4000){
        document.querySelector('.js-total-cost').innerHTML = `$${((orderCost + 1000) / 100 )}`;
    } else {
        document.querySelector('.js-total-cost').innerHTML = `$${orderCost / 100}`;
    }
}
function handleCostKeydown(event){
    if(event.key === 'Enter'){
        calculateTotal();
    }
}