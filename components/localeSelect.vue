<template>
  <div class="locale-changer">
    <el-select v-model="$i18n.locale">
      <el-option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang" :label="$t('locales')">{{ lang }}</el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  name: 'locale-changer',
  data () {
    return { langs: ['ja', 'en', 'zh'] }
  }
}
</script>