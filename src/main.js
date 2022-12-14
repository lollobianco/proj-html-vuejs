import Vue from 'vue'
import App from './App.vue'


//FONT-AWESOME
import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

import { faBicycle as faBicycleSolid } from '@fortawesome/free-solid-svg-icons'

import { faHeartPulse as faHeartPulseSolid } from '@fortawesome/free-solid-svg-icons'

import {faBookOpen as faBookOpenSolid} from '@fortawesome/free-solid-svg-icons'

import { faLinkSlash as faLinkSlashSolid } from '@fortawesome/free-solid-svg-icons'

import { faAngleDown as faAngleDownSolid } from '@fortawesome/free-solid-svg-icons'

import { faLink as faLinkSolid } from '@fortawesome/free-solid-svg-icons'

import { faMagnifyingGlass as faMagnifyingGlassSolid } from '@fortawesome/free-solid-svg-icons'

import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'

import { faStarHalfStroke } from '@fortawesome/free-regular-svg-icons';

import { faSkyatlas } from '@fortawesome/free-brands-svg-icons'

import {faFacebookF, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'

library.add(faUserSecret, faBicycleSolid, faStarRegular, faStarHalfStroke, faLinkSlashSolid, faSkyatlas, faHeartPulseSolid, faFacebookF, faTwitter, faInstagram, faBookOpenSolid, faAngleDownSolid, faLinkSolid, faMagnifyingGlassSolid)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
