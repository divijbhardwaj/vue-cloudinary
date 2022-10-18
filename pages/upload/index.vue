<template>
  <div class="image-upload-page">
    <button id="upload_widget" class="cloudinary-button">Upload files</button>
  </div>
</template>

<script>
export default {
  head: {
    script: [
      {
        src: 'https://upload-widget.cloudinary.com/global/all.js',
        body: true
      }
    ]
  },
  mounted() {
    if(typeof window !== 'undefined') {
      this.cloudinaryInit();
    }
  },
  methods: {
    cloudinaryInit() {
      var myWidget = cloudinary.createUploadWidget({
        cloudName: 'db7zm1l9y', 
        uploadPreset: 'ooyzz4j4'
      }, (error, result) => { 
        if (!error && result && result.event === "success") { 
          console.log('Done! Here is the image info: ', result.info); 
        }
      })
      document.getElementById("upload_widget").addEventListener("click", function(){ myWidget.open(); }, false);
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
