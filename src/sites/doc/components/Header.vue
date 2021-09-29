<template>
  <div class="doc-header" :class="themeName()">
    
    <div class="header-logo">
      <a class="logo-link" href="#" @click="toHome"></a>
      <span class="logo-border"></span>
    </div>

    <div class="header-nav">
      <Search />

      <div class="nav-box">
        <ul class="nav-list">
          <li
            class="nav-item"
            v-for="item in header"
            :key="item.name"
            :class="{ active: isActive(item.name) }"
          >
            <a :href="item.path">
              {{ item.cName }}
            </a>
          </li>

          <li class="nav-item">
            <a
              class="user-link"
              target="_blank"
              href="https://gitlab.hellobike.cn/Yorozuya/cubeshop"
            >
              Github
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="__dumi-default-external-link-icon"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path><polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg>
            </a>
          </li>

          <li class="nav-item">
            <div
              @focus="handleFocus"
              @focusout="handleFocusOut"
              tabindex="0"
              class="header-select-box"
              @click.stop="data.isShowSelect = !data.isShowSelect"
              :class="[data.isShowSelect == true ? 'select-up' : 'select-down']"
            >
              <div class="header-select-hd"
                >{{ data.verson }}<i class=""></i
              ></div>
              <transition name="fade">
                <div class="header-select-bd" v-show="data.isShowSelect">
                  <div
                    class="header-select-item"
                    v-for="(item, index) in versions"
                    :key="index"
                    @click.stop="checkTheme(item)"
                    :class="{ active: data.activeIndex === index }"
                  >
                    {{ item.name }}
                  </div>
                </div>
              </transition>
            </div>
          </li>
          
          <li class="nav-item">
            <dark-mode class="dark-btn"></dark-mode> 
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, computed } from 'vue';
import Search from './Search.vue';
import { header, versions, nav } from '@/config.json';
import { version } from '/package.json';
import { RefData } from '@/sites/assets/util/ref';

export default defineComponent({
  name: 'doc-header',
  components: {
    Search
  },
  setup() {
    let packages = [] as any[];
    nav.forEach((item) => {
      packages.push(...item.packages);
    });

    const data = reactive({
      theme: 'black',
      verson: '1.x',
      navIndex: 0,
      activeIndex: 0,
      isShowSelect: false
    });

    const handleFocus = () => {
      console.log(1);
    };

    const handleFocusOut = () => {
      data.isShowSelect = false;
    };

    const toHome = () => {
      RefData.getInstance().currentRoute.value = '/';
    };

    const isActive = computed(() => {
      let value = RefData.getInstance().currentRoute.value;
      return function (name: string) {
        const lName = name.toLowerCase();
        if (lName === 'component') {
          return (
            packages.findIndex((item) => item.name.toLowerCase() === value) > -1
          );
        } else {
          return value === lName || lName.includes(value);
        }
      };
    });
    const themeName = computed(() => {
      return function () {
        return `doc-header-${RefData.getInstance().themeColor.value}`;
      };
    });
    const checkTheme = (item: any, index: number) => {
      data.isShowSelect = false;
      data.activeIndex = index;
      data.verson = item.name;
      window.location.href = item.link;
    };
    return {
      header,
      versions,
      version,
      data,
      toHome,
      isActive,
      checkTheme,
      themeName,
      handleFocus,
      handleFocusOut
    };
  }
});
</script>

<style lang="scss">
.doc {
  &-header {
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    right: 0;
    min-width: 1300px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: $doc-header-height;
    line-height: $doc-header-height;
    text-align: left;
    padding: 0 50px;
    font-size: 20px;
  }
}
.dark-btn{
  display: inline-block;
  vertical-align: middle;
}
.header {
  &-logo {
    position: relative;
    display: inline-block;
    width: 100px;
    height: 64px;
    .logo-link {
      width: 120px;
      height: 46px;
      vertical-align: middle;
      position: absolute;
      top: 50%;
      margin-top: -23px;
      color: #fff;
      background: url('../../assets/images/logo-white.png') no-repeat;
      background-size: 45px;
    }
    .logo-border {
      width: 1px;
      height: 26px;
      position: absolute;
      right: 0;
      top: 50%;
      margin-top: -13px;
      background: #fafafa;
    }
    .version {
      position: absolute;
      right: 76px;
      font-size: 14px;
    }
  }
  &-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    float: right;
    width: calc(100% - 122px);
    min-width: 900px;
    padding: 0 40px;
    .nav-box {
      .nav-list {
        display: flex;
        list-style: none;
        align-items: center;
        justify-content: space-around;
      }
      .nav-item {
        position: relative;
        margin-right: 30px;
        font-size: 14px;
        text-align: center;
        cursor: pointer;
        &.active {
          font-weight: bold;
        }
        &:last-of-type {
          margin-right: 0;
        }
      }
      .user-link {
        display: flex;
        align-items: center;
        svg{
          margin-left: 6px;
        }
      }
    }
  }
}
.header-select {
  &-box {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    outline: 0;
  }
  &-hd {
    min-width: 77px;
    height: 28px;
    padding: 0 30px 0 15px;
    line-height: 26px;
    font-size: 14px;
    color: $theme-red-word;
    background-position: right 15px top 12px;
    background-size: 8px 5px;
    background-repeat: no-repeat;
    border-radius: 14px;
  }
  &-bd {
    position: absolute;
    top: 30px;
    left: 50%;
    margin-left: -60px;
    border-radius: 3px;
    overflow: hidden;
  }
  &-item {
    width: 120px;
    height: 28px;
    padding: 0 12px;
    line-height: 26px;
    font-size: 14px;
    border-width: 0px 1px 1px;
    border-style: solid;
    cursor: pointer;
    &:first-of-type {
      border-top-width: 1px;
    }
  }
}
// 颜色
.doc-header {
  // 白色
  &-white {
    background: $white;
    color: $theme-white-word;
    border-bottom: 1px solid $theme-white-box-border;
    .header {
      &-logo {
        .logo-link {
            background: url(/cubeshop/src/sites/assets/images/logo.png) no-repeat center;
            background-size: 35%;
        }
        .logo-border {
          background: $theme-white-border;
        }
      }
      &-nav {
        .search-box {
          .search-input {
            color: $theme-white-word;
            background-position: 0;
            &::-webkit-input-placeholder {
              color: $theme-white-input;
            }
          }
        }
        .nav-box {
          .nav-item {
            color: $theme-white-word;
            a {
              color: $theme-white-word;
            }
            &.active {
              color: $theme-white-actice;
              &:after {
                background-position: 0 -13px;
              }
              a {
                color: $theme-white-actice;
              }
            }
          }
          .user-link:hover{
            color: #7060bf;
          }
        }
      }
    }
    .header-select {
      &-box {
        &.select-down {
          .header-select-hd {
            background-image: url('../../assets/images/icon-select-gray-down.png');
          }
        }
        &.select-up {
          .header-select-hd {
            background-image: url('../../assets/images/icon-select-gray-up.png');
          }
        }
      }
      &-hd {
        color: $theme-white-select-word;
        border: 1px solid $theme-white-select-border;
      }
      &-bd {
        color: $theme-white-select-word;
      }
      &-item {
        border-color: $theme-white-select-border;
        background-color: $theme-white-select-bg;
        &:hover {
          color: $theme-white-actice;
        }
      }
    }
  }
}
// 下拉列表选择动画效果
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
