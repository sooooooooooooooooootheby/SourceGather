<template>
    <div v-if="ismode" class="windows10Blue">
        <h1>:)</h1>
        <p>{{ $t('windowsBlue.win10Blue.mischief.p1') }}</p>
        <p>{{ $t('windowsBlue.win10Blue.mischief.p2') }}</p>
        <span>{{ num }}% {{ $t('windowsBlue.win10Blue.mischief.span') }}</span>
        <div class="vm">
            <img src="@/components/tool/windowsBlue/blue2vm.png" alt="">
            <div>
                <p>{{ $t('windowsBlue.win10Blue.mischief.p3') }}</p>
                <p>https://www.baidu.com/</p>
                <p>{{ $t('windowsBlue.win10Blue.mischief.p4') }}</p>
                <p>{{ $t('windowsBlue.win10Blue.mischief.p5') }}CTRL SLACK OFF</p>
            </div>
        </div>
    </div>
    <div v-else class="windows10Blue">
        <h1>:(</h1>
        <p>{{ $t('windowsBlue.win10Blue.normal.p1') }}</p>
        <p>{{ $t('windowsBlue.win10Blue.normal.p2') }}</p>
        <span>{{ num }}% {{ $t('windowsBlue.win10Blue.normal.span') }}</span>
        <div class="vm">
            <img src="@/components/tool/windowsBlue/blue2vm.png" alt="">
            <div>
                <p>{{ $t('windowsBlue.win10Blue.normal.p3') }}</p>
                <p>https://www.baidu.com/</p>
                <p>{{ $t('windowsBlue.win10Blue.normal.p4') }}</p>
                <p>{{ $t('windowsBlue.win10Blue.normal.p5') }}CTRL SLACK OFF</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            num: 0,
        }
    },
    props: ['ismode'],
    created() {
        this.startTimer();
    },
    methods: {
        startTimer() {
            setInterval(() => {
                this.num++;
            }, 3000);
        }
    },
}
</script>

<style lang="scss" scoped>
.windows10Blue {
    width: calc(100vw - 400px);
    height: calc(100vh - 360px);
    padding: 180px 200px;
    display: flex;
    flex-direction: column;
    background-color: #1071A7;

    h1,
    span,
    p {
        color: #FFF;
        font-family: "Microsoft Yahei";
    }

    h1 {
        font-size: 180px;
        margin-bottom: 20px;
    }

    span {
        margin: 30px 0;
        font-size: 20px;
    }

    p {
        font-size: 20px;
    }

    img {
        width: 128px;
        height: 128px;
    }

    >div {
        display: flex;
        align-items: center;

        p {
            font-size: 16px;
            line-height: 25px;
            margin-left: 10px;
        }
    }
}
</style>