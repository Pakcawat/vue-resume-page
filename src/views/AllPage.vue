<script setup>
import { VuePreloader } from 'vue-preloader';
import "../../node_modules/vue-preloader/dist/style.css"
import "../../style/Allabout.css"
</script>

<template>
  <VuePreloader background-color="#FF80AB" color="black" transition-type="fade-right" :loading-speed="10"
    :transition-speed="1700" @loading-is-over="loadingIsOver" @transition-is-over="transitionIsOver"></VuePreloader>

  <div class="wrapper">

    <!-- Section - About -->
    <section class="" id="about-section">
      <div class="container">

        <div class="profile ">
          <img src="../assets/profile.jpg" alt="">
          <h3>Pakcawat Issarawisarnpol</h3>
          <p>Computer Engineering from Thammasat University</p>

          <div class="share">
            <div class="address">khlong 3 Rangsit nakhon nayok , Pathum Thani 12150 </div>
            <div class="tel"><a href="tel:+66618368168" class="rounded-pill pointer pa-md-3">
                <font-awesome-icon icon="fa-solid fa-phone" size="2xl" /> 061-836-8168</a></div>
            <div class="email"><a href="mailto:pakcawat.iss@gmail.com" class="rounded-pill pointer pa-md-3">
                <font-awesome-icon icon="fa-solid fa-envelope" size="2xl" />
                pakcawat.iss@gmail.com</a></div>
            <span class="github"><a href="https://github.com/Pakcawat" class="icon pointer">
                <v-btn href="https://github.com/Pakcawat" color="white">
                  <font-awesome-icon :icon="['fab', 'github']" size="2xl" />
                </v-btn>
              </a></span>
            <span class="line"><a href="https://line.me/ti/p/5ovO1GsjEE" class="icon pointer"
                style="color:rgba(147, 218, 41, 0.733);">
                <v-btn href="https://line.me/ti/p/5ovO1GsjEE" color="green">
                  <font-awesome-icon :icon="['fab', 'line']" size="2xl" />
                </v-btn></a></span>
          </div>
        </div>

        <div class="information">

          <div class="about">
            <h3 class="title">about me</h3>
            <p>...</p>
            <p>...</p>
            <div class="box-container">
              <div class="box">
                <h3> <span>Age : </span> 24 </h3>
                <h3> <span> Address : </span> Rangsit Khlong 3 ,Pathum Thani 12150 </h3>
                <h3> <span> Number : </span> 061-836-8168 </h3>
                <h3> <span> Email : </span> pakcawat.iss@gmail.com </h3>
              </div>
              <div class="box">
                <h3> <span> Skill : </span> ... </h3>
                <h3> <span> Language : </span> thai, english </h3>
                <h3> <span> Experience : </span> - </h3>
              </div>
            </div>
          </div>

          <div class="skills">
            <h3 class="title">My skills</h3>
            <div class="box-container">

              <v-card subtitle="" text="" title="Programs language">
                <v-list-item v-for="n in 4" :key="n" :title="Programslanguage[n - 1]" subtitle=""></v-list-item>
              </v-card>

              <v-card subtitle="" text="" title="Web frameworks">
                <v-list-item v-for="n in 4" :key="n" :title="Webframeworks[n - 1]" subtitle=""></v-list-item>
              </v-card>

              <v-card subtitle="" text="" title="CSS framework">
                <v-list-item v-for="n in 4" :key="n" :title="CSSframework[n - 1]" subtitle=""></v-list-item>
              </v-card>

              <v-card subtitle="" text="" title="Databases">
                <v-list-item v-for="n in 4" :key="n" :title="Databases[n - 1]" subtitle=""></v-list-item>
              </v-card>

              <v-card subtitle="" text="" title="Control"><v-list-item v-for="n in 1" :key="n" :title="Control[n - 1]"
                  subtitle=""></v-list-item></v-card>
            </div>
          </div>

          <div class="experience">
            <h3 class="title">experience</h3>
            <div class="box-container">
              <div class="box">
                <span>2017 - 2018</span>
                <h3>front-end development</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, quidem aperiam! Sapiente provident
                  dolorem tempora quis magni, neque odio quidem.</p>
              </div>
              <div class="box">
                <span>2018 - 2019</span>
                <h3>front-end development</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, quidem aperiam! Sapiente provident
                  dolorem tempora quis magni, neque odio quidem.</p>
              </div>
              <div class="box">
                <span>2019 - 2020</span>
                <h3>front-end development</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, quidem aperiam! Sapiente provident
                  dolorem tempora quis magni, neque odio quidem.</p>
              </div>
              <div class="box">
                <span>2020 - 2021</span>
                <h3>front-end development</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, quidem aperiam! Sapiente provident
                  dolorem tempora quis magni, neque odio quidem.</p>
              </div>
            </div>
          </div>

          <div class="my-work">
            <h3 class="title">my work experience</h3>
            <div class="box-container">
              <div class="box">
                <span>2017 - 2018</span>
                <h3>front-end development</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, quidem aperiam! Sapiente provident
                  dolorem tempora quis magni, neque odio quidem.</p>
                <div> <v-row justify="center" style="min-height: 160px ;padding:10px">
                    <v-col class="shrink">
                      <v-btn class="ma-2" color="primary" @click="expand = !expand">
                        Expand Transition
                      </v-btn>

                      <v-expand-transition>
                        <v-card v-show="expand" class="mx-auto" elevation="20" max-width="800">
                          <v-carousel height="400" hide-delimiters show-arrows="hover" hide-delimiter-background>
                            <v-carousel-item v-for="(slide, i) in slides" :key="i">
                              <v-sheet :color="colors[i]" height="100%">
                                <div class="d-flex fill-height justify-center align-center">
                                  <div class="text-h2">{{ slide }} Slide</div>
                                </div>
                              </v-sheet>
                            </v-carousel-item>
                          </v-carousel>
                        </v-card>
                      </v-expand-transition>
                    </v-col>
                  </v-row></div>
              </div>
              <div class="box">
                <span>2018 - 2019</span>
                <h3>front-end development</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, quidem aperiam! Sapiente provident
                  dolorem tempora quis magni, neque odio quidem.</p>
                <div> <v-row justify="center" style="min-height: 160px ;padding:10px">
                    <v-col class="shrink">
                      <v-btn class="ma-2" color="primary" @click="expand2 = !expand2">
                        Expand Transition
                      </v-btn>

                      <v-expand-transition>
                        <v-card v-show="expand2" class="mx-auto" elevation="20" max-width="800">
                          <v-carousel height="400" hide-delimiters show-arrows="hover" hide-delimiter-background>
                            <v-carousel-item v-for="(slide, i) in slides" :key="i">
                              <v-sheet :color="colors[i]" height="100%">
                                <div class="d-flex fill-height justify-center align-center">
                                  <div class="text-h2">{{ slide }} Slide</div>
                                </div>
                              </v-sheet>
                            </v-carousel-item>
                          </v-carousel>
                        </v-card>
                      </v-expand-transition>
                    </v-col>
                  </v-row></div>
              </div>
              <div class="box">
                <span>2019 - 2020</span>
                <h3>front-end development</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, quidem aperiam! Sapiente provident
                  dolorem tempora quis magni, neque odio quidem.</p>
                <div> <v-row justify="center" style="min-height: 160px ;padding:10px">
                    <v-col class="shrink">
                      <v-btn class="ma-2" color="primary" @click="expand3 = !expand3">
                        Expand Transition
                      </v-btn>

                      <v-expand-transition>
                        <v-card v-show="expand3" class="mx-auto" elevation="20" max-width="800">
                          <v-carousel height="400" hide-delimiters show-arrows="hover" hide-delimiter-background>
                            <v-carousel-item v-for="(slide, i) in slides" :key="i">
                              <v-sheet :color="colors[i]" height="100%">
                                <div class="d-flex fill-height justify-center align-center">
                                  <div class="text-h2">{{ slide }} Slide</div>
                                </div>
                              </v-sheet>
                            </v-carousel-item>
                          </v-carousel>
                        </v-card>
                      </v-expand-transition>
                    </v-col>
                  </v-row></div>
              </div>
              <div class="box">
                <span>2020 - 2021</span>
                <h3>front-end development</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, quidem aperiam! Sapiente provident
                  dolorem tempora quis magni, neque odio quidem.</p>
                <div> <v-row justify="center" style="min-height: 160px ;padding:10px">
                    <v-col class="shrink">
                      <v-btn class="ma-2" color="primary" @click="expand4 = !expand4">
                        Expand Transition
                      </v-btn>

                      <v-expand-transition>
                        <v-card v-show="expand4" class="mx-auto" elevation="20" max-width="800">
                          <v-carousel height="400" hide-delimiters show-arrows="hover" hide-delimiter-background>
                            <v-carousel-item v-for="(slide, i) in slides" :key="i">
                              <v-sheet :color="colors[i]" height="100%">
                                <div class="d-flex fill-height justify-center align-center">
                                  <div class="text-h2">{{ slide }} Slide</div>
                                </div>
                              </v-sheet>
                            </v-carousel-item>
                          </v-carousel>
                        </v-card>
                      </v-expand-transition>
                    </v-col>
                  </v-row></div>
              </div>
            </div>
          </div>

          <div class="contact">
            <h3 class="title">contact info</h3>
            <div class="box-container">
              <div class="box">
                <i class="fas fa-map"></i>
                <div class="info">
                  <h3>my address</h3>
                  <p>mumbai, india - 400104</p>
                </div>
              </div>
              <div class="box">
                <i class="fas fa-phone"></i>
                <div class="info">
                  <h3>my number</h3>
                  <p>+123-456-7890</p>
                  <p>+111-222-3333</p>
                </div>
              </div>
              <div class="box">
                <i class="fas fa-envelope"></i>
                <div class="info">
                  <h3>my email</h3>
                  <p>shaikhanas@gmail.com</p>
                  <p>anasbhai@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>


    </section>



    <section class="" id="contact-section">


    </section>

  </div>
</template>

<script>
export default {
  data: () => ({
    expand: false,
    expand2: false,
    expand3: false,
    expand4: false,
    colors: [
      'green',
      'secondary',
      'yellow darken-4',
      'red lighten-2',
      'orange darken-1',
    ],
    Webframeworks: [
      " - Django ( Advanced )", 
      "- Vue.js ( Advanced )",
      "- React ( Beginner )",
      ],
    CSSframework: ["- Bootstrap (Advanced)"],
    Control: ["- GitHub (Proficient)"],
    Databases: ["- SQL (Advanced)", "- MongoDB ( Intermediate )"],
    Programslanguage: [
      "- Java ( Advanced )", 
      "- Python ( Intermediate )", 
      "- JavaScript ( Intermediate )", 
      "- HTML ( Intermediate )", 
      "- CSS ( Intermediate )", 
      "- Node.js ( Intermediate )", 
      "- Kotlin ( Beginner )"],
    slides: ['First', 'Second', 'Third', 'Fourth', 'Fifth'],
  }),
}
</script>
