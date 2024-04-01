<template>
    <div class="element">
        <ul>
            <li>
                <div class="title">
                    <p>{{ $t('element.element1.p') }}</p>
                    <span>{{ $t('element.element1.span') }}</span>
                </div>
                <router-link class="button" to="/element/gyroCode">
                    View ->
                </router-link>
            </li>
            <li>
                <div class="title">
                    <p>font</p>
                    <span>Here is a collection of open source fonts (mainly in brief)</span>
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