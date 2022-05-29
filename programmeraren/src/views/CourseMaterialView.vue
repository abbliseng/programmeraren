<template>
  <div class="row no-gutters">
    <div class="col-3" style="min-width: 200px;">
      <div class="list-group list-group-flush">
        <div v-for="(content) in this.chapters" :key="content.id">
          <a href="#"
            class="list-group-item list-group-item-action d-flex justify-content-between align-items-center bg-light">
            <!-- {{ content.order_id }} --> {{ content.id }}
            <button type="button" class="btn btn-outline-dark btn-sm"
              @click="displayNewChapterInput(true, content.id, content.order_id)">+</button>
          </a>
        </div>
      </div>
    </div>
    <div class="col-9">
      <span>{{ chapters }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      db: '',
      chapters: ''
    }
  },
  methods: {
    cleanData(snapshots) {
      let data = [];
      snapshots.forEach(function (doc) {
        data.push({ id: doc.id, ...doc.data() });
      });
      return data;
    },
  },
  mounted() {
    this.db = this.$store.state.db
    this.db.collection("chapters")
      .get()
      .then((snapshots) => this.cleanData(snapshots)).then((chapters) => {
        this.chapters = chapters
      })
  }
}
</script>
