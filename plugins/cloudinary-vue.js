import Cloudinary from 'cloudinary-vue';
import Vue from 'vue'

Vue.use(Cloudinary, {
  configuration: {
    cloudName: "db7zm1l9y",
    secure: true,
    components: {
      CldImage: true,
      CldTransformation: true
    }
  }
});