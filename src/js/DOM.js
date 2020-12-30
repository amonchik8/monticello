const $title = document.querySelector(".header__title-js");
const $bullets = document.querySelector(".header__bullets");
const $firstBullet = $bullets.firstElementChild;
const $secondBullet = $firstBullet.nextElementSibling;
const $thirdBullet = $secondBullet.nextElementSibling;
const $fourthBullet = $thirdBullet.nextElementSibling;
const $fifthBullet = $fourthBullet.nextElementSibling;

const titles = [
  {
    title: `Simple & mordern`,
    subtitle: `We make the world's beautiful every day`,
  },
  {
    title: `WHAT WE DO`,
  },
  {
    title: `NEWS`,
  },
  {
    title: `GALLERY`,
  },
  {
    title: `CONTACTS`,
  },
];

const firstSlide = () => {
    setTimeout(() => {
        $title.classList.add('swipe-animation');
        $title.innerHTML=`${titles[0].title}`;
    }, 300);
};
const showFirstSlide = () => {
    firstSlide();
}
$firstBullet.addEventListener("click", () => {
    showFirstSlide();
    $title.classList.remove('swipe-animation');
})

const secondSlide = () => {
    setTimeout(() => {
        $title.classList.add('swipe-animation');
        $title.innerHTML=`${titles[1].title}`;
    }, 200);
};
const showSecondSlide = () => {
    secondSlide();
}
$secondBullet.addEventListener("click", () => {
    showSecondSlide();
    $title.classList.remove('swipe-animation');
})

const thirdSlide = () => {
    setTimeout(() => {
        $title.classList.add('swipe-animation');
        $title.innerHTML=`${titles[2].title}`;
    }, 200);
};
const showThirdSlide = () => {
    thirdSlide();
}
$thirdBullet.addEventListener("click", () => {
    showThirdSlide();
    $title.classList.remove('swipe-animation');
})

const fourthSlide = () => {
    setTimeout(() => {
        $title.classList.add('swipe-animation');
        $title.innerHTML=`${titles[3].title}`;
    }, 200);
};
const showFourthSlide = () => {
    fourthSlide();
}
$fourthBullet.addEventListener("click", () => {
    showFourthSlide();
    $title.classList.remove('swipe-animation');
})

const fifthSlide = () => {
    setTimeout(() => {
        $title.classList.add('swipe-animation');
        $title.innerHTML=`${titles[4].title}`;
    }, 200);
};
const showFifthSlide = () => {
    fifthSlide();
}
$fifthBullet.addEventListener("click", () => {
    showFifthSlide();
    $title.classList.remove('swipe-animation');
})