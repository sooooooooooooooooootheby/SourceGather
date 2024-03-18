<template>
  <div class="discordEmoji">
    <div class="menu">
      <h1>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-discord"></use>
        </svg>
        {{ $t("discordEmoji.menu.h1") }}
      </h1>
      <div class="get">
        <!-- 用户输入面板 -->
        <div class="warning">
          <span>{{ $t("discordEmoji.menu.get.warning.span") }}</span>
          <p>{{ $t("discordEmoji.menu.get.warning.p") }}</p>
        </div>
        <p>{{ $t("discordEmoji.menu.get.p") }}<span @click="tokenHint = true">(?)</span>:</p>
        <input type="text" id="token" v-model="token" />
        <p>{{ hint }}</p>
        <button id="submit" @click="submit">{{ $t("discordEmoji.menu.get.button") }}</button>

        <!-- 服务器列表 -->
        <div v-for="(info) in info" :key="info.id" :id="info.id" class="server" @click="selectServer">
          <img :src="getImageUrl(info.id, info.icon)" alt="Server Icon" />
          <p>{{ info.name }}</p>
        </div>
      </div>
    </div>
    <div v-if="emoji.length > 0" class="emojiList">
      <ul>
        <div>
          <p># {{ $t("discordEmoji.emoji.p") }} {{ selectedEmojis.length }} / {{ emoji.length }} emoji</p>
          <button @click="getSelectedEmoji">{{ $t("discordEmoji.emoji.button2") }}emoji</button>
          <button @click="getAllEmoji">{{ $t("discordEmoji.emoji.button1") }}emoji</button>
        </div>

        <li v-for="(emoji, index) in emoji" :key="index">
          <input type="checkbox" :id="'emoji' + index" v-model="selectedEmojis" :value="emoji">
          <label :for="'emoji' + index">
            <img :src="getEmojiUrl(emoji.id, emoji.animated)" :alt="emoji.name">
            <p>{{ emoji.name }}</p>
          </label>
        </li>
      </ul>
      <ul>
        <div>
          <p># {{ $t("discordEmoji.emoji.p") }} {{ selectedStickers.length }} / {{ sticker.length }} Striker</p>
          <button @click="getSelectedSticker">{{ $t("discordEmoji.emoji.button2") }}Striker</button>
          <button @click="getAllSticker">{{ $t("discordEmoji.emoji.button1") }}Striker</button>
        </div>

        <li v-for="(sticker, index) in sticker" :key="index">
          <input type="checkbox" :id="'sticker' + index" v-model="selectedStickers" :value="sticker">
          <label :for="'sticker' + index">
            <img :src="getStickerUrl(sticker.id, sticker.format_type)" :alt="sticker.name">
            <p>{{ sticker.name }}</p>
          </label>
        </li>
      </ul>
    </div>
    <div class="tokenHint" v-if="tokenHint">
      <h3>{{ $t("discordEmoji.tokenHint.title") }}</h3>
      <ul>
        <li>{{ $t("discordEmoji.tokenHint.li1") }}</li>
        <li>{{ $t("discordEmoji.tokenHint.li2") }}
          <ul>
            <li>F12</li>
            <li>or</li>
            <li>Ctrl + Shift + I</li>
          </ul>
        </li>
        <li>{{ $t("discordEmoji.tokenHint.li3") }}</li>
        <li>{{ $t("discordEmoji.tokenHint.li4") }}</li>
        <li>{{ $t("discordEmoji.tokenHint.li5") }}</li>
        <li>{{ $t("discordEmoji.tokenHint.li6") }}</li>
        <li>{{ $t("discordEmoji.tokenHint.li7") }}</li>
        <li>{{ $t("discordEmoji.tokenHint.li8") }}</li>
      </ul>
      <img src="https://tool-1315833212.cos.ap-shanghai.myqcloud.com/discordTokenHint.jpg" alt="hint">
      <button @click="tokenHint = false">{{ $t("discordEmoji.tokenHint.button") }}</button>
    </div>
  </div>
