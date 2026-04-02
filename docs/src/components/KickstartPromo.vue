<template>
  <div class="react-promo">
    <a
      href="https://formkit.com?utm_source=auto_animate&utm_medium=website&utm_campaign=react-callout"
      target="_blank"
      class="react-promo__cta"
    />

    <span class="react-promo__badge">New</span>

    <div class="react-promo__icon" aria-label="React">
      <svg viewBox="-11.5 -10.232 23 20.463">
        <circle r="2.05" fill="currentColor" />
        <g stroke="currentColor" fill="none" stroke-width="1">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    </div>
    <div class="react-promo__content">
      <h2 class="react-promo__title">
        FormKit for React
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            fill="currentColor"
            d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"
          />
        </svg>
      </h2>
      <p class="react-promo__description">
        FormKit is now available for React. The same powerful form-building
        experience — inputs, validation, and themes — now works with your React
        projects.
      </p>
    </div>
  </div>
</template>

<style scoped>
.react-promo {
  background: var(--purple-ll, #f6f2ff);
  border: 1px solid var(--purple-lm, #deceff);
  padding: 1rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  margin-bottom: 2em;
  box-shadow: none;
  transition: all 0.2s ease;
  overflow: hidden;
  cursor: pointer;
}
.react-promo::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 2;
  filter: brightness(80%) contrast(100%);
  mix-blend-mode: overlay;
  background-size: cover;
  background-image: radial-gradient(
      circle at 50% 40%,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.25)
    ),
    url("data:image/svg+xml,%3Csvg viewBox='0 0 10000 10000' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
}
.react-promo:hover {
  transform: translateY(-0.25rem);
  box-shadow: rgba(71, 17, 222, 0.08) 0px 20px 40px -10px,
    rgba(0, 0, 0, 0.08) 0px 10px 20px -10px;
  filter: brightness(105%);
}
[data-dark-mode="true"] .react-promo {
  background: linear-gradient(135deg, #3b0764, #1e1b4b);
  border: 1px solid rgba(168, 85, 247, 0.2);
}
[data-dark-mode="true"] .react-promo:hover {
  filter: brightness(120%);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}
[data-dark-mode="true"] .react-promo__badge {
  background: rgba(168, 85, 247, 0.15);
  color: #c4b5fd;
  border-color: rgba(168, 85, 247, 0.3);
}
[data-dark-mode="true"] .react-promo__icon {
  color: #a78bfa;
}
[data-dark-mode="true"] .react-promo__content {
  color: #fff;
}
[data-dark-mode="true"] .react-promo__title {
  color: #fff;
}
@media (min-width: 768px) {
  .react-promo {
    flex-direction: row;
  }
}
@media (min-width: 960px) {
  .react-promo {
    margin-bottom: -2em;
  }
}

.react-promo__badge {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  padding: 0.2rem 0.6rem;
  background: rgba(71, 17, 222, 0.08);
  color: var(--purple-m, #7335d7);
  border: 1px solid rgba(71, 17, 222, 0.15);
  border-radius: 9999px;
  font-size: 0.625rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  z-index: 3;
}

.react-promo__cta {
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
}

.react-promo__icon {
  width: 100%;
  max-width: 5rem;
  color: var(--purple-m, #7335d7);
  position: relative;
  z-index: 1;
  flex-shrink: 0;
  padding: 1rem;
}
.react-promo__icon svg {
  width: 100%;
  height: 100%;
}

.react-promo__content {
  color: var(--text, #333);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
}
@media (min-width: 768px) {
  .react-promo__content {
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 2rem;
  }
}

.react-promo__title {
  margin-top: 0.25rem;
  margin-bottom: 0.1rem;
  padding-top: 0;
  font-size: 1.25rem;
  color: var(--text-d, #333);
  letter-spacing: -0.05rem;
}
@media (min-width: 768px) {
  .react-promo {
    font-size: 1.33rem;
  }
}

.react-promo__title svg {
  width: 0.75em;
  height: 0.75em;
  margin-left: 0.25em;
}

.react-promo__description {
  opacity: 0.66;
  font-size: 0.85rem;
}
.react-promo__content p:last-child {
  margin-bottom: 0;
}
</style>
