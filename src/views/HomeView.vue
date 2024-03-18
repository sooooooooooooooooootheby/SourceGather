<template>
    <div class="home">
        <div class="title">
            <h1>{{ $t("home.title.title1") }}</h1>
            <h2>{{ $t("home.title.title2") }}</h2>
            <p>
                {{ $t("home.title.p1") }}
                <br>
                {{ $t("home.title.p2") }}
                <br>
                {{ $t("home.title.p3") }}
            </p>
        </div>
        <div class="characteristic">
            <ul>
                <li>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-yen1"></use>
                    </svg>
                    <span>100% {{ $t("home.characteristic.li2.span") }}</span>
                    <p>{{ $t("home.characteristic.li2.p") }}</p>
                </li>
                <li>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-AR1"></use>
                    </svg>
                    <span>3 {{ $t("home.characteristic.li3.span") }}</span>
                    <p>{{ $t("home.characteristic.li3.p") }}</p>
                </li>
            </ul>
        </div>
        <div class="technology">
            <p>{{ $t("home.technology") }}</p>
            <ul>
                <li>vue.js</li>
                <li>sass</li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/css/views/HomeView';
</style>