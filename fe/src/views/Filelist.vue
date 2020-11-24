<template>
  <v-container>
    <v-card>
      <v-card-title>
        <h4>FILE LIST</h4>
        <v-spacer />
        <v-btn
          icon
          @click="filelistRefrash"
        >
          <v-icon>mdi-reload</v-icon>
        </v-btn>
        <v-btn
          icon
          @click="deleteFiles"
        >
          <v-icon>mdi-delete</v-icon>
        </v-btn>
        <v-btn
          icon
          @click="uploadDialog=!uploadDialog"
        >
          <v-icon>mdi-plus-circle-outline</v-icon>
        </v-btn>
      </v-card-title>
      <v-divider />
      <v-card-text>
        <FilelistTable ref="filelistTable" />
        <v-dialog v-model="uploadDialog" max-width="600px" height="300px" persistent>
          <FileUpload @closeUpload="uploadDialog=!uploadDialog" />
        </v-dialog>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { actions } from '../mixins/action'
import { dataFormat } from '../mixins/format'
import FilelistTable from '../components/filelist/filelistTable'
import FileUpload from '../components/filelist/fileupload'

export default {
  components: { FilelistTable, FileUpload },
  mixins: [actions, dataFormat],
  data () {
    return {
      uploadDialog: false
    }
  },
  methods: {
    async deleteFiles () {
      const res = await this.$dialog.confirm({
        text: 'Do you really want to delete files?',
        title: 'Warning'
      })
      if (res) {
        this.$refs.filelistTable.delete()
      }
    }
  }
}
</script>
