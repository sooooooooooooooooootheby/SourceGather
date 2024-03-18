<template>
    <div v-if="ismode" class="windows10Update" ref="update">
        <div style="--size: 64px; --dot-size: 6px; --dot-count: 6; --color: #fff; --speed: 1s; --spread: 60deg;"
            class="dots">
            <div style="--i: 0;" class="dot"></div>
            <div style="--i: 1;" class="dot"></div>
            <div style="--i: 2;" class="dot"></div>
            <div style="--i: 3;" class="dot"></div>
            <div style="--i: 4;" class="dot"></div>
            <div style="--i: 5;" class="dot"></div>
        </div>
        <p>{{ $t('windowsBlue.win10Update.mischief.p1') }}</p>
        <p>{{ $t('windowsBlue.win10Update.mischief.p2') }}<span>{{ num }}%</span></p>
        <p @click="showCard">{{ text }}</p>
    </div>
    <div v-else class="windows10Update" ref="update">
        <div style="--size: 64px; --dot-size: 6px; --dot-count: 6; --color: #fff; --speed: 1s; --spread: 60deg;"
            class="dots">
            <div style="--i: 0;" class="dot"></div>
            <div style="--i: 1;" class="dot"></div>
            <div style="--i: 2;" class="dot"></div>
            <div style="--i: 3;" class="dot"></div>
            <div style="--i: 4;" class="dot"></div>
            <div style="--i: 5;" class="dot"></div>
        </div>
        <p>{{ $t('windowsBlue.win10Update.normal.p1') }}</p>
        <p>{{ $t('windowsBlue.win10Update.normal.p2') }}<span>{{ num1 }}%</span></p>
        <p>{{ $t('windowsBlue.win10Update.normal.p3') }}</p>
    </div>

    <div class="card" v-if="card">
        <div class="red">
            <div class="redhead"></div>
            <div class="redopen" @click="showerr">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-share1"></use>
                </svg>
            </div>
        </div>
        <div class="text">
            <p>{{ $t('windowsBlue.win10Update.mischief.card.p1') }}</p>
            <p>{{ $t('windowsBlue.win10Update.mischief.card.p2') }}</p>
        </div>
        <div class="window" v-if="window">
            <p>{{ $t('windowsBlue.win10Update.mischief.card.p3') }}</p>
            <div class="button">
                <div @click="yes">{{ $t('windowsBlue.win10Update.mischief.card.div1') }}</div>
                <div @click="no">{{ $t('windowsBlue.win10Update.mischief.card.div2') }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            num: 98,
            num1: 0,
            text: this.$t('windowsBlue.win10Update.normal.p3'),
            card: false,
            window: false,
        }
    },
    props: ['ismode'],
    created() {
        this.startTimer();
    },
    methods: {
        showerr() {
            this.window = true;
        },
        yes() {
            window.location.reload();
        },
        no() {
            this.window = false;
        },
        showCard() {
            this.card = true;
        },
        startTimer() {
            setInterval(() => {
                this.num1++;
                if (this.num <= 98) {
                    this.num++;
                } else {
                    this.text = this.$t('windowsBlue.win10Update.mischief.p4');
                    this.$refs.update.style.cursor = 'auto';
                    if (this.num >= '99.9') {
                        this.num += '9';
                    } else {
                        this.num += '.9';
                    }
                }
            }, 3000);
        }
    }
}
</script>

<style lang="scss" scoped>
.windows10Update {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #005A9E;
    color: #FFF;
    font-family: "Microsoft Yahei";
    font-size: 18px;
    line-height: 22px;
    cursor: none;

    span {
        margin: 0 5px;
    }
}

.card {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.3);
    position: absolute;
    top: 0;
    left: 0;
    color: #FBC28D;

    .text {
        position: absolute;
        margin-top: 90px;
        animation-duration: 1s;
        animation-name: text;
        animation-iteration-count: infinite;

        p {
            line-height: 40px;
            font-size: 25px;
            text-align: center;
        }
    }

    @keyframes text {
        0% {
            transform: scale(1);
        }

        50% {
            transform: scale(1.3);
        }

        100% {
            transform: scale(1);
        }
    }

    .window {
        width: 240px;
        height: auto;
        background-color: #FFF;
        border-radius: 10px;
        position: absolute;
        color: #333;

        p {
            text-align: center;
            padding: 20px;
            border-bottom: 1px solid #333;
        }

        .button {
            display: flex;

            div {
                width: 130px;
                height: 48px;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
            }
        }
    }

    .red {
        width: 300px;
        height: 400px;
        background-image: linear-gradient(to right, #eb4141, #e43b3c, #de3438, #d72d33, #d1252f, #d1252f, #d1252f, #d1252f, #d72d33, #de3438, #e43b3c, #eb4141);
        border-radius: 20px;
        overflow: hidden;

        .redhead {
            width: 300px;
            height: 200px;
            background-image: linear-gradient(to right, #ffebcc, #fee8c7, #fee4c3, #fde1be, #fdddba, #fdddba, #fdddba, #fdddba, #fde1be, #fee4c3, #fee8c7, #ffebcc);
            border-radius: 600px;
            position: relative;
            top: -100px;
        }

        .redopen {
            width: 100px;
            height: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #FBC28D;
            border-radius: 100px;
            position: relative;
            top: -150px;
            left: 100px;

            svg {
                width: 60px;
                height: 60px;
                color: #3C3C43;
            }
        }
    }
}

.dots {
    width: var(--size);
    height: var(--size);
    position: relative;
    margin-bottom: 20px;
}

.dot {
    width: var(--size);
    height: var(--size);
    animation: dwl-dot-spin calc(var(--speed) * 5) infinite linear both;
    animation-delay: calc(var(--i) * var(--speed) / (var(--dot-count) + 2) * -1);
    rotate: calc(var(--i) * var(--spread) / (var(--dot-count) - 1));
    position: absolute;
}

.dot::before {
    content: "";
    display: block;
    width: var(--dot-size);
    height: var(--dot-size);
    background-color: var(--color);
    border-radius: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    bottom: 0;
    left: 50%;
}

@keyframes dwl-dot-spin {
    0% {
        transform: rotate(0deg);
        animation-timing-function: cubic-bezier(0.390, 0.575, 0.565, 1.000);
        opacity: 1;
    }

    2% {
        transform: rotate(20deg);
        animation-timing-function: linear;
        opacity: 1;
    }

    30% {
        transform: rotate(180deg);
        animation-timing-function: cubic-bezier(0.445, 0.050, 0.550, 0.950);
        opacity: 1;
    }

    41% {
        transform: rotate(380deg);
        animation-timing-function: linear;
        opacity: 1;
    }

    69% {
        transform: rotate(520deg);
        animation-timing-function: cubic-bezier(0.445, 0.050, 0.550, 0.950);
        opacity: 1;
    }

    76% {
        opacity: 1;
    }

    76.1% {
        opacity: 0;
    }

    80% {
        transform: rotate(720deg);
    }

    100% {
        opacity: 0;
    }
}
</style>