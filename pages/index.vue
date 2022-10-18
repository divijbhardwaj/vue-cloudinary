<template>
  <div class="index-page">
    <template v-for="(data, i) in images">
      <template v-if="data.context">
        <cld-context :key="i" v-bind="data.context">
          <cld-image v-if="data.image" v-bind="data.image">
            <template v-if="data.trans">
              <cld-transformation v-for="(t, i) in data.trans" :key="i" v-bind="t" />
            </template>
            
            <template v-if="data.placeHolder">
              <cld-placeholder v-bind="data.placeHolder" />
            </template>
          </cld-image>
        </cld-context>
      </template>

      <template v-else>
        <cld-image :key="i" v-bind="data.image">
          <template v-if="data.trans">
            <cld-transformation v-for="(t, i) in data.trans" :key="i" v-bind="t" />
          </template>
          <template v-if="data.placeHolder">
            <cld-placeholder v-bind="data.placeHolder" />
          </template>
        </cld-image>
      </template>
    </template>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
    }
  },
  computed: {
    images: () => [
      {
        context: {
          context: 'demo',
          secure: true
        },
        image: {
          publicId: 'sample',
          loading: 'lazy'
        },
        trans: [
          {
            width: "250",
            height: "250",
            crop: "fill",
            radius: "max"
          },
          {
            fetchFormat: "auto"
          },
          {
            quality: "auto", 
            fetchFormat: "auto"
          }
        ],
        placeHolder: {
          type: 'vectorize'
        }
      },
      {
        context: {
          context: 'demo',
          secure: true
        },
        image: {
          publicId: 'cld-sample-5',
          loading: 'lazy'
        },
        trans: [
          {
            width: "250",
            height: "250",
            crop: "fill",
            angle: "20"
          },
          {
            effect: "cartoonify"
          },
          {
            fetchFormat: "auto"
          }
        ],
        placeHolder: {
          type: 'vectorize'
        }
      },
      {
        context: {
          context: 'demo',
          secure: true
        },
        image: {
          publicId: 'cld-sample-4',
          loading: 'lazy'
        },
        trans: [
          {
            width: "250",
            height: "250",
            crop: "fill"
          },
          {
            fetchFormat: "auto"
          }
        ],
        placeHolder: {
          type: 'vectorize'
        }
      },
      {
        context: {
          context: 'demo',
          secure: true
        },
        image: {
          publicId: 'cld-sample-3',
          loading: 'lazy'
        },
        trans: [
          {
            width: "250",
            height: "250",
            crop: "fill"
          },
          {
            fetchFormat: "auto"
          }
        ],
        placeHolder: {
          type: 'vectorize'
        }
      },
      {
        context: {
          context: 'demo',
          secure: true
        },
        image: {
          publicId: 'cld-sample-2',
          loading: 'lazy'
        },
        trans: [
          {
            width: "250",
            height: "250",
            crop: "fill"
          },
          {
            fetchFormat: "auto"
          }
        ],
        placeHolder: {
          type: 'vectorize'
        }
      },
      {
        context: {
          context: 'demo',
          secure: true
        },
        image: {
          publicId: 'cld-sample',
          loading: 'lazy'
        },
        trans: [
          {
            width: "250",
            height: "250",
            crop: "fill"
          },
          {
            fetchFormat: "auto"
          }
        ],
        placeHolder: {
          type: 'vectorize'
        }
      },
      {
        image: {
          publicId: 'wj5bhrc8nmqaca9lvczr',
          loading: 'lazy'
        },
        trans: [
          {
            width: "600",
            height: "250",
            crop: "fill"
          }
        ],
        placeHolder: {
          type: 'vectorize'
        }
      }
    ]
  }
}
</script>
