<template>
    <div class="list">
        <div class="info">
            <div class="head"></div>
            <p>Alice Clodia</p>
            <span>✈ &nbsp &nbsp在你心里 ❥</span>
        </div>
        <div class="link">
            <div>
                <span># Github</span>
                <a @click="toGithub">sooooooooooooooooootheby</a>
            </div>
            <div>
                <span># Blog</span>
                <a @click="toBlog">~Wonderland~</a>
            </div>
            <div>
                <span># eMail</span>
                <a>therese.sjdyka@gmail.com</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        toGithub() {
            window.open('https://github.com/sooooooooooooooooootheby', '_blank');
        },
        toBlog() {
            window.open('https://blog.sooooooooooooooooootheby.xyz', '_blank');
        }
    }
}
</script>

<style lang="scss" scoped>
.info {
    width: 500px;
    margin: 10px;
    padding: 40px;
    background-color: #FFFFFF;
    border-radius: 10px;
    font-family: sourceHanBold;


    .head {
        width: 180px;
        height: 180px;
        border-radius: 180px;
        overflow: hidden;
        background-image: url(@/assets/image/head.jpg);
        background-size: 150%;
        background-repeat: no-repeat;
        background-position: center;
    }

    p {
        margin-top: 15px;
        font-size: 32px;
        font-family: sourceHanBold;
        color: #3C3C43;
    }

    span {
        color: #3C3C43C7;
    }
}

.link {
    width: 500px;
    margin: 10px;
    padding: 10px 40px;
    background-color: #FFFFFF;
    border-radius: 10px;

    div {
        display: flex;
        flex-direction: column;

        span {
            padding: 10px 0;
            border-bottom: 1px solid #f0f0f0;
            font-size: 24px;
            font-family: sourceHanBold;

        }

        a {
            padding: 20px 0;
            color: #1d4fc4;
            text-decoration: none;
        }

        a:hover {
            cursor: pointer;
        }
    }
}

@media screen and (max-width: 430px) {

    .info {
        width: 80vw;
        padding: 20px;

        .head {
            width: 150px;
            height: 150px;
        }
    }

    .link {
        width: 80vw;
        padding: 20px;
    }
}
</style>