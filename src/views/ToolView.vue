<template>
    <div class="element">
        <ul>
            <li>
                <div class="title">
                    <p>{{ $t('windowsBlue.card.p') }}</p>
                    <span>{{ $t('windowsBlue.card.span') }}</span>
                </div>
                <router-link class="button" to="/tool/windowsblue">
                    View ->
                </router-link>
            </li>
            <li>
                <div class="title">
                    <p>{{ $t('discordEmoji.card.p') }}</p>
                    <span>{{ $t('discordEmoji.card.span') }}</span>
                    <br>
                    <span>By: <a href="https://github.com/ThaTiemsz">ThaTiemsz</a></span>
                </div>
                <router-link class="button" to="/tool/discordEmoji">
                    View ->
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    data() {
        return {

        }
    }
}

</script>

<style lang="scss" scoped>
@import '@/assets/css/views/ElementToolView'
</style>