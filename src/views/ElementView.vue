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