<template>
    <div class="tool">
        <div class="console">
            <p>{{ $t('windowsBlue.console.p') }}</p>
            <ul>
                <li @click="this.windows7Blue = true">{{ $t('windowsBlue.console.win7Blue') }}</li>
                <li @click="this.windows10Blue = true">{{ $t('windowsBlue.console.win10Blue') }}</li>
                <li @click="this.windows10Update = true">{{ $t('windowsBlue.console.win10Update') }}</li>
            </ul>
            <div class="checkbox">
                <input type="checkbox" id="checkboxInput" v-model="ismode" @change="handleCheckboxChange">
                {{ $t('windowsBlue.console.mode1') }}<label for="checkboxInput" class="toggleSwitch"></label>{{ $t('windowsBlue.console.mode2') }}
            </div>
        </div>
        <div class="view">
            <windows7Blue v-if="windows7Blue" />
            <windows10Blue v-if="windows10Blue" :ismode="ismode"/>
            <windows10Update v-if="windows10Update" :ismode="ismode"/>
        </div>
    </div>
</template>

<script>
import windows7Blue from './windowsBlue/windows7Blue.vue';
import windows10Blue from './windowsBlue/windows10Blue.vue';
import windows10Update from './windowsBlue/windows10Update.vue';
export default {
    components: {
        windows7Blue,
        windows10Blue,
        windows10Update,
    },
    data() {
        return {
            windows7Blue: false,
            windows10Blue: false,
            windows10Update: false,
            ismode: false,
        }
    },
    created() {
        const propertiesToWatch = ['windows7Blue', 'windows10Blue', 'windows10Update'];

        propertiesToWatch.forEach(property => {
            this.$watch(property, (newValue) => {
                if (newValue) {
                    this.addEventListeners();
                    document.documentElement.requestFullscreen();
                } else {
                    this.removeEventListeners();
                }
            });
        });
    },
    methods: {
        handleCheckboxChange() {
            if (this.ismode) {
                this.ismode == true;
            } else {
                this.ismode == false;
            }
        },
        addEventListeners() {
            document.addEventListener('mousedown', this.disableMouseEvents);
            document.addEventListener('mouseup', this.disableMouseEvents);
            document.addEventListener('contextmenu', this.disableMouseEvents);
            document.addEventListener('keydown', this.handleKeyDown);
        },
        removeEventListeners() {
            document.removeEventListener('mousedown', this.disableMouseEvents);
            document.removeEventListener('mouseup', this.disableMouseEvents);
            document.removeEventListener('contextmenu', this.disableMouseEvents);
            document.removeEventListener('keydown', this.handleKeyDown);
        },
        disableMouseEvents(event) {
            event.preventDefault();
            event.stopPropagation();
        },
        handleKeyDown(event) {
            if (event.ctrlKey && event.altKey) {
                this.windows7Blue = false;
                this.windows10Blue = false;
                this.windows10Update = false;
                window.location.reload();
            }
        }
    }
}

</script>

<style lang="scss" scoped>
@import '@/assets/css/components/tool/windowsBlue';
</style>