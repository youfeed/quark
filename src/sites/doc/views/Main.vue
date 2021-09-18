<template>
  <doc-header></doc-header>
  <div class="doc-content" :class="themeName()">
    <div class="doc-content-index">

      <div class="content-left">
        <div class="content-title"> Cubeshop </div>
        <div class="content-subTitle">面向未来的原生 web components UI组件库（UI library based on web components）。</div>
        
        <div class="content-button">
          <div class="leftButton" @click="toIntro">
            <div class="leftButtonText">开始使用</div>
          </div>
          <div class="rightButton">
            <div class="rightButtonText">扫码体验</div>

            <div class="qrcodepart">
              <div class="qrcode-text"> 请使用手机扫码体验 </div>
              <div class="qrcode">TODO</div>
            </div>
          </div>

          <!-- github star img -->
          <iframe
            style="margin-left: 20px"
            src="https://ghbtns.com/github-btn.html?user=allan2coder&repo=cubeshop&type=star&count=true&size=large"
            frameborder="0"
            scrolling="0"
            width="170"
            height="30"
            title="GitHub"
          ></iframe>
        </div>
      </div>
    </div>

    <div class="doc-content-features">
      <div class="doc-content-hd">
        <h4 class="doc-content-title">特色</h4>
      </div>
      <ul class="features-list">
        <li class="features-item">
          <p class="features-title">技术栈无关</p>
          <p class="features-desc a-l">Vue、React、Angular皆可使用</p>
        </li>
        <li class="features-item">
          <p class="features-title">组件丰富</p>
          <p class="features-desc a-l">提供 n+ 组件，覆盖绝大多数业务场景</p>
        </li>
        <li class="features-item">
          <p class="features-title">前沿技术</p>
          <p class="features-desc">Web componments</p>
        </li>
      </ul>
    </div>
  </div>
  

</template>
<script lang="ts">
import {
  defineComponent,
  reactive,
  toRefs,
  computed,
} from 'vue';
import Header from '@/sites/doc/components/Header.vue';
import router from '../router';
import { RefData } from '@/sites/assets/util/ref';

