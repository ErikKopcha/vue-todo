<template>
  <div class="home-wrapper">
    <router-link to="/todos">
      <div class="text-effect">
        <h1 class="neon" data-text="Todo application" contenteditable></h1>
        <div class="gradient"></div>
        <div class="spotlight"></div>
      </div>
    </router-link>
  </div>
</template>

<style scoped>
  .home-wrapper {
    width: 100vw;
    height: 100vh;
  }
</style>

<style>
.text-effect {
  height: 100vh;
  overflow: hidden;
  position: relative;
  filter: contrast(110%) brightness(190%);
}

.neon {
  cursor: pointer;
  height: 100vh;
  position: relative;
  background: black;
  color: transparent;
}

.neon::before,
.neon::after {
  content: attr(data-text);
  color: white;
  filter: blur(0.02em);
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}

.neon::after {
  mix-blend-mode: difference;
}

.gradient,
.spotlight {
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
  pointer-events: none;
  z-index: 10;
}

.gradient {
  background: linear-gradient(45deg, red, blue);
  mix-blend-mode: multiply;
}

.spotlight {
  animation: light 5s infinite linear;
  background:
      radial-gradient(circle, white, transparent 25%) 0 0 / 25% 25%,
      radial-gradient(circle, white, black 25%) 50% 50% / 12.5% 12.5%;
  top: -100%; left: -100%;
  mix-blend-mode: color-dodge;
}

@keyframes light {
  100% {
    transform: translate3d(50%, 50%, 0);
  }
}
.neon {
  font: 700 100px 'Lato', sans-serif;
  text-transform: uppercase;
  text-align: center;
  margin: 0;
}

@media (max-width: 870px) {
  .neon {
    font: 700 50px 'Lato', sans-serif;
  }
}

@media (max-width: 370px) {
  .neon {
    font: 700 25px 'Lato', sans-serif;
  }
}

.neon:focus { outline: none; border: 1px dotted white; }
</style>