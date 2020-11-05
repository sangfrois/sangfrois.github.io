<template>
  <!-- Section: intro -->
  <b-container fluid id="home">
    <b-row>
      <!--  Headshot image -->
      <b-col>
          <img src="@/assets/me.jpg" class="head-shot" alt="head shot">
      </b-col>
      <!-- Landing text, cross-platform links -->
      <b-col align-self="center" class="mr-md-5">
          <h2>François Lespinasse</h2>
          <p>
	        Hi ! Do not hesitate to reach out to me, please!
          </p>
          <p>
          Learn more about my
          <a href="/#/about">research program</a>,
          find my
          <a href="/#/pubs">publications</a>, or view my
          <a href="/#/cv">curriculum vitae (CV)</a>.
          </p>
          <hr>
          <div class="social">
            <p>
            <a href="//github.com/sangfrois" title="Fork me on GitHub" class=github>
            <i class="fab fa-github fa-2x"></i></a>

            <a href="//twitter.com/franclespinas" title="Follow me on Twitter" class=twitter>
            <i class="fab fa-twitter fa-2x"></i></a>

            <a href="//orcid.org/0000-0002-6897-2119" title="View my ORCID profile" class=orcid>
            <i class="ai ai-orcid ai-2x"></i></a>
            </p>
          </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
</script>

<style>

@import '../assets/fontawesome/css/all.css';
@import '../assets/academicons/css/academicons.css';

hr {
  border-top: 2px solid #fafafa;
}

a.github, .google,
 .twitter, .orcid {
   color:  #6a6e75;
 }

a.github:hover {
    color:#000000
}
a.google:hover {
    color:#4885ED
}
a.twitter:hover {
    color:#0084FF
}
a.orcid:hover {
    color:#A6CE39
}

img.head-shot{
  display: block;
  margin: auto;
  width: 400px;
  height: 400px;
  object-fit: cover;
  border-radius: 50%;
}

div.social {
    display: flex;
    justify-content: space-between;
}

p {
  font-size: 1.25rem;
  margin-top: 1.5rem;
}

h2 {
  font-size: 2.5rem;
  margin-top: 1.5rem;
}

</style>
