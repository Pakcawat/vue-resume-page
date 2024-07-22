import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret ,faEnvelope ,faPhone , faPlus,faBasketball,faGamepad,faChess,faWalking,faBook,faKeyboard} from '@fortawesome/free-solid-svg-icons'
import { faGithub , faLine } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faUserSecret,faGithub,faLine,faEnvelope,faPhone,faPlus, faBasketball,faGamepad,faChess,faWalking,faBook,faKeyboard)

const vuetify = createVuetify({
    components,
    directives,
  })

createApp(App)
 .use(vuetify)
 .use(router)
 .component('font-awesome-icon', FontAwesomeIcon)
 .mount('#app')

