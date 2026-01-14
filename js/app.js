// ===== Landing Page JS Start =====

// Countdown Timer for next batch//


function runTimer(){

const now = new Date();
const diff = targetDate - now;

const d = Math.floor(diff/(1000*60*60*24));
const h = Math.floor(diff/(1000*60*60)%24);
const m = Math.floor(diff/(1000*60)%60);
const s = Math.floor(diff/(1000)%60);

document.getElementById("days").innerText=d;
document.getElementById("hours").innerText=h;
document.getElementById("minutes").innerText=m;
document.getElementById("seconds").innerText=s;

}

setInterval(runTimer,1000);

// Enrollment Form Message
document.getElementById("enrollForm")
.addEventListener("submit",function(e){

e.preventDefault();

document.getElementById("thanks").innerHTML=
"<h3 style='color:green'>ধন্যবাদ! আমরা দ্রুত আপনার সাথে যোগাযোগ করবো।</h3>";

});

// ===== Landing Page JS End =====
// ===== স্ক্রল ট্রান্সিশন JS শুরু =====

const items = document.querySelectorAll(".part li");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){
  entry.target.style.opacity=1;
  entry.target.style.transform="translateX(0)";
}

});

});

items.forEach(i=>{
  i.style.opacity=0;
  i.style.transform="translateX(-20px)";
  observer.observe(i);
});

// ===== স্ক্রল ট্রান্সিশন JS শেষ =====
// ===== স্ক্রল ট্রান্সিশন ঠিক করা JS শুরু =====

document.addEventListener("DOMContentLoaded", function(){

  const items = document.querySelectorAll(".part li");

  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){

        /* ভিজিবল করার অংশ */
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateX(0)";

      }
    });
  },
  {
    threshold:0.2
  });

  items.forEach(i=>{
    observer.observe(i);
  });

});

// ===== স্ক্রল ট্রান্সিশন ঠিক করা JS শেষ =====
// ===== hero ছবির transition JS শুরু =====

document.addEventListener("DOMContentLoaded", function(){

  const photo = document.querySelector(".my-photo");

  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){

        /* ক্লাস যোগ করে দেখানোর অংশ */
        entry.target.classList.add("show");

      }
    });
  },{
    threshold:0.3
  });

  if(photo){
    observer.observe(photo);
  }

});

// ===== hero ছবির transition JS শেষ =====
// ===== স্ক্রল করলে লেখা আকর্ষণ হয়ে আসার JS শুরু =====

// ===== ছবির নিচে ডান পাশের লেখা ইফেক্ট JS শুরু =====

document.addEventListener("DOMContentLoaded", function(){

  const lines = document.querySelectorAll(".trainer-text .line");

  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add("show");
      }
    });
  },{
    threshold:0.3
  });

  lines.forEach(function(line){
    observer.observe(line);
  });

});

// ===== ছবির নিচে ডান পাশের লেখা ইফেক্ট JS শেষ =====
/* ===== গ্যালারির JS শুরু ===== */

document.addEventListener("DOMContentLoaded", function(){

  const imgs = document.querySelectorAll(".g-img");
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");
  const close = document.getElementById("close");

  /* scroll observer */
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add("show");
      }
    });
  },{
    threshold:.25
  });

  imgs.forEach(i=>{
    observer.observe(i);
  });

  /* filter logic */
  const btns = document.querySelectorAll(".filter-btn");

  btns.forEach(b=>{
    b.addEventListener("click", ()=>{

      const a = b.getAttribute("data-album");

      imgs.forEach(img=>{

        if(img.getAttribute("data-album") === a){
          img.style.display="block";
        }else{
          img.style.display="none";
        }

      });

    });
  });

  /* modal open */
  imgs.forEach(img=>{

    img.addEventListener("click", ()=>{
      modal.style.display="flex";
      modalImg.src = img.src;
    });

  });

  /* modal close */
  close.addEventListener("click", ()=>{
    modal.style.display="none";
  });

});

/* ===== গ্যালারির JS শেষ ===== */
// ===== ব্যাচ ১, ব্যাচ ২ এবং সকল ছবি filter JS শুরু =====

document.addEventListener("DOMContentLoaded", function(){

  const imgs = document.querySelectorAll(".g-img");
  const btns = document.querySelectorAll(".filter-btn");

  /* Scroll effect — আগের মতোই */
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add("show");
      }
    });
  },{
    threshold:0.25
  });

  imgs.forEach(i=>{
    observer.observe(i);
  });

  /* ===== আসল filter logic ===== */
  btns.forEach(function(btn){

    btn.addEventListener("click", function(){

      const album = btn.getAttribute("data-album");

      imgs.forEach(function(img){

        // যদি “সকল ছবি” বাটন হয়
        if(album === "all"){
          img.style.display = "block";
        }

        // ব্যাচ অনুযায়ী
        else if(img.getAttribute("data-album") === album){
          img.style.display = "block";
        }

        else{
          img.style.display = "none";
        }

      });

    });

  });

});

// ===== ব্যাচ ১, ব্যাচ ২ এবং সকল ছবি filter JS শেষ =====
// ===== স্ক্রল করলে স্টুডেন্ট রিভিউ আকর্ষণ হয়ে আসার JS শুরু =====

document.addEventListener("DOMContentLoaded", function(){

  const cards = document.querySelectorAll(".review-card");

  const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

      if(entry.isIntersecting){

        // visible করার কমেন্টস
        entry.target.classList.add("show");

      }

    });

  },{
    threshold:0.25
  });

  cards.forEach(c=>{
    observer.observe(c);
  });

});

// ===== স্ক্রল করলে স্টুডেন্ট রিভিউ আকর্ষণ হয়ে আসার JS শেষ =====
// ===== Google Sheet URL ধরে ডাটা পাঠানোর JS শুরু =====

const GOOGLE_SHEET_ENDPOINT =
"https://script.google.com/macros/s/AKfycbzxeTdEtRZ0LG0quUq2hNAigrCMIP37b-6oj_j0eS-eXgRk_JG4lf8XNEWKDzWwNZv2Mw/exec";   /* এইখানে আপনার URL */

async function sendToSheet(fd){

  const res = await fetch(GOOGLE_SHEET_ENDPOINT,{
    method:"POST",
    body: fd
  });

  return res.json();

}

document.addEventListener("DOMContentLoaded", ()=>{

  const form = document.getElementById("enrollForm");
  const thanks = document.getElementById("thanks");

  form.addEventListener("submit", async e=>{

    e.preventDefault();

    const fd = new FormData(form);

    const result = await sendToSheet(fd);

    if(result.status === "ok"){

      thanks.innerHTML="ভর্তি সফল ✔";
      form.reset();

    }else{

      thanks.innerHTML=result.msg;

    }

  });

});

// ===== Google Sheet URL ধরে ডাটা পাঠানোর JS শেষ =====
