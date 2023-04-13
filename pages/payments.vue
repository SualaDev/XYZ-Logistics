<template>
  <div class="container">
    <div class="sub-container">
      <div class="device-verification">
        <svg
          class="device-icon"
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M50 100C63.2604 100 75.9793 94.7319 85.3553 85.3553C94.7319 75.9779 100 63.2604 100 50C100 36.7396 94.7319 24.0207 85.3553 14.6447C75.9779 5.26813 63.2604 0 50 0C36.7396 0 24.0207 5.26813 14.6447 14.6447C5.26813 24.0221 0 36.7396 0 50C0 63.2604 5.26813 75.9793 14.6447 85.3553C24.0221 94.7319 36.7396 100 50 100ZM24.046 51.3181C24.8976 50.4719 26.0496 49.9963 27.2504 49.9963C28.452 49.9963 29.6033 50.4719 30.4555 51.3181L40.9096 61.7729L67.2278 35.4546C68.3982 34.4525 69.9962 34.1116 71.4732 34.5483C72.951 34.9851 74.1062 36.141 74.543 37.6181C74.9805 39.0959 74.6389 40.6939 73.6367 41.8643L44.0905 71.4105L44.0913 71.4097C43.239 72.2567 42.0877 72.7315 40.8861 72.7315C39.6853 72.7315 38.5333 72.2567 37.6818 71.4097L24.0454 57.7733C23.1847 56.9203 22.7008 55.7582 22.7008 54.5461C22.7008 53.3347 23.1847 52.1726 24.0454 51.319L24.046 51.3181Z" fill="url(#paint0_linear_3617_8122)" />
          <defs>
            <linearGradient
              id="paint0_linear_3617_8122"
              x1="77.5"
              y1="86"
              x2="19"
              y2="11.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#01AE13" />
              <stop offset="1" stop-color="#81AE01" />
            </linearGradient>
          </defs>
        </svg>
        <h2 class="device-header">
          Payment Successful
        </h2>
        <p class="device-information">
          Your payment was successful. You can return back to the Home Page now.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SuccessScreen'
}
</script>

<style scoped>
.container{
  background-color: #F9F9FB;
  min-height: 100vh;
}
.sub-container{
  display: flex;
  justify-content: center;
  align-items: center;
}
.device-verification{
  background-color: #FFFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 11.6rem 0 11.6rem 0;
  padding: 5.7rem 8.9rem 5.7rem 8.9rem;
  font-family: 'Hanken Sans R';
}
.device-icon{
  border: 1.2rem solid rgba(129, 174, 1, 0.1);
  border-radius: 50px;
}
.device-header{
  font-weight: 700;
  font-size: 1.7rem;
  line-height: 2.1rem;
  margin-top: 2.1rem;
}
.device-information{
  width: 359px;
  text-align: center;
  color: #49515F;
  margin-top: 1.1rem;
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 1.8rem;
  font-family: 'DM Sans Regular';
}
</style>
