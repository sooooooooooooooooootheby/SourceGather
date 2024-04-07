<template>
    <div class="box">
        <div class="element">
            <ul ref="ul">
                <li v-for="item in items" :key="item.id" :id="item.font" @mouseenter="mouseOver($event)" @mouseleave="mouseOut($event)">
                    <span class="fontBG" id="fontBG">
                        {{ item.BGColor }}
                    </span>

                    <div :class="item.font" class="font">
                        <p v-for="p in item.p" :key="p.id">
                            {{ p }}
                        </p>
                    </div>

                    <div class="fontName" id="fontName">
                        <p>{{ item.name }}</p>
                        |
                        <span v-for="span in item.span" :key="span.id">
                            {{ span }}
                        </span>
                        |
                        <a v-if="item.github" :href="item.github" target="_blank">Github</a>
                        <a v-if="item.zttx" :href="item.zttx" target="_blank">字体天下</a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    BGColor: "null",
                    font: "SourceHanSands",
                    p: ["昨夜雨疏风骤，浓睡不消残酒。", "试问卷帘人，却道海棠依旧。", "知否，知否？应是绿肥红瘦。"],
                    name: "思源黑体(SourceHanSands)",
                    span: ["ExtraLight", "Light", "Normal", "Regular", "☀ Medium", "Bold", "Heavy"],
                    github: "https://github.com/adobe-fonts/source-han-sans",
                },
                {
                    BGColor: "null",
                    font: "SourceHanSerif",
                    p: ["山重水复疑无路，柳暗花明又一村。"],
                    name: "思源宋体(SourceHanSerif)",
                    span: ["ExtraLight", "Light", "Normal", "Regular", "☀ Medium", "Bold", "Heavy"],
                    github: "https://github.com/adobe-fonts/source-han-serif/tree/master",
                },
                {
                    BGColor: "null",
                    font: "jf-openhuninn",
                    p: ["落霞与孤鹜齐飞，秋水共长天一色"],
                    name: "open 粉圆(jf-openhuninn-2.0)",
                    span: [],
                    github: "https://github.com/justfont/open-huninn-font",
                },
                {
                    BGColor: "null",
                    font: "SarasaFixedSlabSC",
                    p: ["明月几时有？把酒问青天。", "不知天上宫阙，今夕是何年。", "我欲乘风归去，又恐琼楼玉宇，高处不胜寒。", "起舞弄清影，何似在人间。"],
                    name: "更纱黑体(Sarasa Gothic)",
                    span: ["ExtraLight", "Light", "Normal", "☀ Regular", "Bold", "SemiBold"],
                    github: "https://github.com/be5invis/Sarasa-Gothic",
                },
                {
                    BGColor: "null",
                    font: "seto",
                    p: ["亂花漸欲迷人眼，淺草才能沒馬蹄。", "最愛湖東行不足，綠楊陰裏白沙堤。"],
                    name: "濑户字体(Seto)",
                    span: [],
                    zttx: "https://www.fonts.net.cn/font-32756412228.html",
                },
                {
                    BGColor: "null",
                    font: "intelone",
                    p: ["You need people like me so you can point your fingers and say,", "'That's the bad guy.'", "So say goodnight to the bad guy!"],
                    name: "Intelone",
                    span: ["light", "lightitalic", "regular", "italic", "☀ medium", "mediumitalic", "bold", "bolditalic"],
                    github: "https://github.com/intel/intel-one-mono",
                },
            ],
        };
    },
    methods: {
        // li随机背景色，并修改颜色显示
        randomBG() {
            const listItems = this.$refs.ul.querySelectorAll("li");
            let listItemsArray = Array.from(listItems);

            listItemsArray.forEach((item, index) => {
                let className = "liBG" + Math.floor(Math.random() * 12);
                item.classList.add(className);
                setTimeout(() => {
                    let computedStyle = window.getComputedStyle(item);
                    let backgroundColor = computedStyle.getPropertyValue("background-color");

                    this.items[index].BGColor = backgroundColor.toUpperCase();
                }, 0);
            });
        },
        mouseOver(event) {
            const itemId = event.currentTarget.getAttribute("id");
            const li = document.getElementById(itemId);
            const fontBG = li.querySelector("#fontBG");
            const fontName = li.querySelector("#fontName");
            fontBG.style.opacity = 1;
            fontName.style.opacity = 1;
        },
        mouseOut(event) {
            const itemId = event.currentTarget.getAttribute("id");
            const li = document.getElementById(itemId);
            const fontBG = li.querySelector("#fontBG");
            const fontName = li.querySelector("#fontName");
            fontBG.style.opacity = 0;
            fontName.style.opacity = 0;
        },
    },
    mounted() {
        this.randomBG();
    },
};
</script>

