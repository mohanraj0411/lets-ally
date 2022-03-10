import { app } from './main-app'
// import components
import topNavbar from '../components/header/TopNavbar.vue'
import footerComponent from '../components/footer/footer.vue'
import headerBanner from '../components/banner/headerBanner.vue'
import horizontalCarousel from '../components/horizontal-carousel/horizontalCarousel.vue'
import experience from '../components/experience/experience.vue'
import stories from '../components/stories/stories.vue'
import caseStudies from '../components/case-studies/caseStudies.vue'
import clients from '../components/clients/clients.vue'
import contactForm from '../components/forms/contactForm.vue'
import pageBanner from '../components/banner/pageBanner.vue'
import servicesList from '../components/services/servicesList.vue'
import richText from '../components/richText/richText.vue'
import competence from '../components/competence/competence.vue'

/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */
app.component('topNavbar', topNavbar);
app.component('footerComponent', footerComponent);
app.component('headerBanner', headerBanner);
app.component('horizontalCarousel', horizontalCarousel);
app.component('experience', experience);
app.component('stories', stories);
app.component('caseStudies', caseStudies);
app.component('clients', clients);
app.component('contactForm', contactForm);
app.component('pageBanner', pageBanner);
app.component('servicesList', servicesList);
app.component('richText', richText);
app.component('competence', competence);
