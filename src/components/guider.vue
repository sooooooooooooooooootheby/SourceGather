<template>
    <header class="headerTop">
        <div class="banner" v-if="banner" ref="banner">
            <span></span>
            <p>{{ message }}</p>
            <svg class="icon" aria-hidden="true" @click="closeBanner">
                <use xlink:href="#icon-close1"></use>
            </svg>
        </div>
        <div class="nav" ref="nav">
            <div class="logo">
                <img src="@/assets/image/logo.jpg" alt="logo">
                <a href="/"><span>SourceGather</span></a>
            </div>
            <div :class="{menuContent: true, showMenuContent: menuContent}">
                <div class="menu">
                    <ul>
                        <li @click="this.menuContent = false">
                            <router-link to="/">
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-home1"></use>
                                </svg>
                                <span>{{ $t('guider.menu.home') }}</span>
                            </router-link>
                        </li>
                        <li @click="this.menuContent = false">
                            <router-link to="/element">
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-AR1"></use>
                                </svg>
                                <span>{{ $t('guider.menu.element') }}</span>
                            </router-link>
                        </li>
                        <li @click="this.menuContent = false">
                            <router-link to="/tool">
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-drill1"></use>
                                </svg>
                                <span>{{ $t('guider.menu.tool') }}</span>
                            </router-link>
                        </li>
                        <li @click="this.menuContent = false">
                            <router-link to="/about">
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-about1"></use>
                                </svg>
                                <span>{{ $t('guider.menu.about') }}</span>
                            </router-link>
                        </li>
                        <li class="Language" @click="toggleLanguageMenu">
                            <span class="LanguageButton">
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-language"></use>
                                </svg>
                                Language
                                <svg :class="{ icon: true, arrow: true, arrowOpen: arrowOpen }" aria-hidden="true">
                                    <use xlink:href="#icon-arrow-forward-simple"></use>
                                </svg>
                            </span>

                            <div
                                :class="{ languageMenu: true, showLanguageMenu: showLanguageMenu, hideLanguageMenu: hideLanguageMenu }">
                                <div @click="this.$i18n.locale = 'en'">
                                    <span>English</span>
                                    <span>🇺🇸</span>
                                </div>
                                <div @click="this.$i18n.locale = 'zh'">
                                    <span>中文</span>
                                    <span>🇨🇳</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="me" @click="togglePanel">
                    <div class="head">
                        <img src="@/assets/image/head.jpg" alt="head">
                        <div></div>
                    </div>
                    <a>Alice Clodia</a>
                </div>
            </div>
            <label class="hamburger">
                <input type="checkbox" v-model="menuContent">
                <svg viewBox="0 0 32 32">
                    <path class="line line-top-bottom"
                        d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22">
                    </path>
                    <path class="line" d="M7 16 27 16"></path>
                </svg>
            </label>
        </div>
    </header>
    <div class="panel" ref="panel" :class="{ showPanel: showPanel, hidePanel: hidePanel }" @click="togglePanel">
        <info @click.prevent="togglePanel" />
    </div>
</template>

<script>
import info from '@/components/info.vue'
export default {
    components: {
        info
    },
    data() {
        return {
            banner: false,
            message: '',
            hidePanel: true,
            showPanel: false,
            hideLanguageMenu: true,
            showLanguageMenu: false,
            arrowOpen: false,
            menuContent: false,
        }
    },
    // 挂载到DOM元素后调用的钩子函数
    mounted() {
        window.addEventListener('scroll', this.headerScroll);
    },
    // 销毁DOM元素前调用的钩子函数
    beforeDestroy() {
        window.removeEventListener('scroll', this.headerScroll);
    },
    methods: {
        togglePanel() {
            this.hidePanel = !this.hidePanel;
            this.showPanel = !this.showPanel;
        },
        toggleLanguageMenu() {
            this.hideLanguageMenu = !this.hideLanguageMenu;
            this.showLanguageMenu = !this.showLanguageMenu;
            this.arrowOpen = !this.arrowOpen;
        },
        headerScroll(event) {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop != 0 && this.message != '') {
                this.$refs.banner.classList.add('bannerNoTop');
                this.$refs.nav.classList.add('navNoTop');
            } else if (scrollTop == 0 && this.message != '') {
                this.$refs.banner.classList.remove('bannerNoTop');
                this.$refs.nav.classList.remove('navNoTop');
            } else if (scrollTop != 0) {
                this.$refs.nav.classList.add('navNoTop');
            } else {
                this.$refs.nav.classList.remove('navNoTop');
            }
        },
        closeBanner() {
            this.message = '';
        }
    },
    computed: {
        banner() {
            return !!this.message;
        }
    },
    created() {
        this.message = this.$t('guider.banner');
    }
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/components/guider';
</style>