<style lang="scss" scoped>
@font-face {
    font-family: SourceHanSands;
    src: url("@/assets/font/fontVue/SourceHanSansCN-Medium.otf");
}
@font-face {
    font-family: SourceHanSerif;
    src: url("@/assets/font/fontVue/SourceHanSerifCN-Medium.otf");
}
@font-face {
    font-family: jf-openhuninn;
    src: url("@/assets/font/fontVue/jf-openhuninn-2.0.ttf");
}
@font-face {
    font-family: SarasaFixedSlabSC;
    src: url("@/assets/font/fontVue/SarasaFixedSlabSC-Regular.ttf");
}
@font-face {
    font-family: seto;
    src: url("@/assets/font/fontVue/seto.ttf");
}
@font-face {
    font-family: intelone;
    src: url("@/assets/font/fontVue/intelone-mono-font-family-medium.ttf");
}
.box {
    max-width: 1600px;
    margin: 0 auto;
    padding-top: 110px;
    .element {
        width: 100%;
        margin: 30px 0;
        ul {
            display: flex;
            flex-direction: column;
            li {
                margin: 10px;
                padding: 60px 20px;
                position: relative;
                list-style: none;
                background-color: #ffffff;
                transition: 0.3s;
                .fontBG {
                    opacity: 0;
                    position: absolute;
                    top: 24px;
                    left: 34px;
                    transition: 0.3s;
                }
                .font {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    p {
                        text-align: center;
                        font-size: 25px;
                    }
                }
                .fontName {
                    opacity: 0;
                    position: absolute;
                    bottom: 24px;
                    left: 24px;
                    transition: 0.3s;
                    display: flex;
                    p,
                    span,
                    a {
                        margin: 0 10px;
                    }
                }
                .SourceHanSands {
                    font-family: SourceHanSands;
                }
                .SourceHanSerif {
                    font-family: SourceHanSerif;
                }
                .jf-openhuninn {
                    font-family: jf-openhuninn;
                }
                .SarasaFixedSlabSC {
                    font-family: SarasaFixedSlabSC;
                }
                .seto {
                    font-family: seto;
                }
                .intelone {
                    font-family: intelone;
                    p {
                        font-size: 15px;
                    }
                }
            }
            li:hover {
                padding: 300px 0;
            }
            .liBG1 {
                background-color: #cc9966;
                color: #ffffff;
                div {
                    a {
                        color: #ffffff;
                    }
                }
            }
            .liBG2 {
                background-color: #333333;
                color: #ffffff;
                div {
                    a {
                        color: #ffffff;
                    }
                }
            }
            .liBG3 {
                background-color: #336666;
                color: #ffffff;
                div {
                    a {
                        color: #ffffff;
                    }
                }
            }
            .liBG4 {
                background-color: #f0f8ff;
                color: #333333;
                div {
                    a {
                        color: #333333;
                    }
                }
            }
            .liBG5 {
                background-color: #333399;
                color: #ffffff;
                div {
                    a {
                        color: #ffffff;
                    }
                }
            }
            .liBG6 {
                background-color: #003366;
                color: #ffffff;
                div {
                    a {
                        color: #ffffff;
                    }
                }
            }
            .liBG7 {
                background-color: #6666cc;
                color: #ffffff;
                div {
                    a {
                        color: #ffffff;
                    }
                }
            }
            .liBG8 {
                background-color: #669999;
                color: #ffffff;
                div {
                    a {
                        color: #ffffff;
                    }
                }
            }
            .liBG9 {
                background-color: #336666;
                color: #ffffff;
                div {
                    a {
                        color: #ffffff;
                    }
                }
            }
            .liBG10 {
                background-color: #99cccc;
                color: #333333;
                div {
                    a {
                        color: #333333;
                    }
                }
            }
            .liBG11 {
                background-color: #cc6666;
                color: #ffffff;
                div {
                    a {
                        color: #ffffff;
                    }
                }
            }
            .liBG12 {
                background-color: #dcdcdc;
                color: #333333;
                div {
                    a {
                        color: #333333;
                    }
                }
            }
        }
    }
}
</style>