export default defineComponent({
  name: 'main',
  components: {
    [Header.name]: Header
  },
  setup() {
    const data = reactive({
      articleList: new Array(),
      casesImages: new Array(),
      currentCaseItem: {},
      currentCaseIndex: 0,
      localTheme: localStorage.getItem('csui-theme-color'),
      showAwait: false
    });
    
    const goAwait = () => {
      data.showAwait = true;
    };

    const hideAwait = () => {
      data.showAwait = false;
    };

    const themeName = computed(() => {
      return function () {
        return `doc-content-${RefData.getInstance().themeColor.value}`;
      };
    });

    const themeNameValue = computed(() => {
      return function () {
        return RefData.getInstance().themeColor.value;
      };
    });

    function toIntro() {
      router.push({ path: '/intro' });
    }
    
    const toDetail = () => {
      window.open('/cat');
    };

    return {
      toIntro,
      ...toRefs(data),
      themeName,
      themeNameValue,
      toDetail,
      goAwait,
      hideAwait
    };
  }
});
</script>
<style lang="scss">
@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
.doc-content-index {
  .content-left {
    .content-title {
      animation: fadeInLeft 1s both;
    }
    .content-subTitle {
      animation: fadeInLeft 1s both 0.5s;
    }
    .content-button {
      iframe {
        animation: fadeInLeft 1s both 1.2s;
      }
      .leftButton {
        animation: fadeInLeft 1s both 1.2s;
      }
      .rightButton {
        animation: fadeInLeft 1s both 1.2s;
      }
    }
  }
}
</style>
<style lang="scss" scoped>
.doc-content {
  &-hd {
    height: 52px;
    line-height: 52px;
    margin-bottom: 50px;
    text-align: center;
    position: relative;
    .sub-more {
      position: absolute;
      right: 0;
      font-size: 14px;
      color: $theme-red;
    }
  }
  &-title {
    display: inline-block;
    font-size: 26px;
  }
  &-features {
    width: 1200px;
    margin: 0 auto 90px;
    .features-list {
      display: flex;
      justify-content: space-between;
      margin-top: 50px;
    }
    .features-item {
      width: 198px;
      text-align: center;
      img {
        width: 100px;
        height: 100px;
        margin-bottom: 20px;
      }
    }
    .features-title {
      margin-bottom: 20px;
      font-size: 24px;
    }
    .features-desc {
      font-size: 14px;
      line-height: 18px;
    }
  }
  &-catmarketing {
    width: 1200px;
    margin: 0 auto 90px;

    &-content {
      display: flex;
    }

    .cat-content,
    .marketing-content {
      display: flex;
      width: 585px;
      height: 270px;
      background: linear-gradient(
        130.16deg,
        rgba(249, 188, 203, 1) 0%,
        rgba(247, 239, 247, 1) 26.666302447552447%,
        rgba(241, 240, 246, 1) 66.69307255244755%,
        rgba(180, 228, 228, 1) 100%
      );
      border-radius: 4px 4px 4px 0 4px;
      margin-left: 44px;
    }
    .cat-content,
    .marketing-content {
      margin-left: 0px;
      display: flex;
      align-items: center;
      &-left {
        height: 182px;
        width: 270px;
        margin-left: 14px;
        img {
          height: 100%;
          width: 100%;
        }
      }
      &-right {
        height: 182px;
        width: 233px;
        margin-left: 37px;
        font-family: PingFangSC;
        font-weight: normal;
        padding-top: 11px;
        box-sizing: border-box;
        &-title {
          img {
            height: 46px;
            width: 177px;
          }
        }
        &-desc {
          margin-top: 26px;
          font-size: 18px;
          color: rgba(51, 51, 51, 1);
        }
        &-godetail {
          width: 130px;
          height: 35px;
          margin-top: 24px;
          line-height: 35px;
          text-align: center;
          font-size: 19px;
          cursor: pointer;
          color: #333;
          background: linear-gradient(
            135deg,
            rgba(255, 28, 101, 1) 0%,
            rgba(255, 133, 202, 1) 67.83430752051981%,
            rgba(255, 142, 155, 1) 87.35307751528254%,
            rgba(255, 169, 151, 1) 100%
          );
          border-radius: 17px;
        }
      }
    }
    .marketing-content {
      position: relative;
      margin-left: 44px;
      background: linear-gradient(
        130.16deg,
        rgba(219, 210, 255, 1) 0%,
        rgba(247, 239, 247, 1) 26.666302447552447%,
        rgba(241, 240, 246, 1) 66.69307255244755%,
        rgba(255, 236, 203, 1) 100%
      );
      &-left {
        height: 196px;
        width: 243px;
        margin-left: 28px;
      }
      &-right {
        height: 196px;
        padding-top: 20px;
        &-godetail {
          background: linear-gradient(
            135deg,
            rgba(114, 60, 255, 1) 0%,
            rgba(111, 58, 255, 1) 63.49938195167575%,
            rgba(150, 110, 255, 1) 87.35307751528254%,
            rgba(149, 117, 241, 1) 100%
          );
        }
      }
      &-mask {
        position: absolute;
        top: 0px;
        left: 0px;
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, 0.52);
        border-radius: 4px 4px 4px 0 4px;
        text-align: center;
        line-height: 270px;
        font-size: 30px;
        color: #ffffff;
      }
    }
  }
}
.doc-content-index {
  display: flex;
  height: 700px;
  margin-bottom: 70px;
  min-width: 1200px;
  background: #f5f5f5;
  .content-left {
    padding: 15% 0 0 8.8%;
    flex: 1;
    min-width: 550px;
    background: #000;
    .content-title {
      font-size: 42px;
      color: #fff;
    }
    .content-subTitle {
      margin-top: 12px;
      font-size: 20px;
      color: #fff;
    }
    .content-button {
      position: relative;
      display: flex;
      margin-top: 40px;
      iframe {
        align-self: center;
      }
      .leftButton {
        display: flex;
        .leftButtonText {
          align-self: center;
          margin: auto;
          font-size: 14px;
          color: #fff;
        }
        width: 150px;
        height: 40px;
        background: linear-gradient(
          135deg,
          rgba(250, 25, 44, 1) 0%,
          rgba(250, 39, 40, 1) 45%,
          rgba(250, 56, 31, 1) 83%,
          rgba(250, 63, 25, 1) 100%
        );
        border-radius: 29px;
        cursor: pointer;
      }
      .rightButton {
        display: flex;
        position: relative;
        .rightButtonText {
          align-self: center;
          margin: auto;
          font-size: 14px;
          color: #fff;
        }
        margin-left: 26px;
        width: 150px;
        height: 40px;
        border: 1px solid #fff;
        border-radius: 29px;
        background-color: #000000;
        cursor: pointer;
        &:hover {
          .qrcodepart {
            display: block;
          }
        }
      }
      .qrcodepart {
        display: none;
        position: absolute;
        right: -10px;
        top: 50px;
        padding: 4px;
        width: 166px;
        border-radius: 6px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.11);
        .qrcode-text {
          font-size: 14px;
          color: rgba(51, 51, 51, 1);
          text-align: center;
        }
        .qrcode {
          width: 160px;
          height: 160px;
          margin: 0 auto;
          background: url('')
            no-repeat;
          background-size: cover;
        }
      }
    }
  }
}

</style>
