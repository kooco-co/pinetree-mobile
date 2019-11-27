<template>
  <div class="locale-changer">
    <el-select v-model="$i18n.locale">
      <el-option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang.code" :label="$t('locales')">{{ lang.label }}</el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  name: 'locale-changer',
  data () {
    return { langs: [{
        code: 'ja',
        label: '日本語'
      },{
        code: 'en',
        label: 'English'
      },{
        code: 'zh',
        label: '簡体中文'
      }]
    }
  }
}
</script>