</template>

<script>
import { API } from '@/assets/js/discordApi';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

export default {
  data() {
    return {
      tokenHint: false,
      token: '',
      hint: '',
      info: [],
      selectServerId: '',
      emoji: [],
      selectedEmojis: [],
      sticker: [],
      selectedStickers: [],
    };
  },
  methods: {
    // 请求用户服务器，获取服务器id name icon
    async fetchGuilds() {
      try {
        const response = await API.request("GET", API.guilds, this.token);
        const info = await response.json();
        this.info = info.map(({ id, name, icon }) => ({ id, name, icon }));
      } catch (error) {
        this.hint = this.$t('discordEmoji.err2');
      }
    },
    // 请求服务器表情包，获取表情包id name
    async fetchEmojis() {
      try {
        const response = await API.request('GET', API.emojis(this.selectServerId), this.token);
        const data = await response.json();
        this.emoji = data;
      } catch (error) {
        console.error('获取emoji列表时出错：', error);
      }
    },
    // 请求服务器贴纸，获取贴纸id name
    async fetchSticker() {
      try {
        const response = await API.request('GET', API.stickers(this.selectServerId), this.token);
        const data = await response.json();
        this.sticker = data;
        console.log(this.sticker);
      } catch (error) {
        console.error('获取sticker列表时出错：', error);
      }
    },
    // 提交token，判断是否为空
    submit() {
      if (this.token == '') {
        this.hint = this.$t('discordEmoji.err1');
      } else {
        this.fetchGuilds();
      }
    },
    // 拼接服务器icon的URL
    getImageUrl(id, icon) {
      return `https://cdn.discordapp.com/icons/${id}/${icon}.png`;
    },
    // 拼接emoji URL
    getEmojiUrl(id, animated) {
      return `https://cdn.discordapp.com/emojis/${id}.${animated ? "gif" : "png"}?v=1`;
    },
    // 拼接sticker URL
    getStickerUrl(id, format) {
      let suffix;
      switch (format) {
        case 1:
          suffix = "png";
          break;
        case 2:
          suffix = "png";
          break;
        case 3:
          suffix = "lottie";
          break;
        case 4:
          suffix = "gif";
          break;

        default:
          console.log('未知类型');
          break;
      }
      return `https://media.discordapp.net/stickers/${id}.${suffix}?size=1024`;
    },
    // 获取选中的服务器
    selectServer(event) {
      this.selectServerId = event.target.id;
      this.checkedServer();
      this.fetchEmojis();
      this.fetchSticker();
    },
    // 选中服务器的样式
    checkedServer() {
      let checked = document.getElementById(this.selectServerId);
      if (checked) {
        checked.classList.add("checkedServer");
      }

      // 获取所有具有 ".server" 类名的元素
      let elements = document.querySelectorAll('.server');

      // 遍历所有元素
      elements.forEach(element => {
        // 如果元素不是当前元素，则删除类名
        if (element.id !== this.selectServerId) {
          element.classList.remove("checkedServer");
        }
      });
    },
    // 下载所有emoji
    getAllEmoji() {
      const zip = new JSZip();
      let imageUrl = [];
      let fetchPromises = [];

      for (let i = 0; i < this.emoji.length; i++) {
        imageUrl = [this.getEmojiUrl(this.emoji[i].id, this.emoji[i].animated)];
        let fileName = encodeURIComponent(this.emoji[i].name);
        if (this.emoji[i].animated) {
          fileName += '.gif';
        } else {
          fileName += '.png';
        }

        const fetchPromise = fetch(imageUrl[0])
          .then(response => response.blob())
          .then(image => {
            zip.file(fileName, image);
          })
          .catch(error => {
            console.error('Error fetching image:', error);
          });

        fetchPromises.push(fetchPromise);
      }

      Promise.all(fetchPromises)
        .then(() => {
          zip.generateAsync({ type: 'blob' })
            .then(content => {
              saveAs(content, 'download-all-emoji.zip');
            })
            .catch(error => {
              console.error('Error generating zip:', error);
            });
        });
    },
    // 下载选中emoji
    getSelectedEmoji() {
      const zip = new JSZip();
      let imageUrl = [];
      let fetchPromises = [];

      for (let i = 0; i < this.selectedEmojis.length; i++) {
        imageUrl = [this.getEmojiUrl(this.selectedEmojis[i].id, this.selectedEmojis[i].animated)];
        let fileName = encodeURIComponent(this.selectedEmojis[i].name);
        if (this.selectedEmojis[i].animated) {
          fileName += '.gif';
        } else {
          fileName += '.png';
        }

        const fetchPromise = fetch(imageUrl[0])
          .then(response => response.blob())
          .then(image => {
            zip.file(fileName, image);
          })
          .catch(error => {
            console.error('Error fetching image:', error);
          });

        fetchPromises.push(fetchPromise);
      }

      Promise.all(fetchPromises)
        .then(() => {
          zip.generateAsync({ type: 'blob' })
            .then(content => {
              saveAs(content, 'download-selected-images.zip');
            })
            .catch(error => {
              console.error('Error generating zip:', error);
            });
        });
    },
    // 下载所有sticker
    getAllSticker() {
      const zip = new JSZip();
      let imageUrl = [];
      let fetchPromises = [];

      for (let i = 0; i < this.sticker.length; i++) {
        imageUrl = [this.getStickerUrl(this.sticker[i].id, this.sticker[i].format_type)];
        let fileName = encodeURIComponent(this.sticker[i].name);
        switch (this.sticker[i].format_type) {
          case 1:
            fileName += ".png";
            break;
          case 2:
            fileName += ".png";
            break;
          case 3:
            fileName += ".lottie";
            break;
          case 4:
            fileName += ".gif";
            break;

          default:
            console.log('未知类型');
            break;
        }

        const fetchPromise = fetch(imageUrl[0])
          .then(response => response.blob())
          .then(image => {
            zip.file(fileName, image);
          })
          .catch(error => {
            console.error('Error fetching image:', error);
          });

        fetchPromises.push(fetchPromise);
      }

      Promise.all(fetchPromises)
        .then(() => {
          zip.generateAsync({ type: 'blob' })
            .then(content => {
              saveAs(content, 'download-all-sticker.zip');
            })
            .catch(error => {
              console.error('Error generating zip:', error);
            });
        });
    },
    // 下载选中striker
    getSelectedSticker() {
      const zip = new JSZip();
      let imageUrl = [];
      let fetchPromises = [];

      for (let i = 0; i < this.selectedStickers.length; i++) {
        imageUrl = [this.getStickerUrl(this.selectedStickers[i].id, this.selectedStickers[i].format_type)];
        let fileName = encodeURIComponent(this.selectedStickers[i].name);
        switch (this.selectedStickers[i].format_type) {
          case 1:
            fileName += ".png";
            break;
          case 2:
            fileName += ".apng";
            break;
          case 3:
            fileName += ".lottie";
            break;
          case 4:
            fileName += ".gif";
            break;

          default:
            console.log('未知类型');
            break;
        }

        const fetchPromise = fetch(imageUrl[0])
          .then(response => response.blob())
          .then(image => {
            zip.file(fileName, image);
          })
          .catch(error => {
            console.error('Error fetching image:', error);
          });

        fetchPromises.push(fetchPromise);
      }

      Promise.all(fetchPromises)
        .then(() => {
          zip.generateAsync({ type: 'blob' })
            .then(content => {
              saveAs(content, 'download-selected-images.zip');
            })
            .catch(error => {
              console.error('Error generating zip:', error);
            });
        });
    }
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/components/tool/discordEmoji';
</style>