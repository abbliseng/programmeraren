<template>
  <div class="row no-gutters">
    <div class="col-3" style="min-width: 200px;">
      <div class="list-group list-group-flush">
        <div v-for="(content, title) in chapters">
          <!-- DISPLAYING ALL LVL 1 HEADERS -->
          <a href="#"
            class="list-group-item list-group-item-action d-flex justify-content-between align-items-center bg-light">
            {{ content.order_id }} {{ content.id }}
            <button type="button" class="btn btn-outline-dark btn-sm"
              @click="displayNewChapterInput(true, content.id, content.order_id)">+</button>
          </a>
          <div v-for="(content1, title1) in chapters[title]">
            <a href="#" v-if="title1 != 'id' && title1 != 'order_id'" style="padding-left: 1.5rem;"
              class="list-group-item list-group-item-action d-flex justify-content-between align-items-center bg-light">
              {{ content1.order_id }} {{ title1 }}
            </a>
            <div v-for="(content2, title2) in content[title1]">
              <a href="#" v-if="title2 != 'desc' && title2 != 'order_id'" style="padding-left: 3rem;"
                class="list-group-item list-group-item-action d-flex justify-content-between align-items-center bg-light">
                {{ content2.order_id }} {{ title2 }}
              </a>
            </div>
          </div>
          <!-- <a href="#"
                            class="list-group-item list-group-item-action d-flex justify-content-between align-items-center bg-light">
                            TEST FOR ADDING STUFF
                        </a> -->
          <div class="input-group input-group-sm mb-3" id="addMainChapterInput" style="display: none">
            <input id="addMainChapterInputOrderNumber" type="text" class="form-control col-3">
            <input id="addMainChapterInputChapterTitle" type="text" class="form-control col-9"
              placeholder="Kapitel titel">
          </div>
        </div>
        <!-- <span class="badge bg-dark rounded-pill">14</span> -->
      </div>
    </div>
    <div class="col-9">
      <div class="container">
        <!-- <div v-for="(content, title) in chapters">
                        <div class="row">
                            <h1>{{ title }}</h1>
                        </div>
                    </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     chapters: ""
  //   }
  // },
  // methods: {
  //   initializeFirebase() {
  //     console.log("Initializing firebase...")
  //   }
  // },
  // created() {
  //   // Add some firebase logic
  //   this.initializeFirebase()
  // }
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>