# infiniteRolling
This design can be used on many occasions, whether as a message board or a showcase for displaying the photo. I called it infinite rolling, which is not that accurate. The effect is actually an illusion created with the help of JavaScript.

**Let me explain:**
1. I first create a card container ( class = 'firstCardContainer' ) that serves as the main display and contains all the cards we want to show. Then we add a second container ( class='secondCardContainer' ) that contains only the first few cards we copy from the first container.
2. The animation is a simple "translateY". When the second container reaches the top, the animation will soon execute the next turn. So the first container will immediately replace the second and move back up. The fine connection creates the illusion that the rolling is infinite and has no end.

[Codepen Demo here.](https://codepen.io/bwlw3127/pen/xxrRvZe)
