<template>
    <div class="element">
        <ul>
            <li>
                <div class="title">
                    <p>{{ $t('gyroCode.card.p') }}</p>
                    <span>{{ $t('gyroCode.card.span') }}</span>
                </div>
                <router-link class="button" to="/element/gyroCode">
                    View ->
                </router-link>
            </li>
            <li>
                <div class="title">
                    <p>{{ $t('font.card.p') }}</p>
                    <span>{{ $t('font.card.span') }}</span>
                </div>
                <router-link class="button" to="/element/font">
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