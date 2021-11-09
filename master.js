window.addEventListener('load', () => {
  const firstCard = document.querySelector('.firstCardContainer');
  const firstCardLength = firstCard.offsetHeight;
  const cardFirst = document.querySelectorAll('.card')[0];
  let cardMarginTop = window.getComputedStyle(cardFirst).marginTop || cardFirst.currentStyle.marginTop;
  const addGoingUp = cardMarginTop.match(/(.*)px/)[1]*1.0 + firstCardLength*1.0

  const additionalStyle =
  `@keyframes goingUp {
      0%{
        top: 0
      }
      100%{
        top: -${addGoingUp}px;
      }
    }
  `
  let newTag = document.createElement('style');
  newTag.innerHTML = additionalStyle;
  document.body.append(newTag);

})
