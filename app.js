const selectedSeat=document.getElementById('selected-seat');
const totalBookedEl=document.getElementById('total-booked');
const availableSeatEl=document.getElementById('available-seats');
const totalPriceEl=document.getElementById('total-price');
const couponField=document.getElementById('coupon-field');
const couponBtn=document.getElementById('coupon-btn');
const defaultText=document.getElementById('default-text');
const grandTotalEl=document.getElementById('grand-total');
const showCouponPriceEl=document.getElementById('show-coupon-price');
const nextBtn=document.getElementById('next-btn');
const phnNumber=document.getElementById('phn-number');
const continueBtn=document.getElementById('continue');

let selected=[];
let totalPrice=0;

function handleSelectSeat(event){
  const value=event.innerText;
  if(selected.includes(value)){
    return alert('Seat already booked');
  }
  else if(selected.length<4){
    event.classList.add('bg-[#1DD100]');
    event.classList.add('text-white');

    selected.push(event.innerText);
    console.log(selected);
    totalBookedEl.innerText=selected.length;

    availableSeatEl.innerText=parseFloat(availableSeatEl.innerText)-1;


    defaultText.classList.add('hidden');
    selectedSeat.innerHTML+=`<li class="text-base font-normal flex justify-between">
    <span>${event.innerText}</span>
    <span>Economy</span>
    <span>550</span>
    </li>`;

    totalPrice+=550;
    totalPriceEl.innerText=totalPrice.toFixed(2);
    

    if(selected.length>3){
      couponField.removeAttribute('disabled');
      couponBtn.removeAttribute('disabled');
    }
  }
  else{
    return alert('Maximum seat booked');
  }
}


couponBtn.addEventListener('click',function(event){
  let couponSave=0;
  if(couponField.value==='NEW50' || couponField.value==='Couple20'){
    if(couponField.value==='NEW50'){
      couponSave=totalPrice*.15;
    }
    else{
      couponSave=totalPrice*.20;
    }
  }
  else{
    return alert('Invalid coupon');
  }

  showCouponPriceEl.innerHTML=`
  <p>Discount</p>
  <p>
    <span>-BDT: </span>
    <span>${couponSave.toFixed(2)}</span>
  </p>
  `;

  grandTotalEl.innerText=totalPrice-couponSave;
});

phnNumber.addEventListener('input',function(event){
  if(event.target.value.length===11){
    nextBtn.removeAttribute('disabled');
  }
  else{
    nextBtn.disabled=true;
  }
});

continueBtn.addEventListener('click',function(event){
  window.location.reload();
});