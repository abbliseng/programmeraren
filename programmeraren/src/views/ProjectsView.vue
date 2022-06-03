<template>
  <div>
    <!-- <b-button id="debugButton" class="col-5" style="margin-top:15px" @click="testSortChapters()">Load chapters
    </b-button> -->
    <div id="head" class="row no-gutters justify-content-center">
    </div>
  </div>
</template>

<script>
// import { query, orderBy, getDocs } from 'firebase/firestore'

export default {
  data() {
    return {};
  },
  mounted() {
    this.loadChapters();
  },
  methods: {
    loadChapters() {
      let parent = document.getElementById("head")
      this.$db.collection("projects")
        .get()
        .then((snapshots) => {
          while (parent.firstChild) {
            parent.removeChild(parent.lastChild);
          }
          let data = []
          snapshots.forEach((doc) => {
            data.push({ id: doc.id, ...doc.data() });
          })
          data.forEach((data_point) => {
            // Go through each part and create the card and shite
            let card = document.createElement("div")
            card.setAttribute("class", "card col-8 row justify-content-center")
            card.setAttribute("style", "margin-top: 15px")
            card.setAttribute("id", data_point.id)

            let card_body = document.createElement("div")
            card_body.setAttribute("class", "card-body")

            let title = document.createElement("h4")
            title.setAttribute("class", "card-title")
            title.innerHTML = data_point.id
            card_body.appendChild(title)

            const data_keys = Object.keys(data_point)
            for (let i = 1; i < data_keys.length; i++) {
              let key = "n"+i.toString()
              if (data_point[key].type == "text") {
                let subtitle = document.createElement("h6")
                subtitle.setAttribute("class", "card-subtitle")
                subtitle.setAttribute("style", "margin-top: 10px")
                subtitle.innerHTML = data_point[key].title
                card_body.appendChild(subtitle)

                card_body.appendChild(this.createTextElement(data_point[key].class, data_point[key].content))
              } else if (data_point[key].type == "img") {
                card_body.appendChild(this.createImageElement(data_point[key].class, data_point[key].content))
              }
            }
            card.appendChild(card_body)
            parent.appendChild(card)
          })
        })
    },
    createImageElement(c, s) {
      let img = document.createElement("img")
      img.setAttribute("class", c)
      img.setAttribute("src", s)
      return img
    },
    createTextElement(c, t) {
      let text = document.createElement("p")
      text.setAttribute("class", c)
      text.innerHTML = t
      return text
    }
  }
};
</script>