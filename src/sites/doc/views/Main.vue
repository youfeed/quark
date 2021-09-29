<template>
  <doc-header></doc-header>
  <div class="doc-content" :class="themeName()">
    <div class="doc-content-index">

      <div class="content-left">
        <div class="content-title"> Cubeshop </div>
        <div class="content-subTitle">面向未来的原生 Web Components UI组件库（UI library based on Web Components）。</div>
        <div class="content-button">
          <div class="leftButton" @click="toIntro">
            <div class="leftButtonText">开始使用</div>
          </div>
          <div class="rightButton">
            <div class="rightButtonText">扫码体验</div>

            <div class="qrcodepart">
              <div class="qrcode-text"> 请使用手机扫码体验 </div>
              <div class="qrcode"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="doc-content-features">
      <ul class="features-list">
        <li class="features-item">
          <p class="features-title">标准化</p>
          <p class="features-desc a-l">
            Web Components 是 w3c web 标准规范，通过 HTML、CSS、JS 来构建原生组件将会成为未来的前端标准。
          </p>
        </li>

        <li class="features-item">
          <p class="features-title">技术栈无关</p>
          <p class="features-desc a-l">
            输出标准的 Custom Element，组件可以同时在 React、Vue、Preact、Angular 或 原生 JS 等任意框架或无框架中使用。
          </p>
        </li>
        <li class="features-item">
          <p class="features-title">不依赖第三方库或框架</p>
          <p class="features-desc">
            不需要引入第三方的库或者框架的情况下，通过浏览器 API 创建可复用的组件，也可以和任意与 HTML 交互的 JavaScript 库和框架搭配使用。
          </p>
        </li>
      </ul>
    </div>

    <div class="doc-content-features">
      <Intro />
    </div>
  </div>

  <footer className="footer-desc">
    <div>Copyright © 2021 by allan2coder</div>
  </footer>
  

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
import Intro from './intro.md';

export default defineComponent({
  name: 'main',
  components: {
    [Header.name]: Header,
    Intro,
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
.markdown-body pre{
  margin-bottom:  60px;
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

.footer-desc {
  position: fixed;
  width: 100%;
  bottom: 6px;
  display: grid;
  justify-content: center;
  line-height: 40px;
  color: #8b8b8b;
  font-size: 12px;
}


</style>
<style lang="scss" scoped>
.doc-content {
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
      width: 280px;
      text-align: center;
      img {
        width: 100px;
        height: 100px;
        margin-bottom: 20px;
      }
    }
    .features-title {
      margin-bottom: 20px;
      font-size: 20px;
    }
    .features-desc {
      color: #717484;
      font-size: 14px;
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
    background-image: linear-gradient( 
      135deg,#667eea,#764ba2);
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
        width: 150px;
        height: 40px;
        background: #fff;
        border-radius: 29px;
        cursor: pointer;
        .leftButtonText {
          align-self: center;
          margin: auto;
          font-size: 14px;
          color: #333;
        }
        &:hover .leftButtonText{
          color: #667eea;
          opacity: .8;
        }
      }
      .rightButton {
        display: flex;
        position: relative;
        margin-left: 26px;
        width: 150px;
        height: 40px;
        border: 1px solid #b7b7b7;
        border-radius: 29px;
        background-color: #000000;
        cursor: pointer;
        .rightButtonText {
          align-self: center;
          margin: auto;
          font-size: 14px;
          color: #fff;
        }
        &:hover .rightButtonText{
          color: #fafafa;
          opacity: .8;
        }
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
          background: url('../../assets/images/qr.png')
            no-repeat;
          background-size: cover;
        }
      }
    }
  }
}

</style>
