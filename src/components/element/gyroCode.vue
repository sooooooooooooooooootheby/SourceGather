<template>
    <div class="box">
        <div class="element">
            <div class="codeBox">
                <h3>{{ $t('gyroCode.codeBox.h3') }}</h3>
                <div class="text" ref="text">{{ text }}</div>
                <div>
                    <button class="button" @click="confirm">{{ $t('gyroCode.codeBox.button1') }}</button>
                    <button class="button" @click="recover">{{ $t('gyroCode.codeBox.button2') }}</button>
                    <button class="button" @click="allowOrientation">{{ $t('gyroCode.codeBox.button3') }}</button>
                </div>
            </div>
            <div class="codeConsole">
                <div>
                    <p>{{ $t('gyroCode.console.p1') }}</p>
                    <button class="button" @click="createCode">{{ $t('gyroCode.console.button1') }}</button>
                    <p>{{ $t('gyroCode.console.p2') }}: {{ randomCode }}</p>
                    <p>{{ $t('gyroCode.console.p3') }}</p>
                    <button class="button" @click="verify">{{ $t('gyroCode.console.button2') }}</button>
                    <p>{{ $t('gyroCode.console.p4') }}: {{ verification }}</p>
                </div>
                <br>
                <div>
                    <p>{{ $t('gyroCode.console.p5') }}</p>
                    <ul>
                        <li>Alpha: {{ X }}</li>
                        <li>Beta: {{ Y }}</li>
                        <li>Gamma: {{ Z }}</li>
                    </ul>
                </div>
            </div>
        </div>
        <a href="https://www.123pan.com/s/iTK6Vv-Eddwh.html" target="_blank">
            <div class="download">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-cloud-download1"></use>
                </svg>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            text: 0,
            X: 0,
            Y: 0,
            Z: 0,
            randomCode: 0,
            verification: false,
        };
    },
    methods: {
        // 检查并请求陀螺仪权限的函数
        async allowOrientation() {
            let flag;
            if (typeof DeviceOrientationEvent.requestPermission === 'function') {
                try {
                    await DeviceOrientationEvent.requestPermission().then(
                        (permissionState) => {
                            flag = permissionState === 'granted';
                        }
                    );
                } catch (e) {
                    flag = false;
                }
            } else {
                flag = true;
            }
            if (flag) {
                alert('陀螺仪权限获取成功，功能正常使用');
            } else {
                alert('陀螺仪权限获取失败，功能无法使用');
            };
        },
        // 处理陀螺仪更新的函数
        updateGravity(event) {
            this.X = Math.floor(event.alpha);
            this.Y = Math.floor(event.beta);
            this.Z = Math.floor(event.gamma);
            // 计算验证码
            this.text = this.X * this.Y * this.Z;
        },
        // 生成验证码
        createCode() {
            let random = Math.random();
            this.randomCode = Math.floor(random * 5703299) - 2851649
            console.log(this.randomCode);
        },
        //确认当前输入验证码
        confirm() {
            window.removeEventListener("deviceorientation", this.updateGravity, false);
        },
        //重新输入验证码
        recover() {
            this.text = 0;
            window.addEventListener("deviceorientation", this.updateGravity, false);
        },
        // 验证验证码
        verify() {
            const error = 0.0001;
            let text = Math.floor(this.code * error);
            let randomCode = Math.floor(this.randomCode * error);
            if (text == randomCode) {
                this.verification = true
            }
        }
    },
    mounted() {
        // 监听 window 的 deviceorientation 事件
        window.addEventListener("deviceorientation", this.updateGravity, false);
    },
};
</script>

<style lang="scss" scoped>
.box {
    max-width: 1200px;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

.download {
    width: 48px;
    height: 48px;
    position: absolute;
    right: 30px;
    bottom: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    background-color: #839476;
    border: 2px solid #3C3C43;
    transition: 0.3s;

    svg {
        width: 24px;
        height: 24px;
        color: #3C3C43;
    }
}

.download:hover {
    transform: scale(1.2);
}

.element {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    >div {
        margin: 10px;
    }

    .codeBox {
        width: 420px;
        height: 200px;
        padding: 20px;
        background-color: #FFFFFF;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #3C3C43;

        .text {
            margin: 20px;
            padding: 8px 20px;
            border: 2px solid #3C3C43C7;
            border-radius: 20px;
            font-size: 25px;
        }

        .button {
            padding: 5px;
            margin: 2px 5px;
            padding: 10px 15px;
            border: none;
            background-color: #839476;
            border-radius: 10px;
            color: aliceblue;
            transition: 0.3s;
        }

        .button:hover {
            background-color: #3C3C43;
        }
    }

    .codeConsole {
        width: 420px;
        height: auto;
        margin: 30px 0px;
        padding: 10px 20px;

        background-color: #FFFFFF;
        border-radius: 10px;
        color: #3c3c43;

        p {
            line-height: 20px;
        }

        .button {
            padding: 10px 15px;
            background-color: #839476;
            border: none;
            border-radius: 10px;
            color: aliceblue;
            transition: all 0.2s;
        }

        .button:hover {
            background-color: #3C3C43;
        }

        div {
            ul {
                li {
                    list-style: none;
                }
            }
        }
    }
}

@media screen and (max-width: 430px) {
    .element {
        .codeBox {
            width: calc(90vw - 40px);
        }

        .codeConsole {
            width: calc(90vw - 40px);
        }
    }
}
</style>